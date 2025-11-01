"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.dark": "Dark",
    "nav.light": "Light",
    "nav.system": "System",

    // Hero Section
    "hero.title": "Glados Zone",
    "hero.subtitle": "YOUR TECH PROBLEMS, OUR SOLUTIONS",
    "hero.description":
      "Professional computer repair and IT support services you can trust",
    "hero.services": "Our Services",
    "hero.support": "Get Support",

    // Location Section
    "location.title": "Our Location",
    "location.description":
      "We're located at Ammar Telidji University in Laghouat, Algeria - ready to help with your computer support needs",
    "location.contact": "Contact Information",
    "location.address": "Address",
    "location.addressValue": "Laghouat, Algeria",
    "location.phone": "Instagram",
    "location.phoneValue": "+213 796 97 33 17",
    "location.email": "Email",
    "location.emailValue": "glados.zone@gmail.com",
    "location.hours": "Service Hours",
    "location.weekdays": "Sunday - Thursday",
    "location.weekdaysHours": "8:00 AM - 5:00 PM",
    "location.weekend": "Friday - Saturday",
    "location.weekendHours": "By Appointment",
    "location.help": "Need Help? We're Here for You",
    "location.helpDescription":
      "Drop by our location or reach out to us for quick computer support",
    "location.directions": "Get Directions",
    "location.mapDescription":
      "📍 Laghouat, Algeria - Click the map to get directions",

    // Mobile Menu
    "mobile.tagline": "Professional Computer Repair Services",

    // Services Section
    "services.title": "Computer Support Made Simple",
    "services.subtitle":
      "We provide quick, affordable computer support for students and everyday users alike.",
    "services.coreTitle": "Our Core Services",
    "services.description":
      "Whether you need a simple fix or a full system refresh, we handle these services and much more right here on campus.",
    "services.callToAction":
      "If you're a student experiencing technical issues, reach out and we'll get you back up and running fast.",

    // Individual Services
    "services.software.title": "Software Troubleshooting",
    "services.software.description":
      "Diagnosing and fixing errors so your system runs smoothly",
    "services.os.title": "Operating System Installation",
    "services.os.description":
      "Clean installs or upgrades for Windows, Linux, and more",
    "services.performance.title": "Performance Optimization",
    "services.performance.description":
      "Speeding up slow machines and improving overall stability",
    "services.virus.title": "Virus & Malware Cleanup",
    "services.virus.description":
      "Removing harmful files and keeping your data safe",
    //socials
    "socials.title": "Connect With Us",
    "socials.subtitle": "Follow us on social media or reach out via email",
    "socials.callToAction":
      "We're active on all platforms and respond quickly!",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is Glados Zone?",
    "faq.a1":
      "Glados Zone provides fast and affordable computer repair and IT support services for students and everyday users.",
    "faq.q2": "What services do you offer?",
    "faq.a2":
      "We handle software troubleshooting, operating system installation (Windows, Linux, ...), performance optimization, virus and malware removal, and more.",
    "faq.q3": "Where are you located?",
    "faq.a3":
      "We're based at Ammar Telidji University in Laghouat, Algeria, making it easy to help students on campus.",
    "faq.q4": "Do you only work with students?",
    "faq.a4":
      "Students are our primary focus, but we can help anyone who needs reliable tech support on campus.",
    "faq.q5": "How can I contact you?",
    "faq.a5":
      "You can visit us on campus, email us at glados.zone@gmail.com, or drop by during our service hours (Sunday–Thursday 8:00–17:00).",

    // Contact Form
    "form.title": "Contact Us",
    "form.description":
      "Fill out this form and we'll call you back to confirm your request.",
    "form.name": "Your Name",
    "form.phone": "Phone Number",
    "form.phonePlaceholder": "05XXXXXXXX or 06XXXXXXXX or 07XXXXXXXX",
    "form.issue": "Issue / Notes",
    "form.issuePlaceholder":
      "Briefly describe the issue (e.g., slow computer, OS reinstall...)...",
    "form.characters": "characters",
    "form.submit": "Request Help",
    "form.success":
      "Thank you! We've received your request and will contact you soon.",
    "form.callDirect": "Or call us directly:",
    "form.alreadySubmitted": "Already Submitted",
    "form.alreadySubmittedDesc":
      "You've already submitted a request. For additional support, please contact us directly:",
    "form.callUs": "📞 Call Us",
    "form.emailUs": "✉️ Email Us",
    "form.nameRequired": "Name is required",
    "form.phoneRequired": "Phone must be 10 digits starting with 05, 06, or 07",
    "form.issueRequired": "Issue description is required",
    "form.issueMaxLength":
      "Issue description must be less than 1000 characters",
    "footer.copyright": "Glados Zone. All rights reserved.",
  },

  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "تواصل معنا",
    "nav.language": "اللغة",
    "nav.dark": "داكن",
    "nav.light": "فاتح",
    "nav.system": "النظام",

    // Hero Section
    "hero.title": "Glados Zone",
    "hero.subtitle": "مشاكلك التقنية، حلولنا",
    "hero.description":
      "خدمات إصلاح الحاسوب والدعم التقني الاحترافية والموثوقة",
    "hero.services": "خدماتنا",
    "hero.support": "احصل على الدعم",

    // Location Section
    "location.title": "موقعنا",
    "location.description":
      "نحن موجودون في جامعة عمار ثليجي في الأغواط – الجزائر، مستعدون لمساعدتك في جميع احتياجات الدعم التقني",
    "location.contact": "معلومات التواصل",
    "location.address": "العنوان",
    "location.addressValue": "الأغواط، الجزائر",
    "location.phone": "الهاتف",
    "location.phoneValue": "+213 796 97 33 17",
    "location.email": "البريد الإلكتروني",
    "location.emailValue": "glados.zone@gmail.com",
    "location.hours": "ساعات العمل",
    "location.weekdays": "الأحد – الخميس",
    "location.weekdaysHours": "8:00 ص – 5:00 م",
    "location.weekend": "الجمعة – السبت",
    "location.weekendHours": "بموعد مسبق",
    "location.help": "هل تحتاج مساعدة؟ نحن هنا لأجلك",
    "location.helpDescription":
      "زرنا في موقعنا أو تواصل معنا للحصول على دعم حاسوبي سريع",
    "location.directions": "الحصول على الاتجاهات",
    "location.mapDescription":
      "📍 الأغواط، الجزائر – انقر على الخريطة لمعرفة الاتجاهات",

    // Mobile Menu
    "mobile.tagline": "خدمات إصلاح حاسوب احترافية",

    // Services Section
    "services.title": "دعم الحاسوب بطريقة مبسطة",
    "services.subtitle":
      "نحن نقدم دعم حاسوبي سريع وبأسعار معقولة للطلاب والمستخدمين اليوميين على حد سواء.",
    "services.coreTitle": "خدماتنا الأساسية",
    "services.description":
      "سواء كنت تحتاج لإصلاح بسيط أو تحديث كامل للنظام، نحن نتعامل مع هذه الخدمات وأكثر هنا داخل الحرم الجامعي.",
    "services.callToAction":
      "إذا كنت طالباً وتواجه مشاكل تقنية، تواصل معنا وسنعيدك للعمل بسرعة.",

    // Individual Services
    "services.software.title": "إصلاح مشاكل البرمجيات",
    "services.software.description":
      "تشخيص وإصلاح الأخطاء لكي يعمل نظامك بسلاسة",
    "services.os.title": "تثبيت أنظمة التشغيل",
    "services.os.description": "تثبيت نظيف أو ترقيات لويندوز ولينكس وأكثر",
    "services.performance.title": "تحسين الأداء",
    "services.performance.description":
      "تسريع الأجهزة البطيئة وتحسين الاستقرار العام",
    "services.virus.title": "تنظيف الفيروسات والبرامج الضارة",
    "services.virus.description":
      "إزالة الملفات الضارة والحفاظ على أمان بياناتك",

    // socials
    "socials.title": "تواصل معنا",
    "socials.subtitle":
      "تابعنا على وسائل التواصل الاجتماعي أو راسلنا عبر البريد الإلكتروني",
    "socials.callToAction": "نحن نشطون على جميع المنصات ونستجيب بسرعة!",

    // FAQ Section
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "ما هو إصلاح تقني؟",
    "faq.a1":
      "إصلاح تقني يقدم خدمات إصلاح الحاسوب والدعم التقني بسرعة وبأسعار مناسبة للطلاب والمستخدمين اليوميين.",
    "faq.q2": "ما الخدمات التي تقدمونها؟",
    "faq.a2":
      "نقدم خدمات حل المشكلات البرمجية، تثبيت أنظمة التشغيل (ويندوز، لينكس، ...)، تحسين الأداء، إزالة الفيروسات والبرمجيات الضارة والمزيد.",
    "faq.q3": "أين يقع موقعكم؟",
    "faq.a3":
      "نحن في جامعة عمار ثليجي بالأغواط – الجزائر، مما يسهل مساعدة الطلاب في الحرم الجامعي.",
    "faq.q4": "هل تعملون مع الطلاب فقط؟",
    "faq.a4":
      "الطلاب هم تركيزنا الأساسي، لكن يمكننا مساعدة أي شخص يحتاج إلى دعم تقني موثوق داخل الحرم.",
    "faq.q5": "كيف يمكنني التواصل معكم؟",
    "faq.a5":
      "يمكنك زيارتنا في الحرم، أو مراسلتنا عبر البريد الإلكتروني glados.zone@gmail.com، أو الحضور في ساعات عملنا (الأحد–الخميس 8:00–17:00).",

    // Contact Form
    "form.title": "تواصل معنا",
    "form.description": "املأ هذا النموذج وسنتواصل معك لتأكيد طلبك.",
    "form.name": "اسمك",
    "form.phone": "رقم الهاتف",
    "form.phonePlaceholder": "05XXXXXXXX أو 06XXXXXXXX أو 07XXXXXXXX",
    "form.issue": "المشكلة / ملاحظات",
    "form.issuePlaceholder":
      "صف المشكلة بإيجاز (مثال: الحاسوب بطيء، إعادة تثبيت النظام...)",
    "form.characters": "حرف",
    "form.submit": "اطلب المساعدة",
    "form.success": "شكرًا لك! استلمنا طلبك وسنتواصل معك قريبًا.",
    "form.callDirect": "أو اتصل بنا مباشرة:",
    "form.alreadySubmitted": "تم الإرسال مسبقًا",
    "form.alreadySubmittedDesc":
      "لقد أرسلت طلبًا بالفعل. للدعم الإضافي يرجى التواصل معنا مباشرة:",
    "form.callUs": "📞 اتصل بنا",
    "form.emailUs": "✉️ راسلنا عبر البريد",
    "form.nameRequired": "الاسم مطلوب",
    "form.phoneRequired":
      "يجب أن يحتوي الهاتف على 10 أرقام ويبدأ بـ 05 أو 06 أو 07",
    "form.issueRequired": "وصف المشكلة مطلوب",
    "form.issueMaxLength": "يجب أن يكون وصف المشكلة أقل من 1000 حرف",
    "footer.copyright": "Glados Zone. جميع الحقوق محفوظة.",
  },

  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.language": "Langue",
    "nav.dark": "Sombre",
    "nav.light": "Lumière",
    "nav.system": "Système",

    // Hero Section
    "hero.title": "Glados Zone",
    "hero.subtitle": "VOS PROBLÈMES TECH, NOS SOLUTIONS",
    "hero.description":
      "Services professionnels de réparation d'ordinateurs et de support IT de confiance",
    "hero.services": "Nos Services",
    "hero.support": "Obtenir de l'Aide",

    // Location Section
    "location.title": "Notre Localisation",
    "location.description":
      "Nous sommes situés à l'Université Ammar Telidji à Laghouat, Algérie - prêts à vous aider avec vos besoins de support informatique",
    "location.contact": "Informations de Contact",
    "location.address": "Adresse",
    "location.addressValue": "Laghouat, Algérie",
    "location.phone": "Téléphone",
    "location.phoneValue": "+213 796 97 33 17",
    "location.email": "Email",
    "location.emailValue": "glados.zone@gmail.com",
    "location.hours": "Heures de Service",
    "location.weekdays": "Dimanche - Jeudi",
    "location.weekdaysHours": "8h00 - 17h00",
    "location.weekend": "Vendredi - Samedi",
    "location.weekendHours": "Sur Rendez-vous",
    "location.help": "Besoin d'Aide? Nous Sommes Là Pour Vous",
    "location.helpDescription":
      "Visitez notre emplacement ou contactez-nous pour un support informatique rapide",
    "location.directions": "Obtenir les Directions",
    "location.mapDescription":
      "📍 Laghouat, Algérie - Cliquez sur la carte pour obtenir les directions",

    // Mobile Menu
    "mobile.tagline": "Services Professionnels de Réparation d'Ordinateurs",

    // Services Section
    "services.title": "Support Informatique Simplifié",
    "services.subtitle":
      "Nous fournissons un support informatique rapide et abordable pour les étudiants et les utilisateurs quotidiens.",
    "services.coreTitle": "Nos Services Principaux",
    "services.description":
      "Que vous ayez besoin d'une simple réparation ou d'une actualisation complète du système, nous gérons ces services et bien plus directement sur le campus.",
    "services.callToAction":
      "Si vous êtes étudiant et rencontrez des problèmes techniques, contactez-nous et nous vous remettrons en marche rapidement.",

    // Individual Services
    "services.software.title": "Dépannage Logiciel",
    "services.software.description":
      "Diagnostiquer et corriger les erreurs pour que votre système fonctionne en douceur",
    "services.os.title": "Installation de Systèmes d'Exploitation",
    "services.os.description":
      "Installations propres ou mises à niveau pour Windows, Linux, et plus",
    "services.performance.title": "Optimisation des Performances",
    "services.performance.description":
      "Accélération des machines lentes et amélioration de la stabilité générale",
    "services.virus.title": "Nettoyage Virus et Malwares",
    "services.virus.description":
      "Suppression des fichiers nuisibles et protection de vos données",
    //socials
    "socials.title": "Connectez-vous Avec Nous",
    "socials.subtitle":
      "Suivez-nous sur les réseaux sociaux ou contactez-nous par email",
    "socials.callToAction":
      "Nous sommes actifs sur toutes les plateformes et répondons rapidement!",
    // FAQ Section
    "faq.title": "Questions Fréquemment Posées",
    "faq.q1": "Qu'est-ce que RéparerIT?",
    "faq.a1":
      "RéparerIT fournit des services de réparation d'ordinateurs et de support informatique rapides et abordables pour les étudiants et les utilisateurs quotidiens.",
    "faq.q2": "Quels services offrez-vous?",
    "faq.a2":
      "Nous gérons le dépannage logiciel, l'installation de systèmes d'exploitation (Windows, Linux, ...), l'optimisation des performances, le nettoyage de virus et malwares, et plus encore.",
    "faq.q3": "Où êtes-vous situés?",
    "faq.a3":
      "Nous sommes basés à l'Université Ammar Telidji à Laghouat, Algérie, facilitant l'aide aux étudiants sur le campus.",
    "faq.q4": "Travaillez-vous seulement avec les étudiants?",
    "faq.a4":
      "Les étudiants sont notre focus principal, mais nous pouvons aider quiconque a besoin d'un support informatique fiable sur le campus.",
    "faq.q5": "Comment puis-je vous contacter?",
    "faq.a5":
      "Vous pouvez nous visiter sur le campus, nous envoyer un email à glados.zone@gmail.com, ou passer pendant nos heures de service (Dimanche–Jeudi 8h00–17h00).",

    // Contact Form
    "form.title": "Contactez-nous",
    "form.description":
      "Remplissez ce formulaire et nous vous rappellerons pour confirmer votre demande.",
    "form.name": "Votre Nom",
    "form.phone": "Numéro de Téléphone",
    "form.phonePlaceholder": "05XXXXXXXX, 06XXXXXXXX, ou 07XXXXXXXX",
    "form.issue": "Problème / Notes",
    "form.issuePlaceholder":
      "Décrivez brièvement le problème (ex: PC lent, réinstallation OS)...",
    "form.characters": "caractères",
    "form.submit": "Demander de l'Aide",
    "form.success":
      "Merci! Nous avons reçu votre demande et vous recontacterons bientôt.",
    "form.callDirect": "Ou appelez-nous directement:",
    "form.alreadySubmitted": "Déjà Soumis",
    "form.alreadySubmittedDesc":
      "Vous avez déjà soumis une demande. Pour un support supplémentaire, veuillez nous contacter directement:",
    "form.callUs": "📞 Appelez-nous",
    "form.emailUs": "✉️ Envoyez-nous un Email",
    "form.nameRequired": "Le nom est requis",
    "form.phoneRequired":
      "Le téléphone doit contenir 10 chiffres commençant par 05, 06, ou 07",
    "form.issueRequired": "La description du problème est requise",
    "form.issueMaxLength":
      "La description du problème doit être inférieure à 1000 caractères",

    "footer.copyright": "Glados Zone. Tous droits reservés.",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "ar", "fr"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (["en", "ar", "fr"].includes(browserLang)) {
        setLanguage(browserLang as Language);
      }
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem("language", language);

    // Update document direction for RTL languages
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    dir: language === "ar" ? "rtl" : "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
