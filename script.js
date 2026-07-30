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
      <i class="fas fa-project-diagram"></i> ${isVi ? 'Kiến Trúc & Công Nghệ Sáng Tạo' : 'Architecture & Technical Stack'}
    </div>
    <p class="modal-text">${content.architecture}</p>

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

      fetch('https://formsubmit.co/ajax/dangkhoa18052004qni@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })
      .then(response => response.json())
      .then(data => {
        btn.innerHTML = origText;
        btn.disabled = false;
        statusMsg.style.display = 'block';
        statusMsg.className = 'form-status success';
        statusMsg.textContent = translations[currentLang].form_success;
        form.reset();

        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 6000);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        btn.innerHTML = origText;
        btn.disabled = false;
        statusMsg.style.display = 'block';
        statusMsg.style.borderColor = '#ef4444';
        statusMsg.style.color = '#ef4444';
        statusMsg.textContent = currentLang === 'vi' ? 'Có lỗi xảy ra, vui lòng thử lại sau.' : 'An error occurred, please try again.';
      });
    });
  }
}
