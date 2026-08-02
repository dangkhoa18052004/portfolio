/* ==========================================================================
   PORTFOLIO INTERACTIVE & I18N SCRIPT - ĐẶNG VĂN KHOA
   ========================================================================== */

// --- Translation Dictionary (VI & EN) ---
const translations = {
  vi: {
    // Header & Nav
    nav_about: "Về Tôi",
    nav_skills: "Kỹ Năng",
    nav_projects: "Dự Án",
    nav_experience: "Kinh Nghiệm",
    nav_education: "Học Vấn",
    nav_contact: "Liên Hệ",
    btn_download_cv: "Tải CV",

    // Hero Section
    hero_badge: "Sẵn sàng nhận vị trí Thực Tập Sinh",
    hero_greeting: "Xin chào, tôi là",
    hero_title: "Đặng Văn Khoa",
    hero_role: "Thực Tập Sinh Phát Triển Phần Mềm",
    hero_subtitle: "Lập trình viên Full-Stack & Backend đầy nhiệt huyết, chuyên môn về Python Flask, ReactJS, PostgreSQL, RESTful API và thuật toán AI gợi ý.",
    hero_cta_projects: "Khám Phá Dự Án",
    hero_cta_contact: "Liên Hệ Ngay",

    // About Section
    about_tag: "TỔNG QUAN",
    about_title: "Giới Thiệu Bản Thân",
    about_text_1: "Tôi là sinh viên năm 4 ngành Kỹ thuật Phần mềm tại Đại học Tài nguyên và Môi trường TP. Hồ Chí Minh (2022 - 04/2027, dự kiến tốt nghiệp), có kinh nghiệm thực tế trong việc thiết kế và phát triển ứng dụng Full-stack, các dịch vụ Backend chuẩn RESTful API và các hệ thống hỗ trợ quyết định thông minh bằng Python Flask & PostgreSQL.",
    about_text_2: "Mong muốn ứng dụng kiến thức chuyên môn về thiết kế CSDL, xác thực JWT, lập trình ứng dụng di động Flutter và xây dựng giao diện responsive để đóng góp giá trị cho các dự án phần mềm thực tế.",
    stat_projects: "Dự Án Hoàn Thành",
    stat_experience: "Tháng Thực Tập",
    stat_tech: "Công Nghệ Sử Dụng",
    stat_passion: "Đam Mê Học Hỏi",

    // Skills Section
    skills_tag: "CHUYÊN MÔN",
    skills_title: "Kỹ Năng & Công Nghệ",
    skills_desc: "Tập hợp các công nghệ và công cụ lập trình tôi sử dụng thành thạo trong phát triển phần mềm.",
    cat_languages: "Ngôn Ngữ Lập Trình",
    cat_backend: "Backend & API",
    cat_database: "Cơ Sở Dữ Liệu",
    cat_frontend: "Frontend & UI",
    cat_tools: "Công Cụ & Môi Trường",
    cat_softskills: "Kỹ Năng Mềm",

    // Soft Skills Tags
    skill_problem_solving: "Giải quyết vấn đề",
    skill_teamwork: "Làm việc nhóm",
    skill_self_learning: "Tự học & Nghiên cứu",
    skill_communication: "Giao tiếp hiệu quả",
    skill_time_management: "Quản lý thời gian",

    // Projects Section
    projects_tag: "SẢN PHẨM",
    projects_title: "Dự Án Nổi Bật",
    projects_desc: "Các hệ thống tiêu biểu tôi đã phát triển bao gồm Web AI Gợi ý, Hệ thống Quản lý SPA và App Đặt lịch Khám bệnh.",
    filter_all: "Tất Cả",
    filter_fullstack: "Full-Stack",
    filter_backend: "Backend & Mobile",
    filter_ai: "AI & Data",
    btn_demo: "Live Demo",
    btn_github: "Mã Nguồn",
    btn_details: "Chi Tiết",

    // Project Details
    p1_title: "AI Laptop Recommendation System",
    p1_role: "Full-stack Developer | 2025",
    p1_desc: "Hệ thống tư vấn và gợi ý laptop thông minh ứng dụng phương pháp Phân tích Thứ bậc Analytic Hierarchy Process (AHP) giúp cá nhân hóa kết quả theo nhu cầu người dùng.",

    p2_title: "SPA Management System",
    p2_role: "Full-stack Developer | 2026",
    p2_desc: "Hệ thống quản lý SPA toàn diện hỗ trợ đặt lịch hẹn trực tuyến, quản lý thông tin khách hàng, dịch vụ, hóa đơn và nhắn tin tư vấn thời gian thực.",

    p3_title: "Medical Appointment Booking System (DLKB)",
    p3_role: "Backend & Mobile Developer | 2026",
    p3_desc: "Ứng dụng di động Flutter & RESTful API Flask hỗ trợ bệnh nhân tìm kiếm bác sĩ, đặt lịch khám trực tuyến, quản lý ca khám và thanh toán tiện lợi.",

    // Experience & Education
    exp_tag: "HÀNH TRÌNH",
    exp_title: "Kinh Nghiệm & Học Vấn",
    timeline_work: "Kinh Nghiệm Làm Việc",
    timeline_edu: "Học Vấn & Bằng Cấp",
    work_role_1: "Thực Tập Sinh Phần Mềm",
    work_company_1: "Automation Land (04/2026 - 06/2026)",
    work_bullet_1: "Thực hiện kiểm thử chức năng, giao diện, hồi quy và API cơ bản theo yêu cầu dự án.",
    work_bullet_2: "Thiết kế test case, ghi nhận lỗi (bugs), xác minh bản sửa lỗi và phối hợp chặt chẽ với đội ngũ phát triển.",

    edu_degree: "Sinh viên năm 4 - Ngành Kỹ thuật Phần mềm",
    edu_school: "Đại học Tài nguyên và Môi trường TP. Hồ Chí Minh",
    edu_years: "2022 - 04/2027 (Dự kiến tốt nghiệp)",
    edu_desc: "Đào tạo bài bản về tư duy thuật toán, thiết kế hệ thống phần mềm, cơ sở dữ liệu và quy trình phát triển Agile/Scrum.",

    // Contact Section
    contact_tag: "KẾT NỐI",
    contact_title: "Liên Hệ Với Tôi",
    contact_desc: "Tôi luôn sẵn sàng trao đổi về cơ hội thực tập, công việc hoặc hợp tác phát triển dự án.",
    contact_phone: "Số Điện Thoại",
    contact_email: "Địa Chỉ Email",
    contact_location: "Vị Trí Rất Thuận Tiện",
    contact_github: "Trang GitHub",
    btn_copy: "Sao chép",
    copied_toast: "Đã sao chép vào bộ nhớ tạm!",

    form_name: "Họ và Tên",
    form_email: "Email của bạn",
    form_subject: "Tiêu đề",
    form_message: "Nội dung tin nhắn",
    btn_send: "Gửi Tin Nhắn",
    form_success: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.",
    contact_presets_title: "Mẫu tin nhắn nhanh cho Nhà Tuyển Dụng:",
    preset_interview: "Mời Phỏng Vấn",
    preset_job: "Cơ Hội Việc Làm",
    preset_transcript: "Yêu Cầu Hồ Sơ",

    // Certifications Section
    cert_tag: "CHỨNG NHẬN",
    cert_title: "Bằng Cấp & Chứng Chỉ",
    cert_desc: "Các chứng nhận chuyên môn, quá trình thực tập và thành tích học tập đạt được.",
    cert1_name: "Chứng Nhận Thực Tập Sinh Phần Mềm",
    cert1_desc: "Hoàn thành xuất sắc kỳ thực tập phát triển & kiểm thử phần mềm, thiết kế test case, kiểm thử API và xác minh sửa lỗi tại Automation Land.",
    cert2_name: "Cử Nhân Kỹ Thuật Phần Mềm",
    cert2_desc: "Chuyên ngành Kỹ thuật Phần mềm tại ĐH Tài nguyên và Môi trường TP.HCM, làm chủ kiến trúc Full-stack, thiết kế CSDL, thuật toán và quy trình phần mềm.",
    cert3_name: "Python Flask Microservices & JWT",
    cert3_desc: "Thành thạo xây dựng RESTful API chuẩn hóa, xác thực phân quyền JWT, mã hóa Bcrypt và kiến trúc Blueprint Flask.",
    cert4_name: "PostgreSQL & Relational Database Design",
    cert4_desc: "Thiết kế lược đồ quan hệ, tối ưu câu lệnh SQL, quản lý giao dịch ACID và tích hợp ORM SQLAlchemy.",

    // GitHub & Stats
    github_status: "🟢 Sẵn sàng nhận vị trí Thực Tập Sinh",
    stat_commits: "GitHub Commits",
    stat_loc: "Dòng Code Viết",
    stat_repos: "Repositories",
    stat_clean_code: "Clean Code & Git Flow",
    lang_dist: "Phân bổ ngôn ngữ lập trình chính",

    // Footer
    footer_text: "© 2026 Đặng Văn Khoa. Xây dựng với tâm huyết và công nghệ Web hiện đại.",

    // CV Selection Modal
    cv_modal_title: "Chọn Bản CV Đặng Văn Khoa",
    cv_modal_subtitle: "Tùy chọn phiên bản ngôn ngữ CV bạn muốn xem hoặc tải về",
    cv_vi_title: "CV Tiếng Việt",
    cv_vi_sub: "Bản Tiếng Việt",
    cv_vi_desc: "Hồ sơ năng lực lập trình phần mềm chi tiết bằng Tiếng Việt (PDF)",
    cv_en_title: "English Resume",
    cv_en_sub: "Bản Tiếng Anh",
    cv_en_desc: "Full professional software developer resume in English (PDF)",
    cv_view: "Xem Online",
    cv_download: "Tải Về"
  },

  en: {
    // Header & Nav
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    btn_download_cv: "Download CV",

    // Hero Section
    hero_badge: "Open for Software Developer Internship",
    hero_greeting: "Hello, I'm",
    hero_title: "Dang Van Khoa",
    hero_role: "Software Engineering Intern",
    hero_subtitle: "Passionate Full-Stack & Backend Developer specializing in Python Flask, ReactJS, PostgreSQL, RESTful APIs, and AI recommendation algorithms.",
    hero_cta_projects: "Explore Projects",
    hero_cta_contact: "Get In Touch",

    // About Section
    about_tag: "OVERVIEW",
    about_title: "About Me",
    about_text_1: "I am a 4th-year Software Engineering student at Ho Chi Minh City University of Natural Resources and Environment (2022 - 04/2027, expected graduation), with hands-on experience in building Full-stack web applications, RESTful Backend services, and recommendation systems using Python Flask & PostgreSQL.",
    about_text_2: "Eager to apply strong foundations in database design, JWT authentication, Flutter mobile app development, and responsive UI engineering to deliver real-world software solutions.",
    stat_projects: "Completed Projects",
    stat_experience: "Months Internship",
    stat_tech: "Technologies Used",
    stat_passion: "Learning Passion",

    // Skills Section
    skills_tag: "EXPERTISE",
    skills_title: "Skills & Tech Stack",
    skills_desc: "A comprehensive set of programming languages, frameworks, and developer tools I actively use.",
    cat_languages: "Programming Languages",
    cat_backend: "Backend & API Services",
    cat_database: "Databases",
    cat_frontend: "Frontend & UI Design",
    cat_tools: "Tools & Environment",
    cat_softskills: "Soft Skills",

    // Soft Skills Tags
    skill_problem_solving: "Problem Solving",
    skill_teamwork: "Teamwork & Collaboration",
    skill_self_learning: "Self-learning & Research",
    skill_communication: "Communication",
    skill_time_management: "Time Management",

    // Projects Section
    projects_tag: "PORTFOLIO",
    projects_title: "Featured Projects",
    projects_desc: "Key software solutions I built, including AI Laptop Recommender, SPA Management Web, and Healthcare Booking App.",
    filter_all: "All",
    filter_fullstack: "Full-Stack",
    filter_backend: "Backend & Mobile",
    filter_ai: "AI & Data",
    btn_demo: "Live Demo",
    btn_github: "Source Code",
    btn_details: "Details",

    // Project Details
    p1_title: "AI Laptop Recommendation System",
    p1_role: "Full-stack Developer | 2025",
    p1_desc: "An intelligent laptop recommendation web app using Analytic Hierarchy Process (AHP) decision scoring to deliver personalized recommendations based on CPU, RAM, GPU, price, and usage needs.",

    p2_title: "SPA Management System",
    p2_role: "Full-stack Developer | 2026",
    p2_desc: "Comprehensive SPA management web platform featuring customer scheduling, service management, invoicing, real-time messaging, and admin dashboard.",

    p3_title: "Medical Appointment Booking System (DLKB)",
    p3_role: "Backend & Mobile Developer | 2026",
    p3_desc: "Multi-role mobile application (Flutter) & modular Flask REST API platform for patients, doctors, and admins with JWT auth, online appointment booking, and notifications.",

    // Experience & Education
    exp_tag: "JOURNEY",
    exp_title: "Experience & Education",
    timeline_work: "Work Experience",
    timeline_edu: "Education & Degree",
    work_role_1: "Software Engineering Intern",
    work_company_1: "Automation Land (04/2026 - 06/2026)",
    work_bullet_1: "Executed functional, UI, regression, and API testing per project requirements.",
    work_bullet_2: "Designed test cases, logged bugs, verified fixes, and collaborated closely with the software engineering team.",

    edu_degree: "4th-Year Software Engineering Student",
    edu_school: "Ho Chi Minh City University of Natural Resources and Environment",
    edu_years: "2022 - 04/2027 (Expected Graduation)",
    edu_desc: "Rigorous coursework in software architecture, database design, algorithms, web development, and Agile/Scrum practices.",

    // Contact Section
    contact_tag: "CONNECT",
    contact_title: "Contact Me",
    contact_desc: "Feel free to reach out for internship opportunities, job offers, or project collaborations.",
    contact_phone: "Phone Number",
    contact_email: "Email Address",
    contact_location: "Location",
    contact_github: "GitHub Profile",
    btn_copy: "Copy",
    copied_toast: "Copied to clipboard!",

    form_name: "Full Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    btn_send: "Send Message",
    form_success: "Thank you! Your message has been sent successfully.",
    contact_presets_title: "Quick Message Presets for Recruiters:",
    preset_interview: "Interview Offer",
    preset_job: "Job Opportunity",
    preset_transcript: "Request Resume & Transcript",

    // Certifications Section
    cert_tag: "CERTIFICATIONS",
    cert_title: "Certificates & Achievements",
    cert_desc: "Verified credentials, internship experience, and academic accomplishments.",
    cert1_name: "Software Engineering Intern Certificate",
    cert1_desc: "Successfully completed software testing & development internship, test case design, API verification, and bug tracking at Automation Land.",
    cert2_name: "B.S. Software Engineering Candidate",
    cert2_desc: "Software Engineering major at HCMUNRE, mastering full-stack architecture, relational database design, algorithms, and Agile workflows.",
    cert3_name: "Python Flask Microservices & JWT",
    cert3_desc: "Proficient in building standardized RESTful APIs, JWT role-based auth, password encryption, and modular Flask Blueprints.",
    cert4_name: "PostgreSQL & Relational Database Design",
    cert4_desc: "Relational schema design, SQL query optimization, ACID transaction management, and SQLAlchemy ORM integration.",

    // GitHub & Stats
    github_status: "🟢 Open for Software Intern Role",
    stat_commits: "GitHub Commits",
    stat_loc: "Lines of Code Written",
    stat_repos: "Repositories",
    stat_clean_code: "Clean Code & Git Flow",
    lang_dist: "Primary Language Distribution",

    // Footer
    footer_text: "© 2026 Dang Van Khoa. Crafted with care and modern web standards.",

    // CV Selection Modal
    cv_modal_title: "Select Resume Version",
    cv_modal_subtitle: "Choose your preferred language version to view or download",
    cv_vi_title: "Vietnamese Resume",
    cv_vi_sub: "Vietnamese Version",
    cv_vi_desc: "Detailed software development resume in Vietnamese (PDF)",
    cv_en_title: "English Resume",
    cv_en_sub: "English Version",
    cv_en_desc: "Full professional software developer resume in English (PDF)",
    cv_view: "View Online",
    cv_download: "Download"
  }
};

// --- State Management ---
let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

// --- Initialize Page & Animations ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initHeaderScroll();
  initProjectFilters();
  initContactForm();
  initMobileMenu();

  // Modern Animation Modules (Phase 1 & Phase 2)
  initScrollProgress();
  initScrollReveal();
  initTypingEffect();
  initParticleCanvas();
  initStatsCounter();
  init3DTilt();

  // Phase 2 Visual Upgrades
  initCustomCursor();
  initCardSpotlight();
  initSkillProgress();
  initProjectHoverSlideshow();
  initBackToTop();

  // Phase 3 Advanced Visual Effects & Developer Features
  initTimeGreeting();
  initMagneticButtons();
  initCommandPalette();
  initAudioFX();
  initSkillHighlighting();

  // Phase 4 CLI Developer Terminal Engine
  initCLITerminal();

  // CV Interactive Spotlight & Particle Burst Effects
  initCVCardSpotlight();
});

// --- Language Switcher ---
function initLanguage() {
  setLanguage(currentLang);
  
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update text content for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      elem.placeholder = translations[lang][key];
    }
  });

  if (typeof initTimeGreeting === 'function') {
    initTimeGreeting();
  }
}

// --- Theme Switcher (Dark / Light) ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('portfolio_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const icon = document.querySelector('#themeToggle i');
  if (icon) {
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// --- Header Scroll Effect ---
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Mobile Navigation Drawer ---
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

// --- Project Filter Tabs ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

// --- Copy to Clipboard Toast Helper ---
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(translations[currentLang].copied_toast || 'Copied!');
    if (typeof playSound === 'function') playSound('success');
  }).catch(err => {
    console.error('Copy failed', err);
  });
}

// --- Recruiter Quick Message Presets Helper ---
function applyContactPreset(type) {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const subjectInput = form.querySelector('input[name="_subject"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  if (!subjectInput || !messageInput) return;

  const isVi = currentLang === 'vi';

  if (type === 'interview') {
    subjectInput.value = isVi ? "Mời phỏng vấn vị trí Thực tập sinh Phần mềm (Software Intern)" : "Invitation to Interview for Software Engineering Intern";
    messageInput.value = isVi ?
      "Chào bạn Đặng Văn Khoa,\n\nChúng tôi đã xem qua Portfolio của bạn và rất ấn tượng với năng lực lập trình Python Flask, ReactJS và PostgreSQL. Chúng tôi muốn mời bạn tham gia buổi phỏng vấn vị trí Thực tập sinh Phát triển Phần mềm tại công ty.\n\nVui lòng phản hồi Email này hoặc liên hệ lại với chúng tôi nhé!" :
      "Hello Dang Van Khoa,\n\nWe reviewed your Portfolio and are very impressed with your Python Flask, ReactJS, and PostgreSQL skills. We would like to invite you for an interview for the Software Engineering Intern position.\n\nPlease reply to this email or get back to us at your earliest convenience!";
  } else if (type === 'job') {
    subjectInput.value = isVi ? "Trao đổi cơ hội tuyển dụng & hợp tác phát triển dự án" : "Job & Project Collaboration Opportunity";
    messageInput.value = isVi ?
      "Chào Khoa,\n\nMình đại diện cho đội ngũ kỹ thuật muốn trao đổi với bạn về một số cơ hội công việc và dự án phát triển Web Full-Stack / Backend. Bạn có thể cho mình xin thời gian thuận tiện để trao đổi thêm không?" :
      "Hello Khoa,\n\nI am representing our tech team and would like to discuss potential Full-Stack / Backend developer opportunities and project collaborations with you. When would be a good time to connect?";
  } else if (type === 'transcript') {
    subjectInput.value = isVi ? "Yêu cầu cung cấp thêm Bảng điểm & Hồ sơ cá nhân" : "Request for Academic Transcript & Further Profile Details";
    messageInput.value = isVi ?
      "Chào Đặng Văn Khoa,\n\nPhòng Tuyển dụng muốn xin thêm thông tin Bảng điểm quá trình học tập tại HCMUNRE và các bằng cấp liên quan của bạn để hoàn thiện hồ sơ ứng tuyển.\n\nCảm ơn bạn!" :
      "Hello Dang Van Khoa,\n\nOur HR department would like to request your academic transcript from HCMUNRE and relevant certifications to finalize your application profile.\n\nThank you!";
  }

  subjectInput.focus();
  showToast(isVi ? '✨ Đã tự động điền mẫu tin nhắn!' : '✨ Preset message applied!');
  if (typeof playSound === 'function') playSound('success');
  if (typeof triggerParticleBurst === 'function') {
    triggerParticleBurst({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--primary-accent);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// --- Interactive Project Modal Popup with Gallery & Deep Technical Details ---
const projectData = {
  p1: {
    title: "AI Laptop Recommendation System",
    role: "Full-stack Developer | Python Flask, ReactJS, PostgreSQL",
    demoUrl: "https://analytic-hierarchy-process-one.vercel.app",
    githubUrl: "https://github.com/dangkhoa18052004/LAPTOP_1.git",
    backendUrl: "https://laptop-db.onrender.com",
    gallery: [
      "./assets/Laptop2026-07-30 171949 (2).png",
      "./assets/Laptop2026-07-30 171949 (4).png",
      "./assets/Laptop2026-07-30 171949 (9).png",
      "./assets/Laptop2026-07-30 171949 (1).png",
      "./assets/Laptop2026-07-30 171949 (3).png"
    ],
    techPills: ["Python 3", "Flask", "ReactJS (Vite)", "PostgreSQL", "AHP Algorithm", "Scikit-Learn", "Tailwind CSS", "Neon.tech Cloud DB", "Render", "Vercel"],
    architectureNodes: [
      { icon: "fa-sliders-h", titleVi: "1. Nhập Tiêu Chí", titleEn: "1. Input Criteria", descVi: "Chọn ưu tiên Giá, CPU, RAM, GPU", descEn: "Set Price, CPU, RAM, GPU weights" },
      { icon: "fa-calculator", titleVi: "2. Thuật Toán AHP", titleEn: "2. AHP Engine", descVi: "Ma trận so sánh & CR < 0.1", descEn: "Pairwise matrix & CR < 0.1 check" },
      { icon: "fa-brain", titleVi: "3. AI Scoring", titleEn: "3. AI Scoring", descVi: "Scikit-Learn / Numpy ranking", descEn: "Vectorized score calculation" },
      { icon: "fa-database", titleVi: "4. PostgreSQL DB", titleEn: "4. PostgreSQL DB", descVi: "Truy vấn danh mục laptop Cloud", descEn: "Query cloud specs dataset" },
      { icon: "fa-list-ol", titleVi: "5. Kết Quả Gợi Ý", titleEn: "5. Ranked Results", descVi: "Hiển thị danh sách xếp hạng", descEn: "Personalized recommendation list" }
    ],
    vi: {
      summary: "Ứng dụng web thông minh giúp người dùng lựa chọn laptop tối ưu nhất bằng cách kết hợp thuật toán Phân tích Thứ bậc Analytic Hierarchy Process (AHP) với các mô hình Trí tuệ Nhân tạo (AI) cá nhân hóa.",
      objective: "Giải quyết bài toán đắn đo của người mua khi đứng trước hàng trăm mẫu laptop trên thị trường. Hệ thống chuẩn hóa các thông số kỹ thuật phức tạp (CPU, RAM, GPU, Ổ cứng, Trọng lượng, Mức giá) thành bộ chỉ số điểm phù hợp chính xác với nhu cầu học tập, làm việc, gaming hoặc thiết kế đồ họa.",
      modules: [
        "<strong>Thuật toán Phân tích Thứ bậc (AHP):</strong> Xây dựng ma trận so sánh cặp (Pairwise Comparison Matrix), kiểm tra chỉ số nhất quán Consistency Ratio (CR < 0.1) để tính trọng số đa tiêu chí theo sở thích người dùng.",
        "<strong>Chấm điểm & Gợi ý cá nhân hóa:</strong> Sử dụng thư viện Numpy/Pandas/Scikit-Learn tính toán ma trận điểm cho từng dòng laptop, xếp hạng danh sách đề xuất từ cao xuống thấp.",
        "<strong>Hệ thống Quản trị Admin:</strong> Cung cấp bảng điều khiển quản lý danh mục Laptop, Thương hiệu, Chức năng và hỗ trợ nạp dữ liệu hàng loạt từ file Excel.",
        "<strong>Hệ thống RESTful API & Cloud Database:</strong> Xây dựng backend Flask chuẩn RESTful API, kết nối Cơ sở dữ liệu Cloud PostgreSQL tại Neon.tech, deploy tự động trên Render & Vercel."
      ],
      architecture: "Frontend xây dựng với ReactJS (Vite) + Tailwind CSS, giao tiếp qua Axios API với Backend Python Flask. Dữ liệu được lưu trữ trên PostgreSQL Cloud (Neon.tech)."
    },
    en: {
      summary: "An intelligent web application helping users select the ideal laptop by combining the Analytic Hierarchy Process (AHP) multi-criteria decision algorithm with personalized AI scoring models.",
      objective: "Solves the decision-making bottleneck for buyers faced with hundreds of laptop configurations. The system standardizes technical specs (CPU, RAM, GPU, Storage, Weight, Price) into compatibility scores tailored to gaming, graphic design, software engineering, or office work.",
      modules: [
        "<strong>Analytic Hierarchy Process (AHP) Engine:</strong> Constructs pairwise comparison matrices and computes consistency ratio (CR < 0.1) to dynamically calculate criteria weights based on user preferences.",
        "<strong>Personalized AI Scoring:</strong> Leverages Numpy, Pandas, and Scikit-Learn to compute score matrices and rank recommended laptops in real-time.",
        "<strong>Admin Management System:</strong> Comprehensive dashboard for managing laptop models, brands, specs, and bulk importing dataset from Excel files.",
        "<strong>RESTful API & Cloud DB Architecture:</strong> Modular Flask RESTful APIs connected to Cloud PostgreSQL on Neon.tech, deployed seamlessly on Render and Vercel."
      ],
      architecture: "Frontend built with ReactJS (Vite) + Tailwind CSS, communicating via Axios REST APIs with Python Flask backend. Data persistence handled by PostgreSQL Cloud (Neon.tech)."
    }
  },

  p2: {
    title: "SPA Management System",
    role: "Full-stack Developer | Python Flask, JavaScript, PostgreSQL",
    demoUrl: "https://binspa.id.vn",
    githubUrl: "https://github.com/dangkhoa18052004/SPA.git",
    gallery: [
      "./assets/Spa2026-07-30 172033 (1).png",
      "./assets/Spa2026-07-30 172033 (2).png",
      "./assets/Spa2026-07-30 172033 (4).png",
      "./assets/Spa2026-07-30 172033 (11).png",
      "./assets/Spa2026-07-30 172033 (3).png"
    ],
    techPills: ["Python", "Flask", "PostgreSQL", "Flask-SQLAlchemy", "Flask-JWT-Extended", "Flask-Mail & Resend", "MoMo Payment API", "JavaScript ES6", "HTML5 & CSS3"],
    architectureNodes: [
      { icon: "fa-user-lock", titleVi: "1. JWT & Email OTP", titleEn: "1. JWT & Email Auth", descVi: "Phân quyền & OTP xác thực", descEn: "Role auth & OTP verification" },
      { icon: "fa-calendar-check", titleVi: "2. Slot Booking", titleEn: "2. Slot Booking", descVi: "Đặt lịch & chọn kỹ thuật viên", descEn: "Real-time slot reservation" },
      { icon: "fa-qrcode", titleVi: "3. MoMo Payment", titleEn: "3. MoMo Payment", descVi: "Thanh toán QR & Webhook IPN", descEn: "MoMo QR gateway & IPN" },
      { icon: "fa-comments", titleVi: "4. Live Chat", titleEn: "4. Live Chat", descVi: "Nhắn tin tư vấn thời gian thực", descEn: "Real-time customer support" },
      { icon: "fa-database", titleVi: "5. PostgreSQL DB", titleEn: "5. PostgreSQL DB", descVi: "Lưu lịch hẹn, hóa đơn & chat", descEn: "Persist bookings & invoices" }
    ],
    vi: {
      summary: "Nền tảng Web Application quản lý vận hành toàn diện cho trung tâm SPA, hỗ trợ số hóa toàn bộ quy trình từ đặt lịch, chăm sóc khách hàng, quản lý nhân sự đến thanh toán trực tuyến.",
      objective: "Số hóa và tối ưu hóa các nghiệp vụ vận hành spa hàng ngày: giúp khách hàng chủ động chọn dịch vụ và đặt lịch trực tuyến, nhân viên dễ dàng theo dõi ca làm việc, quản lý theo dõi doanh thu và hóa đơn theo thời gian thực.",
      modules: [
        "<strong>Xác thực & Phân quyền bảo mật:</strong> Đăng ký, đăng nhập xác thực bằng JWT Extended, mã hóa mật khẩu, kích hoạt tài khoản qua OTP Email (Flask-Mail & Resend).",
        "<strong>Đặt lịch hẹn trực tuyến:</strong> Khách hàng chọn dịch vụ, kỹ thuật viên và khung giờ làm việc còn rảnh. Hệ thống tự động gửi Email xác nhận lịch hẹn.",
        "<strong>Tích hợp Thanh toán MoMo Sandbox:</strong> Tạo mã QR thanh toán trực tuyến MoMo, xử lý Webhook IPN tự động cập nhật trạng thái hóa đơn.",
        "<strong>Nhắn tin & Chat thời gian thực:</strong> Hệ thống chat tương tác trực tiếp giữa khách hàng và nhân viên tư vấn, lưu vết lịch sử tin nhắn.",
        "<strong>Dashboard Thống kê & Quản lý:</strong> Quản lý bảng lương nhân viên, ca làm việc, thống kê doanh thu, trạng thái đặt lịch và tổng quan hoạt động kinh doanh."
      ],
      architecture: "Backend Flask tổ chức theo cấu trúc Application Package (routes, services, models), ORM Flask-SQLAlchemy kết nối PostgreSQL. Giao diện Jinja2 Templates kết hợp JavaScript ES6 và CSS3 responsive."
    },
    en: {
      summary: "An end-to-end SPA Management Web Platform digitizing daily operational workflows including customer booking, employee shift management, real-time consultation, and online payment processing.",
      objective: "Automates spa business operations: enables customers to browse services and book appointments 24/7, helps managers track employee payroll/shifts, and generates real-time financial dashboards.",
      modules: [
        "<strong>Security & Auth System:</strong> User registration, JWT-based authentication, password hashing, and account verification via Email OTP (Flask-Mail & Resend API).",
        "<strong>Online Service Booking:</strong> Interactive slot selection, staff assignment checks, and automated email appointment confirmations.",
        "<strong>MoMo Sandbox Payment Integration:</strong> Dynamic QR code generation, online payment gateways, and automated IPN webhook handling for instant status updates.",
        "<strong>Real-time Messaging & Chat:</strong> Direct consultation messaging between customers and spa support staff with read-status tracking.",
        "<strong>Management Dashboard & Analytics:</strong> Employee shift tracking, payroll calculation, revenue analytics, and overall business metrics reporting."
      ],
      architecture: "Backend Flask engineered with modular Package architecture (routes, services, models) using Flask-SQLAlchemy with PostgreSQL. Responsive Jinja2 Frontend powered by vanilla JS & modern CSS3."
    }
  },

  p3: {
    title: "Medical Appointment Booking System (DLKB)",
    role: "Backend & Mobile Developer | Flask, Flutter, PostgreSQL",
    demoUrl: null,
    githubUrl: "https://github.com/dangkhoa18052004/DLKB.git",
    gallery: [
      "./assets/project-medical.png"
    ],
    techPills: ["Flutter", "Dart", "Provider", "Dio / HTTP", "Flask REST API", "PostgreSQL", "Flask-JWT-Extended", "Flask-Bcrypt", "Syncfusion Charts", "QR Flutter"],
    architectureNodes: [
      { icon: "fa-mobile-alt", titleVi: "1. App Mobile Flutter", titleEn: "1. Flutter Mobile Client", descVi: "Provider State & Secure Store", descEn: "Provider State & Secure Storage" },
      { icon: "fa-user-shield", titleVi: "2. Bearer JWT Auth", titleEn: "2. Bearer JWT Auth", descVi: "Phân quyền Patient/Doctor/Admin", descEn: "Patient/Doctor/Admin Roles" },
      { icon: "fa-cubes", titleVi: "3. Flask Blueprints", titleEn: "3. Flask Blueprints", descVi: "RESTful APIs chuyên biệt", descEn: "Modular REST API Blueprints" },
      { icon: "fa-database", titleVi: "4. PostgreSQL DB", titleEn: "4. PostgreSQL DB", descVi: "SQLAlchemy ORM Data Engine", descEn: "SQLAlchemy ORM Data Persistence" },
      { icon: "fa-qrcode", titleVi: "5. Digital Pass QR", titleEn: "5. Digital Pass QR", descVi: "Tạo mã QR phiếu khám bệnh", descEn: "Dynamic Appointment QR Pass" }
    ],
    vi: {
      summary: "Hệ thống đặt lịch khám bệnh đa nền tảng kết hợp ứng dụng di động Flutter với hệ thống dịch vụ Backend RESTful API Flask và cơ sở dữ liệu PostgreSQL.",
      objective: "Số hóa quy trình đăng ký khám chữa bệnh tại các phòng khám/bệnh viện: giúp bệnh nhân tra cứu chuyên khoa, tìm bác sĩ phù hợp, chọn khung giờ còn trống và đăng ký lịch khám nhanh chóng, giảm thiểu thời gian chờ đợi.",
      modules: [
        "<strong>Phân quyền Đa vai trò (Multi-Role):</strong> Hỗ trợ 3 nhóm người dùng riêng biệt trên ứng dụng: Patient (Bệnh nhân), Doctor (Bác sĩ), và Admin (Quản trị viên) với hệ thống xác thực JWT Bearer Token.",
        "<strong>Ứng dụng di động Flutter (Frontend):</strong> Quản lý state bằng Provider, xử lý API bằng Dio/HTTP, bảo mật lưu trữ bằng Flutter Secure Storage, hiển thị lịch và mã QR khám bệnh.",
        "<strong>Kiến trúc Backend RESTful API (Flask):</strong> Chia nhỏ API thành các Blueprints chuyên biệt (auth, booking, patient, doctor, admin, payment, notifications, stats, search, reset-password).",
        "<strong>Quản lý Lịch khám & Thống kê:</strong> Bác sĩ theo dõi danh sách bệnh nhân đăng ký theo ngày, Admin quản lý danh mục chuyên khoa, tài khoản bác sĩ và thống kê ca khám."
      ],
      architecture: "Ứng dụng di động Flutter kết nối qua RESTful API với Flask Server. Backend xử lý dữ liệu với Flask-SQLAlchemy ORM trên cơ sở dữ liệu PostgreSQL."
    },
    en: {
      summary: "A cross-platform healthcare appointment booking system combining a Flutter Mobile App frontend with modular Flask RESTful APIs and PostgreSQL database backend.",
      objective: "Digitizes hospital appointment registration: allows patients to search medical specialties, find qualified doctors, view real-time available time slots, and confirm online bookings instantly.",
      modules: [
        "<strong>Multi-Role Authorization:</strong> Strict role-based access control supporting Patient, Doctor, and Admin personas using JWT Bearer Token authentication.",
        "<strong>Flutter Mobile Application:</strong> State management powered by Provider, network requests via Dio/HTTP, secure local storage, interactive calendar date pickers, and QR appointment passes.",
        "<strong>Modular Flask REST API Backend:</strong> Organized into modular Blueprints (auth, booking, patient, doctor, admin, payment, notifications, stats, search, reset-password).",
        "<strong>Doctor Schedule & Admin Portal:</strong> Real-time patient queues for doctors, specialty/doctor profile management, and appointment volume statistics."
      ],
      architecture: "Flutter cross-platform mobile client consuming JSON REST APIs served by Flask Python backend. Database persistence layer built with PostgreSQL and SQLAlchemy ORM."
    }
  }
};

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modalOverlay = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  const content = data[currentLang] || data['vi'];
  const isVi = currentLang === 'vi';

  // Build Gallery Thumbnails HTML if multiple images exist
  let galleryHtml = '';
  if (data.gallery && data.gallery.length > 0) {
    const mainImg = data.gallery[0];
    const thumbsHtml = data.gallery.map((imgSrc, idx) => `
      <div class="modal-thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeModalMainImage(this, '${imgSrc}')">
        <img src="${imgSrc}" alt="${data.title} screenshot ${idx + 1}">
      </div>
    `).join('');

    galleryHtml = `
      <div class="modal-gallery-main">
        <img id="modalMainImg" src="${mainImg}" alt="${data.title}">
      </div>
      ${data.gallery.length > 1 ? `<div class="modal-thumbs-grid">${thumbsHtml}</div>` : ''}
    `;
  }

  // Build Tech Pills HTML
  const techPillsHtml = data.techPills ? data.techPills.map(pill => `<span class="modal-tech-pill">${pill}</span>`).join('') : '';

  // Build Modules List HTML
  const modulesHtml = content.modules.map(mod => `<li>${mod}</li>`).join('');

  modalBody.innerHTML = `
    <h3>${data.title}</h3>
    <div class="modal-role">${data.role}</div>

    ${galleryHtml}

    <div class="modal-tech-pills">
      ${techPillsHtml}
    </div>

    <div class="modal-section-title">
      <i class="fas fa-bullseye"></i> ${isVi ? 'Tổng Quan & Mục Tiêu Dự Án' : 'Overview & Project Objective'}
    </div>
    <p class="modal-text"><strong>${isVi ? 'Tóm tắt:' : 'Summary:'}</strong> ${content.summary}</p>
    <p class="modal-text"><strong>${isVi ? 'Mục tiêu giải quyết:' : 'Problem Solved:'}</strong> ${content.objective}</p>

    <div class="modal-section-title">
      <i class="fas fa-cubes"></i> ${isVi ? 'Các Tính Năng & Module Chi Tiết' : 'Key Modules & Detailed Features'}
    </div>
    <ul class="modal-feature-list">
      ${modulesHtml}
    </ul>

    <div class="modal-section-title">
      <i class="fas fa-project-diagram"></i> ${isVi ? 'Kiến Trúc & Luồng Dữ Liệu Hệ Thống' : 'System Architecture & Data Flow'}
    </div>
    <p class="modal-text">${content.architecture}</p>

    <!-- Dynamic Architecture Diagram Flow Visualizer -->
    ${data.architectureNodes ? `
      <div class="arch-flow-container">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--primary-accent); margin-bottom: 0.75rem; text-transform: uppercase;">
          <i class="fas fa-sitemap"></i> ${isVi ? 'Sơ Đồ Dòng Chảy Dữ Liệu (Interactive Flow)' : 'Interactive Data Flow Diagram'}
        </div>
        <div class="arch-flow-grid">
          ${data.architectureNodes.map((node, i) => `
            <div class="arch-node">
              <div class="arch-node-icon"><i class="fas ${node.icon}"></i></div>
              <div class="arch-node-title">${isVi ? node.titleVi : node.titleEn}</div>
              <div class="arch-node-desc">${isVi ? node.descVi : node.descEn}</div>
            </div>
            ${i < data.architectureNodes.length - 1 ? `<div class="arch-arrow"><i class="fas fa-chevron-right"></i></div>` : ''}
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      ${data.demoUrl ? `
        <a href="${data.demoUrl}" target="_blank" class="btn btn-primary" style="padding: 0.65rem 1.4rem; font-size: 0.9rem;">
          <i class="fas fa-external-link-alt"></i> ${isVi ? 'Truy Cập Demo Website' : 'Visit Live Demo'}
        </a>
      ` : ''}
      ${data.githubUrl ? `
        <a href="${data.githubUrl}" target="_blank" class="btn btn-secondary" style="padding: 0.65rem 1.4rem; font-size: 0.9rem; border-color: var(--primary-accent); color: var(--text-main);">
          <i class="fab fa-github"></i> ${isVi ? 'Xem Mã Nguồn GitHub' : 'View GitHub Source Code'}
        </a>
      ` : ''}
    </div>
  `;

  modalOverlay.classList.add('active');
}

function changeModalMainImage(thumbElem, imgSrc) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = '1';
    }, 150);
  }

  document.querySelectorAll('.modal-thumb-item').forEach(item => item.classList.remove('active'));
  thumbElem.classList.add('active');
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

// --- Contact Form Handling (AJAX to Gmail via FormSubmit) ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.innerHTML;

      btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${currentLang === 'vi' ? 'Đang gửi...' : 'Sending...'}`;
      btn.disabled = true;

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData);

      // Check if running on local file system (file://)
      if (window.location.protocol === 'file:') {
        setTimeout(() => {
          btn.innerHTML = origText;
          btn.disabled = false;
          statusMsg.style.display = 'block';
          statusMsg.style.background = 'rgba(234, 179, 8, 0.15)';
          statusMsg.style.borderColor = '#eab308';
          statusMsg.style.color = '#eab308';
          
          const isVi = currentLang === 'vi';
          statusMsg.innerHTML = isVi 
            ? '<strong>Lưu ý:</strong> Khi xem file cục bộ trên máy (file://), dịch vụ mail tự động bị chặn bảo mật. Tính năng gửi mail sẽ <strong>tự động kích hoạt 100% khi bạn deploy trang web lên Vercel</strong>! Mở ứng dụng Email của bạn để gửi ngay...'
            : '<strong>Note:</strong> Browsing as a local file (file://) blocks direct API mail delivery. Email forwarding will <strong>work automatically once deployed to Vercel</strong>! Opening your email client...';

          // Open mailto fallback for local testing
          const subject = encodeURIComponent(dataObj._subject || 'Liên hệ từ Portfolio');
          const body = encodeURIComponent(`Họ tên: ${dataObj.name}\nEmail: ${dataObj.email}\n\nNội dung:\n${dataObj.message}`);
          window.location.href = `mailto:dangkhoa18052004qni@gmail.com?subject=${subject}&body=${body}`;

          form.reset();
        }, 1000);
        return;
      }

      // Online Web Server / Vercel Environment Submissions
      fetch('https://formsubmit.co/ajax/dangkhoa18052004qni@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataObj)
      })
      .then(response => response.json())
      .then(data => {
        btn.innerHTML = origText;
        btn.disabled = false;
        statusMsg.style.display = 'block';
        statusMsg.style.background = 'rgba(16, 185, 129, 0.15)';
        statusMsg.style.borderColor = '#10b981';
        statusMsg.style.color = '#10b981';
        statusMsg.textContent = translations[currentLang].form_success;
        form.reset();

        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 6000);
      })
      .catch(error => {
        statusMsg.textContent = currentLang === 'vi' ? 'Có lỗi xảy ra, vui lòng thử lại sau.' : 'An error occurred, please try again.';
      });
    });
  }
}

// ==========================================================================
// MODERN ANIMATION & INTERACTIVITY MODULES (60FPS ACCELERATED)
// ==========================================================================

// --- 1. Scroll Progress Bar ---
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) return;
    const progress = (window.scrollY / totalScroll) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

// --- 2. Scroll Reveal Animations (Intersection Observer) ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally unobserve to animate only once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(elem => revealObserver.observe(elem));
}

// --- 3. Dynamic Typing Effect (Bilingual) ---
const typingWords = {
  vi: [
    "Thực Tập Sinh Phát Triển Phần Mềm",
    "Lập Trình Viên Full-Stack & Backend",
    "Phát Triển RESTful API & PostgreSQL",
    "Phát Triển Python Flask & ReactJS"
  ],
  en: [
    "Software Engineering Intern",
    "Full-Stack & Backend Developer",
    "RESTful API & PostgreSQL Developer",
    "Python Flask & ReactJS Engineer"
  ]
};

let typingWordIdx = 0;
let typingCharIdx = 0;
let isDeleting = false;
let typingTimeout = null;

function initTypingEffect() {
  const targetElem = document.getElementById('typingRole');
  if (!targetElem) return;

  clearTimeout(typingTimeout);
  typeLoop();
}

function typeLoop() {
  const targetElem = document.getElementById('typingRole');
  if (!targetElem) return;

  const words = typingWords[currentLang] || typingWords['vi'];
  const currentWord = words[typingWordIdx % words.length];

  if (isDeleting) {
    typingCharIdx--;
    targetElem.textContent = currentWord.substring(0, typingCharIdx);
  } else {
    typingCharIdx++;
    targetElem.textContent = currentWord.substring(0, typingCharIdx);
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && typingCharIdx === currentWord.length) {
    delay = 2000; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && typingCharIdx === 0) {
    isDeleting = false;
    typingWordIdx++;
    delay = 500; // Pause before next word
  }

  typingTimeout = setTimeout(typeLoop, delay);
}

// Update typing words when language changes
const origSetLanguage = setLanguage;
setLanguage = function(lang) {
  origSetLanguage(lang);
  typingWordIdx = 0;
  typingCharIdx = 0;
  isDeleting = false;
  initTypingEffect();
};

// --- 4. Interactive Particle Canvas Background ---
function initParticleCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f2fe' : '#7f53ac';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = 0.4;
      ctx.fill();
    }
  }

  // Generate particles
  const count = Math.min(60, Math.floor((width * height) / 15000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#00f2fe';
          ctx.globalAlpha = (1 - dist / 130) * 0.15;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw active neural connection to mouse cursor
    if (mouse.x !== null && mouse.y !== null) {
      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius + 30) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#00f2fe';
          ctx.globalAlpha = (1 - dist / (mouse.radius + 30)) * 0.45;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- 5. Animated Stats Counter ---
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-count');
  if (!statNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1500; // ms
          const stepTime = 20;
          const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = count;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.about-stats');
  if (statsSection) observer.observe(statsSection);
}

// --- 6. 3D Tilt Card Effect ---
function init3DTilt() {
  // Disable on mobile/touch devices for performance
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 242, 254, 0.25)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.boxShadow = '';
    });
  });
}

// ==========================================================================
// PHASE 2 MODULES (CURSOR, SPOTLIGHT, SKILL BARS, HOVER SLIDESHOW, BACK-TO-TOP)
// ==========================================================================

// --- 7. Custom Glowing Pointer Cursor ---
function initCustomCursor() {
  // Disable on mobile/touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992) return;

  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Expand ring on interactive elements
  const interactiveElems = document.querySelectorAll('a, button, .project-card, .skill-category-card, .social-link, .stat-item');
  interactiveElems.forEach(elem => {
    elem.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    elem.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// --- 8. Card Spotlight Tracking Glow ---
function initCardSpotlight() {
  const spotlightCards = document.querySelectorAll('.spotlight-card');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// --- 9. Skill Progress Fill Animation ---
function initSkillProgress() {
  const progressFills = document.querySelectorAll('.skill-progress-fill');
  if (!progressFills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.getAttribute('data-progress');
        if (targetWidth) {
          fill.style.width = targetWidth;
        }
      }
    });
  }, { threshold: 0.3 });

  progressFills.forEach(fill => observer.observe(fill));
}

// --- 10. Project Hover Image Slideshow ---
function initProjectHoverSlideshow() {
  const projectCards = document.querySelectorAll('.project-card');

  const extraImages = {
    p1: ['./assets/project-laptop.png', './assets/Laptop2026-07-30 171949 (2).png', './assets/Laptop2026-07-30 171949 (4).png'],
    p2: ['./assets/project-spa.png', './assets/Spa2026-07-30 172033 (1).png', './assets/Spa2026-07-30 172033 (11).png'],
    p3: ['./assets/project-medical.png']
  };

  projectCards.forEach((card, idx) => {
    const projKey = `p${idx + 1}`;
    const imgs = extraImages[projKey];
    if (!imgs || imgs.length <= 1) return;

    const imgWrapper = card.querySelector('.project-img-wrapper');
    const mainImg = card.querySelector('.project-img');
    if (!imgWrapper || !mainImg) return;

    let hoverInterval = null;
    let imgIdx = 0;

    card.addEventListener('mouseenter', () => {
      hoverInterval = setInterval(() => {
        imgIdx = (imgIdx + 1) % imgs.length;
        mainImg.style.opacity = '0.7';
        setTimeout(() => {
          mainImg.src = imgs[imgIdx];
          mainImg.style.opacity = '1';
        }, 150);
      }, 1400);
    });

    card.addEventListener('mouseleave', () => {
      clearInterval(hoverInterval);
      imgIdx = 0;
      mainImg.src = imgs[0];
      mainImg.style.opacity = '1';
    });
  });
}

// --- 11. Floating Back-To-Top Button with Radial Progress ---
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  const circle = document.getElementById('backToTopCircle');
  if (!btn || !circle) return;

  const circumference = 2 * Math.PI * 22; // r=22 -> ~138.2
  circle.style.strokeDasharray = `${circumference}`;

  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollCurrent = window.scrollY;

    if (scrollCurrent > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    if (scrollTotal > 0) {
      const scrollPercent = scrollCurrent / scrollTotal;
      const drawLength = circumference * (1 - scrollPercent);
      circle.style.strokeDashoffset = `${drawLength}`;
    }
  });
}

// ==========================================================================
// PHASE 3 MODULES (TIME GREETING, MAGNETIC BTNS, COMMAND PALETTE, AUDIO FX, SKILL MATCH)
// ==========================================================================

// --- 12. Real-time Dynamic Time Greeting ---
function initTimeGreeting() {
  const greetingPill = document.getElementById('timeGreetingPill');
  if (!greetingPill) return;

  const hour = new Date().getHours();
  let textVi = '';
  let textEn = '';

  if (hour >= 5 && hour < 12) {
    textVi = '🌅 Chào buổi sáng';
    textEn = '🌅 Good Morning';
  } else if (hour >= 12 && hour < 18) {
    textVi = '☀️ Chào buổi chiều';
    textEn = '☀️ Good Afternoon';
  } else {
    textVi = '🌙 Chào buổi tối';
    textEn = '🌙 Good Evening';
  }

  greetingPill.textContent = currentLang === 'vi' ? textVi : textEn;
}

// --- 13. Interactive Magnetic Button Effect ---
function initMagneticButtons() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992) return;

  const magElements = document.querySelectorAll('.btn, .btn-project, .btn-cv-header, .social-link, .cmd-k-trigger, .sound-toggle');

  magElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      elem.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    elem.addEventListener('mouseleave', () => {
      elem.style.transform = 'translate(0px, 0px)';
    });
  });
}

// --- 14. Synthesized Web Audio UI Sound FX ---
let audioCtx = null;
let soundEnabled = localStorage.getItem('portfolio_sound') === 'on';

function initAudioFX() {
  const soundBtn = document.getElementById('soundToggle');
  if (!soundBtn) return;

  updateSoundIcon();

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('portfolio_sound', soundEnabled ? 'on' : 'off');
    updateSoundIcon();
    if (soundEnabled) playSound('click');
  });

  // Attach sound listeners to interactive elements
  document.querySelectorAll('a, button, .project-card, .skill-tag, .nav-link, .filter-btn').forEach(elem => {
    elem.addEventListener('mouseenter', () => playSound('hover'));
    elem.addEventListener('click', () => playSound('click'));
  });
}

function updateSoundIcon() {
  const soundBtn = document.getElementById('soundToggle');
  if (!soundBtn) return;
  const icon = soundBtn.querySelector('i');
  if (soundEnabled) {
    soundBtn.classList.add('active-sound');
    if (icon) icon.className = 'fas fa-volume-up';
    soundBtn.title = currentLang === 'vi' ? 'Đã bật âm thanh' : 'Sound Enabled';
  } else {
    soundBtn.classList.remove('active-sound');
    if (icon) icon.className = 'fas fa-volume-mute';
    soundBtn.title = currentLang === 'vi' ? 'Bật/Tắt âm thanh' : 'Sound Muted';
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.04);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(280, now + 0.07);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'open') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (e) {
    // Silent fallback
  }
}

// --- 15. Command Palette (Ctrl + K / Cmd + K) ---
let cmdSelectedIdx = 0;
let cmdItemsList = [];

function initCommandPalette() {
  const triggerBtn = document.getElementById('cmdKTrigger');
  const overlay = document.getElementById('cmdOverlay');
  const input = document.getElementById('cmdInput');
  const resultsContainer = document.getElementById('cmdResults');

  if (!overlay || !input) return;

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openCmdPalette);
  }

  // Key combination listener
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    } else if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeCmdPalette();
    }
  });

  input.addEventListener('input', () => {
    renderCmdResults(input.value.trim().toLowerCase());
  });

  input.addEventListener('keydown', (e) => {
    const items = resultsContainer.querySelectorAll('.cmd-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      cmdSelectedIdx = (cmdSelectedIdx + 1) % items.length;
      updateCmdSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      cmdSelectedIdx = (cmdSelectedIdx - 1 + items.length) % items.length;
      updateCmdSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[cmdSelectedIdx]) {
        items[cmdSelectedIdx].click();
      }
    }
  });
}

function openCmdPalette() {
  const overlay = document.getElementById('cmdOverlay');
  const input = document.getElementById('cmdInput');
  if (!overlay || !input) return;

  overlay.classList.add('active');
  input.value = '';
  cmdSelectedIdx = 0;
  renderCmdResults('');
  setTimeout(() => input.focus(), 50);
}

function closeCmdPalette() {
  const overlay = document.getElementById('cmdOverlay');
  if (overlay) overlay.classList.remove('active');
}

// --- CV Selector Modal Logic & Visual Effects ---
function openCVModal() {
  const overlay = document.getElementById('cvModalOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  if (typeof playSound === 'function') playSound('click');
  initCVCardSpotlight();
}

function closeCVModal() {
  const overlay = document.getElementById('cvModalOverlay');
  if (overlay) overlay.classList.remove('active');
}

function initCVCardSpotlight() {
  const cards = document.querySelectorAll('.cv-card, .project-card, .cert-card, .skill-category-card, .about-card, .timeline-card');
  cards.forEach(card => {
    if (card.dataset.spotlightInit) return;
    card.dataset.spotlightInit = "true";
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  const actionBtns = document.querySelectorAll('.btn-cv-action, .btn-cv-header, .btn-copy, .btn-primary, .btn-secondary, .social-link, .filter-btn');
  actionBtns.forEach(btn => {
    if (btn.dataset.burstInit) return;
    btn.dataset.burstInit = "true";
    btn.addEventListener('click', (e) => {
      triggerParticleBurst(e);
      if (typeof playSound === 'function') playSound('click');
    });
  });
}

function triggerParticleBurst(e) {
  const x = e.clientX || window.innerWidth / 2;
  const y = e.clientY || window.innerHeight / 2;
  const particleCount = 18;
  const colors = ['#00f2fe', '#4facfe', '#10b981', '#ffffff', '#7f53ac'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'tech-particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 4;

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 70 + 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.boxShadow = `0 0 10px ${color}`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 850);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCVModal();
  }
});

function getCmdData() {
  const isVi = currentLang === 'vi';
  return [
    {
      group: isVi ? 'Điều Hướng Trực Tiếp' : 'Navigation',
      items: [
        { icon: 'fa-user', title: isVi ? 'Giới Thiệu Bản Thân (#about)' : 'About Me (#about)', action: () => scrollToSection('#about') },
        { icon: 'fa-code', title: isVi ? 'Kỹ Năng & Công Nghệ (#skills)' : 'Skills & Tech (#skills)', action: () => scrollToSection('#skills') },
        { icon: 'fa-laptop-code', title: isVi ? 'Dự Án Nổi Bật (#projects)' : 'Featured Projects (#projects)', action: () => scrollToSection('#projects') },
        { icon: 'fa-briefcase', title: isVi ? 'Kinh Nghiệm & Học Vấn (#experience)' : 'Experience & Education (#experience)', action: () => scrollToSection('#experience') },
        { icon: 'fa-envelope', title: isVi ? 'Liên Hệ Trực Tiếp (#contact)' : 'Contact Me (#contact)', action: () => scrollToSection('#contact') }
      ]
    },
    {
      group: isVi ? 'Dự Án Thực Chiến' : 'Projects',
      items: [
        { icon: 'fa-brain', title: 'AI Laptop Recommendation System', action: () => { closeCmdPalette(); openProjectModal('p1'); } },
        { icon: 'fa-spa', title: 'SPA Management System (binspa.id.vn)', action: () => { closeCmdPalette(); openProjectModal('p2'); } },
        { icon: 'fa-hospital-user', title: 'Medical Appointment Booking System (DLKB)', action: () => { closeCmdPalette(); openProjectModal('p3'); } }
      ]
    },
    {
      group: isVi ? 'Hành Động Nhanh' : 'Quick Actions',
      items: [
        { icon: 'fa-file-pdf', title: isVi ? 'Tải / Xem CV (Tiếng Việt & English)' : 'Download / View CV (VI & EN)', action: () => { closeCmdPalette(); openCVModal(); } },
        { icon: 'fa-flag', title: isVi ? 'Mở CV Tiếng Việt (PDF)' : 'Open Vietnamese Resume (PDF)', action: () => { window.open('./CV_DANGVANKHOA_VI.pdf', '_blank'); closeCmdPalette(); } },
        { icon: 'fa-globe-americas', title: isVi ? 'Mở English Resume (PDF)' : 'Open English Resume (PDF)', action: () => { window.open('./CV_DANG_VAN_KHOA_EN.pdf', '_blank'); closeCmdPalette(); } },
        { icon: 'fa-globe', title: isVi ? 'Chuyển sang Tiếng Anh (English)' : 'Switch Language to English', action: () => { setLanguage('en'); closeCmdPalette(); } },
        { icon: 'fa-globe-asia', title: isVi ? 'Chuyển sang Tiếng Việt (Vietnamese)' : 'Switch Language to Vietnamese', action: () => { setLanguage('vi'); closeCmdPalette(); } },
        { icon: 'fa-adjust', title: isVi ? 'Bật/Tắt Giao Diện Dark/Light' : 'Toggle Dark/Light Theme', action: () => { document.getElementById('themeToggle').click(); closeCmdPalette(); } }
      ]
    }
  ];
}

function scrollToSection(selector) {
  closeCmdPalette();
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderCmdResults(query) {
  const container = document.getElementById('cmdResults');
  if (!container) return;

  const data = getCmdData();
  let html = '';
  let globalItemIdx = 0;
  cmdItemsList = [];

  data.forEach(group => {
    const filteredItems = group.items.filter(item => item.title.toLowerCase().includes(query));
    if (filteredItems.length > 0) {
      html += `<div class="cmd-group-title">${group.group}</div>`;
      filteredItems.forEach(item => {
        const itemIdx = globalItemIdx++;
        cmdItemsList.push(item);
        const isSelected = itemIdx === cmdSelectedIdx;
        html += `
          <div class="cmd-item ${isSelected ? 'selected' : ''}" data-idx="${itemIdx}">
            <div class="cmd-item-left">
              <div class="cmd-item-icon"><i class="fas ${item.icon}"></i></div>
              <span>${item.title}</span>
            </div>
            <span class="cmd-item-badge">↵ Chọn</span>
          </div>
        `;
      });
    }
  });

  if (globalItemIdx === 0) {
    html = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
      <i class="fas fa-search-minus" style="font-size: 1.5rem; margin-bottom: 0.5rem; display: block; color: var(--text-dim);"></i>
      Không tìm thấy kết quả phù hợp cho "${query}"
    </div>`;
  }

  container.innerHTML = html;

  container.querySelectorAll('.cmd-item').forEach(elem => {
    elem.addEventListener('click', () => {
      const idx = parseInt(elem.getAttribute('data-idx'), 10);
      if (cmdItemsList[idx] && cmdItemsList[idx].action) {
        cmdItemsList[idx].action();
      }
    });
  });
}

function updateCmdSelection(items) {
  items.forEach((item, idx) => {
    if (idx === cmdSelectedIdx) {
      item.classList.add('selected');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('selected');
    }
  });
}

// --- 16. Skill-to-Project Interactive Highlighting ---
function initSkillHighlighting() {
  const skillTags = document.querySelectorAll('.skill-tag');
  const projectCards = document.querySelectorAll('.project-card');

  skillTags.forEach(tag => {
    const text = tag.textContent.toLowerCase().trim();

    tag.addEventListener('mouseenter', () => {
      projectCards.forEach(card => {
        const skillsAttr = card.getAttribute('data-skills') || '';
        if (checkSkillMatch(text, skillsAttr)) {
          card.classList.add('project-highlight');
          card.classList.remove('project-dimmed');
        } else {
          card.classList.add('project-dimmed');
          card.classList.remove('project-highlight');
        }
      });
    });

    tag.addEventListener('mouseleave', () => {
      projectCards.forEach(card => {
        card.classList.remove('project-highlight', 'project-dimmed');
      });
    });
  });
}

function checkSkillMatch(skillText, cardSkills) {
  if (skillText.includes('python') && cardSkills.includes('python')) return true;
  if (skillText.includes('flask') && cardSkills.includes('flask')) return true;
  if (skillText.includes('react') && cardSkills.includes('reactjs')) return true;
  if (skillText.includes('postgres') && cardSkills.includes('postgresql')) return true;
  if (skillText.includes('flutter') && cardSkills.includes('flutter')) return true;
  if ((skillText.includes('js') || skillText.includes('javascript')) && cardSkills.includes('javascript')) return true;
  if (skillText.includes('dart') && cardSkills.includes('dart')) return true;
  return false;
}

// ==========================================================================
// PHASE 4 MODULES (DEVELOPER CLI TERMINAL ENGINE)
// ==========================================================================
let cliHistory = [];
let cliHistoryIdx = -1;

function initCLITerminal() {
  const triggerBtn = document.getElementById('cliToggleBtn');
  const overlay = document.getElementById('cliOverlay');
  const input = document.getElementById('cliInput');

  if (!overlay || !input) return;

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openCLITerminal);
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (cmd) {
        cliHistory.push(cmd);
        cliHistoryIdx = cliHistory.length;
        handleCLICommand(cmd);
        input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cliHistory.length && cliHistoryIdx > 0) {
        cliHistoryIdx--;
        input.value = cliHistory[cliHistoryIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cliHistory.length && cliHistoryIdx < cliHistory.length - 1) {
        cliHistoryIdx++;
        input.value = cliHistory[cliHistoryIdx];
      } else {
        cliHistoryIdx = cliHistory.length;
        input.value = '';
      }
    } else if (e.key === 'Escape') {
      closeCLITerminal();
    }
  });
}

function openCLITerminal() {
  const overlay = document.getElementById('cliOverlay');
  const input = document.getElementById('cliInput');
  if (!overlay || !input) return;

  overlay.classList.add('active');
  setTimeout(() => input.focus(), 50);
}

function closeCLITerminal() {
  const overlay = document.getElementById('cliOverlay');
  if (overlay) overlay.classList.remove('active');
}

function handleCLICommand(rawCmd) {
  const logContainer = document.getElementById('cliOutputLog');
  const cliBody = document.getElementById('cliBody');
  if (!logContainer) return;

  const cmd = rawCmd.toLowerCase().trim();
  const entry = document.createElement('div');
  entry.className = 'cli-log-entry';

  let outputHtml = '';

  switch (cmd) {
    case 'help':
      outputHtml = `
<div class="cli-log-warning">Các câu lệnh Developer CLI khả dụng:</div>
• <span class="cli-cmd-highlight">about</span>      : Hiển thị thông tin cá nhân của Đặng Văn Khoa
• <span class="cli-cmd-highlight">skills</span>     : Danh sách ngôn ngữ & công nghệ chuyên môn
• <span class="cli-cmd-highlight">projects</span>   : Các dự án thực chiến nổi bật (AHP, SPA, DLKB)
• <span class="cli-cmd-highlight">contact</span>    : Thông tin liên hệ, Email, SĐT, GitHub
• <span class="cli-cmd-highlight">cv</span>         : Tải trực tiếp hồ sơ CV (PDF)
• <span class="cli-cmd-highlight">matrix</span>     : Bật/Tắt giao diện Hacker Matrix Mode 🟩
• <span class="cli-cmd-highlight">theme</span>      : Chuyển đổi giữa Dark / Light theme 🌙☀️
• <span class="cli-cmd-highlight">sudo hire-me</span>: Gửi yêu cầu tuyển dụng đặc biệt 🎉
• <span class="cli-cmd-highlight">clear</span>      : Xóa lịch sử màn hình terminal
• <span class="cli-cmd-highlight">exit</span>       : Đóng cửa sổ terminal
`;
      break;

    case 'about':
      outputHtml = `
<div class="cli-log-success">👤 ĐẶNG VĂN KHOA - Software Engineering Intern</div>
- Sinh viên năm 4 ngành Kỹ thuật Phần mềm (HCMUNRE, dự kiến tốt nghiệp 04/2027)
- Định hướng: Full-Stack & Backend Developer (Python Flask, PostgreSQL, ReactJS, Flutter)
- Đã hoàn thành thực tập Software Testing tại Automation Land (04/2026 - 06/2026).
`;
      break;

    case 'skills':
      outputHtml = `
<div class="cli-log-success">🛠️ TECH STACK & SKILLS OVERVIEW</div>
• Ngôn ngữ   : Python (Advanced), JavaScript (ES6+), Java, Dart, SQL
• Backend    : Python Flask, RESTful APIs, JWT Auth, Bcrypt, Flask-SQLAlchemy
• Databases  : PostgreSQL, SQL Server, MongoDB
• Frontend   : ReactJS (Vite), HTML5, CSS3, Tailwind CSS, Flutter (Mobile)
• Tools & QA : Git/GitHub, Postman, VS Code, Software Test Case Design
`;
      break;

    case 'projects':
      outputHtml = `
<div class="cli-log-success">🚀 DỰ ÁN THỰC CHIẾN NỔI BẬT</div>
1. [AI Laptop Recommender] : Flask + ReactJS + PostgreSQL + AHP Algorithm
   └─ Demo: https://analytic-hierarchy-process-one.vercel.app
2. [SPA Management Web]   : Flask + JS ES6 + PostgreSQL + MoMo Payment
   └─ Demo: https://binspa.id.vn
3. [Medical Booking DLKB] : Flutter + Flask RESTful API + PostgreSQL
   └─ GitHub: https://github.com/dangkhoa18052004/DLKB.git
`;
      break;

    case 'contact':
      outputHtml = `
<div class="cli-log-success">📫 KẾT NỐI VỚI ĐẶNG VĂN KHOA</div>
• Email   : dangkhoa18052004qni@gmail.com
• Phone   : 0387 829 152
• GitHub  : https://github.com/dangkhoa18052004
• Vị Trí  : TP. Hồ Chí Minh, Việt Nam
`;
      break;

    case 'cv':
    case 'cv vi':
    case 'cv en':
      if (cmd === 'cv vi') {
        window.open('./CV_DANGVANKHOA_VI.pdf', '_blank');
        outputHtml = `<div class="cli-log-success">📄 Đã mở file CV Tiếng Việt (CV_DANGVANKHOA_VI.pdf) thành công!</div>`;
      } else if (cmd === 'cv en') {
        window.open('./CV_DANG_VAN_KHOA_EN.pdf', '_blank');
        outputHtml = `<div class="cli-log-success">📄 Đã mở file English Resume (CV_DANG_VAN_KHOA_EN.pdf) thành công!</div>`;
      } else {
        openCVModal();
        outputHtml = `
<div class="cli-log-success">📄 Đã mở cửa sổ lựa chọn CV (Tiếng Việt & English)!</div>
• <span class="cli-cmd-highlight">cv vi</span> : Mở trực tiếp CV Tiếng Việt
• <span class="cli-cmd-highlight">cv en</span> : Mở trực tiếp English Resume
`;
      }
      break;

    case 'sudo hire-me':
      showToast('🎉 Cảm ơn bạn! Đặng Văn Khoa rất sẵn sàng tham gia phỏng vấn & làm việc!');
      if (typeof playSound === 'function') playSound('click');
      outputHtml = `
<div class="cli-log-success" style="font-size: 1.05rem; font-weight: bold;">
🚀 ACCESS GRANTED! CHÚC MỪNG BẠN ĐÃ TUYỂN DỤNG THÀNH CÔNG THỰC TẬP SINH XUẤT SẮC!
</div>
Email liên hệ trực tiếp: dangkhoa18052004qni@gmail.com | SĐT: 0387 829 152
`;
      break;

    case 'matrix':
      document.body.classList.toggle('matrix-mode');
      const isMatrix = document.body.classList.contains('matrix-mode');
      outputHtml = `<div class="cli-log-success">${isMatrix ? '🟩 Matrix Hacker Mode ACTIVATED!' : '⬜ Matrix Mode DEACTIVATED.'}</div>`;
      break;

    case 'theme':
      document.getElementById('themeToggle').click();
      outputHtml = `<div class="cli-log-success">🌗 Giao diện đã đổi sang chế độ: ${currentTheme.toUpperCase()}</div>`;
      break;

    case 'clear':
      logContainer.innerHTML = '';
      return;

    case 'exit':
    case 'quit':
      closeCLITerminal();
      return;

    default:
      outputHtml = `
<div class="cli-log-error">bash: command not found: ${rawCmd}</div>
Gõ <span class="cli-cmd-highlight">help</span> để xem các lệnh hợp lệ.
`;
      break;
  }

  entry.innerHTML = `
    <div class="cli-log-command">dangkhoa@portfolio:~$ ${rawCmd}</div>
    <div class="cli-log-result">${outputHtml}</div>
  `;

  logContainer.appendChild(entry);
  if (cliBody) cliBody.scrollTop = cliBody.scrollHeight;
}
