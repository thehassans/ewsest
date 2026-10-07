/**
 * Eastern Workforce Solutions Establishment
 * Comprehensive Interactive Controller & Multilingual System (EN / AR)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. TRANSLATION DICTIONARY (ENGLISH & ARABIC)
  // =========================================================================
  const translations = {
    en: {
      // Top Bar & Contact Info
      "top_phone": "+966 54 127 4482 / +966 53 894 0869",
      "top_sales_email": "sales@ewsest.com",
      "top_info_email": "info@ewsest.com",
      "top_location": "Eastern Province, Saudi Arabia",

      // Navigation
      "nav_home": "Home",
      "nav_about": "ABOUT US",
      "nav_policies": "POLICIES",
      "nav_services": "SERVICES",
      "nav_brochure": "BROCHURE",
      "nav_news": "NEWS",
      "nav_contact": "CONTACT",

      // Services Dropdown
      "serv_tech": "Technical & Engineering Staffing",
      "serv_ind": "Industrial & Construction Manpower",
      "serv_om": "Operations & Maintenance (O&M)",
      "serv_shut": "Plant Shutdown & Turnaround Crews",
      "serv_exec": "Executive Search & Headhunting",
      "serv_saud": "Saudization & Talent Localization",

      // Hero Banner
      "banner_latest_badge": "Latest News",
      "banner_news_title": "Eastern Workforce Solutions Expands Manpower Deployment Across KSA",
      "banner_news_desc": "Empowering mega-projects and industrial infrastructure with certified technical talent and Vision 2030 alignment...",
      "banner_watch_video": "WATCH OUR <br>CORPORATE OVERVIEW",
      "banner_view_more": "View more",

      // Slide 1
      "slide1_sub": "Welcome",
      "slide1_title": "To Eastern Workforce Solutions Establishment",
      "slide1_desc": "<span class='brand-highlight'>EASTERN WORKFORCE SOLUTIONS</span> — Saudi Arabia's Leading Human Capital, Industrial Manpower & Technical Staffing Partner.",

      // Slide 2
      "slide2_sub": "EASTERN WORKFORCE SOLUTIONS",
      "slide2_title": "Premier Manpower & Talent Supply Across the Kingdom",
      "slide2_desc": "Providing vetted engineers, certified technical specialists, and dedicated crews for major Saudi infrastructure and industrial ventures.",

      // Slide 3
      "slide3_sub": "EASTERN WORKFORCE SOLUTIONS",
      "slide3_title": "Committed to Saudi Arabia's Vision 2030 Growth",
      "slide3_desc": "Driving sustainable human capital development, high-tier Saudization compliance, and world-class workforce management for corporate partners.",

      // Slide 4
      "slide4_sub": "EASTERN WORKFORCE SOLUTIONS",
      "slide4_title": "Supplies High-Quality Workforce Solutions<br>Across Saudi Arabia & GCC",

      // Slide 5
      "slide5_sub": "EASTERN WORKFORCE SOLUTIONS",
      "slide5_title": "Your Trusted Partner in Human Capital Excellence<br>In the Kingdom of Saudi Arabia",
      "slide5_desc": "Delivering certified personnel and rapid mobilization tailored to oil & gas, petrochemical, and construction projects.",

      // About Section
      "about_badge_text": "Eastern Workforce Solutions Is An ISO Certified <br> Establishment Serving Clients <br> Across <span class='sp-e151'>Saudi Arabia</span>",
      "about_title": "ABOUT <span>EASTERN WORKFORCE SOLUTIONS</span>",
      "about_p1": "A huge majority of industries across Saudi Arabia—such as Oil & Gas, Petrochemicals, Heavy Construction, Energy, Logistics, Industrial Manufacturing, Marine, Infrastructure, and Facilities Management—are fundamentally dependent on skilled, reliable, and highly certified human capital. Across the Kingdom, workforce empowerment and strategic talent deployment are central contributors to the national economy and the realization of Saudi Vision 2030.",
      "about_p2": "Eastern Workforce Solutions Establishment has continuously created sustainable value through its diversified, comprehensive portfolio of staffing and human capital management solutions. Leveraging competitive cost advantages, rapid mobilization capacity, and extensive regional experience across the Eastern Province, Riyadh, and Western Region—together with strict compliance with Saudi Labor Law, Nitaqat guidelines, and international HSE standards—Eastern Workforce Solutions delivers differentiated staffing solutions that meet demanding project timelines.",
      "about_btn": "Learn More",

      // HSE Section
      "hse_title": "HSE & <span>QUALITY</span>",
      "hse_desc": "As an establishment, Eastern Workforce Solutions is uncompromisingly committed to the health, safety, and professional development of all our personnel. Through rigorous safety inductions, continuous skills training, and dedicated employee welfare programs tailored to client site specifications, we maintain zero-incident workplaces aligned with Aramco, SABIC, and international HSE standards.",
      "hse_health": "Health",
      "hse_safety": "Safety",
      "hse_env": "Environment",
      "hse_quality": "Quality",
      "hse_btn": "Learn More",

      // Services Section
      "prod_title": "SERVICES & <span>WORKFORCE SOLUTIONS</span>",
      "prod_desc": "Welcome our valued corporate clients, EPC contractors, and industrial partners. Whether you require specialized engineering teams, large-scale industrial manpower, or long-term operational staffing for projects in Saudi Arabia, submit your requirements below. We look forward to powering your workforce.",
      "prod_request_btn": "Request Manpower",
      "view_detail": "View detail",

      "card1_title": "TECHNICAL & ENGINEERING STAFFING",
      "card1_desc": "Deploying certified mechanical, electrical, instrumentation, civil, and QA/QC engineers and supervisors tailored for industrial, energy, and construction operations across KSA...",

      "card2_title": "INDUSTRIAL & CONSTRUCTION MANPOWER",
      "card2_desc": "Eastern Workforce Solutions is a leading manpower supplier in Saudi Arabia, deploying vetted 6G welders, pipefitters, electricians, riggers, and heavy equipment operators...",

      "card3_title": "OPERATIONS & MAINTENANCE (O&M)",
      "card3_desc": "Long-term operational personnel and maintenance technicians for petrochemical facilities, commercial complexes, power plants, and industrial utilities throughout the Kingdom...",

      "card4_title": "PLANT SHUTDOWN & TURNAROUND CREWS",
      "card4_desc": "Rapid deployment of experienced multi-craft turnaround crews for planned refinery maintenance, industrial overhauls, and emergency plant outages with strict safety adherence...",

      "card5_title": "EXECUTIVE SEARCH & RECRUITMENT",
      "card5_desc": "Specialized recruitment solutions identifying and placing elite executive, management, and hard-to-fill technical leadership talent for competitive organizations in Saudi Arabia...",

      "card6_title": "SAUDIZATION & TALENT LOCALIZATION",
      "card6_desc": "Comprehensive national talent programs assisting enterprises in achieving high-green and platinum Nitaqat tier status while nurturing skilled Saudi talent across core industries...",

      // News Section
      "news_title": "NEWS AND <span>MEDIA</span>",
      "news_desc": "Stay informed with the latest updates, project mobilizations, safety achievements, and strategic workforce milestones from Eastern Workforce Solutions Establishment.",
      "news_view_more": "View More",

      "blog1_title": "Eastern Workforce Solutions Deploys 1,500+ Specialized Personnel for Mega-Projects",
      "blog1_desc": "Strategic mobilization of certified mechanical, electrical, and QA/QC technical crews across major industrial zones in the Eastern Province.",

      "blog2_title": "Achieved 6 Million Safe Man-Hours Milestone with Zero Lost Time Incidents",
      "blog2_desc": "Demonstrating our unyielding dedication to occupational health, safety, and strict Aramco & SABIC contractor compliance benchmarks.",

      "blog3_title": "Strategic Saudization & Talent Development: Nitaqat Platinum Tier Partnership",
      "blog3_desc": "Empowering national Saudi engineering talent and craft specialists through certified vocational training programs aligned with Vision 2030.",

      // Brochure Section
      "brochure_title": "BROCHURE CENTER",
      "brochure_desc": "Download our comprehensive corporate profile and manpower supply credentials (2026 Edition).",
      "brochure_btn": "Download Profile",

      "cert_title": "CERTIFICATIONS & ACCREDITATIONS",
      "cert_desc": "Eastern Workforce Solutions Establishment maintains certified ISO 9001 (Quality Management), ISO 45001 (Occupational Health & Safety), and ISO 14001 (Environmental Management) standards, ensuring full compliance with Saudi labor authorities and international client expectations.",
      "cert_btn": "View Certificates",

      // Footer
      "foot_col1_title": "COMPANY",
      "foot_col2_title": "WORKFORCE SOLUTIONS",
      "foot_col3_title": "POLICIES",
      "foot_col4_title": "GET IN TOUCH",
      "foot_col5_title": "KEEP UP-TO-SPEED",
      "foot_newsletter_link": "SIGN UP FOR OUR NEWSLETTER",
      "foot_follow": "FOLLOW US ON",
      "foot_safe": "Achieved 6 Million Safe Man-Hours",
      "foot_copyright": "© 2026 <span>Eastern Workforce Solutions Establishment</span>. All rights reserved. Kingdom of Saudi Arabia.",

      // Modal Form
      "modal_req_title": "Request Workforce Solutions",
      "modal_req_desc": "Submit your project requirements and an account manager will get back to you promptly.",
      "modal_lbl_company": "Company / Client Name *",
      "modal_lbl_contact": "Contact Person *",
      "modal_lbl_phone": "Phone / Mobile *",
      "modal_lbl_email": "Official Email *",
      "modal_lbl_service": "Service Category *",
      "modal_lbl_scope": "Project Scope & Manpower Quantity",
      "modal_submit_btn": "Submit Inquiry"
    },

    ar: {
      // Top Bar & Contact Info
      "top_phone": "+966 54 127 4482 / +966 53 894 0869",
      "top_sales_email": "sales@ewsest.com",
      "top_info_email": "info@ewsest.com",
      "top_location": "المنطقة الشرقية، المملكة العربية السعودية",

      // Navigation
      "nav_home": "الرئيسية",
      "nav_about": "من نحن",
      "nav_policies": "السياسات",
      "nav_services": "خدماتنا",
      "nav_brochure": "الكتيب التعريفي",
      "nav_news": "الأخبار",
      "nav_contact": "اتصل بنا",

      // Services Dropdown
      "serv_tech": "الكوادر الفنية والهندسية",
      "serv_ind": "العمالة الصناعية والإنشائية",
      "serv_om": "كوادر التشغيل والصيانة",
      "serv_shut": "فرق إغلاق وصيانة المصانع",
      "serv_exec": "التوظيف التنفيذي واستقطاب الكفاءات",
      "serv_saud": "التوطين والسعودة وإدارة الكوادر",

      // Hero Banner
      "banner_latest_badge": "آخر الأخبار",
      "banner_news_title": "مؤسسة الحلول الشرقية توسع عمليات توريد الكوادر في جميع أنحاء المملكة",
      "banner_news_desc": "تمكين المشاريع الكبرى والبنية التحتية الصناعية بالكوادر الفنية المعتمدة بما يتماشى مع رؤية المملكة 2030...",
      "banner_watch_video": "شاهد عرضنا <br>التعريفي للمؤسسة",
      "banner_view_more": "عرض المزيد",

      // Slide 1
      "slide1_sub": "مرحباً بكم",
      "slide1_title": "في مؤسسة الحلول الشرقية للقوى العاملة",
      "slide1_desc": "<span class='brand-highlight'>الحلول الشرقية للقوى العاملة</span> — شريككم الرائد في توفير الكوادر البشرية والعمالة الصناعية والحلول الهندسية في المملكة العربية السعودية.",

      // Slide 2
      "slide2_sub": "الحلول الشرقية للقوى العاملة",
      "slide2_title": "الريادة في توريد القوى العاملة والكفاءات بالمملكة",
      "slide2_desc": "توفير مهندسين معتمدين وفنيين متخصصين وفرق عمل متميزة لكبرى مشاريع البنية التحتية والصناعة في المملكة.",

      // Slide 3
      "slide3_sub": "الحلول الشرقية للقوى العاملة",
      "slide3_title": "ملتزمون بدعم مستهدفات رؤية المملكة 2030",
      "slide3_desc": "تعزيز التنمية المستدامة لرأس المال البشري، والالتزام بأعلى نطاقات السعودة، وإدارة القوى العاملة باحترافية عالمية.",

      // Slide 4
      "slide4_sub": "الحلول الشرقية للقوى العاملة",
      "slide4_title": "حلول قوى عاملة متكاملة وعالية الجودة<br>في جميع أنحاء المملكة والخليج",

      // Slide 5
      "slide5_sub": "الحلول الشرقية للقوى العاملة",
      "slide5_title": "شريككم الموثوق للتميز في إدارة رأس المال البشري<br>بالمملكة العربية السعودية",
      "slide5_desc": "نقدم كوادر بشرية مؤهلة وجاهزية سريعة للنشر في قطاعات النفط والغاز والبتروكيماويات والإنشاءات الكبرى.",

      // About Section
      "about_badge_text": "مؤسسة الحلول الشرقية حاصلة على شهادات الآيزو <br> وتخدم عملاءها <br> في كافة مناطق <span class='sp-e151'>المملكة العربية السعودية</span>",
      "about_title": "نبذة عن <span>مؤسسة الحلول الشرقية للقوى العاملة</span>",
      "about_p1": "تعتمد كبرى القطاعات الصناعية في المملكة العربية السعودية—مثل النفط والغاز، والبتروكيماويات، والإنشاءات الضخمة، والطاقة، والخدمات اللوجستية، والتصنيع الثقيل، والملاحة، والبنية التحتية، وإدارة المرافق—بشكل جوهري على رأس مال بشري ماهر وموثوق ومعتمد. ويُعد تمكين القوى العاملة والنشر الاستراتيجي للكفاءات رافداً أساسياً للاقتصاد الوطني وتحقيق تطلعات رؤية السعودية 2030.",
      "about_p2": "تسعى مؤسسة الحلول الشرقية للقوى العاملة باستمرار إلى إيجاد قيمة مستدامة من خلال محفظتها المتنوعة والمتكاملة لحلول التوظيف وإدارة الموارد البشرية. وبفضل المزايا التنافسية وسرعة حشد الكوادر والخبرة الإقليمية الواسعة في المنطقة الشرقية والرياض والمنطقة الغربية—إلى جانب الالتزام التام بنظام العمل السعودي وضوابط نطاقات ومعايير الصحة والسلامة الدولية—تقدم المؤسسة حلولاً تفي بأعلى متطلبات المشاريع.",
      "about_btn": "اعرف المزيد",

      // HSE Section
      "hse_title": "الصحة والسلامة والبيئة و<span>الجودة</span>",
      "hse_desc": "تلتزم مؤسسة الحلول الشرقية التزاماً راسخاً بضمان صحة وسلامة وتطوير جميع العاملين من خلال برامج تدريبية وتأهيلية مكثفة وبرامج رعاية وظيفية متوافقة مع متطلبات أرامكو وسابك والمعايير الدولية للصحة والسلامة والبيئة.",
      "hse_health": "الصحة",
      "hse_safety": "السلامة",
      "hse_env": "البيئة",
      "hse_quality": "الجودة",
      "hse_btn": "اعرف المزيد",

      // Services Section
      "prod_title": "خدماتنا و<span>حلول القوى العاملة</span>",
      "prod_desc": "نرحب بعملائنا الكرام ومقاولي المشاريع والشركاء الصناعيين. سواء كنتم بحاجة لفرق هندسية متخصصة، أو عمالة صناعية بأعداد كبيرة، أو تشغيل وصيانة طويلة الأجل، يمكنكم تقديم طلبكم عبر النموذج أدناه.",
      "prod_request_btn": "طلب قوى عاملة",
      "view_detail": "عرض التفاصيل",

      "card1_title": "الكوادر الفنية والهندسية",
      "card1_desc": "توريد مهندسين ومشرفي ميكانيكا، كهرباء، أجهزة دقيقة، مدني، وضبط جودة معتمدين لمشاريع الصناعة والطاقة والإنشاءات في المملكة...",

      "card2_title": "العمالة الصناعية والإنشائية",
      "card2_desc": "مؤسسة الحلول الشرقية رائدة في توفير لحامين 6G، فنيي أنابيب، كهربائيين، فنيي رفع وحبال، ومشغلي معدات ثقيلة معتمدين...",

      "card3_title": "كوادر التشغيل والصيانة (O&M)",
      "card3_desc": "تأمين كوادر تشغيلية وفنيي صيانة لمجمعات البتروكيماويات، والمباني التجارية، ومحطات الطاقة والمرافق الصناعية...",

      "card4_title": "فرق إغلاق وصيانة المصانع الدورية",
      "card4_desc": "جاهزية وسرعة في نشر فرق الصيانة الشاملة لأعمال التوقف المجدولة وعمليات الصيانة الطارئة للمصافي والمصانع...",

      "card5_title": "التوظيف التنفيذي واستقطاب الكفاءات",
      "card5_desc": "حلول استقطاب كفاءات قيادية وإدارية وفنية نادرة للشركات والمؤسسات الكبرى عبر شبكات توظيف احترافية متخصصة...",

      "card6_title": "التوطين والسعودة وإدارة الكوادر",
      "card6_desc": "برامج توطين متقدمة تُمكّن المنشآت من تحقيق والحفاظ على النطاق البلاتيني والأخضر المرتفع، مع صقل المهارات الوطنية...",

      // News Section
      "news_title": "الأخبار و<span>المركز الإعلامي</span>",
      "news_desc": "تابعوا أحدث مستجدات مؤسسة الحلول الشرقية، وتفاصيل نشر الكوادر في المشاريع الكبرى وإنجازات السلامة المهنية بالمملكة.",
      "news_view_more": "اقرأ المزيد",

      "blog1_title": "الحلول الشرقية تنجح في نشر أكثر من 1500 كادر متخصص للمشاريع الكبرى",
      "blog1_desc": "حشد استراتيجي لفرق فنية معتمدة في مجالات الميكانيكا والكهرباء وضمان الجودة بكبرى المناطق الصناعية بالمنطقة الشرقية.",

      "blog2_title": "تحقيق إنجاز 6 ملايين ساعة عمل آمنة بدون أي إصابات مهدرة للوقت",
      "blog2_desc": "تأكيد مستمر على الالتزام الصارم بأعلى معايير السلامة والصحة المهنية ومتطلبات المقاولين في أرامكو وسابك.",

      "blog3_title": "تعزيز برامج السعودة وتطوير الكفاءات الوطنية ضمن النطاق البلاتيني",
      "blog3_desc": "إطلاق مسارات تدريبية وتأهيلية متخصصة لإعداد وتوظيف الشباب السعودي في الوظائف الفنية والهندسية الحيوية.",

      // Brochure Section
      "brochure_title": "مركز الكتيبات التعريفية",
      "brochure_desc": "حمّل الملف التعريفي الشامل لمؤسسة الحلول الشرقية للقوى العاملة وسابقة الأعمال المعتمدة (إصدار 2026).",
      "brochure_btn": "تحميل الملف التعريفي",

      "cert_title": "الشهادات والاعتمادات الرسمية",
      "cert_desc": "تحمل المؤسسة شهادات الأيزو ISO 9001 (نظام إدارة الجودة)، و ISO 45001 (السلامة والصحة المهنية)، و ISO 14001 (الإدارة البيئية)، بما يضمن الامتثال الكامل لكافة المتطلبات والمعايير.",
      "cert_btn": "عرض الشهادات",

      // Footer
      "foot_col1_title": "عن المؤسسة",
      "foot_col2_title": "حلول القوى العاملة",
      "foot_col3_title": "السياسات والأنظمة",
      "foot_col4_title": "بيانات التواصل",
      "foot_col5_title": "ابقَ على تواصل",
      "foot_newsletter_link": "اشترك في نشرتنا البريدية",
      "foot_follow": "تابعنا على",
      "foot_safe": "إنجاز 6 ملايين ساعة عمل آمنة",
      "foot_copyright": "© 2026 <span>مؤسسة الحلول الشرقية للقوى العاملة</span>. جميع الحقوق محفوظة. المملكة العربية السعودية.",

      // Modal Form
      "modal_req_title": "طلب حلول قوى عاملة",
      "modal_req_desc": "يرجى تعبئة تفاصيل مشروعكم وسيتواصل معكم مدير حسابات العملاء فوراً.",
      "modal_lbl_company": "اسم الشركة / العميل *",
      "modal_lbl_contact": "الشخص المسؤول *",
      "modal_lbl_phone": "رقم الهاتف / الجوال *",
      "modal_lbl_email": "البريد الإلكتروني الرسمي *",
      "modal_lbl_service": "مجال الخدمة المطلوبة *",
      "modal_lbl_scope": "نطاق المشروع والأعداد المطلوبة",
      "modal_submit_btn": "إرسال الطلب"
    }
  };

  // Full Blog Articles Content
  const blogArticles = {
    1: {
      date: "OCT 04, 2026",
      dateAr: "04 أكتوبر 2026",
      titleEn: "Eastern Workforce Solutions Successfully Deploys 1,500+ Specialized Personnel for Mega-Projects",
      titleAr: "الحلول الشرقية تنجح في نشر أكثر من 1500 كادر متخصص للمشاريع الكبرى في المنطقة الشرقية",
      img: "assets/eastern-operations-center.jpg",
      textEn: `
        <p><strong>AL KHOBAR, SAUDI ARABIA</strong> — Eastern Workforce Solutions Establishment has proudly announced the completed mobilization and deployment of over 1,500 certified technical professionals and skilled personnel across critical energy, petrochemical, and infrastructure sites throughout Jubail, Dammam, and Ras Al Khair.</p>
        <p>This landmark deployment encompasses certified mechanical engineers, electrical technicians, 6G welders, civil supervisors, and QA/QC inspection staff deployed to leading EPC contractors supporting Saudi Arabia's Vision 2030 industrial growth.</p>
        <p>With an extensive talent pipeline and rigorous onboarding vetting, Eastern Workforce Solutions guarantees complete compliance with Aramco, SABIC, and Royal Commission safety regulations, ensuring rapid project startup and zero operational delays.</p>
      `,
      textAr: `
        <p><strong>الخبر، المملكة العربية السعودية</strong> — أعلنت مؤسسة الحلول الشرقية للقوى العاملة بكل اعتزاز عن استكمال حشد ونشر أكثر من 1500 متخصص فني وكادر مهني معتمد عبر مواقع الطاقة والبتروكيماويات والبنية التحتية الحيوية في الجبيل والدمام ورأس الخير.</p>
        <p>ويشمل هذا الانتشار الواسع مهندسين ميكانيكيين وكهربائيين، ولحامين معتمدين بدرجة 6G، ومشرفين مدنيين، وكوادر ضبط وضمان الجودة (QA/QC) لصالح كبرى شركات المقاولات العامة الداعمة لمشاريع رؤية السعودية 2030.</p>
        <p>تضمن المؤسسة الجاهزية والامتثال التام لجميع معايير السلامة المعتمدة لدى أرامكو السعودية وسابك والهيئة الملكية، بما يمنع أي تأخير في الجدول الزمني للمشاريع.</p>
      `
    },
    2: {
      date: "SEP 28, 2026",
      dateAr: "28 سبتمبر 2026",
      titleEn: "Achieved 6 Million Safe Man-Hours Milestone with Zero Lost Time Incidents",
      titleAr: "تحقيق إنجاز 6 ملايين ساعة عمل آمنة بدون أي إصابات مهدرة للوقت",
      img: "assets/eastern-hq-building.jpg",
      textEn: `
        <p><strong>RIYADH / DAMMAM</strong> — Demonstrating an unwavering dedication to personnel safety and operational excellence, Eastern Workforce Solutions Establishment has officially surpassed 6,000,000 Safe Man-Hours across all 24 active partner client sites in Saudi Arabia with zero Lost Time Incidents (LTI).</p>
        <p>Operating under rigorous ISO 45001 (Occupational Health & Safety) certified management systems, the establishment conducts regular toolbox talks, proactive hazard identification workshops, and mandatory defensive safety courses for every deployed craftsperson.</p>
        <p>"Our workers' wellbeing is our highest institutional priority. Reaching 6 million safe hours reflects the daily discipline and culture of safety embraced by our teams in field environments," stated the Executive Director of Operations.</p>
      `,
      textAr: `
        <p><strong>الرياض / الدمام</strong> — في تأكيد جديد على الالتزام الصارم بسلامة الكوادر والتميز التشغيلي، تجاوزت مؤسسة الحلول الشرقية للقوى العاملة رسمياً حاجز 6,000,000 ساعة عمل آمنة في جميع مواقع عملائها الـ 24 النشطة في المملكة العربية السعودية دون تسجيل أي إصابة عمل مهدرة للوقت.</p>
        <p>من خلال تطبيق نظام إدارة السلامة والصحة المهنية ISO 45001، تلتزم المؤسسة بإجراء ورش العمل التوعوية اليومية، وتقييم المخاطر المسبق، وتوفير كافة معدات الوقاية المعتمدة لجميع الكوادر في الميدان.</p>
        <p>وأكدت الإدارة التنفيذية أن سلامة الإنسان هي المبدأ الأول الذي لا مساومة عليه في ثقافة العمل بمؤسسة الحلول الشرقية.</p>
      `
    },
    3: {
      date: "SEP 15, 2026",
      dateAr: "15 سبتمبر 2026",
      titleEn: "Strategic Saudization & Talent Development: Nitaqat Platinum Tier Partnership",
      titleAr: "تعزيز برامج التوطين واستقطاب الكفاءات الوطنية ضمن النطاق البلاتيني لنطاقات",
      img: "assets/saudi-tower.jpg",
      textEn: `
        <p><strong>SAUDI ARABIA</strong> — In close alignment with the Human Capability Development Program under Saudi Vision 2030, Eastern Workforce Solutions Establishment has expanded its specialized Saudization tracks, maintaining its prestigious Platinum Tier standing within the Ministry of Human Resources Nitaqat classification.</p>
        <p>The program focuses on recruiting, training, and placing national Saudi talent in technical supervisory positions, health & safety inspection, plant maintenance, and project administration across industrial sectors.</p>
        <p>By partnering with leading vocational institutes across the Eastern Province, Eastern Workforce Solutions delivers practical on-the-job training that guarantees long-term career growth for Saudi youth while solving strategic workforce localization targets for client enterprises.</p>
      `,
      textAr: `
        <p><strong>المملكة العربية السعودية</strong> — تماشياً مع برنامج تنمية القدرات البشرية أحد برامج تحقيق رؤية السعودية 2030، وسعت مؤسسة الحلول الشرقية للقوى العاملة مساراتها المخصصة للتوطين، مع الحفاظ على تصنيفها المرموق في النطاق البلاتيني بوزارة الموارد البشرية والتنمية الاجتماعية.</p>
        <p>يركز البرنامج على استقطاب وتأهيل وتوظيف الكفاءات الوطنية الشابة في المجالات الإشرافية والهندسية وإدارة السلامة وتشغيل وصيانة المرافق الصناعية.</p>
        <p>عبر شراكات مع المعاهد التقنية المعتمدة، تقدم المؤسسة برامج تدريب على رأس العمل تضمن مساراً مهنياً واعداً للكوادر السعودية وتسهم في تلبية مستهدفات التوطين لدى شركائها التجاريين.</p>
      `
    }
  };

  // Service Details Data
  const serviceDetails = {
    "Technical & Engineering Staffing": {
      titleAr: "الكوادر الفنية والهندسية",
      descEn: "Deployment of highly qualified mechanical, civil, electrical, instrumentation, QA/QC, and chemical engineers and site supervisors for oil, gas, power, and industrial plants across Saudi Arabia.",
      descAr: "توفير مهندسين ومشرفي مواقع مؤهلين في تخصصات الميكانيكا، والمدني، والكهرباء، والآلات الدقيقة، ومراقبة الجودة، للعمل في مشاريع النفط والغاز والطاقة والمصانع بالمملكة.",
      bulletsEn: ["Aramco & SABIC Certified Inspectors", "Multi-disciplinary Site Supervisors", "Engineering Design & Field Support", "QA/QC Lead Auditors"],
      bulletsAr: ["مفتشو جودة معتمدون لأرامكو وسابك", "مشرفو مواقع متعددو التخصصات", "دعم هندسي ميداني وتصميمي", "مدققو جودة رئيسيون"]
    },
    "Industrial & Construction Manpower": {
      titleAr: "العمالة الصناعية والإنشائية",
      descEn: "Certified 6G welders, structural fitters, pipe fabricators, industrial electricians, certified riggers, scaffolding crews, and heavy machinery operators for construction sites.",
      descAr: "لحامون معتمدون 6G، فنيو تركيب هياكل، فنيو أنابيب، كهربائيون صناعيون، فنيو رفع وسقالات، ومشغلو معدات ثقيلة للمشاريع الإنشائية.",
      bulletsEn: ["Certified 6G & TIG Welders", "Structural & Piping Fitters", "Level 1/2/3 Certified Riggers", "Heavy Equipment Operators"],
      bulletsAr: ["لحامون معتمدون 6G و TIG", "فنيو هياكل وأنابيب صناعية", "فنيو رفع وحبال مستويات 1 و 2 و 3", "مشغلو رافعات ومعدات ثقيلة"]
    },
    "Operations & Maintenance (O&M)": {
      titleAr: "كوادر التشغيل والصيانة",
      descEn: "Dedicated continuous operational teams, facility maintenance specialists, plant technicians, and preventative maintenance crews supporting continuous industrial operations.",
      descAr: "فرق تشغيل دائمة ومتخصصة، فنيو صيانة مرافق ومصانع، وكوادر صيانة وقائية لضمان استمرارية وكفاءة خطوط الإنتاج والمرافق الصناعية.",
      bulletsEn: ["Preventive & Predictive Maintenance", "HVAC & Electrical Plant Teams", "Machinery Reliability Specialists", "Long-term Facility Technicians"],
      bulletsAr: ["صيانة وقائية وتنبؤية متقدمة", "فرق تكييف وكهرباء صناعية", "أخصائيو موثوقية المعدات", "فنيو تشغيل وصيانة عقود طويلة الأجل"]
    },
    "Plant Shutdown & Turnaround Crews": {
      titleAr: "فرق إغلاق وصيانة المصانع الدورية",
      descEn: "Rapid mobilization of hundreds of skilled multi-craft specialists for planned turnaround overhauls, catalyst replacements, and emergency refinery outages.",
      descAr: "حشد سريع لمئات الفنيين المتخصصين في أعمال الصيانة الدورية الشاملة (Turnaround) وتغيير العوامل المساعدة والصيانة الطارئة للمصافي.",
      bulletsEn: ["Rapid Multi-craft Mobilization", "Vessel & Column Overhaul Crews", "High-pressure Hydro-jetting Teams", "24/7 Shift Execution"],
      bulletsAr: ["سرعة استثنائية في حشد الأعداد الكبيرة", "صيانة الأوعية والأبراج والمفاعلات", "فرق الغسيل المائي عالي الضغط", "تنفيذ الورديات على مدار الساعة"]
    },
    "Executive Search & Headhunting": {
      titleAr: "التوظيف التنفيذي واستقطاب الكفاءات",
      descEn: "Executive headhunting service identifying senior engineering managers, plant directors, C-suite leaders, and specialized technical experts for competitive organizations.",
      descAr: "خدمة استقطاب تنفيذي متخصصة للبحث عن مدراء المصانع، ورؤساء القطاعات الهندسية، والقيادات التنفيذية، والخبراء الفنيين النادرين.",
      bulletsEn: ["Confidential Executive Search", "Technical Assessment & Vetting", "Leadership & C-Suite Placement", "Regional & Global Headhunting"],
      bulletsAr: ["بحث واستقطاب تنفيذي سري وموثوق", "تقييم فني وإداري دقيق", "توظيف الكفاءات القيادية", "شبكة استقطاب إقليمية ودولية"]
    },
    "Saudization & Talent Localization": {
      titleAr: "التوطين والسعودة وإدارة الكوادر",
      descEn: "Strategic talent programs empowering client firms to reach Platinum / High-Green Nitaqat tiers while recruiting and developing high-caliber Saudi talent.",
      descAr: "برامج توطين استراتيجية تساعد شركاءنا على بلوغ والحفاظ على النطاقات البلاتينية والأخضر المرتفع، مع تدريب وتطوير الكفاءات السعودية.",
      bulletsEn: ["Nitaqat Compliance Consulting", "Saudi Talent Onboarding & Training", "Wage Protection System (WPS) Compliance", "Sustainable Nationalization"],
      bulletsAr: ["استشارات الامتثال لبرنامج نطاقات", "استقطاب وتدريب الكفاءات الوطنية", "توافق تام مع نظام حماية الأجور (WPS)", "سعودة مستدامة وفعالة"]
    }
  };

  // Current Language State
  let currentLang = localStorage.getItem('ews_lang') || 'en';

  // Apply Language Function
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ews_lang', lang);
    const html = document.documentElement;

    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      document.body.classList.add('rtl-mode');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      document.body.classList.remove('rtl-mode');
    }

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update flag and text indicator in header
    const currentFlagImg = document.getElementById('current-lang-flag');
    const currentLangText = document.getElementById('current-lang-text');
    if (currentFlagImg) {
      currentFlagImg.src = lang === 'ar' ? 'assets/asset-021.jpg' : 'assets/asset-020.jpg';
    }
    if (currentLangText) {
      currentLangText.textContent = lang === 'ar' ? 'العربية' : 'ENG';
    }
  }

  // Language Click Handlers
  document.querySelectorAll('.lang-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Initialize Language
  setLanguage(currentLang);

  // =========================================================================
  // 2. HEADER SCROLL DETECTION
  // =========================================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });

  // =========================================================================
  // 3. HERO BANNER SLIDER
  // =========================================================================
  const slides = document.querySelectorAll('.banner .slide');
  const slideBtns = document.querySelectorAll('.banner .slide_buttons .slide_btn');
  const prevBtn = document.querySelector('.banner .previous_btn');
  const nextBtn = document.querySelector('.banner .next_btn');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval = null;

  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
        slide.style.display = 'block';
      } else {
        slide.classList.remove('active');
        slide.style.display = 'none';
      }
    });

    slideBtns.forEach((btn, i) => {
      if (i === currentSlide) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    if (!slideInterval) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  slideBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(i);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  const sliderViewer = document.querySelector('.banner .slide_viewer');
  if (sliderViewer) {
    sliderViewer.addEventListener('mouseenter', stopAutoPlay);
    sliderViewer.addEventListener('mouseleave', startAutoPlay);
  }

  showSlide(0);
  startAutoPlay();

  // =========================================================================
  // 4. BLOG / NEWS ARTICLE MODAL
  // =========================================================================
  const newsModal = document.getElementById('news-article-modal');
  const newsModalImg = document.getElementById('news-modal-img');
  const newsModalDate = document.getElementById('news-modal-date');
  const newsModalTitle = document.getElementById('news-modal-title');
  const newsModalBody = document.getElementById('news-modal-body');
  const closeNewsModalBtn = document.getElementById('close-news-modal');

  function openNewsArticle(articleId) {
    const article = blogArticles[articleId];
    if (!article || !newsModal) return;

    newsModalImg.src = article.img;
    newsModalDate.textContent = currentLang === 'ar' ? article.dateAr : article.date;
    newsModalTitle.textContent = currentLang === 'ar' ? article.titleAr : article.titleEn;
    newsModalBody.innerHTML = currentLang === 'ar' ? article.textAr : article.textEn;

    newsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNewsArticle() {
    if (newsModal) {
      newsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.open-blog-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const articleId = trigger.getAttribute('data-article-id');
      openNewsArticle(articleId);
    });
  });

  if (closeNewsModalBtn) closeNewsModalBtn.addEventListener('click', closeNewsArticle);
  if (newsModal) {
    newsModal.addEventListener('click', (e) => {
      if (e.target === newsModal) closeNewsArticle();
    });
  }

  // =========================================================================
  // 5. SERVICE DETAIL MODAL
  // =========================================================================
  const serviceModal = document.getElementById('service-detail-modal');
  const serviceModalTitle = document.getElementById('service-modal-title');
  const serviceModalDesc = document.getElementById('service-modal-desc');
  const serviceModalBullets = document.getElementById('service-modal-bullets');
  const serviceModalRequestBtn = document.getElementById('service-modal-request-btn');
  const closeServiceModalBtn = document.getElementById('close-service-modal');

  let currentSelectedService = '';

  function openServiceDetail(serviceName) {
    const detail = serviceDetails[serviceName];
    if (!detail || !serviceModal) return;

    currentSelectedService = serviceName;
    serviceModalTitle.textContent = currentLang === 'ar' ? detail.titleAr : serviceName;
    serviceModalDesc.textContent = currentLang === 'ar' ? detail.descAr : detail.descEn;

    const bullets = currentLang === 'ar' ? detail.bulletsAr : detail.bulletsEn;
    serviceModalBullets.innerHTML = bullets.map(b => `<li style="margin-bottom: 8px;">&bull; ${b}</li>`).join('');

    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceDetail() {
    if (serviceModal) {
      serviceModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.open-service-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = trigger.getAttribute('data-service') || 'Technical & Engineering Staffing';
      openServiceDetail(serviceName);
    });
  });

  if (closeServiceModalBtn) closeServiceModalBtn.addEventListener('click', closeServiceDetail);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceDetail();
    });
  }

  if (serviceModalRequestBtn) {
    serviceModalRequestBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeServiceDetail();
      openContactModal(currentSelectedService);
    });
  }

  // =========================================================================
  // 6. CONTACT / REQUEST MANPOWER MODAL
  // =========================================================================
  const contactModal = document.getElementById('contact-modal');
  const closeContactBtn = document.getElementById('close-contact-modal');

  function openContactModal(serviceTitle = '') {
    if (contactModal) {
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (serviceTitle) {
        const select = document.getElementById('inquiry-service');
        if (select) {
          for (let option of select.options) {
            if (option.value.toLowerCase().includes(serviceTitle.toLowerCase()) || option.text.toLowerCase().includes(serviceTitle.toLowerCase())) {
              option.selected = true;
              break;
            }
          }
        }
      }
    }
  }

  function closeContactModal() {
    if (contactModal) {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.open-contact-modal-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || '';
      openContactModal(serviceName);
    });
  });

  if (closeContactBtn) closeContactBtn.addEventListener('click', closeContactModal);
  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  const contactForm = document.getElementById('inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Submitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        const successMsg = currentLang === 'ar' 
          ? 'شكراً لكم! تم استلام طلبكم بنجاح. سيتواصل معكم أحد مسؤولي مبيعات مؤسسة الحلول الشرقية في أقرب وقت.'
          : 'Thank you! Your workforce inquiry has been received. An Eastern Workforce Solutions representative will contact you shortly.';
        alert(successMsg);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        closeContactModal();
      }, 700);
    });
  }

  // =========================================================================
  // 7. CERTIFICATES MODAL
  // =========================================================================
  const certModal = document.getElementById('cert-viewer-modal');
  const closeCertBtn = document.getElementById('close-cert-modal');

  function openCertModal() {
    if (certModal) {
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.open-cert-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openCertModal();
    });
  });

  if (closeCertBtn) closeCertBtn.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // =========================================================================
  // 8. BROCHURE DOWNLOAD
  // =========================================================================
  const downloadBrochureBtn = document.getElementById('download-brochure-btn');
  if (downloadBrochureBtn) {
    downloadBrochureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = currentLang === 'ar' 
        ? 'جاري تنزيل الملف التعريفي لمؤسسة الحلول الشرقية للقوى العاملة (إصدار 2026)...'
        : 'Downloading Eastern Workforce Solutions Establishment Corporate Profile (2026 Edition)...';
      alert(msg);
      const link = document.createElement('a');
      link.href = 'assets/logo.png';
      link.download = 'Eastern-Workforce-Solutions-Profile-2026.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // =========================================================================
  // 9. VIDEO MODAL POPUP
  // =========================================================================
  const videoModal = document.getElementById('video-wrap');
  const openVideoBtn = document.getElementById('open-video-btn');
  const playVideoThumb = document.getElementById('play-video-thumb');
  const closeVideoBtn = document.getElementById('close-video-btn');
  const closeVideoOverlay = document.getElementById('close-video-overlay');

  function openVideo() {
    if (videoModal) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeVideo() {
    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      const iframe = document.getElementById('video-iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = src;
      }
    }
  }

  if (openVideoBtn) openVideoBtn.addEventListener('click', (e) => { e.preventDefault(); openVideo(); });
  if (playVideoThumb) playVideoThumb.addEventListener('click', (e) => { e.preventDefault(); openVideo(); });
  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
  if (closeVideoOverlay) closeVideoOverlay.addEventListener('click', closeVideo);

  // =========================================================================
  // 10. MOBILE NAVIGATION & KEYBOARD ACCESSIBILITY
  // =========================================================================
  const mobileToggle = document.getElementById('toggle');
  const mobileNavLinks = document.querySelectorAll('header .nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileToggle && mobileToggle.checked) {
        mobileToggle.checked = false;
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
      closeContactModal();
      closeNewsArticle();
      closeServiceDetail();
      closeCertModal();
    }
  });
});
