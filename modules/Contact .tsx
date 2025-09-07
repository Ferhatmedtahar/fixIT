"use client";
import { Button } from "@/common/Button";
import { Card } from "@/common/card";
import { Input } from "@/common/input";
import { Textarea } from "@/common/textarea";
import { useLanguage } from "@/context/language-provider";
import { SOCIAL_INFO } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { z } from "zod";

// Create form schema with dynamic validation messages
const createFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t("form.nameRequired")),
    phone: z.string().regex(/^0[567]\d{8}$/, t("form.phoneRequired")),
    issue: z
      .string()
      .min(1, t("form.issueRequired"))
      .max(1000, t("form.issueMaxLength")),
  });

const STORAGE_KEY = "form_submission_data";
const COOLDOWN_HOURS = 24;

interface SubmissionData {
  submitted: boolean;
  timestamp: number;
}

const DirectOrder: React.FC = () => {
  const { t, dir } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check localStorage for previous submissions and validate 24-hour cooldown
  const checkSubmissionStatus = () => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const submissionData: SubmissionData = JSON.parse(storedData);
        const currentTime = Date.now();
        const timeDiff = currentTime - submissionData.timestamp;
        const hoursElapsed = timeDiff / (1000 * 60 * 60);

        if (submissionData.submitted && hoursElapsed < COOLDOWN_HOURS) {
          setHasSubmittedBefore(true);
          return true;
        } else if (hoursElapsed >= COOLDOWN_HOURS) {
          // Cooldown period has expired, clear the storage
          localStorage.removeItem(STORAGE_KEY);
          setHasSubmittedBefore(false);
          return false;
        }
      }
      setHasSubmittedBefore(false);
      return false;
    } catch (error) {
      console.error("Error checking submission status:", error);
      setHasSubmittedBefore(false);
      return false;
    }
  };

  const saveSubmissionStatus = () => {
    try {
      const submissionData: SubmissionData = {
        submitted: true,
        timestamp: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissionData));
    } catch (error) {
      console.error("Error saving submission status:", error);
    }
  };

  useEffect(() => {
    checkSubmissionStatus();
  }, []);

  const validateForm = () => {
    try {
      const formSchema = createFormSchema(t);
      formSchema.parse({ name, phone, issue });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Double-check submission status before allowing submission
    if (checkSubmissionStatus()) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    console.log("Request submitted:", { name, phone, issue });
    setFormSubmitted(true);

    try {
      const response = await fetch("https://formspree.io/f/xldwapwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, issue }),
      });

      if (response.ok) {
        // Save submission status to localStorage
        saveSubmissionStatus();
        setHasSubmittedBefore(true);
        console.log(
          "Form submitted successfully - saved to localStorage with 24h cooldown"
        );

        // Show success message for 3 seconds, then show the "already submitted" view
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        console.log("Form submission failed");
        setFormSubmitted(false);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setFormSubmitted(false);
    }
  };

  if (hasSubmittedBefore) {
    return (
      <div className="direct-order max-w-md mx-auto p-4" dir={dir}>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-center text-foreground">
            {t("form.alreadySubmitted")}
          </h3>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {t("form.alreadySubmittedDesc")}
            </p>

            <div className="space-y-4">
              {SOCIAL_INFO.phone && (
                <div className="contact-option">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    {t("form.callUs")}
                  </h4>
                  <Button asChild>
                    <a href={`tel:${SOCIAL_INFO.phone}`}>{SOCIAL_INFO.phone}</a>
                  </Button>
                </div>
              )}

              {SOCIAL_INFO.email && (
                <div className="contact-option">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    {t("form.emailUs")}
                  </h4>
                  <Button asChild variant="secondary">
                    <a href={`mailto:${SOCIAL_INFO.email}`}>
                      {SOCIAL_INFO.email}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-6" dir={dir}>
      <div className="direct-order max-w-6xl mx-auto p-4">
        <Card className="p-6 w-full hover:translate-0 shadow-none">
          <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
            {t("form.title")}
          </h3>
          <p className="text-[var(--foreground)]/90 mb-4">
            {t("form.description")}
          </p>

          {formSubmitted ? (
            <div className="success-message text-[var(--primary)]">
              <p>{t("form.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold text-[var(--foreground)] text-${
                    dir === "rtl" ? "right" : "left"
                  }`}
                >
                  {t("form.name")}
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder={t("form.nameRequired")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  state={errors.name ? "error" : "default"}
                  className={`mt-1 ${
                    dir === "rtl" ? "text-right" : "text-left"
                  }`}
                />
                {errors.name && (
                  <p
                    className={`text-red-500 text-sm mt-1 text-${
                      dir === "rtl" ? "right" : "left"
                    }`}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className={`block text-sm font-semibold text-[var(--foreground)] text-${
                    dir === "rtl" ? "right" : "left"
                  }`}
                >
                  {t("form.phone")}
                </label>
                <Input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("form.phonePlaceholder")}
                  required
                  state={errors.phone ? "error" : "default"}
                  className={`mt-1 ${
                    dir === "rtl" ? "text-right" : "text-left"
                  }`}
                />
                {errors.phone && (
                  <p
                    className={`text-red-500 text-sm mt-1 text-${
                      dir === "rtl" ? "right" : "left"
                    }`}
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label
                  htmlFor="issue"
                  className={`block text-sm font-semibold text-[var(--foreground)] text-${
                    dir === "rtl" ? "right" : "left"
                  }`}
                >
                  {t("form.issue")}
                  <span className="text-[var(--foreground)]/90 text-xs ml-2">
                    ({issue.length}/1000 {t("form.characters")})
                  </span>
                </label>
                <Textarea
                  id="issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder={t("form.issuePlaceholder")}
                  required
                  maxLength={1000}
                  rows={4}
                  state={errors.issue ? "error" : "default"}
                  className={`mt-1 ${
                    dir === "rtl" ? "text-right" : "text-left"
                  }`}
                />
                {errors.issue && (
                  <p
                    className={`text-red-500 text-sm mt-1 text-${
                      dir === "rtl" ? "right" : "left"
                    }`}
                  >
                    {errors.issue}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                {t("form.submit")}
              </Button>
            </form>
          )}

          {SOCIAL_INFO.phone && (
            <div className="direct-contact mt-6 text-center">
              <p className="text-[var(--foreground)]">
                {t("form.callDirect")}{" "}
                <a
                  href={`tel:${SOCIAL_INFO.phone}`}
                  className="text-[var(--primary)] underline"
                >
                  {SOCIAL_INFO.phone}
                </a>
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default DirectOrder;
