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
    about_text_1: "Tôi là sinh viên ngành Kỹ thuật Phần mềm tại Đại học Tài nguyên và Môi trường TP. Hồ Chí Minh (2022 - 2026), có kinh nghiệm thực tế trong việc thiết kế và phát triển ứng dụng Full-stack, các dịch vụ Backend chuẩn RESTful API và các hệ thống hỗ trợ quyết định thông minh bằng Python Flask & PostgreSQL.",
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

    edu_degree: "Cử nhân Kỹ thuật Phần mềm",
    edu_school: "Đại học Tài nguyên và Môi trường TP. Hồ Chí Minh",
    edu_years: "2022 - 2026",
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

    // Footer
    footer_text: "© 2026 Đặng Văn Khoa. Xây dựng với tâm huyết và công nghệ Web hiện đại."
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
    about_text_1: "I am a Software Engineering student at Ho Chi Minh City University of Natural Resources and Environment (2022 - 2026), with hands-on experience in building Full-stack web applications, RESTful Backend services, and decision-support recommendation systems using Python Flask & PostgreSQL.",
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

    edu_degree: "Bachelor in Software Engineering",
    edu_school: "Ho Chi Minh City University of Natural Resources and Environment",
    edu_years: "2022 - 2026",
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

    // Footer
    footer_text: "© 2026 Dang Van Khoa. Crafted with care and modern web standards."
  }
};

// --- State Management ---
let currentLang = localStorage.getItem('portfolio_lang') || 'vi';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initHeaderScroll();
  initProjectFilters();
  initContactForm();
  initMobileMenu();
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
  }).catch(err => {
    console.error('Copy failed', err);
  });
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

// --- Interactive Project Modal Popup ---
const projectData = {
  p1: {
    title: "AI Laptop Recommendation System",
    role: "Full-stack Developer | Flask, ReactJS, PostgreSQL",
    image: "./assets/project-laptop.png",
    vi: {
      details: [
        "Xây dựng hệ thống gợi ý laptop bằng phương pháp Phân tích Thứ bậc Analytic Hierarchy Process (AHP) giúp tính toán và chấm điểm theo nhiều tiêu chí.",
        "Xây dựng RESTful API xử lý chấm điểm tiêu chí, sở thích người dùng và đề xuất cá nhân hóa.",
        "Phát triển logic gợi ý thông minh dựa trên CPU, RAM, GPU, dung lượng bộ nhớ, mức giá và nhu cầu sử dụng thực tế."
      ],
      linkText: "Truy cập Demo Website"
    },
    en: {
      details: [
        "Built a smart laptop recommendation system powered by Analytic Hierarchy Process (AHP) multi-criteria decision scoring algorithm.",
        "Developed backend API to score criteria, user preferences, and generate personalized recommendations.",
        "Engineered recommendation logic evaluating CPU, RAM, GPU, storage, budget, and specific user workflows."
      ],
      linkText: "Visit Live Demo"
    },
    demoUrl: "https://analytic-hierarchy-process-one.vercel.app"
  },

  p2: {
    title: "SPA Management System",
    role: "Full-stack Developer | Flask, JavaScript, PostgreSQL",
    image: "./assets/project-spa.png",
    vi: {
      details: [
        "Phát triển hệ thống quản lý SPA toàn diện gồm quản lý khách hàng, đặt lịch hẹn, quản lý danh mục dịch vụ, hóa đơn và phân quyền quản trị.",
        "Xây dựng Backend API và logic xử lý cho đăng ký/đăng nhập người dùng, đặt lịch, nhắn tin thời gian thực và xử lý hóa đơn.",
        "Thiết kế cơ sở dữ liệu PostgreSQL cho dữ liệu khách hàng, lịch hẹn và nghiệp vụ liên quan.",
        "Tích hợp giao diện Frontend với Backend API đảm bảo luồng dữ liệu mượt mà, ổn định."
      ],
      linkText: "Truy cập Website Live"
    },
    en: {
      details: [
        "Developed an all-in-one SPA management system covering customer profiles, online booking, service catalogs, invoicing, and admin controls.",
        "Engineered Backend APIs for user authentication, online booking, real-time messaging, and invoice generation.",
        "Designed PostgreSQL database schemas for customer records, appointment schedules, and transactional data.",
        "Integrated Frontend responsive interfaces with Backend REST APIs."
      ],
      linkText: "Visit Live Website"
    },
    demoUrl: "https://binspa.id.vn"
  },

  p3: {
    title: "Medical Appointment Booking System (DLKB)",
    role: "Backend & Mobile Developer | Flask, Flutter, PostgreSQL",
    image: "./assets/project-medical.png",
    vi: {
      details: [
        "Phát triển hệ thống đặt lịch khám bệnh đa vai trò dành cho bệnh nhân, bác sĩ và quản trị viên.",
        "Xây dựng RESTful API Flask theo mô-đun với xác thực JWT, phân quyền vai trò, đặt lịch khám, tìm kiếm bác sĩ, thông báo và thống kê.",
        "Kết nối ứng dụng di động Flutter với dịch vụ Backend PostgreSQL giúp người dùng xem khung giờ trống và đặt lịch trực tuyến."
      ],
      linkText: "Xem Repo GitHub"
    },
    en: {
      details: [
        "Built a multi-role healthcare appointment system for patients, doctors, and system administrators.",
        "Developed modular Flask REST APIs with JWT authentication, role-based authorization, schedule searching, notifications, and analytics.",
        "Connected Flutter mobile application with PostgreSQL backend to enable real-time slot checking and appointment booking."
      ],
      linkText: "View GitHub Repository"
    },
    demoUrl: "https://github.com/dangkhoa18052004/DLKB"
  }
};

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modalOverlay = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  const content = data[currentLang] || data['vi'];

  modalBody.innerHTML = `
    <h3>${data.title}</h3>
    <div class="modal-role">${data.role}</div>
    <img src="${data.image}" alt="${data.title}">
    <h4>${currentLang === 'vi' ? 'Tính Năng & Kỹ Thuật Nổi Bật:' : 'Key Features & Architecture:'}</h4>
    <ul>
      ${content.details.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
      <a href="${data.demoUrl}" target="_blank" class="btn btn-primary" style="padding: 0.6rem 1.25rem; font-size: 0.9rem;">
        <i class="fas fa-external-link-alt"></i> ${content.linkText}
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

// --- Contact Form Handling ---
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

      setTimeout(() => {
        btn.innerHTML = origText;
        btn.disabled = false;
        statusMsg.style.display = 'block';
        statusMsg.className = 'form-status success';
        statusMsg.textContent = translations[currentLang].form_success;
        form.reset();

        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 5000);
      }, 1000);
    });
  }
}
