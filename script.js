// Authentication state - in a real app, this would come from your backend
let isAuthenticated = false;
let currentLanguage = 'en'; // Track current language for dynamic content

// Translation dictionary
const translations = {
    en: {
        home: "Home",
        services: "Services",
        help: "Help",
        register: "Register",
        login: "Login",
        logout: "Logout",
        profile: "Profile",
        settings: "Settings",
        guide: "Guide",
        myTickets: "My Tickets",
        language: "Language",
        heroTitle: "Empowering Your Public Services",
        heroSubtitle: "Access, Manage, and Connect with Ease.",
        getStarted: "Get Started",
        learnMore: "Learn More",
        whatItDoes: "What it Does",
        whatItDoesDesc: "Unifies various government services into one accessible platform",
        benefits: "Benefits",
        benefitsDesc: "Reduces bureaucracy, saves time, and increases transparency",
        howItWorks: "How it Works",
        howItWorksDesc: "Simple registration, secure login, and intuitive service management",
        registerAccount: "Register for an Account",
        loginAccount: "Login to Your Account",
        ctaText: "Join us and experience simplified public services",
        aboutUs: "About Us",
        aboutSubtitle: "Learn more about our mission, vision, and commitment to serving citizens",
        ourMission: "Our Mission",
        ourVision: "Our Vision",
        whyChooseUs: "Why Choose Us",
        contactUs: "Contact Us",
        contactSubtitle: "Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.",
        fullNameLabel: "Full Name",
        emailLabel: "Email Address",
        messageLabel: "Message",
        sendMessage: "Send Message",
        getInTouch: "Get in Touch",
        reachOut: "Feel free to reach out to us through any of the channels below.",
        supportEmail: "Support Email",
        phoneNumber: "Phone Number",
        officeAddress: "Office Address",
        followUs: "Follow Us",
        subject: "Subject",
        generalInquiry: "General Inquiry",
        technicalSupport: "Technical Support",
        feedback: "Feedback",
        complaint: "Complaint",
        other: "Other",
        selectSubject: "Select a subject",
        officeHours: "Office Hours",
        ourValues: "Our Values",
        innovation: "Innovation",
        innovationDesc: "We build smart, scalable, and efficient queue solutions",
        integrity: "Integrity",
        integrityDesc: "We ensure transparency, fairness, and reliability in service management",
        efficiency: "Efficiency",
        efficiencyDesc: "We optimize waiting times and service flow using digital automation",
        aboutTitle: "ABOUT US",
        aboutDesc1: "The Queue Management System is designed to reduce long waiting lines in government offices, hospitals, banks, and service centers by offering digital ticketing, real-time queue tracking, analytics, and service optimization tools.",
        aboutDesc2: "We are committed to improving service delivery through technology, ensuring efficiency, transparency, and enhanced customer satisfaction across all public and private service sectors.",
        visionTitle: "Our Vision",
        visionDesc: "To digitize and modernize public service queues across institutions",
        teamTitle: "Meet the Team",
        teamDesc: "A passionate team of developers building efficient digital solutions",
        achievementsTitle: "Our Achievements",
        achievementsDesc: "Successfully reducing waiting times through smart queue automation",
        historyTitle: "Company History",
        historyDesc: "Founded to solve long waiting line challenges using technology",
        mainOffice: "Main Office",
        businessInquiries: "Business Inquiries",
        sendUsMessage: "Send us a Message",
        organization: "Organization",
        message: "Message",
        contactDesc: "Helping you manage queues efficiently and digitally.",
        contactInfo: "The Queue Management System helps government offices, hospitals, banks, and service centers reduce waiting times and improve service delivery through digital queue management.",
        generateTicket: "Generate Ticket",
        trackTicket: "Track Ticket",
        digitalTicket: "Digital Ticket Generation",
        digitalTicketDesc: "Online queue numbers via SMS/Email.",
        realTimeTracking: "Real-Time Queue Tracking",
        realTimeTrackingDesc: "Live updates and monitoring from anywhere.",
        estimatedWait: "Estimated Waiting Time",
        estimatedWaitDesc: "Accurate wait durations to help plan visits.",
        adminDashboard: "Admin Dashboard",
        adminDashboardDesc: "Monitor queues and manage counters in real-time.",
        step1: "Select Service",
        step1Desc: "Choose the service you need",
        step2: "Generate Queue Number",
        step2Desc: "Get your digital ticket",
        step3: "Monitor Position Online",
        step3Desc: "Track your position remotely",
        step4: "Receive Smart Notifications",
        step4Desc: "Get alerts when it's your turn",
        coreFeatures: "Core Features",
        howItWorksTitle: "How It Works",
        smartDigitalQueue: "Smart Digital Queue Management System",
        manageEfficiently: "Manage customers efficiently, reduce waiting chaos, and improve service experience.",
        noTickets: "No tickets generated yet",
        generateToSee: "Generate a ticket to see it here",
        ticketNumber: "Ticket",
        service: "Service",
        status: "Status",
        position: "Position",
        waitTime: "Wait Time",
        peopleAhead: "People Ahead",
        waiting: "Waiting",
        serving: "Serving",
        completed: "Completed",
        printTicket: "Print",
        downloadTicket: "Download",
        qrCode: "QR Code",
        confirmTicket: "Confirm Ticket",
        selectedService: "Selected Service",
        currentTicket: "Current Ticket Being Served",
        preview: "Ticket Preview",
        generating: "Generating your ticket...",
        close: "Close",
        refresh: "Refresh",
        share: "Share",
        queueProgress: "Queue Progress",
        positionsAway: "You are",
        positionsAwayFrom: "positions away from being served",
        lastUpdated: "Last updated",
        justNow: "Just now",
        notificationChanged: "Your ticket status has changed to SERVING!",
        loginTitle: "Login to Your Account",
        loginSubtitle: "Welcome back! Please enter your details.",
        emailPlaceholder: "Enter your email",
        passwordPlaceholder: "Enter your password",
        forgotPassword: "Forgot Password?",
        loginButton: "Sign in",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        registerTitle: "Create Your Account",
        registerSubtitle: "Join us today and start managing queues digitally.",
        confirmPassword: "Confirm Password",
        registerButton: "Create Account",
        haveAccount: "Already have an account?",
        signIn: "Sign in",
        profileTitle: "Profile",
        accountInfo: "Account Information",
        memberSince: "Member Since",
        security: "Security",
        changePassword: "Change Password",
        changePasswordDesc: "Update your password regularly for better security",
        logoutButton: "Logout",
        logoutDesc: "Sign out from your account",
        myGeneratedTickets: "My Generated Tickets",
        noTicketsGenerated: "No tickets generated yet",
        generateToSeeHere: "Generate a ticket to see it here",
        trackTicketBtn: "Track Ticket"
    },
    am: {
        home: "ቤት",
        services: "ግልጋሎቶች",
        help: "እገዛ",
        register: "መመዝገብ",
        login: "መግባት",
        logout: "መውጣት",
        profile: "መገለጫ",
        settings: "ቅንብሮች",
        guide: "መመሪያ",
        myTickets: "የእኔ ቲኬቶች",
        language: "ቋንቋ",
        heroTitle: "የህዝብ አገልግሎቶችን ማስተዳደር",
        heroSubtitle: "ለመዳረሻ፣ ለማስተዳደር እና ለመገናኘት ቀላል።",
        getStarted: "ጀምር",
        learnMore: "ተጨማሪ መረጃ",
        whatItDoes: "ምን ይሰራል",
        whatItDoesDesc: "የተለያዩ የመንግስት አገልግሎቶችን ወደ አንድ መድረክ ያዋህዳል",
        benefits: "ጥቅሞች",
        benefitsDesc: "የቢሮክራሲን ይቀንሳል፣ ጊዜ ይቆጥባል እና ግልጽነትን ይጨምራል",
        howItWorks: "እንዴት ይሰራል",
        howItWorksDesc: "ቀላል የመዝገብ ሂደት፣ ደህንነቱ የተጠበቀ መግቢያ እና ቀላል የአገልግሎት አስተዳደር",
        registerAccount: "መለያ ይመዝገቡ",
        loginAccount: "መለያዎን ይግቡ",
        ctaText: "ከእኛ ጋር ይቀላቀሉ እና ቀላል የህዝብ አገልግሎቶችን ያግኙ",
        aboutUs: "ስለ እኛ",
        aboutSubtitle: "ስለ ተልእኮ፣ ራዕይ እና ለዜጎች አገልግሎት ያለንን ቁርጠኝነት ይወቁ",
        ourMission: "ተልእኮአችን",
        ourVision: "ራዕያችን",
        whyChooseUs: "ለምን እኛን መምረጥ አለብዎት",
        contactUs: "አግኙን",
        contactSubtitle: "ጥያቄዎች ወይም አስተያየቶች አሉዎት? እኛን ያግኙን በቅርቡ እንመልስልዎታለን።",
        fullNameLabel: "ሙሉ ስም",
        emailLabel: "ኢሜይል አድራሻ",
        messageLabel: "መልእክት",
        sendMessage: "መልእክት ላክ",
        getInTouch: "አግኙን",
        reachOut: "ከታች ካሉት መንገዶች በማንኛውም እኛን ለማግኘት ነፃነት ይሰማዎት።",
        supportEmail: "የድጋፍ ኢሜይል",
        phoneNumber: "ስልክ ቁጥር",
        officeAddress: "የቢሮ አድራሻ",
        followUs: "ያከትሉን",
        subject: "ርዕስ",
        generalInquiry: "አጠቃላይ ጥያቄ",
        technicalSupport: "ቴክኒካዊ ድጋፍ",
        feedback: "ግብረመልስ",
        complaint: "ቅሬታ",
        other: "ሌላ",
        selectSubject: "ርዕስ ይምረጡ",
        officeHours: "የቢሮ ሰዓቶች",
        ourValues: "እሴቶቻችን",
        innovation: "ፈጠራ",
        innovationDesc: "ብልህ፣ ሊሰፋ የሚችል እና ቀላል የሪጋ መፍትሄዎችን እንገነባለን",
        integrity: "ታማኝነት",
        integrityDesc: "በአገልግሎት አስተዳደር ግልጽነት፣ ፍትሃዊነት እና ተአማኒነትን እናረጋግጣለን",
        efficiency: "ቅልጥፍና",
        efficiencyDesc: "የመጠባበቂያ ጊዜን እና የአገልግሎት ፍሰትን በዲጂታል አውቶሜሽን እናሻሽላለን",
        aboutTitle: "ስለ እኛ",
        aboutDesc1: "የሪጋ አስተዳደር ስርዓቱ በመንግስት ጽህፈት ቤቶች፣ ሆስፒታሎች፣ ባንኮች እና የአገልግሎት ማዕከላት ውስጥ ረጅም የመጠባበቂያ ሰፍሮችን ለመቀነስ የተነደፈ ነው።",
        aboutDesc2: "በቴክኖሎጂ አማካኝነት የአገልግሎት አሰጣጥን ማሻሻል፣ ቅልጥፍናን፣ ግልጽነትን እና የደንበኞች እርካታን ማረጋገጥ ቁርጠኞች ነን።",
        visionTitle: "ራዕያችን",
        visionDesc: "በተቋማት ውስጥ የህዝብ አገልግሎት ሪጋዎችን ዲጂታል ማድረግ እና ዘመናዊ ማድረግ",
        teamTitle: "ቡድኑን ያግኙ",
        teamDesc: "ቀላል የዲጂታል መፍትሄዎችን የሚገነቡ ቀናተኛ የገንቢዎች ቡድን",
        achievementsTitle: "ስኬቶቻችን",
        achievementsDesc: "በብልህ የሪጋ አውቶሜሽን የመጠባበቂያ ጊዜን በተሳካ ሁኔታ መቀነስ",
        historyTitle: "የኩባንያ ታሪክ",
        historyDesc: "የተመሰረተው ረጅም የመጠባበቂያ ሰፍር ስርጭቶችን በቴክኖሎጂ ለመፍታት ነው",
        mainOffice: "ዋና ቢሮ",
        businessInquiries: "የንግድ ጥያቄዎች",
        sendUsMessage: "መልእክት ላክልን",
        organization: "ድርጅት",
        message: "መልእክት",
        contactDesc: "ሪጋዎችን በቅልጥፍና እና በዲጂታል እንዲያስተዳድሩ እንረዳዎታለን።",
        contactInfo: "የሪጋ አስተዳደር ስርዓቱ በመንግስት ጽህፈት ቤቶች፣ ሆስፒታሎች፣ ባንኮች እና የአገልግሎት ማዕከላት ውስጥ የመጠባበቂያ ጊዜን ለመቀነስ እና የአገልግሎት አሰጣጥን ለማሻሻል ይረዳል።",
        generateTicket: "ቲኬት አውጣ",
        trackTicket: "ቲኬትን ተከታተል",
        digitalTicket: "ዲጂታል ቲኬት ማውጫ",
        digitalTicketDesc: "በኤስኤምኤስ/ኢሜይል የሪጋ ቁጥሮች።",
        realTimeTracking: "በቅጽበት የሪጋ ክትትል",
        realTimeTrackingDesc: "ከየትኛውም ቦታ ቀጥተኛ ዝመናዎች እና ክትትል።",
        estimatedWait: "የተገመተ የመጠባበቂያ ጊዜ",
        estimatedWaitDesc: "ጉብኝቶችን ለመቅደት ትክክለኛ የመጠባበቂያ ጊዜዎች።",
        adminDashboard: "የአስተዳዳሪ ዳሽቦርድ",
        adminDashboardDesc: "ሪጋዎችን ይከታተሉ እና ቆጣሪዎችን በቅጽበት ያስተዳድሩ።",
        step1: "አገልግሎት ይምረጡ",
        step1Desc: "የሚያስፈልግዎትን አገልግሎት ይምረጡ",
        step2: "የሪጋ ቁጥር አውጡ",
        step2Desc: "ዲጂታል ቲኬትዎን ያግኙ",
        step3: "ቦታዎን በመስመር ይከታተሉ",
        step3Desc: "ቦታዎን ርቀው ይከታተሉ",
        step4: "ብልህ ማሳወቂያዎችን ይቀበሉ",
        step4Desc: "ወራዎት ሲደርስ ማሳወቂያዎችን ያግኙ",
        coreFeatures: "ዋና ዋና ባህሪያት",
        howItWorksTitle: "እንዴት ይሰራል",
        smartDigitalQueue: "ብልህ ዲጂታል የሪጋ አስተዳደር ስርዓት",
        manageEfficiently: "ደንበኞችን በቅልጥፍና ያስተዳድሩ፣ የመጠባበቂያ ስርዓትን ይቀንሱ እና የአገልግሎት ልምድን ያሻሽሉ።",
        noTickets: "ምንም ቲኬቶች አልተወጡም",
        generateToSee: "ቲኬት አውጥተው እዚህ ለማየት",
        ticketNumber: "ቲኬት",
        service: "አገልግሎት",
        status: "ሁኔታ",
        position: "ቦታ",
        waitTime: "የመጠባበቂያ ጊዜ",
        peopleAhead: "ከፊትዎ ያሉ ሰዎች",
        waiting: "በመጠባበቅ ላይ",
        serving: "በአገልግሎት ላይ",
        completed: "ተጠናቋል",
        printTicket: "አትም",
        downloadTicket: "አውርድ",
        qrCode: "ኪው አር ኮድ",
        confirmTicket: "ቲኬቱን አረጋግጥ",
        selectedService: "የተመረጠ አገልግሎት",
        currentTicket: "አሁን የሚያገለግል ቲኬት",
        preview: "የቲኬት ቅድመ እይታ",
        generating: "ቲኬትዎን በማውጣት ላይ...",
        close: "ዝጋ",
        refresh: "አድስ",
        share: "አጋራ",
        queueProgress: "የሪጋ እድገት",
        positionsAway: "ከ",
        positionsAwayFrom: "ቦታዎች ርቀው ነዎት",
        lastUpdated: "መጨረሻ የተዘመነ",
        justNow: "አሁን ብቻ",
        notificationChanged: "የቲኬትዎ ሁኔታ ወደ አገልግሎት ላይ ተቀይሯል!",
        loginTitle: "መለያዎን ይግቡ",
        loginSubtitle: "እንኳን ደህና መጡ! የእርስዎን ዝርዝሮች ያስገቡ።",
        emailPlaceholder: "ኢሜይልዎን ያስገቡ",
        passwordPlaceholder: "የይለፍ ቃልዎን ያስገቡ",
        forgotPassword: "የይለፍ ቃልዎን ረስተዋል?",
        loginButton: "ግባ",
        noAccount: "መለያ የለዎትም?",
        signUp: "ተመዝገብ",
        registerTitle: "መለያዎን ይፍጠሩ",
        registerSubtitle: "ዛሬ ይቀላቀሉን እና ሪጋዎችን በዲጂታል ማስተዳደር ይጀምሩ።",
        confirmPassword: "የይለፍ ቃል ያረጋግጡ",
        registerButton: "መለያ ይፍጠሩ",
        haveAccount: "መለያ አለዎት?",
        signIn: "ግባ",
        profileTitle: "መገለጫ",
        accountInfo: "የመለያ መረጃ",
        memberSince: "አባል ከሆኑበት",
        security: "ደህንነት",
        changePassword: "የይለፍ ቃል ይቀይሩ",
        changePasswordDesc: "ለተሻለ ደህንነት የይለፍ ቃልዎን በተደጋጋሚ ያዘምኑ",
        logoutButton: "ውጣ",
        logoutDesc: "ከመለያዎ ይውጡ",
        myGeneratedTickets: "የተወጡ ቲኬቶቼ",
        noTicketsGenerated: "ምንም ቲኬቶች አልተወጡም",
        generateToSeeHere: "ቲኬት አውጥተው እዚህ ለማየት",
        trackTicketBtn: "ቲኬትን ተከታተል"
    }
};

// Desktop Language Switcher Functions (globally accessible)
function toggleDesktopLanguage() {
    const dropdown = document.getElementById('desktopLangDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function selectLanguage(lang) {
    // Update the displayed language
    const langText = document.getElementById('desktopLangText');
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }

    // Update current language global variable
    currentLanguage = lang;

    // Store selected language
    localStorage.setItem('selectedLanguage', lang);

    // Apply translations
    applyTranslations(lang);

    // Close dropdown
    const dropdown = document.getElementById('desktopLangDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language switcher and navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication state on page load
    checkAuthStateOnLoad();

    // Initialize language on page load
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    currentLanguage = savedLang; // Set global current language
    const langText = document.getElementById('desktopLangText');
    if (langText) {
        langText.textContent = savedLang.toUpperCase();
    }
    if (typeof translations !== 'undefined') {
        applyTranslations(savedLang);
    }

    // Language switcher functionality
    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    // Only initialize language switcher if elements exist
    if (langButton && langDropdown && langOptions.length > 0) {
        // Load saved language from localStorage or default to English
        let currentLang = localStorage.getItem('selectedLanguage') || 'en';
        updateLanguage(currentLang);

        // Toggle dropdown when button is clicked
        langButton.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('show');
            }
        });

        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                updateLanguage(selectedLang);
                applyTranslations(selectedLang);

                // Update button text to show selected language abbreviation
                langButton.textContent = this.textContent.split('(')[1].split(')')[0];

                // Also update mobile language button if it exists
                const mobileLangButton = document.getElementById('mobile-lang-button');
                if (mobileLangButton) {
                    mobileLangButton.textContent = 'Language: ' + this.textContent.split('(')[0].trim();
                }

                // Save selected language to localStorage
                localStorage.setItem('selectedLanguage', selectedLang);

                // Close dropdown after selection
                langDropdown.classList.remove('show');

                // Also close mobile dropdown if it exists
                const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
                if (mobileLangDropdown) {
                    mobileLangDropdown.classList.remove('show');
                }
            });
        });
    }

    // Mobile language switcher functionality
    const mobileLangButton = document.getElementById('mobile-lang-button');
    const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
    const mobileLangOptions = document.querySelectorAll('.mobile-language .lang-option');

    if (mobileLangButton && mobileLangDropdown && mobileLangOptions.length > 0) {
        mobileLangButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent closing the mobile menu
            mobileLangDropdown.classList.toggle('show');
        });

        // Close mobile language dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileLangButton && !mobileLangButton.contains(e.target) &&
                mobileLangDropdown && !mobileLangDropdown.contains(e.target)) {
                mobileLangDropdown.classList.remove('show');
            }
        });

        // Handle mobile language selection
        mobileLangOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                updateLanguage(selectedLang);
                applyTranslations(selectedLang);

                // Update mobile button text
                mobileLangButton.textContent = 'Language: ' + this.textContent.split('(')[0].trim();

                // Also update desktop language button
                if (langButton) {
                    langButton.textContent = this.textContent.split('(')[1].split(')')[0]; // Get abbreviation
                }

                // Save selected language to localStorage
                localStorage.setItem('selectedLanguage', selectedLang);

                // Close dropdown after selection
                mobileLangDropdown.classList.remove('show');

                // Also close desktop dropdown
                if (langDropdown) {
                    langDropdown.classList.remove('show');
                }
            });
        });
    }

    // Navbar dropdown functionality
    setupNavbarDropdowns();

    // Mobile menu functionality
    setupMobileMenu();

    // Authentication state management
    updateAuthState();

    // Function to update all text elements with translations
    function updateLanguage(langCode) {
        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[langCode] && translations[langCode][key]) {
                element.textContent = translations[langCode][key];
            }
        });

        // Update button text to show selected language abbreviation
        const langAbbr = getLanguageAbbreviation(langCode);
        langButton.textContent = langAbbr;
    }

    // Helper function to get language abbreviation
    function getLanguageAbbreviation(langCode) {
        const langMap = {
            'en': 'EN',
            'or': 'OR',
            'am': 'AM'
        };
        return langMap[langCode] || 'EN';
    }

    // Setup dropdown menus for navbar
    function setupNavbarDropdowns() {
        // Dropdown trigger (arrow icon)
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        const dropdownContent = document.querySelector('.dropdown .dropdown-content');
        
        if (dropdownTrigger && dropdownContent) {
            dropdownTrigger.addEventListener('click', function(e) {
                e.preventDefault();
                dropdownContent.classList.toggle('show');
            });
        }

        // User profile dropdown
        const userDropdownBtn = document.querySelector('.user-btn');
        const userDropdownContent = document.querySelector('.user-dropdown .user-dropdown-content');
        
        if (userDropdownBtn && userDropdownContent) {
            userDropdownBtn.addEventListener('click', function(e) {
                e.preventDefault();
                userDropdownContent.classList.toggle('show');
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (dropdownTrigger && !dropdownTrigger.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
            
            if (userDropdownBtn && !userDropdownBtn.contains(e.target) && !userDropdownContent.contains(e.target)) {
                userDropdownContent.classList.remove('show');
            }
        });
    }

    // Setup mobile menu functionality
    function setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('show');
                // Animate hamburger
                this.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('show');
                    hamburger.classList.remove('active');
                }
            });
        }
    }

    // Check authentication state on page load
    function checkAuthStateOnLoad() {
        // In a real app, this would check for stored tokens or session info
        // For now, we'll simulate checking if user is logged in
        isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    }

    // Update authentication state in UI
    function updateAuthState() {
        const authenticatedContent = document.querySelector('.authenticated-content');
        const guestContent = document.querySelector('.guest-content');
        const authButtons = document.getElementById('authButtons');
        const userProfile = document.getElementById('userProfile');
        const mobileAuth = document.getElementById('mobileAuth');
        const mobileProfile = document.querySelector('.mobile-profile');
        const mobileLogout = document.querySelector('.mobile-logout');

        if (isAuthenticated) {
            // Show authenticated elements
            if (authenticatedContent) authenticatedContent.style.display = 'block';
            if (guestContent) guestContent.style.display = 'none';
            if (authButtons) authButtons.style.display = 'none';
            if (userProfile) userProfile.style.display = 'block';
            if (mobileAuth) mobileAuth.style.display = 'none';
            if (mobileProfile) mobileProfile.style.display = 'block';
            if (mobileLogout) mobileLogout.style.display = 'block';
        } else {
            // Show guest elements
            if (authenticatedContent) authenticatedContent.style.display = 'none';
            if (guestContent) guestContent.style.display = 'block';
            if (authButtons) authButtons.style.display = 'flex';
            if (userProfile) userProfile.style.display = 'none';
            if (mobileAuth) mobileAuth.style.display = 'flex';
            if (mobileProfile) mobileProfile.style.display = 'none';
            if (mobileLogout) mobileLogout.style.display = 'none';
        }

        // Add event listeners to logout buttons
        const logoutButtons = document.querySelectorAll('.logout-link');
        logoutButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });
        });
    }

    // Placeholder logout function
    function handleLogout() {
        // In a real app, this would clear tokens and redirect
        isAuthenticated = false;
        localStorage.removeItem('isLoggedIn'); // Clear login state
        updateAuthState();
        alert('Logged out successfully!');
        // Redirect to home page
        window.location.href = 'index.html';
    }

    // Handle login event (this would be called from login page)
    window.handleLoginSuccess = function() {
        isAuthenticated = true;
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        updateAuthState();
    };
});

// Close language dropdown when clicking outside (global listener)
document.addEventListener('click', function(event) {
    const desktopSwitcher = document.querySelector('.language-switcher-desktop');
    const desktopDropdown = document.getElementById('desktopLangDropdown');
    const mobileSwitcher = document.querySelector('.language-switcher');
    const mobileDropdown = document.getElementById('mobile-lang-dropdown');

    if (desktopSwitcher && !desktopSwitcher.contains(event.target)) {
        if (desktopDropdown) desktopDropdown.classList.remove('show');
    }
    if (mobileSwitcher && !mobileSwitcher.contains(event.target)) {
        if (mobileDropdown) mobileDropdown.classList.remove('show');
    }
});