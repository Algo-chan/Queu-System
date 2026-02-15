// Authentication state - in a real app, this would come from your backend
let isAuthenticated = false;

// Translation dictionary
const translations = {
    en: {
        home: "Home",
        services: "Services",
        help: "Help",
        register: "Register",
        login: "Login",
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
        officeHours: "Office Hours"
    },
    or: {
        home: "Mana",
        services: "Galfaawwanii",
        help: "Gargaara",
        register: "Galmaa'uu",
        login: "Seeni",
        heroTitle: "Oromoo Mana Barbaachisaan Keessaa Danda'a",
        heroSubtitle: "Barbaada, Ittiisummaa fi Walitti Dhufaa.",
        getStarted: "Jalqabi",
        learnMore: "Dabalataan Baradhu",
        whatItDoes: "Maal Gargaara",
        whatItDoesDesc: "Seera barbaachisaalee adda addaa tokkootti walitti qabama",
        benefits: "Faayidaan",
        benefitsDesc: "Burookiraasiin xinnaata, gammadiin ni guddata, fi dubbifannoonni dabalata",
        howItWorks: "Maaliin Danda'a",
        howItWorksDesc: "Galmaa'uu sirrii, seenuu dandeettii fi gavvii barbaachisaalee beekumsa ta'an",
        registerAccount: "Hariiroo Barbaadami",
        loginAccount: "Hariiroo Seenu",
        ctaText: "Nu waliin galchi fi seera barbaachisaa salphinaan argadhu",
        aboutUs: "Warshaa",
        aboutSubtitle: "Sirna keenya, rakkoo keenya fi dhiifama keenya gadi fakki",
        ourMission: "Sirna keenya",
        ourVision: "Rakkoo keenya",
        whyChooseUs: "Maaliif nu filachuu qabdu",
        contactUs: "Nu qunnami",
        contactSubtitle: "Gaqoomaafi deebii barbaadda? Nu qunnamaa jiruun nu geessi kun arratti nu deebisnu.",
        fullNameLabel: "Maqaa Sirrii",
        emailLabel: "Imeelii Adreesii",
        messageLabel: "Eerree",
        sendMessage: "Eerree Ergadi",
        getInTouch: "Qunnamaa Jiru",
        reachOut: "Garaagarummaan armaan gadii irratti nu qunnamaa jirtuuf nu geessaa dandeenyu.",
        supportEmail: "Duub-deebii Kolffee",
        phoneNumber: "Lakkoofsa Qunnamaa",
        officeAddress: "Adreesii Bilbiilaa",
        followUs: "Nu Beeqi",
        subject: "Gocca",
        generalInquiry: "Baraabarruu Dacheeffannoo",
        technicalSupport: "Deega Biiftuu",
        feedback: "Hubachiisa",
        complaint: "Haqama",
        other: "Afaan Biroo",
        selectSubject: "Gocca filadhu",
        officeHours: "Sa'eetota Bilbiilaa"
    },
    am: {
        home: "ቤት",
        services: "ግልጋሎቶች",
        help: "እገዛ",
        register: "መዝገብ",
        login: "ግባ",
        heroTitle: "የህዝብ አገልግሎቶን ትኩረት ማድረግ",
        heroSubtitle: "ለመዳረሻ፣ ለማስተዳደር እና ለመገናኘት ቀላል።",
        getStarted: "ምሩ",
        learnMore: "ተጨማሪ መረጃ",
        whatItDoes: "ምን ይሰራል",
        whatItDoesDesc: "የተለያዩ የዘርፍ አገልግሎቶችን ወደ አንድ ተደራሽ መድረክ ያዋሃዳል",
        benefits: "ተከታታዮች",
        benefitsDesc: "የቢሮክራሲያዊነትን ብዛት ይቀንሳል፣ ጊዜ ይቆጥባል እና የግልጽነት መጠን ይጨምራል",
        howItWorks: "እንዴት ይሰራል",
        howItWorksDesc: "ቀላል የመዝገብ ሂደት፣ የሚረዳ ግቢ እና የአገልግሎት አስተዳደር በቀላሉ",
        registerAccount: "መለያ ይመዝገቡ",
        loginAccount: "መለያዎን ይግቡ",
        ctaText: "ከእኛ ጋር ይቀላቀሉ እና የቀላሉ የህዝብ አገልግሎቶችን ያግኙ",
        aboutUs: "ስለ እኛ",
        aboutSubtitle: "ስለ ሚኞን፣ ህልምና እና ለመስዋዕት መስረታችን ይወቁ",
        ourMission: "ሚኞን ማድረግ",
        ourVision: "ህልመት",
        whyChooseUs: "ምክን ነው እኛን የምታመርባለህ",
        contactUs: "አግኙን",
        contactSubtitle: "ጥያቄዎች ወይም አስተያየቶች አሉዎት? እኛን ያግኙ እና በቅርቡ ይመልሱልን.",
        fullNameLabel: "ሙሉ ስም",
        emailLabel: "ኢሜል አድራሻ",
        messageLabel: "መልእክት",
        sendMessage: "መልእክት ላክ",
        getInTouch: "አግኙን",
        reachOut: "ከታች ያሉትን መንገዶች በማናቸውም እኛን ለመገናኘት ነፃነት ይፈልጉ.",
        supportEmail: "የድጋፍ ኢሜል",
        phoneNumber: "ስልክ ቁጥር",
        officeAddress: "የቢሮ አድራሻ",
        followUs: "ያድኑን",
        subject: "ርዕስ",
        generalInquiry: "አጠቃላይ ጥያቄ",
        technicalSupport: "ቴክኒካዊ ድጋፍ",
        feedback: "ግብረመልስ",
        complaint: "አዝርባረት",
        other: "ሌላ",
        selectSubject: "ርዕስ ይምረጡ",
        officeHours: "የቢሮ ሰዓቶች"
    }
};

// Initialize language switcher and navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication state on page load
    checkAuthStateOnLoad();
    
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

                // Update button text to show selected language abbreviation
                langButton.textContent = this.textContent.split('(')[1].split(')')[0];

                // Save selected language to localStorage
                localStorage.setItem('selectedLanguage', selectedLang);

                // Close dropdown after selection
                langDropdown.classList.remove('show');
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