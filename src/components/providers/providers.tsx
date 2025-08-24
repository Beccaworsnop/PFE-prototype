"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    latest: "Latest",
    locations: "Locations",
    rewards: "Rewards",
    about: "About",
    login: "Login",
    signUp: "Sign Up",

    // Login Page
    "login.welcome": "Welcome Back",
    "login.subtitle": "Sign in to your Reteck Solutions account",
    "login.email": "Email",
    "login.emailPlaceholder": "Enter your email",
    "login.password": "Password",
    "login.passwordPlaceholder": "Enter your password",
    "login.forgotPassword": "Forgot password?",
    "login.signIn": "Sign In",
    "login.signingIn": "Signing in...",
    "login.noAccount": "Don't have an account?",
    "login.signUpLink": "Sign up",

    // Signup Page
    "signup.title": "Join Reteck Solutions",
    "signup.subtitle": "Start earning points for recycling e-waste",
    "signup.accountType": "What type of account would you like to create?",
    "signup.customer": "Customer Account",
    "signup.customerDesc": "For individuals recycling personal devices",
    "signup.company": "Company Account",
    "signup.companyDesc": "For businesses with corporate contracts",
    "signup.change": "Change",
    "signup.contractId": "Contract ID",
    "signup.contractIdPlaceholder": "Enter your contract ID",
    "signup.contractIdRequired": "Contract ID is required for company accounts",
    "signup.companyName": "Company Name",
    "signup.companyNamePlaceholder": "Enter your company name",
    "signup.firstName": "First Name",
    "signup.firstNamePlaceholder": "John",
    "signup.lastName": "Last Name",
    "signup.lastNamePlaceholder": "Doe",
    "signup.email": "Email",
    "signup.emailPlaceholder": "john@example.com",
    "signup.phone": "Phone Number",
    "signup.phonePlaceholder": "+213 555 123 456",
    "signup.password": "Password",
    "signup.passwordPlaceholder": "Create a strong password",
    "signup.agreeToTerms": "I agree to the",
    "signup.termsOfService": "Terms of Service",
    "signup.and": "and",
    "signup.privacyPolicy": "Privacy Policy",
    "signup.createAccount": "Create Account",
    "signup.creatingAccount": "Creating account...",
    "signup.alreadyHaveAccount": "Already have an account?",
    "signup.signInLink": "Sign in",

    // Hero Section
    heroSubtitle: "Transform your electronic waste into rewards. Join the sustainable future of technology recycling.",
    startRecycling: "Start Recycling",
    learnMore: "Learn More",

    // Stats
    devicesRecycled: "Devices Recycled",
    activeUsers: "Active Users",
    pointsEarned: "Points Earned",

    // Devices
    whatWeAccept: "What We Accept",
    smartphones: "Smartphones",
    laptops: "Laptops",
    monitors: "Monitors",
    batteries: "Batteries",
    cpus: "CPUs",
    tablets: "Tablets",

    // Features
    whyChoose: "Why Choose Reteck Solutions",
    secureData: "Secure Data Destruction",
    secureDataDesc: "Complete data wiping and certified destruction of sensitive information.",
    ecoFriendly: "Eco-Friendly Process",
    ecoFriendlyDesc: "Environmentally responsible recycling methods that protect our planet.",
    communityImpact: "Community Impact",
    communityImpactDesc: "Supporting local communities through job creation and environmental education.",

    // CTA
    readyToStart: "Ready to Start Recycling?",
    joinThousands: "Join thousands of users who are making a difference while earning rewards.",
    signUpNow: "Sign Up Now",

    // About Page
    "about.title": "About Reteck Solutions",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "We are dedicated to creating a sustainable future by transforming electronic waste into valuable resources while rewarding our community for their environmental consciousness.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To become the leading e-waste recycling platform in Algeria, fostering environmental responsibility and technological sustainability across North Africa.",
    "about.values.title": "Our Values",
    "about.values.sustainability": "Environmental sustainability through responsible recycling practices",
    "about.values.innovation": "Innovative technology solutions for waste management",
    "about.values.community": "Community engagement and education about e-waste",
    "about.values.transparency": "Transparent processes and fair reward systems",

    // Latest Page
    "latest.title": "Latest Tech News & Articles",
    "latest.subtitle": "Stay updated with the latest technology news and hardware insights from Algeria and beyond",
    "latest.readMore": "Read More",
    "latest.category.hardware": "Hardware",
    "latest.category.news": "Tech News",
    "latest.category.recycling": "Recycling",
    "latest.category.innovation": "Innovation",
  },

  fr: {
    // Navigation
    home: "Accueil",
    latest: "Actualités",
    locations: "Emplacements",
    rewards: "Récompenses",
    about: "À propos",
    login: "Connexion",
    signUp: "S'inscrire",

    // Login Page
    "login.welcome": "Bon Retour",
    "login.subtitle": "Connectez-vous à votre compte Reteck Solutions",
    "login.email": "Email",
    "login.emailPlaceholder": "Entrez votre email",
    "login.password": "Mot de passe",
    "login.passwordPlaceholder": "Entrez votre mot de passe",
    "login.forgotPassword": "Mot de passe oublié?",
    "login.signIn": "Se connecter",
    "login.signingIn": "Connexion en cours...",
    "login.noAccount": "Vous n'avez pas de compte?",
    "login.signUpLink": "S'inscrire",

    // Signup Page
    "signup.title": "Rejoignez Reteck Solutions",
    "signup.subtitle": "Commencez à gagner des points en recyclant les déchets électroniques",
    "signup.accountType": "Quel type de compte souhaitez-vous créer?",
    "signup.customer": "Compte Client",
    "signup.customerDesc": "Pour les particuliers recyclant des appareils personnels",
    "signup.company": "Compte Entreprise",
    "signup.companyDesc": "Pour les entreprises avec des contrats corporatifs",
    "signup.change": "Changer",
    "signup.contractId": "ID de Contrat",
    "signup.contractIdPlaceholder": "Entrez votre ID de contrat",
    "signup.contractIdRequired": "L'ID de contrat est requis pour les comptes d'entreprise",
    "signup.companyName": "Nom de l'Entreprise",
    "signup.companyNamePlaceholder": "Entrez le nom de votre entreprise",
    "signup.firstName": "Prénom",
    "signup.firstNamePlaceholder": "Jean",
    "signup.lastName": "Nom",
    "signup.lastNamePlaceholder": "Dupont",
    "signup.email": "Email",
    "signup.emailPlaceholder": "jean@exemple.com",
    "signup.phone": "Numéro de Téléphone",
    "signup.phonePlaceholder": "+213 555 123 456",
    "signup.password": "Mot de passe",
    "signup.passwordPlaceholder": "Créez un mot de passe fort",
    "signup.agreeToTerms": "J'accepte les",
    "signup.termsOfService": "Conditions de Service",
    "signup.and": "et la",
    "signup.privacyPolicy": "Politique de Confidentialité",
    "signup.createAccount": "Créer un Compte",
    "signup.creatingAccount": "Création du compte...",
    "signup.alreadyHaveAccount": "Vous avez déjà un compte?",
    "signup.signInLink": "Se connecter",

    // Hero Section
    heroSubtitle:
      "Transformez vos déchets électroniques en récompenses. Rejoignez l'avenir durable du recyclage technologique.",
    startRecycling: "Commencer le Recyclage",
    learnMore: "En Savoir Plus",

    // Stats
    devicesRecycled: "Appareils Recyclés",
    activeUsers: "Utilisateurs Actifs",
    pointsEarned: "Points Gagnés",

    // Devices
    whatWeAccept: "Ce Que Nous Acceptons",
    smartphones: "Smartphones",
    laptops: "Ordinateurs Portables",
    monitors: "Moniteurs",
    batteries: "Batteries",
    cpus: "Processeurs",
    tablets: "Tablettes",

    // Features
    whyChoose: "Pourquoi Choisir Reteck Solutions",
    secureData: "Destruction Sécurisée des Données",
    secureDataDesc: "Effacement complet des données et destruction certifiée des informations sensibles.",
    ecoFriendly: "Processus Écologique",
    ecoFriendlyDesc: "Méthodes de recyclage respectueuses de l'environnement qui protègent notre planète.",
    communityImpact: "Impact Communautaire",
    communityImpactDesc: "Soutenir les communautés locales par la création d'emplois et l'éducation environnementale.",

    // CTA
    readyToStart: "Prêt à Commencer le Recyclage?",
    joinThousands: "Rejoignez des milliers d'utilisateurs qui font la différence tout en gagnant des récompenses.",
    signUpNow: "S'inscrire Maintenant",

    // About Page
    "about.title": "À Propos de Reteck Solutions",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Nous nous consacrons à créer un avenir durable en transformant les déchets électroniques en ressources précieuses tout en récompensant notre communauté pour sa conscience environnementale.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Devenir la plateforme leader de recyclage de déchets électroniques en Algérie, favorisant la responsabilité environnementale et la durabilité technologique en Afrique du Nord.",
    "about.values.title": "Nos Valeurs",
    "about.values.sustainability": "Durabilité environnementale grâce à des pratiques de recyclage responsables",
    "about.values.innovation": "Solutions technologiques innovantes pour la gestion des déchets",
    "about.values.community": "Engagement communautaire et éducation sur les déchets électroniques",
    "about.values.transparency": "Processus transparents et systèmes de récompenses équitables",

    // Latest Page
    "latest.title": "Dernières Actualités Tech & Articles",
    "latest.subtitle":
      "Restez informé des dernières nouvelles technologiques et insights matériels d'Algérie et d'ailleurs",
    "latest.readMore": "Lire Plus",
    "latest.category.hardware": "Matériel",
    "latest.category.news": "Actualités Tech",
    "latest.category.recycling": "Recyclage",
    "latest.category.innovation": "Innovation",
  },

  ar: {
    // Navigation
    home: "الرئيسية",
    latest: "الأخبار",
    locations: "المواقع",
    rewards: "المكافآت",
    about: "حولنا",
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",

    // Login Page
    "login.welcome": "مرحباً بعودتك",
    "login.subtitle": "سجل الدخول إلى حسابك في ريتك سوليوشنز",
    "login.email": "البريد الإلكتروني",
    "login.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "login.password": "كلمة المرور",
    "login.passwordPlaceholder": "أدخل كلمة المرور",
    "login.forgotPassword": "نسيت كلمة المرور؟",
    "login.signIn": "تسجيل الدخول",
    "login.signingIn": "جاري تسجيل الدخول...",
    "login.noAccount": "ليس لديك حساب؟",
    "login.signUpLink": "إنشاء حساب",

    // Signup Page
    "signup.title": "انضم إلى ريتك سوليوشنز",
    "signup.subtitle": "ابدأ في كسب النقاط من خلال إعادة تدوير النفايات الإلكترونية",
    "signup.accountType": "ما نوع الحساب الذي تريد إنشاؤه؟",
    "signup.customer": "حساب عميل",
    "signup.customerDesc": "للأفراد الذين يعيدون تدوير الأجهزة الشخصية",
    "signup.company": "حساب شركة",
    "signup.companyDesc": "للشركات التي لديها عقود مؤسسية",
    "signup.change": "تغيير",
    "signup.contractId": "رقم العقد",
    "signup.contractIdPlaceholder": "أدخل رقم العقد",
    "signup.contractIdRequired": "رقم العقد مطلوب لحسابات الشركات",
    "signup.companyName": "اسم الشركة",
    "signup.companyNamePlaceholder": "أدخل اسم شركتك",
    "signup.firstName": "الاسم الأول",
    "signup.firstNamePlaceholder": "أحمد",
    "signup.lastName": "اسم العائلة",
    "signup.lastNamePlaceholder": "محمد",
    "signup.email": "البريد الإلكتروني",
    "signup.emailPlaceholder": "ahmed@example.com",
    "signup.phone": "رقم الهاتف",
    "signup.phonePlaceholder": "+213 555 123 456",
    "signup.password": "كلمة المرور",
    "signup.passwordPlaceholder": "أنشئ كلمة مرور قوية",
    "signup.agreeToTerms": "أوافق على",
    "signup.termsOfService": "شروط الخدمة",
    "signup.and": "و",
    "signup.privacyPolicy": "سياسة الخصوصية",
    "signup.createAccount": "إنشاء حساب",
    "signup.creatingAccount": "جاري إنشاء الحساب...",
    "signup.alreadyHaveAccount": "لديك حساب بالفعل؟",
    "signup.signInLink": "تسجيل الدخول",

    // Hero Section
    heroSubtitle: "حول نفاياتك الإلكترونية إلى مكافآت. انضم إلى مستقبل مستدام لإعادة تدوير التكنولوجيا.",
    startRecycling: "ابدأ إعادة التدوير",
    learnMore: "اعرف المزيد",

    // Stats
    devicesRecycled: "الأجهزة المعاد تدويرها",
    activeUsers: "المستخدمون النشطون",
    pointsEarned: "النقاط المكتسبة",

    // Devices
    whatWeAccept: "ما نقبله",
    smartphones: "الهواتف الذكية",
    laptops: "أجهزة الكمبيوتر المحمولة",
    monitors: "الشاشات",
    batteries: "البطاريات",
    cpus: "المعالجات",
    tablets: "الأجهزة اللوحية",

    // Features
    whyChoose: "لماذا تختار ريتك سوليوشنز",
    secureData: "تدمير آمن للبيانات",
    secureDataDesc: "مسح كامل للبيانات وتدمير معتمد للمعلومات الحساسة.",
    ecoFriendly: "عملية صديقة للبيئة",
    ecoFriendlyDesc: "طرق إعادة تدوير مسؤولة بيئياً تحمي كوكبنا.",
    communityImpact: "التأثير المجتمعي",
    communityImpactDesc: "دعم المجتمعات المحلية من خلال خلق فرص العمل والتعليم البيئي.",

    // CTA
    readyToStart: "مستعد لبدء إعادة التدوير؟",
    joinThousands: "انضم إلى آلاف المستخدمين الذين يحدثون فرقاً بينما يكسبون المكافآت.",
    signUpNow: "سجل الآن",

    // About Page
    "about.title": "حول ريتك سوليوشنز",
    "about.mission.title": "مهمتنا",
    "about.mission.description":
      "نحن ملتزمون بخلق مستقبل مستدام من خلال تحويل النفايات الإلكترونية إلى موارد قيمة بينما نكافئ مجتمعنا على وعيهم البيئي.",
    "about.vision.title": "رؤيتنا",
    "about.vision.description":
      "أن نصبح منصة إعادة تدوير النفايات الإلكترونية الرائدة في الجزائر، وتعزيز المسؤولية البيئية والاستدامة التكنولوجية عبر شمال أفريقيا.",
    "about.values.title": "قيمنا",
    "about.values.sustainability": "الاستدامة البيئية من خلال ممارسات إعادة التدوير المسؤولة",
    "about.values.innovation": "حلول تكنولوجية مبتكرة لإدارة النفايات",
    "about.values.community": "المشاركة المجتمعية والتعليم حول النفايات الإلكترونية",
    "about.values.transparency": "عمليات شفافة وأنظمة مكافآت عادلة",

    // Latest Page
    "latest.title": "آخر أخبار التكنولوجيا والمقالات",
    "latest.subtitle": "ابق محدثاً بآخر أخبار التكنولوجيا ورؤى الأجهزة من الجزائر وما وراءها",
    "latest.readMore": "اقرأ المزيد",
    "latest.category.hardware": "الأجهزة",
    "latest.category.news": "أخبار التكنولوجيا",
    "latest.category.recycling": "إعادة التدوير",
    "latest.category.innovation": "الابتكار",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "fr", "ar"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      updateDocumentLanguage(savedLanguage)
    }
  }, [])

  const updateDocumentLanguage = (lang: Language) => {
    // Set document direction and language
    if (lang === "ar") {
      document.documentElement.dir = "rtl"
      document.documentElement.lang = "ar"
    } else {
      document.documentElement.dir = "ltr"
      document.documentElement.lang = lang
    }
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    updateDocumentLanguage(lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
