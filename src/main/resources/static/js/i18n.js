/* ─── Antigravity i18n Engine ─── */
window.I18N = (function () {

  var T = {
    en: {
      lang_btn: '🌐 عربي',

      /* Navbar */
      nav_projects:     'Projects',
      nav_how:          'How It Works',
      nav_contact:      'Contact',
      nav_admin:        'Admin Panel',

      /* Hero */
      hero_eyebrow:     "Pakistan's Fastest Growing Real Estate",
      hero_title_1:     'Find Your Perfect',
      hero_title_2:     'Dream Property',
      hero_sub:         'Discover premium residential and commercial projects curated for modern living. Premium locations, exceptional quality.',
      hero_btn_explore: 'Explore Projects',
      hero_btn_contact: 'Contact Us',
      hero_stat_total:  'Total Projects',
      hero_stat_ongoing:'Ongoing',
      hero_stat_done:   'Completed',
      hero_badge_text:  'Premium Properties',
      hero_badge_val:   'Across Pakistan',

      /* How It Works */
      how_eyebrow:  'Our Process',
      how_title:    'How It Works',
      how_sub:      'From discovery to ownership — we guide you every step of the way.',
      s1_num: 'Step 01', s1_title: 'Browse Projects',
      s1_desc: 'Explore our curated collection of premium real estate projects across prime locations.',
      s2_num: 'Step 02', s2_title: 'Select Property',
      s2_desc: 'Choose from ongoing or completed developments that match your vision and budget.',
      s3_num: 'Step 03', s3_title: 'Consult with Us',
      s3_desc: 'Meet our expert team to discuss investment details, payment plans, and legal aspects.',
      s4_num: 'Step 04', s4_title: 'Own Your Dream',
      s4_desc: 'Complete the paperwork and move into your dream property with full legal security.',

      /* Projects */
      proj_eyebrow: 'Our Portfolio',
      proj_title:   'Featured Projects',
      proj_sub:     'Handpicked properties for discerning buyers and investors.',
      f_all:        'All',
      f_ongoing:    'Ongoing',
      f_done:       'Completed',
      card_view:    'View Details',
      card_id:      'ID #',
      empty_title:  'No Projects Found',
      empty_sub:    'No real estate projects are available at the moment. Check back soon!',

      /* Status */
      status_ongoing:   'Ongoing',
      status_completed: 'Completed',

      /* CTA */
      cta_title: 'Ready to Invest?',
      cta_sub:   'Talk to our expert consultants and start your real estate journey today.',
      cta_btn:   'Get in Touch →',

      /* Contact */
      contact_eyebrow:    'Contact Us',
      contact_title:      "Let's Talk Property",
      contact_sub:        'Our team is available to answer all your real estate questions.',
      contact_call_title: 'Call Us',
      contact_call_hours: 'Mon – Sat, 9am – 7pm',
      contact_email_title:'Email Us',
      contact_email_reply:'We reply within 24 hours',
      contact_visit_title:'Visit Us',

      /* Footer */
      footer_desc:    "Pakistan's most trusted real estate developer. Building dreams, shaping communities, and delivering value since 2010.",
      footer_company: 'Company',
      footer_about:   'About Us',
      footer_careers: 'Careers',
      footer_press:   'Press',
      footer_blog:    'Blog',
      footer_projects:'Projects',
      footer_all:     'All Projects',
      footer_ongoing: 'Ongoing',
      footer_done:    'Completed',
      footer_support: 'Support',
      footer_faq:     'FAQ',
      footer_privacy: 'Privacy Policy',
      footer_terms:   'Terms',
      footer_contact: 'Contact',
      footer_follow:  'Follow Us',
      footer_copy:    '© 2024 Antigravity Real Estate. All rights reserved.',
      footer_love:    'Made with ❤️ in Pakistan',

      /* Project Detail */
      d_back:         'Back to Home',
      d_home:         'Home',
      d_projects:     'Projects',
      d_about:        'About This Project',
      d_highlights:   'Key Highlights',
      d_info:         'Project Details',
      d_id:           'Project ID',
      d_location:     'Location',
      d_status:       'Status',
      d_developer:    'Developer',
      d_dev_name:     'Antigravity Real Estate',
      d_enquire:      'Enquire Now',
      d_free:         'Free consultation · No obligations',
      d_more_eyebrow: 'More Projects',
      d_more_title:   'You May Also Like',
      d_not_found:    'Project Not Found',
      d_not_found_sub:'The project you are looking for does not exist or has been removed.',
      d_go_home:      'Back to Home',
      h1: 'Prime Location',       h2: 'Modern Architecture',
      h3: 'Gated Community',      h4: '24/7 Security',
      h5: 'Underground Parking',  h6: 'Landscaped Gardens',

      /* Admin */
      a_dashboard:    'Dashboard',
      a_add:          'Add Project',
      a_manage:       'Manage Projects',
      a_panel:        'Admin Panel',
      a_home:         'Home',
      a_logout:       'Logout',
      a_total:        'Total Projects',
      a_ongoing:      'Ongoing',
      a_done:         'Completed',
      a_images:       'With Images',
      a_recent:       'Recent Projects',
      a_add_new:      'Add New',
      a_all:          'All Projects',
      a_form_title:   'New Project Details',
      a_name_lbl:     'Project Name *',
      a_name_ph:      'e.g. Bahria Heights Tower',
      a_desc_lbl:     'Description',
      a_desc_ph:      'Brief description of the project...',
      a_loc_lbl:      'Location *',
      a_loc_ph:       'e.g. DHA Phase 6, Lahore',
      a_status_lbl:   'Status *',
      a_img_lbl:      'Project Image',
      a_upload_main:  'Click to upload',
      a_upload_sub:   'or drag and drop',
      a_upload_hint:  'PNG, JPG, WEBP up to 10MB',
      a_save:         'Save Project',
      a_tips:         'Tips',
      a_search_ph:    'Search projects...',
      a_th_img:       'Image',  a_th_name:   'Name',
      a_th_loc:       'Location', a_th_status: 'Status',
      a_th_desc:      'Description', a_th_action: 'Action',
      a_del_title:    'Delete Project?',
      a_del_body:     'This action cannot be undone. The project will be permanently removed.',
      a_cancel:       'Cancel',
      a_delete:       'Delete',
      a_welcome:      'Welcome,',
    },

    ar: {
      lang_btn: '🌐 English',

      /* Navbar */
      nav_projects:     'المشاريع',
      nav_how:          'كيف نعمل',
      nav_contact:      'تواصل معنا',
      nav_admin:        'لوحة الإدارة',

      /* Hero */
      hero_eyebrow:     'أسرع شركة عقارية نمواً في باكستان',
      hero_title_1:     'اعثر على',
      hero_title_2:     'عقار أحلامك المثالي',
      hero_sub:         'اكتشف مشاريعنا السكنية والتجارية الراقية المُختارة بعناية فائقة للحياة العصرية. مواقع متميزة وجودة استثنائية لا مثيل لها.',
      hero_btn_explore: 'استكشف المشاريع',
      hero_btn_contact: 'تواصل معنا',
      hero_stat_total:  'إجمالي المشاريع',
      hero_stat_ongoing:'قيد التنفيذ',
      hero_stat_done:   'مكتملة',
      hero_badge_text:  'عقارات راقية',
      hero_badge_val:   'في أرجاء باكستان',

      /* How It Works */
      how_eyebrow: 'منهجيتنا',
      how_title:   'كيف نعمل',
      how_sub:     'من الاستكشاف حتى التملّك — نرافقكم في كل خطوة من خطوات رحلتكم العقارية.',
      s1_num: 'الخطوة الأولى',   s1_title: 'تصفّح المشاريع',
      s1_desc: 'استكشفوا مجموعتنا المختارة بعناية من أفضل المشاريع العقارية الراقية في أرقى المواقع.',
      s2_num: 'الخطوة الثانية',  s2_title: 'اختر عقارك',
      s2_desc: 'اختاروا من بين مشاريعنا قيد التنفيذ أو المكتملة التي تُناسب رؤيتكم وميزانيتكم.',
      s3_num: 'الخطوة الثالثة', s3_title: 'استشِر فريقنا',
      s3_desc: 'التقوا بفريقنا المتخصص لمناقشة تفاصيل الاستثمار وخطط السداد والجوانب القانونية بكل شفافية.',
      s4_num: 'الخطوة الرابعة', s4_title: 'امتلك حلمك',
      s4_desc: 'أتمّوا الإجراءات الرسمية وانتقلوا إلى عقار أحلامكم بضمان قانوني كامل وراحة بال تامة.',

      /* Projects */
      proj_eyebrow: 'محفظتنا العقارية',
      proj_title:   'المشاريع المميزة',
      proj_sub:     'عقارات مُختارة بعناية فائقة لكبار المشترين والمستثمرين المميزين.',
      f_all:        'الكل',
      f_ongoing:    'قيد التنفيذ',
      f_done:       'مكتملة',
      card_view:    'عرض التفاصيل',
      card_id:      'رقم #',
      empty_title:  'لا توجد مشاريع',
      empty_sub:    'لا تتوفر مشاريع عقارية في الوقت الحالي. تفضّلوا بالعودة قريباً!',

      /* Status */
      status_ongoing:   'قيد التنفيذ',
      status_completed: 'مكتملة',

      /* CTA */
      cta_title: 'هل أنتم مستعدون للاستثمار؟',
      cta_sub:   'تحدّثوا مع مستشارينا المتخصصين وابدأوا رحلتكم العقارية المثمرة اليوم.',
      cta_btn:   '← تواصل معنا',

      /* Contact */
      contact_eyebrow:    'تواصل معنا',
      contact_title:      'دعنا نتحدث عن العقارات',
      contact_sub:        'فريقنا المتخصص حاضر للإجابة على جميع استفساراتكم العقارية في أي وقت.',
      contact_call_title: 'اتصل بنا',
      contact_call_hours: 'الاثنين – السبت، ٩ص – ٧م',
      contact_email_title:'راسلنا',
      contact_email_reply:'نردّ على جميع الرسائل خلال ٢٤ ساعة',
      contact_visit_title:'زورنا',

      /* Footer */
      footer_desc:    'المطوّر العقاري الأكثر ثقةً في باكستان. نبني الأحلام ونشكّل المجتمعات ونحقق القيمة الحقيقية منذ عام ٢٠١٠.',
      footer_company: 'الشركة',
      footer_about:   'من نحن',
      footer_careers: 'الوظائف',
      footer_press:   'الأخبار',
      footer_blog:    'المدوّنة',
      footer_projects:'المشاريع',
      footer_all:     'جميع المشاريع',
      footer_ongoing: 'قيد التنفيذ',
      footer_done:    'مكتملة',
      footer_support: 'الدعم',
      footer_faq:     'الأسئلة الشائعة',
      footer_privacy: 'سياسة الخصوصية',
      footer_terms:   'الشروط والأحكام',
      footer_contact: 'تواصل معنا',
      footer_follow:  'تابعنا',
      footer_copy:    '© ٢٠٢٤ أنتي جرافيتي للعقارات. جميع الحقوق محفوظة.',
      footer_love:    'صُنع بكل ❤️ في باكستان',

      /* Project Detail */
      d_back:         'العودة إلى الرئيسية',
      d_home:         'الرئيسية',
      d_projects:     'المشاريع',
      d_about:        'نبذة عن هذا المشروع',
      d_highlights:   'أبرز المميزات',
      d_info:         'تفاصيل المشروع',
      d_id:           'رقم المشروع',
      d_location:     'الموقع',
      d_status:       'الحالة',
      d_developer:    'المطوّر',
      d_dev_name:     'أنتي جرافيتي للعقارات',
      d_enquire:      'استفسر الآن',
      d_free:         'استشارة مجانية · بدون أي التزامات',
      d_more_eyebrow: 'مشاريع أخرى',
      d_more_title:   'قد يعجبكم أيضاً',
      d_not_found:    'المشروع غير موجود',
      d_not_found_sub:'المشروع الذي تبحث عنه غير موجود أو تمت إزالته.',
      d_go_home:      'العودة إلى الرئيسية',
      h1: 'موقع متميز',           h2: 'هندسة معمارية حديثة',
      h3: 'مجمع سكني مغلق',      h4: 'أمن على مدار الساعة',
      h5: 'موقف سيارات تحت الأرض', h6: 'حدائق منسقة',

      /* Admin */
      a_dashboard:    'لوحة التحكم',
      a_add:          'إضافة مشروع',
      a_manage:       'إدارة المشاريع',
      a_panel:        'لوحة الإدارة',
      a_home:         'الرئيسية',
      a_logout:       'تسجيل الخروج',
      a_total:        'إجمالي المشاريع',
      a_ongoing:      'قيد التنفيذ',
      a_done:         'مكتملة',
      a_images:       'مع صور',
      a_recent:       'أحدث المشاريع',
      a_add_new:      'إضافة جديد',
      a_all:          'جميع المشاريع',
      a_form_title:   'تفاصيل المشروع الجديد',
      a_name_lbl:     'اسم المشروع *',
      a_name_ph:      'مثال: برج بحرية هايتس',
      a_desc_lbl:     'الوصف',
      a_desc_ph:      'وصف مختصر للمشروع...',
      a_loc_lbl:      'الموقع *',
      a_loc_ph:       'مثال: مرحلة 6 DHA، لاهور',
      a_status_lbl:   'الحالة *',
      a_img_lbl:      'صورة المشروع',
      a_upload_main:  'انقر للرفع',
      a_upload_sub:   'أو اسحب وأفلت',
      a_upload_hint:  'PNG أو JPG أو WEBP حتى 10MB',
      a_save:         'حفظ المشروع',
      a_tips:         'نصائح مفيدة',
      a_search_ph:    'البحث في المشاريع...',
      a_th_img:       'الصورة',  a_th_name:   'الاسم',
      a_th_loc:       'الموقع',  a_th_status: 'الحالة',
      a_th_desc:      'الوصف',   a_th_action: 'إجراء',
      a_del_title:    'حذف المشروع؟',
      a_del_body:     'لا يمكن التراجع عن هذا الإجراء. سيتم حذف المشروع نهائياً.',
      a_cancel:       'إلغاء',
      a_delete:       'حذف',
      a_welcome:      'مرحباً،',
    }
  };

  var _lang = localStorage.getItem('ag_lang') || 'en';

  function t(key) {
    return (T[_lang] && T[_lang][key] !== undefined ? T[_lang][key] : T['en'][key]) || key;
  }

  function applyAll() {
    /* static elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    });

    /* RTL / LTR — keep lang="en" always to block browser auto-translate.
       Only the dir attribute and body class are toggled. */
    if (_lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'en');   /* prevent Chrome auto-translate */
      document.documentElement.setAttribute('translate', 'no'); /* block Translate extensions */
      document.body.setAttribute('translate', 'no');
      document.body.classList.add('rtl-mode');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.removeAttribute('translate');
      document.body.removeAttribute('translate');
      document.body.classList.remove('rtl-mode');
    }

    /* language toggle button label */
    var btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = t('lang_btn');
  }

  function setLang(lang) {
    _lang = lang;
    localStorage.setItem('ag_lang', lang);
    applyAll();
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
  }

  function toggle() { setLang(_lang === 'en' ? 'ar' : 'en'); }
  function getLang() { return _lang; }

  return { t: t, apply: applyAll, toggle: toggle, getLang: getLang };
})();
