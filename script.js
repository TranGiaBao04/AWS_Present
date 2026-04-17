// ==============================
// EVC SLIDES NAVIGATION + I18N
// ==============================

const TOTAL_SLIDES = 15;
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "evc-language";

const translations = {
  en: {
    meta: {
      pageTitle: "EVC System - AWS Architecture",
      keyHint: "↑ ↓ Arrow keys to navigate",
      languageGroupLabel: "Select language",
      slideIndicator: "Slide {number}",
      languageEn: "EN",
      languageVi: "VI",
      logoFptAlt: "FPT University",
      logoAwsAlt: "Amazon Web Services",
    },
    brand: {
      evcharge: '<span class="ev">EV</span>Charge',
      fpt: "FPT",
      aws: "AWS",
    },
    common: {
      nav: {
        home: "Home",
        overview: "Overview",
        architecture: "Architecture",
        contact: "Contact",
        demo: "Demo",
        startOver: "↩ Start Over",
      },
    },
    slide1: {
      tag: "🚀 AWS Cloud Architecture",
      title: "Scalable AWS<br />Architecture",
      subtitle: "for EVC System",
      tagline: "High Availability · Secure · Production Ready",
    },
    slide2: {
      tag: "Our Team",
      title: "Meet the Members",
      description: "FPT University — Cloud Computing Project",
      member1: {
        name: "Vũ Minh Quang",
        role: "TEAM LEADER",
        id: "SE192755",
      },
      member2: {
        name: "Trần Gia Bảo",
        role: "DEVELOPER",
        id: "SE182346",
      },
      member3: {
        name: "Phạm Văn Minh",
        role: "DEVELOPER",
        id: "SE183365",
      },
      member4: {
        name: "Nguyễn Thị Ngọc Tuyền",
        role: "DEVELOPER",
        id: "SE193816",
      },
      member5: {
        name: "Hoàng Bảo Thạch",
        role: "DEVELOPER",
        id: "SE191044",
      },
    },
    slide3: {
      tag: "The Problem",
      title: "Why Traditional<br />Systems Fail",
      description:
        "Traditional systems cannot handle real-world production needs.",
      item1Title: "Cannot Scale",
      item1Description: "Fails when traffic suddenly increases",
      item2Title: "High Downtime Risk",
      item2Description: "Single point of failure, no redundancy",
      item3Title: "Limited Security",
      item3Description: "Exposed endpoints, no WAF or encryption",
      item4Title: "Hard to Maintain",
      item4Description: "Manual deployments, no CI/CD pipeline",
      callout: "→ Need a scalable, secure, production-ready system",
    },
    slide4: {
      tag: "Our Solution",
      title: "Built on<br />AWS Cloud",
      card1Title: "Separated Layers",
      card1Description: "Frontend, Backend, Database fully decoupled",
      card2Title: "High Availability",
      card2Description: "Multi-AZ deployment, no single point of failure",
      card3Title: "Secure API",
      card3Description: "JWT-based stateless authentication",
      imageAlt: "Web Interface",
    },
    slide5: {
      navTag: "🔥 Core Architecture",
      title: "Full System Architecture",
      description:
        "3 Layers: Edge – Application – Data · Multi-AZ · Secure & Scalable",
      imageAlt: "AWS architecture diagram",
    },
    slide6: {
      tag: "Request Flow",
      title: "How Every Request Travels",
      description: "Every user action follows this flow across our system.",
      flowAriaLabel: "Request and response flow",
      request: "Request",
      response: "Response",
      step1: "User",
      step2: "Route53",
      step3: "CloudFront",
      step4: "S3",
      step5: "ALB",
      step6: "EC2",
      step7: "RDS",
      step8: "RDS",
      step9: "EC2",
      step10: "ALB",
      step11: "Response",
      step12: "CloudFront",
      step13: "User",
    },
    slide7: {
      tag: "Security",
      title: "Auth Flow<br />JWT Based",
      description:
        "JWT-based authentication for stateless, scalable security.",
      callout: "✓ Stateless & secure authentication",
      step1: "User submits login credentials",
      step2: "Backend validates credentials & returns JWT token",
      step3: "Client stores token in memory / header",
      step4: "All API calls include <strong>Bearer JWT</strong>",
      step5: "Backend verifies JWT signature ✓",
      success: "Access granted to protected resources",
    },
    slide8: {
      navTag: "Layer 1 of 3",
      tag: "Edge Layer",
      title: "Fast & Secure User Access",
      card1Title: "Route 53",
      card1Description: "DNS routing with health checks and failover",
      card2Title: "CloudFront CDN",
      card2Description: "Global edge caching, low latency delivery",
      card3Title: "WAF",
      card3Description: "Web Application Firewall blocks threats",
      card4Title: "Location Service",
      card4Description: "Map & geolocation for EVC stations",
      imageAlt: "Edge layer diagram",
    },
    slide9: {
      navTag: "Layer 2 of 3",
      tag: "Application Layer",
      title: "High Availability<br />& Scalability",
      card1Title: "ALB",
      card1Description:
        "Application Load Balancer distributes traffic evenly",
      card2Title: "EC2 Instances",
      card2Description: "Backend API runs on managed compute instances",
      card3Title: "Auto Scaling",
      card3Description:
        "Scales in/out based on real-time traffic demand",
      card4Title: "Multi-AZ",
      card4Description:
        "Deployed across availability zones for redundancy",
      imageAlt: "Application layer diagram",
    },
    slide10: {
      navTag: "Layer 3 of 3",
      tag: "Data Layer",
      title: "Secure & Reliable<br />Data Storage",
      card1Title: "Amazon RDS",
      card1Description:
        "Managed relational database with automated backups",
      card2Title: "Primary + Standby",
      card2Description: "Automatic failover with Multi-AZ replication",
      card3Title: "Private Subnet",
      card3Description:
        "Isolated from public internet, VPC-only access",
      card4Title: "No Public Access",
      card4Description:
        "Database only reachable from application layer",
      imageAlt: "Data layer diagram",
    },
    slide11: {
      tag: "Security & Observability",
      title: "Full Security & Monitoring",
      card1Title: "Secrets Manager",
      card1Description: "Securely stores DB credentials & API keys",
      card2Title: "KMS Encryption",
      card2Description: "Encrypts data at rest and in transit",
      card3Title: "CloudWatch",
      card3Description: "Metrics, alerts, dashboards & logs",
      card4Title: "CloudTrail",
      card4Description: "Full audit trail of all API activity",
    },
    slide12: {
      tag: "Admin & IAM",
      title: "Controlled &<br />Secure Access",
      description:
        "We avoid direct server access for maximum security.",
      callout: "🚫 No SSH — All access via SSM",
      item1:
        "<strong>AWS Systems Manager (SSM)</strong> — browser shell",
      item2:
        "<strong>No SSH ports open</strong> — attack surface minimized",
      item3:
        "<strong>IAM Role for EC2</strong> — principle of least privilege",
      item4:
        "<strong>Read Secrets</strong> — from Secrets Manager only",
      item5:
        "<strong>Write Logs</strong> — to CloudWatch log groups",
      item6:
        "<strong>Send Email</strong> — via SES for notifications",
    },
    slide13: {
      navTag: "🔥 Key Improvement",
      tag: "Before vs After",
      title: "Production-Ready Architecture",
      headerAspect: "Aspect",
      headerBefore: "❌ Before",
      headerAfter: "✅ After",
      row1Aspect: "Scalability",
      row1Before: "Single server, fixed capacity",
      row1After: "Auto Scaling across Multi-AZ",
      row2Aspect: "Monitoring",
      row2Before: "No monitoring or alerts",
      row2After: "CloudWatch + CloudTrail",
      row3Aspect: "Security",
      row3Before: "Weak, open endpoints",
      row3After: "WAF + JWT + IAM + KMS",
      row4Aspect: "Availability",
      row4Before: "Single point of failure",
      row4After: "Multi-AZ, ALB failover",
      row5Aspect: "Access Control",
      row5Before: "SSH with shared keys",
      row5After: "SSM + IAM roles, no SSH",
      row6Aspect: "Database",
      row6Before: "Public, no backup",
      row6After: "Private subnet + RDS Multi-AZ",
    },
    slide14: {
      navTag: "🔴 Live",
      cta: "🔗 Demo",
      title: "Real-Time System",
      subtitle: "Demonstrating real-time system behavior",
      step1: "User login & JWT authentication flow",
      step2: "Core system functionality walkthrough",
      step3: "API interaction with AWS backend via ALB",
    },
    slide15: {
      tag: "Conclusion",
      title: "Production<br />Ready ✓",
      point1: "Scalable AWS architecture with Auto Scaling",
      point2: "High availability with Multi-AZ deployment",
      point3: "Strong security: WAF, JWT, IAM, KMS",
      point4: "Ready for real-world production deployment",
      badge: "Not just a project — a production-ready system",
    },
  },
  vi: {
    meta: {
      pageTitle: "Hệ thống EVC - Kiến trúc AWS",
      keyHint: "↑ ↓ Dùng phím mũi tên để điều hướng",
      languageGroupLabel: "Chọn ngôn ngữ",
      slideIndicator: "Trang {number}",
      languageEn: "EN",
      languageVi: "VI",
      logoFptAlt: "Đại học FPT",
      logoAwsAlt: "Amazon Web Services",
    },
    brand: {
      evcharge: '<span class="ev">EV</span>Charge',
      fpt: "FPT",
      aws: "AWS",
    },
    common: {
      nav: {
        home: "Trang chủ",
        overview: "Tổng quan",
        architecture: "Kiến trúc",
        contact: "Liên hệ",
        demo: "Demo",
        startOver: "↩ Bắt Đầu Lại",
      },
    },
    slide1: {
      tag: "🚀 Kiến Trúc AWS Cloud",
      title: "Kiến Trúc AWS<br />Mở Rộng",
      subtitle: "cho hệ thống EVC",
      tagline: "Khả dụng cao · Bảo mật · Sẵn sàng vận hành",
    },
    slide2: {
      tag: "Nhóm của chúng tôi",
      title: "Các Thành Viên Nhóm",
      description: "Đại học FPT — Dự án Điện toán đám mây",
      member1: {
        name: "Vũ Minh Quang",
        role: "TRƯỞNG NHÓM",
        id: "SE192755",
      },
      member2: {
        name: "Trần Gia Bảo",
        role: "LẬP TRÌNH VIÊN",
        id: "SE182346",
      },
      member3: {
        name: "Phạm Văn Minh",
        role: "LẬP TRÌNH VIÊN",
        id: "SE183365",
      },
      member4: {
        name: "Nguyễn Thị Ngọc Tuyền",
        role: "LẬP TRÌNH VIÊN",
        id: "SE193816",
      },
      member5: {
        name: "Hoàng Bảo Thạch",
        role: "LẬP TRÌNH VIÊN",
        id: "SE191044",
      },
    },
    slide3: {
      tag: "Bài toán",
      title: "Vì Sao Hệ Thống<br />Truyền Thống Thất Bại",
      description:
        "Các hệ thống truyền thống không đáp ứng được nhu cầu vận hành thực tế.",
      item1Title: "Không thể mở rộng",
      item1Description: "Dễ quá tải khi lưu lượng tăng đột ngột",
      item2Title: "Rủi ro downtime cao",
      item2Description: "Điểm lỗi đơn, không có dự phòng",
      item3Title: "Bảo mật hạn chế",
      item3Description: "Endpoint lộ ra ngoài, không có WAF hay mã hóa",
      item4Title: "Khó bảo trì",
      item4Description: "Triển khai thủ công, không có pipeline CI/CD",
      callout:
        "→ Cần một hệ thống có thể mở rộng, bảo mật và sẵn sàng vận hành",
    },
    slide4: {
      tag: "Giải pháp của chúng tôi",
      title: "Được Xây Dựng Trên<br />AWS Cloud",
      card1Title: "Tách biệt từng lớp",
      card1Description:
        "Frontend, Backend và Database được tách biệt hoàn toàn",
      card2Title: "Khả dụng cao",
      card2Description: "Triển khai Multi-AZ, không còn điểm lỗi đơn",
      card3Title: "API bảo mật",
      card3Description: "Xác thực phi trạng thái dựa trên JWT",
      imageAlt: "Giao diện web",
    },
    slide5: {
      navTag: "🔥 Kiến trúc cốt lõi",
      title: "Kiến Trúc Hệ Thống Tổng Thể",
      description:
        "3 lớp: Edge – Application – Data · Multi-AZ · Bảo mật & mở rộng",
      imageAlt: "Sơ đồ kiến trúc AWS",
    },
    slide6: {
      tag: "Luồng yêu cầu",
      title: "Mỗi Yêu Cầu Di Chuyển Như Thế Nào",
      description:
        "Mỗi thao tác của người dùng đều đi theo luồng này trong hệ thống.",
      flowAriaLabel: "Luồng yêu cầu và phản hồi",
      request: "Yêu cầu",
      response: "Phản hồi",
      step1: "Người dùng",
      step2: "Route53",
      step3: "CloudFront",
      step4: "S3",
      step5: "ALB",
      step6: "EC2",
      step7: "RDS",
      step8: "RDS",
      step9: "EC2",
      step10: "ALB",
      step11: "Phản hồi",
      step12: "CloudFront",
      step13: "Người dùng",
    },
    slide7: {
      tag: "Bảo mật",
      title: "Luồng Xác Thực<br />Dựa Trên JWT",
      description:
        "Xác thực dựa trên JWT cho bảo mật phi trạng thái và dễ mở rộng.",
      callout: "✓ Xác thực phi trạng thái và an toàn",
      step1: "Người dùng gửi thông tin đăng nhập",
      step2: "Backend xác thực thông tin và trả về JWT token",
      step3: "Client lưu token trong bộ nhớ / header",
      step4: "Mọi API call đều gửi kèm <strong>Bearer JWT</strong>",
      step5: "Backend xác minh chữ ký JWT ✓",
      success: "Được cấp quyền truy cập vào tài nguyên được bảo vệ",
    },
    slide8: {
      navTag: "Lớp 1 / 3",
      tag: "Lớp biên",
      title: "Truy Cập Người Dùng Nhanh Và An Toàn",
      card1Title: "Route 53",
      card1Description: "Điều hướng DNS với health check và failover",
      card2Title: "CloudFront CDN",
      card2Description: "Cache biên toàn cầu, phân phối độ trễ thấp",
      card3Title: "WAF",
      card3Description: "Tường lửa ứng dụng web chặn các mối đe dọa",
      card4Title: "Dịch vụ vị trí",
      card4Description: "Bản đồ và định vị cho các trạm EVC",
      imageAlt: "Sơ đồ lớp biên",
    },
    slide9: {
      navTag: "Lớp 2 / 3",
      tag: "Lớp ứng dụng",
      title: "Khả Dụng Cao<br />Và Khả Năng Mở Rộng",
      card1Title: "ALB",
      card1Description:
        "Application Load Balancer phân phối lưu lượng đồng đều",
      card2Title: "Các phiên bản EC2",
      card2Description: "Backend API chạy trên các máy tính toán được quản lý",
      card3Title: "Auto Scaling",
      card3Description:
        "Tự động tăng giảm theo nhu cầu lưu lượng thời gian thực",
      card4Title: "Multi-AZ",
      card4Description:
        "Triển khai trên nhiều vùng sẵn sàng để dự phòng",
      imageAlt: "Sơ đồ lớp ứng dụng",
    },
    slide10: {
      navTag: "Lớp 3 / 3",
      tag: "Lớp dữ liệu",
      title: "Lưu Trữ Dữ Liệu<br />An Toàn Và Ổn Định",
      card1Title: "Amazon RDS",
      card1Description:
        "Cơ sở dữ liệu quan hệ được quản lý cùng sao lưu tự động",
      card2Title: "Chính + Dự phòng",
      card2Description: "Tự động failover với cơ chế sao chép Multi-AZ",
      card3Title: "Subnet riêng",
      card3Description:
        "Cách ly khỏi internet công cộng, chỉ truy cập trong VPC",
      card4Title: "Không truy cập công khai",
      card4Description:
        "Database chỉ có thể truy cập từ lớp ứng dụng",
      imageAlt: "Sơ đồ lớp dữ liệu",
    },
    slide11: {
      tag: "Bảo mật & Quan sát",
      title: "Bảo Mật Và Giám Sát Toàn Diện",
      card1Title: "Secrets Manager",
      card1Description: "Lưu trữ an toàn thông tin DB và API key",
      card2Title: "Mã hóa KMS",
      card2Description: "Mã hóa dữ liệu khi lưu trữ và khi truyền tải",
      card3Title: "CloudWatch",
      card3Description: "Metrics, cảnh báo, dashboard và log",
      card4Title: "CloudTrail",
      card4Description: "Nhật ký kiểm toán đầy đủ cho mọi hoạt động API",
    },
    slide12: {
      tag: "Quản trị & IAM",
      title: "Kiểm Soát Và<br />Bảo Mật Truy Cập",
      description:
        "Chúng tôi tránh truy cập trực tiếp vào server để đạt mức an toàn cao nhất.",
      callout: "🚫 Không dùng SSH — Mọi truy cập qua SSM",
      item1:
        "<strong>AWS Systems Manager (SSM)</strong> — shell trên trình duyệt",
      item2:
        "<strong>Không mở cổng SSH</strong> — giảm tối đa bề mặt tấn công",
      item3:
        "<strong>IAM Role cho EC2</strong> — tuân theo nguyên tắc đặc quyền tối thiểu",
      item4:
        "<strong>Đọc Secrets</strong> — chỉ từ Secrets Manager",
      item5:
        "<strong>Ghi Logs</strong> — vào các log group của CloudWatch",
      item6:
        "<strong>Gửi Email</strong> — qua SES để gửi thông báo",
    },
    slide13: {
      navTag: "🔥 Cải tiến chính",
      tag: "Trước và sau",
      title: "Kiến Trúc Sẵn Sàng Vận Hành",
      headerAspect: "Tiêu chí",
      headerBefore: "❌ Trước",
      headerAfter: "✅ Sau",
      row1Aspect: "Khả năng mở rộng",
      row1Before: "Máy chủ đơn, năng lực cố định",
      row1After: "Auto Scaling trên nhiều AZ",
      row2Aspect: "Giám sát",
      row2Before: "Không có giám sát hay cảnh báo",
      row2After: "CloudWatch + CloudTrail",
      row3Aspect: "Bảo mật",
      row3Before: "Yếu, endpoint mở",
      row3After: "WAF + JWT + IAM + KMS",
      row4Aspect: "Khả dụng",
      row4Before: "Điểm lỗi đơn",
      row4After: "Multi-AZ, failover qua ALB",
      row5Aspect: "Kiểm soát truy cập",
      row5Before: "SSH với khóa dùng chung",
      row5After: "SSM + IAM role, không dùng SSH",
      row6Aspect: "Cơ sở dữ liệu",
      row6Before: "Công khai, không sao lưu",
      row6After: "Private subnet + RDS Multi-AZ",
    },
    slide14: {
      navTag: "🔴 Trực tiếp",
      cta: "🔗 Demo",
      title: "Hệ Thống Thời Gian Thực",
      subtitle: "Trình diễn hoạt động hệ thống theo thời gian thực",
      step1: "Đăng nhập người dùng và luồng xác thực JWT",
      step2: "Trình bày các chức năng cốt lõi của hệ thống",
      step3: "Tương tác API với backend AWS thông qua ALB",
    },
    slide15: {
      tag: "Kết luận",
      title: "Sẵn Sàng<br />Vận Hành ✓",
      point1: "Kiến trúc AWS có khả năng mở rộng với Auto Scaling",
      point2: "Khả dụng cao với triển khai Multi-AZ",
      point3: "Bảo mật mạnh mẽ: WAF, JWT, IAM, KMS",
      point4: "Sẵn sàng triển khai cho môi trường thực tế",
      badge: "Không chỉ là một dự án — đây là một hệ thống sẵn sàng vận hành",
    },
  },
};

const container = document.getElementById("presentationContainer");
const indicatorContainer = document.getElementById("slideIndicator");
const keyHint = document.getElementById("keyHint");
const languageButtons = Array.from(
  document.querySelectorAll("[data-lang-switch]")
);

let currentSlide = 1;
let currentLanguage = getSavedLanguage();

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage errors in local/private contexts.
  }
}

function getNestedValue(source, key) {
  return key.split(".").reduce((value, part) => value?.[part], source);
}

function resolveTranslation(language, key) {
  return (
    getNestedValue(translations[language], key) ??
    getNestedValue(translations[DEFAULT_LANGUAGE], key) ??
    ""
  );
}

function formatMessage(template, values = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, token) => {
    return values[token] ?? `{${token}}`;
  });
}

function applyTextTranslations(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = resolveTranslation(language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = resolveTranslation(language, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = resolveTranslation(language, element.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = resolveTranslation(language, element.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      resolveTranslation(language, element.dataset.i18nAriaLabel)
    );
  });
}

function updateIndicatorLabels(language) {
  const labelTemplate = resolveTranslation(language, "meta.slideIndicator");

  document.querySelectorAll(".indicator-dot").forEach((dot) => {
    const slideNumber = dot.dataset.slideNumber;
    const label = formatMessage(labelTemplate, { number: slideNumber });

    dot.title = label;
    dot.setAttribute("aria-label", label);
  });
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = currentLanguage;
  document.title = resolveTranslation(currentLanguage, "meta.pageTitle");

  applyTextTranslations(currentLanguage);
  updateIndicatorLabels(currentLanguage);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  saveLanguage(currentLanguage);
}

function buildIndicatorDots() {
  if (!indicatorContainer) {
    return;
  }

  indicatorContainer.innerHTML = "";

  for (let slideNumber = 1; slideNumber <= TOTAL_SLIDES; slideNumber += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "indicator-dot";
    dot.dataset.slideNumber = String(slideNumber);
    dot.addEventListener("click", () => goToSlide(slideNumber));
    indicatorContainer.appendChild(dot);
  }
}

function goToSlide(slideNumber) {
  const target = document.getElementById(`slide-${slideNumber}`);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function updateIndicator() {
  if (!container) {
    return;
  }

  const slideHeight = window.innerHeight;
  const scrollTop = container.scrollTop;
  const newSlide = Math.round(scrollTop / slideHeight) + 1;
  const boundedSlide = Math.max(1, Math.min(TOTAL_SLIDES, newSlide));

  if (boundedSlide !== currentSlide) {
    currentSlide = boundedSlide;
  }

  document.querySelectorAll(".indicator-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index + 1 === currentSlide);
  });
}

function handleKeyboardNavigation(event) {
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowRight" ||
    event.key === "PageDown"
  ) {
    if (currentSlide < TOTAL_SLIDES) {
      goToSlide(currentSlide + 1);
    }
  } else if (
    event.key === "ArrowUp" ||
    event.key === "ArrowLeft" ||
    event.key === "PageUp"
  ) {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  } else if (event.key === "Home") {
    goToSlide(1);
  } else if (event.key === "End") {
    goToSlide(TOTAL_SLIDES);
  }
}

function initLanguageSwitcher() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langSwitch;

      if (nextLanguage && nextLanguage !== currentLanguage) {
        setLanguage(nextLanguage);
      }
    });
  });
}

function init() {
  buildIndicatorDots();
  initLanguageSwitcher();
  setLanguage(currentLanguage);
  updateIndicator();

  if (container) {
    container.addEventListener("scroll", updateIndicator, { passive: true });
  }

  document.addEventListener("keydown", handleKeyboardNavigation);

  setTimeout(() => {
    document.body.classList.add("page-loaded");
  }, 10);

  setTimeout(() => {
    if (keyHint) {
      keyHint.style.opacity = "0";
    }
  }, 4000);
}

window.goToSlide = goToSlide;

init();
