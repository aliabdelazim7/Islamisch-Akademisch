/* ==========================================================================
   ISLAMISCH AKADEMISCH - Premium Quran Academy JavaScript Core
   ========================================================================== */

// --- Translations Database ---
const translations = {
    de: {
        // Navigation
        "nav-why-choose-us": "Warum Wir",
        "nav-journey": "Lernweg",
        "nav-programs": "Programme",
        "nav-teachers": "Lehrer",
        "nav-faq": "FAQ",
        "nav-cta": "Kostenlose Probestunde",

        // Hero
        "hero-badge": "Premium Online Quran Akademie",
        "hero-title-1": "Lernen Sie den Quran mit ",
        "hero-title-highlight": "qualifizierten Lehrern",
        "hero-title-2": " von überall",
        "hero-desc": "Strukturierter Quran-Unterricht, Tajweed und islamische Studien für Kinder und Erwachsene. Individuell auf Sie abgestimmt.",
        "hero-cta-start": "Jetzt Starten",
        "hero-cta-assess": "Kostenlose Einschätzung",
        "hero-stat-students": "Aktive Schüler",
        "hero-card-status": "Live Einzelunterricht",
        "hero-card-tag": "Akademischer Standard",

        // Why Choose Us
        "why-tag": "Vorteile",
        "why-title": "Warum Islamisch Akademisch?",
        "why-desc": "Wir kombinieren traditionelle Quran-Wissenschaften mit modernen Lehrmethoden für den deutschsprachigen Raum.",
        "benefit-1-title": "Zertifizierte Lehrkräfte",
        "benefit-1-desc": "Unsere Lehrer haben Ijazah von renommierten islamischen Universitäten (z.B. Al-Azhar).",
        "benefit-2-title": "Flexible Zeitpläne",
        "benefit-2-desc": "Lernen Sie, wann es Ihnen passt. Wir passen uns Ihrem Familien- und Berufsleben an.",
        "benefit-3-title": "1-zu-1 Einzelunterricht",
        "benefit-3-desc": "Maximale Aufmerksamkeit und individuelles Tempo. Keine Ablenkung wie in Gruppenklassen.",
        "benefit-4-title": "Für Kinder & Erwachsene",
        "benefit-4-desc": "Speziell entwickelte Lehrpläne für jede Altersklasse, spielerisch für Kinder, tiefgründig für Erwachsene.",
        "benefit-5-title": "Lehrerinnen Verfügbar",
        "benefit-5-desc": "Für unsere Schwestern und Töchter bieten wir qualifizierte Lehrerinnen für eine angenehme Lernatmosphäre.",
        "benefit-6-title": "Individuelle Lernpläne",
        "benefit-6-desc": "Jeder lernt anders. Wir erstellen einen maßgeschneiderten Plan basierend auf Ihrem aktuellen Stand.",

        // Learning Journey
        "journey-tag": "Ihr Weg",
        "journey-title": "In 5 Schritten zum Erfolg",
        "journey-desc": "Unser strukturierter Prozess sorgt dafür, dass Sie und Ihre Kinder nachhaltige Fortschritte erzielen.",
        "journey-step-1-title": "Formular ausfüllen",
        "journey-step-1-desc": "Tragen Sie Ihre Daten ein und wählen Sie Ihr Wunschprogramm aus.",
        "journey-step-2-title": "Kostenloses Erstgespräch",
        "journey-step-2-desc": "Wir ermitteln Ihr Niveau und besprechen Ihre persönlichen Ziele.",
        "journey-step-3-title": "Individueller Lernplan",
        "journey-step-3-desc": "Wir erstellen einen auf Sie zugeschnittenen Lehrplan und wählen den perfekten Lehrer aus.",
        "journey-step-4-title": "Unterricht starten",
        "journey-step-4-desc": "Beginnen Sie Ihren interaktiven Einzelunterricht über unser Premium-Klassenzimmer.",
        "journey-step-5-title": "Fortschritt verfolgen",
        "journey-step-5-desc": "Regelmäßige Berichte und Feedback-Gespräche sichern Ihren langfristigen Erfolg.",

        // Programs
        "programs-tag": "Lehrpläne",
        "programs-title": "Unsere Bildungsprogramme",
        "programs-desc": "Wählen Sie das passende Programm für Ihre spirituelle und akademische Weiterbildung.",
        "prog-badge-quran": "Beliebt",
        "prog-badge-tajweed": "Wichtig",
        "prog-badge-islamic": "Empfohlen",
        "prog-badge-arabic": "Grundlage",
        "prog-1-title": "Quran Lesen lernen",
        "prog-1-desc": "Lernen Sie das arabische Alphabet und die korrekte Aussprache (Makharij) von Grund auf mit der Norania-Methode.",
        "prog-2-title": "Quran Auswendiglernen (Hifz)",
        "prog-2-desc": "Strukturiertes Memorieren des Quran mit bewährten Methoden und ständiger Wiederholung zur Festigung.",
        "prog-3-title": "Tajweed-Regeln",
        "prog-3-desc": "Meistern Sie die Kunst der Rezitation nach den klassischen Regeln des Tajweed für eine melodiöse Lesung.",
        "prog-4-title": "Islamische Studien",
        "prog-4-desc": "Altered-gerechtes Wissen über Aqidah, Fiqh, Hadith und die Biografie des Propheten (Seerah) für den Alltag.",
        "prog-5-title": "Arabische Sprache",
        "prog-5-desc": "Verstehen Sie den Quran im Original. Kurse für klassisches Arabisch (Fusha) für alle Niveaustufen.",
        "prog-duration": "Flexible Einheiten",
        "prog-cta": "Mehr Details",

        // Parent Trust
        "trust-tag": "Vertrauen",
        "trust-title": "Die Sicherheit und der Erfolg Ihrer Familie",
        "trust-desc": "Als Eltern möchten Sie nur das Beste für Ihre Kinder. Wir bieten ein sicheres, professionelles und motivierendes Online-Klassenzimmer. Sie erhalten monatliche Fortschrittsberichte und können jederzeit am Unterricht teilhaben.",
        "stat-students-num": "500+",
        "stat-students-lbl": "Aktive Schüler",
        "stat-teachers-num": "20+",
        "stat-teachers-lbl": "Zertifizierte Lehrer",
        "stat-countries-num": "15+",
        "stat-countries-lbl": "Länder",
        "stat-satisfaction-num": "95%",
        "stat-satisfaction-lbl": "Zufriedene Eltern",

        // Testimonials
        "test-tag": "Erfahrungsberichte",
        "test-title": "Was unsere Familien sagen",
        "test-desc": "Echte Stimmen von Eltern und erwachsenen Schülern aus ganz Europa.",
        "test-1-quote": "«Islamisch Akademisch hat das Lernen für meine Kinder komplett verändert. Sie freuen sich jede Woche auf ihre Lehrerin aus Ägypten. Die Fortschritte im Hifz sind unglaublich!»",
        "test-1-name": "Mariam K.",
        "test-1-role": "Mutter von Elias (8) & Sara (11) - Frankfurt",
        "test-2-quote": "«Als Berufstätiger war es schwer, eine Moschee mit passenden Zeiten zu finden. Hier lerne ich Tajweed bequem um 21:00 Uhr. Mein Lehrer ist extrem geduldig und hochprofessionell.»",
        "test-2-name": "Dr. Ahmed M.",
        "test-2-role": "Tajweed-Schüler - München",
        "test-3-quote": "«Die monatlichen Berichte helfen uns als Eltern sehr zu sehen, was gelernt wurde. Es ist sehr organisiert und hat nichts mit den alten Online-Klassen auf Skype zu tun.»",
        "test-3-name": "Yasmin B.",
        "test-3-role": "Mutter von Younes (6) - Wien",

        // Teachers
        "teachers-tag": "Team",
        "teachers-title": "Lernen Sie unsere Lehrer kennen",
        "teachers-desc": "Ein Team aus hochqualifizierten, pädagogisch geschulten Lehrkräften, die fließend Deutsch, Englisch und Arabisch sprechen.",
        "teacher-1-name": "Sheikh Mahmoud Al-Azhari",
        "teacher-1-title": "Hauptlehrer für Quran & Tajweed",
        "teacher-1-desc": "Absolvent der Al-Azhar Universität mit Ijazah in den 10 Rezitationsarten. 8 Jahre Online-Lehrerfahrung.",
        "teacher-2-name": "Ustadha Zainab Ahmed",
        "teacher-2-title": "Spezialistin für Kinder & Hifz",
        "teacher-2-desc": "Lizenziert für Quran-Memorierung mit kindgerechtem pädagogischem Hintergrund. Spricht fließend Deutsch & Arabisch.",
        "teacher-3-name": "Ustadha Fatima Mansour",
        "teacher-3-title": "Lehrerin für Arabisch & Islamische Studien",
        "teacher-3-desc": "Master in Islamischen Studien. Expertin für das Heranführen von europäischen Kindern an die arabische Sprache.",
        "badge-quran-hifz": "Quran & Hifz",
        "badge-tajweed-rules": "Tajweed",
        "badge-azhar": "Al-Azhar",
        "badge-kids": "Kinder-Pädagogik",
        "badge-german": "Deutsch",
        "badge-arabic-lang": "Arabisch",
        "badge-islamic-studies": "Islamische Studien",

        // FAQ
        "faq-tag": "Fragen",
        "faq-title": "Häufig gestellte Fragen",
        "faq-desc": "Alles, was Sie über unseren Ablauf, die Preise und den Unterricht wissen müssen.",
        "faq-1-q": "Wie lange dauert eine Unterrichtsstunde?",
        "faq-1-a": "In der Regel dauert eine Unterrichtseinheit im Einzelunterricht 30 oder 45 Minuten. Für jüngere Kinder empfehlen wir 30 Minuten, um die Aufmerksamkeit hochzuhalten. Erwachsene wählen meist 45 bis 60 Minuten.",
        "faq-2-q": "Was kostet der Unterricht?",
        "faq-2-a": "Unsere Tarife sind sehr fair und richten sich nach der Anzahl der Stunden pro Woche. Nach Ihrer kostenlosen Einschätzung und Probestunde erstellen wir Ihnen ein unverbindliches Angebot. Es gibt keine versteckten Kosten.",
        "faq-3-q": "Wie wähle ich den passenden Lehrer aus?",
        "faq-3-a": "Wir wählen den Lehrer basierend auf dem Alter des Schülers, dem aktuellen Sprachniveau und dem ausgewählten Programm aus. Sie können auch explizit eine weibliche Lehrkraft anfordern.",
        "faq-4-q": "Gibt es eine kostenlose Probestunde?",
        "faq-4-a": "Ja, absolut. Jede Anmeldung beginnt mit einer komplett kostenlosen und unverbindlichen Probestunde. Hier lernen Sie den Lehrer kennen und wir ermitteln das Einstiegsniveau.",
        "faq-5-q": "Welche Sprachen sprechen die Lehrer?",
        "faq-5-a": "Alle unsere Lehrer sprechen fließend Arabisch. Die für den europäischen Raum ausgewählten Lehrer sprechen zudem fließend Deutsch oder Englisch, um Erklärungen verständlich zu machen.",

        // Lead Form
        "form-tag": "Anmeldung",
        "form-title": "Buchen Sie Ihre kostenlose Einschätzung",
        "form-desc": "Machen Sie den ersten Schritt. Füllen Sie das Formular aus, und wir kontaktieren Sie innerhalb von 24 Stunden per WhatsApp oder E-Mail.",
        "lbl-parent-name": "Name des Elternteils (für Kinder)",
        "lbl-student-name": "Name des Schülers",
        "lbl-age": "Alter des Schülers",
        "lbl-country": "Wohnort (Land)",
        "lbl-lang": "Bevorzugte Unterrichtssprache",
        "lbl-phone": "Telefonnummer",
        "lbl-whatsapp": "WhatsApp-Nummer (für schnelle Absprachen)",
        "lbl-email": "E-Mail-Adresse",
        "lbl-program": "Gewünschtes Programm",
        "lbl-schedule": "Bevorzugte Unterrichtszeiten",
        "lbl-message": "Ihre Nachricht oder Vorkenntnisse (Optional)",
        "opt-select": "-- Bitte wählen --",
        "opt-lang-de": "Deutsch",
        "opt-lang-en": "Englisch",
        "opt-lang-ar": "Arabisch",
        "opt-prog-read": "Quran Lesen lernen",
        "opt-prog-memorize": "Quran Auswendiglernen (Hifz)",
        "opt-prog-tajweed": "Tajweed-Regeln",
        "opt-prog-islamic": "Islamische Studien",
        "opt-prog-arabic": "Arabische Sprache",
        "opt-sched-morning": "Vormittags (Wochenende)",
        "opt-sched-afternoon": "Nachmittags (Wochentags)",
        "opt-sched-evening": "Abends (Wochentags)",
        "opt-sched-flexible": "Flexibel / Nach Absprache",
        "btn-submit-form": "Meine Quran-Reise starten",
        "form-required-err": "Dieses Feld ist erforderlich.",
        "form-email-err": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        "form-success-title": "Anmeldung erfolgreich!",
        "form-success-desc": "Vielen Dank für Ihr Vertrauen. Unser Bildungsberater wird sich innerhalb der nächsten 24 Stunden per WhatsApp oder E-Mail bei Ihnen melden, um Ihre kostenlose Probestunde zu vereinbaren.",
        "form-success-btn": "Zur Startseite",

        // Slide-Up CTA Banner
        "slide-cta-title": "Bereit für den Quran?",
        "slide-cta-desc": "Sichern Sie sich heute Ihre kostenlose Probestunde.",
        "slide-cta-btn": "Kostenlos Testen",

        // Exit Popup
        "exit-title": "Warten Sie noch einen Moment!",
        "exit-desc": "Verlassen Sie uns nicht ohne Ihre kostenlose Einstufungssitzung (Wert: 35€). In nur 15 Minuten ermitteln unsere Lehrer den perfekten Quran-Lernweg für Sie oder Ihr Kind.",
        "exit-btn": "Jetzt Probestunde sichern",

        // Footer
        "footer-about-title": "Islamisch Akademisch",
        "footer-about-desc": "Eine der führenden Online-Akademien für Quran, Tajweed und islamische Studien im europäischen Raum. Wissenschaftlich, strukturiert und vertrauenswürdig.",
        "footer-col-programs": "Programme",
        "footer-col-links": "Nützliche Links",
        "footer-col-contact": "Kontakt",
        "footer-rights": "© 2026 Islamisch Akademisch. Alle Rechte vorbehalten.",
        "footer-privacy": "Datenschutz",
        "footer-terms": "Impressum"
    },
    en: {
        // Navigation
        "nav-why-choose-us": "Why Us",
        "nav-journey": "Journey",
        "nav-programs": "Programs",
        "nav-teachers": "Teachers",
        "nav-faq": "FAQ",
        "nav-cta": "Free Trial Lesson",

        // Hero
        "hero-badge": "Premium Online Quran Academy",
        "hero-title-1": "Learn the Quran with ",
        "hero-title-highlight": "Qualified Teachers",
        "hero-title-2": " from Anywhere",
        "hero-desc": "Structured Quran memorization, Tajweed, and Islamic studies for children and adults. Personalized for your goals.",
        "hero-cta-start": "Start Learning",
        "hero-cta-assess": "Free Assessment",
        "hero-stat-students": "Active Students",
        "hero-card-status": "Live 1-on-1 Session",
        "hero-card-tag": "Academic Standard",

        // Why Choose Us
        "why-tag": "Benefits",
        "why-title": "Why Choose Us?",
        "why-desc": "We combine classical Quranic sciences with modern pedagogy tailored for Western students.",
        "benefit-1-title": "Certified Teachers",
        "benefit-1-desc": "Our teachers hold Ijazahs from prestigious Islamic universities (such as Al-Azhar).",
        "benefit-2-title": "Flexible Schedules",
        "benefit-2-desc": "Learn at your own convenience. Classes adapt perfectly to your family and work commitments.",
        "benefit-3-title": "1-on-1 Personal Class",
        "benefit-3-desc": "Undivided attention and personalized pacing. Zero distractions of a group classroom.",
        "benefit-4-title": "Children & Adults",
        "benefit-4-desc": "Specially designed curricula: engaging for children, deep and comprehensive for adults.",
        "benefit-5-title": "Female Teachers Available",
        "benefit-5-desc": "We offer highly qualified female tutors for sisters and young daughters for comfortable learning.",
        "benefit-6-title": "Customized Study Plans",
        "benefit-6-desc": "Everyone learns differently. We structure a custom study plan based on your current level.",

        // Learning Journey
        "journey-tag": "Your Path",
        "journey-title": "Your Quran Journey in 5 Steps",
        "journey-desc": "Our structured onboarding ensures you and your children achieve sustainable progress.",
        "journey-step-1-title": "Fill the Form",
        "journey-step-1-desc": "Submit your details and select your preferred Quran program.",
        "journey-step-2-title": "Free Initial Consultation",
        "journey-step-2-desc": "We evaluate your current level and discuss your personal milestones.",
        "journey-step-3-title": "Personalized Syllabus",
        "journey-step-3-desc": "We design your curriculum and assign the most suitable teacher for you.",
        "journey-step-4-title": "Start Classes",
        "journey-step-4-desc": "Begin your live, interactive classes via our premium virtual classroom.",
        "journey-step-5-title": "Track Progress",
        "journey-step-5-desc": "Receive monthly performance reports and regular academic updates.",

        // Programs
        "programs-tag": "Curriculum",
        "programs-title": "Our Programs",
        "programs-desc": "Select the perfect course to advance your spiritual and academic journey.",
        "prog-badge-quran": "Popular",
        "prog-badge-tajweed": "Essential",
        "prog-badge-islamic": "Recommended",
        "prog-badge-arabic": "Foundation",
        "prog-1-title": "Quran Reading (Qaida)",
        "prog-1-desc": "Learn the Arabic alphabet, pronunciation (Makharij), and reading rules from scratch using Qaida Norania.",
        "prog-2-title": "Quran Memorization (Hifz)",
        "prog-2-desc": "Systematic memorization of the Quran with practical retention techniques and regular revision.",
        "prog-3-title": "Tajweed Rules",
        "prog-3-desc": "Master beautiful recitation by studying the classical theoretical and practical rules of Tajweed.",
        "prog-4-title": "Islamic Studies",
        "prog-4-desc": "Age-appropriate lessons covering Aqidah, Fiqh, Hadith, Islamic History, and the Seerah of Prophet Muhammad.",
        "prog-5-title": "Arabic Language",
        "prog-5-desc": "Understand the Quran in its original tongue. Classical Arabic (Fusha) courses for all skill levels.",
        "prog-duration": "Flexible Hours",
        "prog-cta": "View Details",

        // Parent Trust
        "trust-tag": "Trust",
        "trust-title": "Your Family's Safety and Success",
        "trust-desc": "As parents, you want the best education for your children. We provide a safe, monitored, and highly professional online learning environment. Parents receive monthly progress reports and can sit in on sessions at any time.",
        "stat-students-num": "500+",
        "stat-students-lbl": "Active Students",
        "stat-teachers-num": "20+",
        "stat-teachers-lbl": "Certified Tutors",
        "stat-countries-num": "15+",
        "stat-countries-lbl": "Countries",
        "stat-satisfaction-num": "95%",
        "stat-satisfaction-lbl": "Parent Satisfaction",

        // Testimonials
        "test-tag": "Testimonials",
        "test-title": "What Our Families Say",
        "test-desc": "Real stories from parents and adult students across Europe.",
        "test-1-quote": "\"Islamisch Akademisch has completely transformed how my kids learn. They look forward to their weekly sessions with their teacher. The progress in Hifz is amazing!\"",
        "test-1-name": "Mariam K.",
        "test-1-role": "Mother of Elias (8) & Sara (11) - Frankfurt",
        "test-2-quote": "\"As a busy professional, finding a local mosque with matching schedules was impossible. Here I study Tajweed comfortably at 9:00 PM. My tutor is incredibly patient.\"",
        "test-2-name": "Dr. Ahmed M.",
        "test-2-role": "Tajweed Student - Munich",
        "test-3-quote": "\"The monthly progress tracking helps us see exactly what was covered. The organization here is top-tier; it is nothing like old-school Skype classes.\"",
        "test-3-name": "Yasmin B.",
        "test-3-role": "Mother of Younes (6) - Vienna",

        // Teachers
        "teachers-tag": "Faculty",
        "teachers-title": "Meet Our Certified Teachers",
        "teachers-desc": "Highly qualified and pedagogically trained teachers who speak fluent German, English, and Arabic.",
        "teacher-1-name": "Sheikh Mahmoud Al-Azhari",
        "teacher-1-title": "Head Quran & Tajweed Instructor",
        "teacher-1-desc": "Graduate of Al-Azhar University holding Ijazah in the 10 Quranic recitations. 8+ years of online teaching experience.",
        "teacher-2-name": "Ustadha Zainab Ahmed",
        "teacher-2-title": "Children's Hifz Specialist",
        "teacher-2-desc": "Licensed Quran memorization tutor with a modern childhood pedagogy background. Fluent in German & Arabic.",
        "teacher-3-name": "Ustadha Fatima Mansour",
        "teacher-3-title": "Arabic & Islamic Studies Tutee",
        "teacher-3-desc": "Master's degree in Islamic Studies. Expert in bridging language gaps for European-born Muslim youth.",
        "badge-quran-hifz": "Quran & Hifz",
        "badge-tajweed-rules": "Tajweed",
        "badge-azhar": "Al-Azhar",
        "badge-kids": "Child Pedagogy",
        "badge-german": "German",
        "badge-arabic-lang": "Arabic",
        "badge-islamic-studies": "Islamic Studies",

        // FAQ
        "faq-tag": "FAQ",
        "faq-title": "Frequently Asked Questions",
        "faq-desc": "Everything you need to know about our schedules, pricing, and how classes work.",
        "faq-1-q": "How long is each session?",
        "faq-1-a": "Typically, individual sessions are either 30 or 45 minutes long. For young kids, 30 minutes is recommended to maintain focus. Adults usually prefer 45 to 60-minute classes.",
        "faq-2-q": "What is the cost of tuition?",
        "faq-2-a": "Our fees are highly competitive and depend on the weekly frequency of classes. Following your free assessment session, we will provide a clear, customized quote with no hidden fees.",
        "faq-3-q": "How is the teacher selected?",
        "faq-3-a": "We assign a tutor based on the student's age, language proficiency, and target program. You can also explicitly request a female teacher.",
        "faq-4-q": "Is the trial lesson completely free?",
        "faq-4-a": "Yes, absolutely. The initial assessment and trial lesson are 100% free and carry no obligation. It's a chance to meet your teacher and set baseline goals.",
        "faq-5-q": "What languages do the tutors speak?",
        "faq-5-a": "All tutors are native Arabic speakers. Those assigned to Western European students also speak fluent German or English to ensure clear concepts and instructions.",

        // Lead Form
        "form-tag": "Registration",
        "form-title": "Book Your Free Assessment",
        "form-desc": "Take your first step. Fill out the form, and our advisor will reach out to you via WhatsApp or Email within 24 hours.",
        "lbl-parent-name": "Parent's Name (for child students)",
        "lbl-student-name": "Student's Name",
        "lbl-age": "Student's Age",
        "lbl-country": "Country of Residence",
        "lbl-lang": "Preferred Instruction Language",
        "lbl-phone": "Phone Number",
        "lbl-whatsapp": "WhatsApp Number (for easy scheduling)",
        "lbl-email": "Email Address",
        "lbl-program": "Program of Interest",
        "lbl-schedule": "Preferred Time Slot",
        "lbl-message": "Message or Prior Quran Experience (Optional)",
        "opt-select": "-- Select option --",
        "opt-lang-de": "German",
        "opt-lang-en": "English",
        "opt-lang-ar": "Arabic",
        "opt-prog-read": "Quran Reading (Qaida)",
        "opt-prog-memorize": "Quran Memorization (Hifz)",
        "opt-prog-tajweed": "Tajweed Rules",
        "opt-prog-islamic": "Islamic Studies",
        "opt-prog-arabic": "Arabic Language",
        "opt-sched-morning": "Mornings (Weekends)",
        "opt-sched-afternoon": "Afternoons (Weekdays)",
        "opt-sched-evening": "Evenings (Weekdays)",
        "opt-sched-flexible": "Flexible / Custom hours",
        "btn-submit-form": "Start My Quran Journey",
        "form-required-err": "This field is required.",
        "form-email-err": "Please enter a valid email address.",
        "form-success-title": "Registration Successful!",
        "form-success-desc": "Thank you for trusting us. Our educational coordinator will contact you within the next 24 hours via WhatsApp or Email to schedule your free assessment lesson.",
        "form-success-btn": "Back to Home",

        // Slide-Up CTA Banner
        "slide-cta-title": "Ready to learn Quran?",
        "slide-cta-desc": "Secure your free assessment lesson today.",
        "slide-cta-btn": "Claim Free Trial",

        // Exit Popup
        "exit-title": "Wait! Don't leave empty-handed",
        "exit-desc": "Claim your free Quran assessment and trial lesson (worth 35€). In just 15 minutes, our certified tutors will design a custom roadmap for you or your child.",
        "exit-btn": "Secure My Free Trial Now",

        // Footer
        "footer-about-title": "Islamisch Akademisch",
        "footer-about-desc": "One of the leading online academies for Quran, Tajweed, and Islamic studies in Europe. Academic, structured, and trustworthy.",
        "footer-col-programs": "Programs",
        "footer-col-links": "Useful Links",
        "footer-col-contact": "Contact Us",
        "footer-rights": "© 2026 Islamisch Akademisch. All rights reserved.",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service"
    },
    ar: {
        // Navigation
        "nav-why-choose-us": "لماذا نحن",
        "nav-journey": "خطواتك",
        "nav-programs": "البرامج",
        "nav-teachers": "المعلمون",
        "nav-faq": "الأسئلة الشائعة",
        "nav-cta": "حصة تجريبية مجانية",

        // Hero
        "hero-badge": "أكاديمية قرانية متميزة عبر الإنترنت",
        "hero-title-1": "تعلم القرآن الكريم مع ",
        "hero-title-highlight": "معلمين مؤهلين",
        "hero-title-2": " من أي مكان",
        "hero-desc": "حفظ قرآن كريم منهجي، تجويد، ودراسات إسلامية للأطفال والكبار. مصممة خصيصاً لتناسب أهدافكم.",
        "hero-cta-start": "ابدأ التعلم الآن",
        "hero-cta-assess": "تقييم مجاني",
        "hero-stat-students": "طالب نشط",
        "hero-card-status": "جلسات فردية مباشرة",
        "hero-card-tag": "معايير أكاديمية",

        // Why Choose Us
        "why-tag": "ميزاتنا",
        "why-title": "لماذا تختار إسلامش أكاديمي؟",
        "why-desc": "نجمع بين العلوم القرآنية الأصيلة وطرق التدريس الحديثة المناسبة للعيش في أوروبا.",
        "benefit-1-title": "معلمون مجازون",
        "benefit-1-desc": "معلمونا حاصلون على إجازات في حفظ وقراءة القرآن الكريم من جامعات إسلامية عريقة (مثل الأزهر الشريف).",
        "benefit-2-title": "مواعيد مرنة",
        "benefit-2-desc": "تعلم في الوقت الذي يناسبك. حصصنا تتكيف بشكل كامل مع التزامات عائلتك وعملك.",
        "benefit-3-title": "حصص فردية (1 لـ 1)",
        "benefit-3-desc": "تركيز كامل وسرعة تعلم مخصصة لك. بدون تشتيت الفصول الجماعية.",
        "benefit-4-title": "للأطفال والكبار",
        "benefit-4-desc": "مناهج مصممة خصيصاً لتناسب كل فئة عمرية: تفاعلية وممتعة للأطفال، وعميقة وشاملة للكبار.",
        "benefit-5-title": "معلمات متوفرات",
        "benefit-5-desc": "نوفر معلمات مؤهلات للأخوات وبناتنا الصغيرات لتأمين بيئة تعليمية مريحة.",
        "benefit-6-title": "خطط تعليمية مخصصة",
        "benefit-6-desc": "كل شخص يتعلم بطريقة مختلفة. نضع خطة تعليمية مخصصة بناءً على مستواك الحالي وهدفك.",

        // Learning Journey
        "journey-tag": "رحلتك",
        "journey-title": "رحلتك القرآنية في 5 خطوات",
        "journey-desc": "نظامنا الممنهج يضمن لك ولأطفالك تحقيق تقدم مستمر وثابت.",
        "journey-step-1-title": "تعبئة النموذج",
        "journey-step-1-desc": "أدخل بياناتك وحدد البرنامج الذي ترغب في التسجيل فيه.",
        "journey-step-2-title": "جلسة تقييم مجانية",
        "journey-step-2-desc": "نقيم مستواك الحالي ونناقش أهدافك التعليمية والجدول المناسب.",
        "journey-step-3-title": "خطة دراسية مخصصة",
        "journey-step-3-desc": "نصمم منهجك الدراسي ونختار المعلم أو المعلمة الأنسب لك.",
        "journey-step-4-title": "بدء الحصص المباشرة",
        "journey-step-4-desc": "ابدأ دروسك المباشرة والتفاعلية عبر منصتنا الرقمية المتميزة.",
        "journey-step-5-title": "متابعة التقدم",
        "journey-step-5-desc": "احصل على تقارير أداء شهرية وتحديثات دورية حول تطورك المستمر.",

        // Programs
        "programs-tag": "مناهجنا",
        "programs-title": "برامجنا التعليمية",
        "programs-desc": "اختر البرنامج المناسب لتعزيز رحلتك الروحية والأكاديمية.",
        "prog-badge-quran": "الأكثر طلباً",
        "prog-badge-tajweed": "أساسي",
        "prog-badge-islamic": "موصى به",
        "prog-badge-arabic": "تأسيسي",
        "prog-1-title": "تعلم قراءة القرآن",
        "prog-1-desc": "تعلم الحروف العربية، المخارج الصحيحة، وقواعد القراءة من الصفر باستخدام القاعدة النورانية.",
        "prog-2-title": "حفظ القرآن الكريم",
        "prog-2-desc": "حفظ القرآن بطريقة منهجية ومنظمة مع تقنيات تثبيت الحفظ والمراجعة المستمرة.",
        "prog-3-title": "أحكام التجويد",
        "prog-3-desc": "أتقن التلاوة الصحيحة من خلال دراسة قواعد التجويد النظرية والعملية.",
        "prog-4-title": "الدراسات الإسلامية",
        "prog-4-desc": "دروس تناسب الفئة العمرية تغطي العقيدة، الفقه، الحديث، السيرة النبوية المطهرة والأخلاق.",
        "prog-5-title": "اللغة العربية",
        "prog-5-desc": "افهم القرآن بلغته الأصلية. كورسات لغة عربية فصحى لجميع المستويات والمهارات.",
        "prog-duration": "ساعات مرنة",
        "prog-cta": "التفاصيل",

        // Parent Trust
        "trust-tag": "الأمان والضمان",
        "trust-title": "سلامة ونجاح عائلتكم هي أولويتنا",
        "trust-desc": "بصفتكم أولياء أمور، تريدون أفضل تعليم لأطفالكم. نحن نوفر بيئة تعليمية آمنة، خاضعة للمراقبة والمهنية العالية عبر الإنترنت. يتلقى أولياء الأمور تقارير أداء شهرية ويمكنهم حضور الحصص في أي وقت.",
        "stat-students-num": "+500",
        "stat-students-lbl": "طالب نشط",
        "stat-teachers-num": "+20",
        "stat-teachers-lbl": "معلم معتمد",
        "stat-countries-num": "+15",
        "stat-countries-lbl": "دولة",
        "stat-satisfaction-num": "95%",
        "stat-satisfaction-lbl": "رضا أولياء الأمور",

        // Testimonials
        "test-tag": "آراء وتجارب",
        "test-title": "ماذا تقول العائلات عنا؟",
        "test-desc": "قصص حقيقية من أولياء الأمور والطلاب الكبار في جميع أنحاء أوروبا.",
        "test-1-quote": "«لقد غيرت الأكاديمية طريقة تعلم أطفالي تماماً. إنهم يتطلعون بشوق لحصتهم الأسبوعية مع المعلمة. التقدم في الحفظ مذهل!»",
        "test-1-name": "مريم ك.",
        "test-1-role": "والدة إلياس (8 سنوات) وسارة (11 سنة) - فرانكفورت",
        "test-2-quote": "«كمحترف مشغول، كان من المستحيل العثور على مسجد محلي بأوقات تناسبني. هنا أدرس التجويد في الساعة 9 مساءً بكل أريحية. معلمي صبور للغاية ومحترف.»",
        "test-2-name": "د. أحمد م.",
        "test-2-role": "طالب تجويد - ميونيخ",
        "test-3-quote": "«تقارير المتابعة الشهرية تساعدنا في معرفة ما تم إنجازه بدقة. التنظيم هنا رائع ولا علاقة له بالدروس العشوائية القديمة عبر سكايب.»",
        "test-3-name": "ياسمين ب.",
        "test-3-role": "والدة يونس (6 سنوات) - فيينا",

        // Teachers
        "teachers-tag": "الكادر التعليمي",
        "teachers-title": "تعرف على معلمينا المعتمدين",
        "teachers-desc": "نخبة من المعلمين والمعلمات المؤهلين والمدربين تربوياً يتحدثون الألمانية، الإنجليزية والعربية بطلاقة.",
        "teacher-1-name": "الشيخ محمود الأزهري",
        "teacher-1-title": "مشرف مسار القرآن والتجويد",
        "teacher-1-desc": "خريج جامعة الأزهر الشريف وحاصل على إجازة في القراءات العشر المتواترة. خبرة تزيد عن 8 سنوات في التعليم عن بعد.",
        "teacher-2-name": "الأستاذة زينب أحمد",
        "teacher-2-title": "أخصائية تحفيظ الأطفال",
        "teacher-2-desc": "معلمة قرآن مرخصة بخلفية قوية في التربية الحديثة للأطفال. تتحدث الألمانية والعربية.",
        "teacher-3-name": "الأستاذة فاطمة منصور",
        "teacher-3-title": "معلمة اللغة العربية والدراسات الإسلامية",
        "teacher-3-desc": "ماجستير في الدراسات الإسلامية. متخصصة في تبسيط وتدريس اللغة العربية والدين للأطفال الناشئين في أوروبا.",
        "badge-quran-hifz": "القرآن والحفظ",
        "badge-tajweed-rules": "التجويد",
        "badge-azhar": "الأزهر الشريف",
        "badge-kids": "تربية الأطفال",
        "badge-german": "الألمانية",
        "badge-arabic-lang": "العربية",
        "badge-islamic-studies": "الدراسات الإسلامية",

        // FAQ
        "faq-tag": "الأسئلة",
        "faq-title": "الأسئلة الشائعة",
        "faq-desc": "كل ما تحتاج إلى معرفته حول أوقات الحصص، الرسوم، وكيفية سير العملية التعليمية.",
        "faq-1-q": "ما هي مدة الحصة الدراسية؟",
        "faq-1-a": "تتراوح مدة الحصة الفردية بين 30 إلى 45 دقيقة. ننصح بـ 30 دقيقة للأطفال الصغار لضمان تركيزهم الكامل، بينما يفضل الكبار عادةً الحصص ذات الـ 45 أو 60 دقيقة.",
        "faq-2-q": "ما هي تكلفة الدروس؟",
        "faq-2-a": "أسعارنا مناسبة جداً وتنافسية وتعتمد على عدد الحصص الأسبوعية. بعد جلسة التقييم المجانية، نقدم لك عرضاً واضحاً ومخصصاً بدون أي رسوم خفية.",
        "faq-3-q": "كيف يتم اختيار المعلم المناسب؟",
        "faq-3-a": "نختار المعلم بناءً على عمر الطالب، مستواه اللغوي والبرنامج المطلوب. يمكنك أيضاً طلب معلمة بشكل صريح للأخوات والبنات.",
        "faq-4-q": "هل الحصة التجريبية مجانية بالفعل؟",
        "faq-4-a": "نعم، بالتأكيد. التقييم الأولي والحصة التجريبية مجانية 100٪ ولا يترتب عليها أي التزام. إنها فرصة للتعرف على المعلم وتحديد الأهداف الرئيسية.",
        "faq-5-q": "ما هي اللغات التي يتحدث بها المعلمون؟",
        "faq-5-a": "جميع معلمينا يتحدثون العربية كلغة أم. بالإضافة إلى ذلك، فإن المعلمين المخصصين للطلاب في أوروبا يتحدثون الألمانية أو الإنجليزية بطلاقة لضمان الشرح الواضح وسهولة التفاهم.",

        // Lead Form
        "form-tag": "التسجيل",
        "form-title": "احجز جلسة تقييم مجانية",
        "form-desc": "اتخذ خطوتك الأولى اليوم. املأ النموذج وسيقوم المستشار التعليمي بالتواصل معك عبر الواتساب أو البريد الإلكتروني خلال 24 ساعة.",
        "lbl-parent-name": "اسم ولي الأمر (في حال كان الطالب طفلاً)",
        "lbl-student-name": "اسم الطالب",
        "lbl-age": "عمر الطالب",
        "lbl-country": "بلد الإقامة",
        "lbl-lang": "لغة التدريس المفضلة",
        "lbl-phone": "رقم الهاتف",
        "lbl-whatsapp": "رقم الواتساب (لتنسيق أسرع)",
        "lbl-email": "البريد الإلكتروني",
        "lbl-program": "البرنامج المطلوب",
        "lbl-schedule": "الأوقات المفضلة للدراسة",
        "lbl-message": "رسالة أو خبرة قرآنية سابقة (اختياري)",
        "opt-select": "-- اختر خياراً --",
        "opt-lang-de": "الألمانية",
        "opt-lang-en": "الإنجليزية",
        "opt-lang-ar": "العربية",
        "opt-prog-read": "تعلم قراءة القرآن",
        "opt-prog-memorize": "حفظ القرآن الكريم",
        "opt-prog-tajweed": "أحكام التجويد",
        "opt-prog-islamic": "الدراسات الإسلامية",
        "opt-prog-arabic": "اللغة العربية",
        "opt-sched-morning": "صباحاً (نهاية الأسبوع)",
        "opt-sched-afternoon": "بعد الظهر (أيام الأسبوع)",
        "opt-sched-evening": "مساءً (أيام الأسبوع)",
        "opt-sched-flexible": "مرن / أوقات مخصصة",
        "btn-submit-form": "ابدأ رحلتي مع القرآن",
        "form-required-err": "هذا الحقل مطلوب.",
        "form-email-err": "يرجى إدخال بريد إلكتروني صحيح.",
        "form-success-title": "تم التسجيل بنجاح!",
        "form-success-desc": "شكراً لثقتكم بنا. سيتواصل معكم منسقنا التعليمي خلال الـ 24 ساعة القادمة عبر الواتساب أو البريد الإلكتروني لتحديد موعد حصتكم التجريبية المجانية.",
        "form-success-btn": "العودة للرئيسية",

        // Slide-Up CTA Banner
        "slide-cta-title": "جاهز لتعلم القرآن؟",
        "slide-cta-desc": "احصل على حصتك التجريبية المجانية اليوم.",
        "slide-cta-btn": "احجز حصتي الآن",

        // Exit Popup
        "exit-title": "تمهل قليلاً! لا تذهب فارغ اليدين",
        "exit-desc": "احصل على جلسة تقييم وتحديد مستوى مجانية تماماً (بقيمة 35€). في 15 دقيقة فقط، سيضع معملونا الأكاديميون خطة مثالية لك أو لطفلك.",
        "exit-btn": "احجز حصتي التجريبية مجاناً",

        // Footer
        "footer-about-title": "إسلامش أكاديمي",
        "footer-about-desc": "واحدة من الأكاديميات الرائدة عبر الإنترنت في تدريس القرآن، التجويد والدراسات الإسلامية في أوروبا. منهج أكاديمي منظم وموثوق.",
        "footer-col-programs": "البرامج",
        "footer-col-links": "روابط مفيدة",
        "footer-col-contact": "اتصل بنا",
        "footer-rights": "© 2026 إسلامش أكاديمي. جميع الحقوق محفوظة.",
        "footer-privacy": "سياسة الخصوصية",
        "footer-terms": "شروط الخدمة"
    }
};

// --- App State Management ---
let currentLang = localStorage.getItem("islamischAkademischLang") || "de";
let isExitPopupShown = sessionStorage.getItem("islamischAkademischExitShown") === "true";
let isSlideCtaDismissed = sessionStorage.getItem("islamischAkademischCtaDismissed") === "true";

// --- DOM elements caching ---
const langBtnText = document.getElementById("langBtnText");
const langDropdown = document.getElementById("langDropdown");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const header = document.querySelector(".header");

// --- Translate Page ---
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem("islamischAkademischLang", lang);
    
    // Set text direction and lang attribute
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("lang", lang);
    
    if (lang === "ar") {
        htmlTag.setAttribute("dir", "rtl");
    } else {
        htmlTag.setAttribute("dir", "ltr");
    }

    // Set active language button style
    document.querySelectorAll(".lang-option").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update main Lang Switcher button text display
    const labelMap = { "de": "DE", "en": "EN", "ar": "العربية" };
    langBtnText.textContent = labelMap[lang];

    // Find and update all translatable DOM elements
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            const textContent = translations[lang][key];
            
            // Check if element is a form input placeholder
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "SELECT") {
                element.placeholder = textContent;
                // For select, if the first option is a placeholder
                if (element.tagName === "SELECT" && element.options[0] && element.options[0].value === "") {
                    element.options[0].textContent = textContent;
                }
            } else {
                element.innerHTML = textContent;
            }
        }
    });

    // Re-verify layouts and elements (like slider alignment) for RTL
    updateSliderPosition();
}

// --- Toggle Language Dropdown ---
function toggleLangDropdown(event) {
    event.stopPropagation();
    langDropdown.classList.toggle("show");
}

// Close dropdowns when clicking outside
window.addEventListener("click", () => {
    langDropdown.classList.remove("show");
});

// --- Menu Toggle (Mobile Menu Drawer) ---
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileNav.classList.toggle("open");
});

// Close mobile nav menu when a link is clicked
document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileNav.classList.remove("open");
    });
});

// --- Header Scroll Effect ---
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- Testimonials Slider Logic ---
const slider = document.getElementById("testimonialsSlider");
const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const dotsContainer = document.getElementById("sliderDots");

let currentSlide = 0;
const totalSlides = slides.length;

// Create navigation dots
slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("slider-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dot");

function updateSliderPosition() {
    const directionFactor = document.documentElement.getAttribute("dir") === "rtl" ? 1 : -1;
    const translateVal = currentSlide * 100 * directionFactor;
    slider.style.transform = `translateX(${translateVal}%)`;
    
    // Update dots state
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    updateSliderPosition();
}

nextBtn.addEventListener("click", () => {
    if (document.documentElement.getAttribute("dir") === "rtl") {
        goToSlide(currentSlide - 1);
    } else {
        goToSlide(currentSlide + 1);
    }
});

prevBtn.addEventListener("click", () => {
    if (document.documentElement.getAttribute("dir") === "rtl") {
        goToSlide(currentSlide + 1);
    } else {
        goToSlide(currentSlide - 1);
    }
});

// Swipe support for mobile
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    
    if (Math.abs(diff) > 50) { // Threshold for swipe
        if (diff > 0) {
            // Swiped left
            isRtl ? goToSlide(currentSlide - 1) : goToSlide(currentSlide + 1);
        } else {
            // Swiped right
            isRtl ? goToSlide(currentSlide + 1) : goToSlide(currentSlide - 1);
        }
    }
}, { passive: true });

// --- FAQ Accordion Logic ---
document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");
        
        // Close all other accordion items
        document.querySelectorAll(".faq-item").forEach(el => {
            el.classList.remove("active");
            el.querySelector(".faq-content").style.maxHeight = null;
        });

        // Toggle selected item
        if (!isActive) {
            item.classList.add("active");
            const content = item.querySelector(".faq-content");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// --- Learning Journey Timeline Progress highlights ---
const journeySteps = document.querySelectorAll(".journey-step");

function checkJourneyScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    journeySteps.forEach((step, idx) => {
        const stepTop = step.getBoundingClientRect().top;
        
        if (stepTop < triggerBottom) {
            // Remove active state from all and set on this one
            journeySteps.forEach(s => s.classList.remove("active"));
            step.classList.add("active");
        }
    });
}
window.addEventListener("scroll", checkJourneyScroll);

// --- Form Validation and Success State ---
const leadForm = document.getElementById("leadForm");
const formSuccess = document.getElementById("formSuccess");
const leadCard = document.getElementById("leadCard");

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function handleFormSubmit(e) {
    e.preventDefault();
    let isFormValid = true;

    // Validate inputs
    const requiredInputs = leadForm.querySelectorAll("[required]");
    requiredInputs.forEach(input => {
        const parent = input.parentElement;
        
        // Reset state
        parent.classList.remove("error");

        if (!input.value.trim()) {
            parent.classList.add("error");
            // Set translation key for error
            const errEl = parent.querySelector(".form-error-msg");
            errEl.setAttribute("data-i18n", "form-required-err");
            errEl.textContent = translations[currentLang]["form-required-err"];
            isFormValid = false;
        } else if (input.type === "email" && !validateEmail(input.value)) {
            parent.classList.add("error");
            const errEl = parent.querySelector(".form-error-msg");
            errEl.setAttribute("data-i18n", "form-email-err");
            errEl.textContent = translations[currentLang]["form-email-err"];
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Collect form data
        const formData = new FormData(leadForm);
        const data = Object.fromEntries(formData.entries());
        console.log("Quran Academy Application Submitted:", data);
        
        // Hide form and display premium success message
        leadForm.style.display = "none";
        formSuccess.classList.add("show");
        
        // Scroll slightly to ensure success is in view
        leadCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // Lead conversion pixel tags / analytics triggers would go here
        if (window.fbq) fbq('track', 'Lead');
        if (window.gtag) gtag('event', 'generate_lead', { 'value': 1.0, 'currency': 'EUR' });
    }
}

leadForm.addEventListener("submit", handleFormSubmit);

// Reset form and show input fields again on button click (for demonstration/repeat applications)
document.getElementById("btnSuccessReset").addEventListener("click", () => {
    leadForm.reset();
    leadForm.style.display = "block";
    formSuccess.classList.remove("show");
});

// --- Smart Lead Capture: Scroll-based Banner CTA ---
const slideCtaBanner = document.getElementById("slideCtaBanner");
const mobileStickyCta = document.getElementById("mobileStickyCta");
const closeSlideCta = document.getElementById("closeSlideCta");

closeSlideCta.addEventListener("click", (e) => {
    e.stopPropagation();
    slideCtaBanner.classList.remove("show");
    isSlideCtaDismissed = true;
    sessionStorage.setItem("islamischAkademischCtaDismissed", "true");
});

window.addEventListener("scroll", () => {
    // Total document height
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercent = (window.scrollY / docHeight) * 100;
    
    // Show Slide-up CTA banner on desktop/mobile after 60% scroll if not dismissed
    if (scrolledPercent > 60 && !isSlideCtaDismissed) {
        slideCtaBanner.classList.add("show");
    } else {
        slideCtaBanner.classList.remove("show");
    }

    // Show mobile sticky CTA when scrolling past the hero (scrollY > 600)
    if (window.scrollY > 600) {
        mobileStickyCta.classList.add("show");
    } else {
        mobileStickyCta.classList.remove("show");
    }
});

// --- Smart Lead Capture: Exit-Intent Popup ---
const exitModal = document.getElementById("exitModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalActionBtn = document.getElementById("modalActionBtn");

function showExitPopup() {
    if (!isExitPopupShown) {
        exitModal.classList.add("show");
        isExitPopupShown = true;
        sessionStorage.setItem("islamischAkademischExitShown", "true");
    }
}

// Desktop: Mouse out of top window boundary
document.addEventListener("mouseleave", (e) => {
    if (e.clientY < 20) {
        showExitPopup();
    }
});

// Mobile: Back button intercept or quick scroll activity would ideally trigger this.
// For mobile fallback: Trigger exit intent if user remains on page for 45s without applying,
// or if they scroll up fast.
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop && lastScrollTop - st > 80 && st > 300) {
        // Fast scroll up
        showExitPopup();
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, { passive: true });

// Close exit popup handlers
closeModalBtn.addEventListener("click", () => {
    exitModal.classList.remove("show");
});

exitModal.addEventListener("click", (e) => {
    if (e.target === exitModal) {
        exitModal.classList.remove("show");
    }
});

// Direct CTA actions scroll to lead form
function scrollToForm() {
    exitModal.classList.remove("show");
    slideCtaBanner.classList.remove("show");
    document.getElementById("leadFormSection").scrollIntoView({ behavior: "smooth" });
}

modalActionBtn.addEventListener("click", scrollToForm);

// Bind all page CTAs to smooth-scroll to the registration section
document.querySelectorAll(".cta-scroll-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToForm();
    });
});

// --- App Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Setup initial translation
    translatePage(currentLang);
    
    // Bind dropdown options
    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const selectedLang = btn.getAttribute("data-lang");
            translatePage(selectedLang);
        });
    });

    // Check timeline heights
    setTimeout(checkJourneyScroll, 200);
});
