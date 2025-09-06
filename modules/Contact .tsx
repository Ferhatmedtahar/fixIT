"use client";
import { Button } from "@/common/Button"; // Adjust import path as needed
import { Card } from "@/common/card"; // Adjust import path as needed
import { Input } from "@/common/input"; // Adjust import path as needed
import { Textarea } from "@/common/textarea"; // Adjust import path as needed
import { SOCIAL_INFO } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { z } from "zod";

// Zod validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(
      /^0[567]\d{8}$/,
      "Phone must be 10 digits starting with 05, 06, or 07"
    ),
  issue: z
    .string()
    .min(1, "Issue description is required")
    .max(1000, "Issue description must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const DirectOrder: React.FC<DirectOrderProps> = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    console.log("Check localStorage for previous submissions");
  }, []);

  const validateForm = () => {
    try {
      formSchema.parse({ name, phone, issue });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error?.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Request submitted:", { name, phone, issue });
    setFormSubmitted(true);

    try {
      const response = await fetch("https://formspree.io/f/mqadwkby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, issue }),
      });

      if (response.ok) {
        setHasSubmittedBefore(true);

        console.log("Form submitted successfully - marked in localStorage");

        setTimeout(() => {
          setName("");
          setPhone("");
          setIssue("");
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

  // If user has submitted before, show alternative contact options
  if (hasSubmittedBefore) {
    return (
      <div className="direct-order max-w-md mx-auto p-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-center text-foreground">
            Already Submitted
          </h3>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              You've already submitted a request. For additional support, please
              contact us directly:
            </p>

            <div className="space-y-4">
              {SOCIAL_INFO.phone && (
                <div className="contact-option">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    📞 Call Us
                  </h4>
                  <Button asChild>
                    <a href={`tel:${SOCIAL_INFO.phone}`}>{SOCIAL_INFO.phone}</a>
                  </Button>
                </div>
              )}

              {SOCIAL_INFO.email && (
                <div className="contact-option">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    ✉️ Email Us
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
    <div className="py-20 px-6 bg-background">
      <div className="direct-order max-w-6xl  mx-auto p-4">
        <Card className="p-6 w-full hover:translate-0 shadow-none ">
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            Reach out to us
          </h3>
          <p className="text-muted-foreground mb-4">
            Fill out this form and we'll call you back to confirm your request.
          </p>

          {formSubmitted ? (
            <div className="success-message text-primary">
              <p>
                Thanks! We received your request and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  state={errors.name ? "error" : "default"}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XXXXXXXX, 06XXXXXXXX, or 07XXXXXXXX"
                  required
                  state={errors.phone ? "error" : "default"}
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="form-group">
                <label
                  htmlFor="issue"
                  className="block text-sm font-medium text-foreground"
                >
                  Issue / Notes
                  <span className="text-muted-foreground text-xs ml-2">
                    ({issue.length}/1000 characters)
                  </span>
                </label>
                <Textarea
                  id="issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="Briefly describe the problem (e.g., slow PC, OS reinstall)…"
                  required
                  maxLength={1000}
                  rows={4}
                  state={errors.issue ? "error" : "default"}
                  className="mt-1"
                />
                {errors.issue && (
                  <p className="text-red-500 text-sm mt-1">{errors.issue}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Request Help
              </Button>
            </form>
          )}

          {SOCIAL_INFO.phone && (
            <div className="direct-contact mt-4 text-center">
              <p className="text-muted-foreground">
                Or call us directly:{" "}
                <a
                  href={`tel:${SOCIAL_INFO.phone}`}
                  className="text-primary underline"
                >
                  {SOCIAL_INFO.phone}
                </a>
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DirectOrder;
