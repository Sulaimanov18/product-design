/* ============================================
   Design School Application Form — Logic
   Bilingual: EN (default) / RU
   ============================================ */


// State
let currentStep = 1;
const totalSteps = 4;
let currentLang = 'en';

// --- Translations ---
const translations = {
  en: {
    // Header
    badge: 'Enrollment Open — Spring 2026',
    title: 'Product Design Course',
    subtitle: '4 months of intensive training, hands-on practice, and mentorship. Build your portfolio and start a career in product design.',
    feat_duration: '4 months',
    feat_mentorship: 'Mentorship',
    feat_portfolio: 'Portfolio',
    feat_practice: 'Practice',
    
    // Step labels
    step_prefix: 'Step',
    step_of: 'of',
    step_labels: { 1: 'Contact Info', 2: 'Experience', 3: 'Motivation', 4: 'Final Details' },
    
    // Step 1
    step1_title: "Let's Get to Know You",
    step1_desc: 'Tell us a bit about yourself so we can get in touch.',
    label_first_name: 'First Name',
    label_last_name: 'Last Name',
    label_phone: 'Phone',
    label_city: 'City',
    ph_first_name: 'Alex',
    ph_last_name: 'Johnson',
    ph_phone: '+1 (555) 123-4567',
    ph_city: 'New York',
    err_first_name: '⚠ Please enter your first name',
    err_last_name: '⚠ Please enter your last name',
    err_email: '⚠ Please enter a valid email',
    err_phone: '⚠ Please enter your phone number',
    
    // Step 2
    step2_title: 'Your Experience',
    step2_desc: 'Tell us about your current skills and background in design.',
    label_occupation: 'What do you do currently?',
    opt_select: 'Select an option',
    opt_student: 'Student',
    opt_designer: 'Graphic / Web Designer',
    opt_developer: 'Developer',
    opt_marketer: 'Marketer',
    opt_pm: 'Product Manager',
    opt_switching: 'Career Switcher',
    opt_freelancer: 'Freelancer',
    opt_other: 'Other',
    err_occupation: '⚠ Please select an option',
    label_experience: 'Design experience level',
    exp_none: 'Complete beginner',
    exp_beginner: 'Tried a little',
    exp_intermediate: 'Have basic skills',
    exp_advanced: 'Already in design',
    err_experience: '⚠ Please select your level',
    label_tools: 'Which tools do you know?',
    tool_none: 'None yet',
    
    // Step 3
    step3_title: 'Motivation',
    step3_desc: 'Help us understand what you expect from the course.',
    label_goal: 'Why do you want to learn product design?',
    goal_career: 'Career change',
    goal_skills: 'Level up skills',
    goal_portfolio: 'Build a portfolio',
    goal_startup: 'For my startup',
    err_goal: '⚠ Please select a goal',
    label_motivation: 'Tell us more about your motivation',
    ph_motivation: 'Why do you want to become a product designer? What inspires you? What products do you love?',
    err_motivation: '⚠ Please write at least a couple of sentences',
    label_hours: 'How many hours per week can you dedicate?',
    hours_min: '5 hours',
    hours_max: '30+ hours',
    hours_label: 'hours per week',
    
    // Step 4
    step4_title: 'Last Step',
    step4_desc: "Just a few more questions and you're done!",
    label_instagram: 'Your Instagram',
    label_portfolio: 'Portfolio link (if any)',
    label_source: 'How did you hear about us?',
    source_friends: 'Friends',
    source_other: 'Other',
    err_source: '⚠ Please select a source',
    label_comments: "Anything else you'd like to add?",
    ph_comments: 'Any questions or comments...',
    
    // Buttons
    btn_next: 'Next',
    btn_back: 'Back',
    btn_submit: '🎨 Submit Application',
    
    // Success
    success_title: 'Application Submitted!',
    success_desc: "Thank you for your interest in our course! We'll reach out soon to discuss the details.",
    success_next: "What's next?",
    success_item1: "Check your email — we'll send a confirmation",
    success_item2: 'Follow our Instagram for updates',
    success_item3: 'Course starts — April 2026',
    success_item4: "We'll reply within 48 hours",
    
    // Footer
    footer: '© 2026 Product Design Course. All rights reserved.',
    
    // Toast
    toast_fill_required: 'Please fill in all required fields',
    toast_error: 'An error occurred. Please try again.'
  },
  ru: {
    badge: 'Набор открыт — Весна 2026',
    title: 'Курс по Продукт-Дизайну',
    subtitle: '4 месяца интенсивного обучения, практики и менторства. Создай портфолио и начни карьеру в продукт-дизайне.',
    feat_duration: '4 месяца',
    feat_mentorship: 'Менторство',
    feat_portfolio: 'Портфолио',
    feat_practice: 'Практика',
    
    step_prefix: 'Шаг',
    step_of: 'из',
    step_labels: { 1: 'Контакты', 2: 'Опыт', 3: 'Мотивация', 4: 'Финал' },
    
    step1_title: 'Давай познакомимся',
    step1_desc: 'Расскажи немного о себе, чтобы мы могли связаться с тобой.',
    label_first_name: 'Имя',
    label_last_name: 'Фамилия',
    label_phone: 'Телефон',
    label_city: 'Город',
    ph_first_name: 'Александр',
    ph_last_name: 'Иванов',
    ph_phone: '+1 (555) 123-4567',
    ph_city: 'Los Angeles',
    err_first_name: '⚠ Пожалуйста, введите имя',
    err_last_name: '⚠ Пожалуйста, введите фамилию',
    err_email: '⚠ Пожалуйста, введите корректный email',
    err_phone: '⚠ Пожалуйста, введите номер телефона',
    
    step2_title: 'Твой опыт',
    step2_desc: 'Расскажи о своём текущем опыте и навыках в дизайне.',
    label_occupation: 'Чем ты сейчас занимаешься?',
    opt_select: 'Выбери вариант',
    opt_student: 'Студент',
    opt_designer: 'Графический / Веб дизайнер',
    opt_developer: 'Разработчик',
    opt_marketer: 'Маркетолог',
    opt_pm: 'Менеджер продукта',
    opt_switching: 'Меняю профессию',
    opt_freelancer: 'Фрилансер',
    opt_other: 'Другое',
    err_occupation: '⚠ Пожалуйста, выберите вариант',
    label_experience: 'Уровень опыта в дизайне',
    exp_none: 'Полный новичок',
    exp_beginner: 'Немного пробовал(а)',
    exp_intermediate: 'Есть базовые навыки',
    exp_advanced: 'Уже работаю в дизайне',
    err_experience: '⚠ Пожалуйста, выберите уровень',
    label_tools: 'Какие инструменты знаешь?',
    tool_none: 'Ещё ничего',
    
    step3_title: 'Мотивация',
    step3_desc: 'Помоги нам понять, чего ты ждёшь от курса.',
    label_goal: 'Почему хочешь изучать продукт-дизайн?',
    goal_career: 'Сменить профессию',
    goal_skills: 'Прокачать навыки',
    goal_portfolio: 'Сделать портфолио',
    goal_startup: 'Для своего стартапа',
    err_goal: '⚠ Пожалуйста, выберите цель',
    label_motivation: 'Расскажи подробнее о своей мотивации',
    ph_motivation: 'Почему ты хочешь стать продукт-дизайнером? Что тебя вдохновляет? Какие продукты тебе нравятся?',
    err_motivation: '⚠ Расскажи хотя бы пару предложений',
    label_hours: 'Сколько часов в неделю готов(а) уделять?',
    hours_min: '5 часов',
    hours_max: '30+ часов',
    hours_label: 'часов в неделю',
    
    step4_title: 'Последний шаг',
    step4_desc: 'Ещё пара вопросов и можно отправлять!',
    label_instagram: 'Твой Instagram',
    label_portfolio: 'Ссылка на портфолио (если есть)',
    label_source: 'Откуда узнал(а) о нас?',
    source_friends: 'От друзей',
    source_other: 'Другое',
    err_source: '⚠ Пожалуйста, выберите источник',
    label_comments: 'Хочешь что-то добавить?',
    ph_comments: 'Любые вопросы или комментарии...',
    
    btn_next: 'Далее',
    btn_back: 'Назад',
    btn_submit: '🎨 Отправить заявку',
    
    success_title: 'Заявка отправлена!',
    success_desc: 'Спасибо за интерес к нашему курсу! Мы свяжемся с тобой в ближайшее время.',
    success_next: 'Что дальше?',
    success_item1: 'Проверь почту — мы отправим подтверждение',
    success_item2: 'Подпишись на наш Instagram для обновлений',
    success_item3: 'Начало курса — Апрель 2026',
    success_item4: 'Мы ответим в течение 48 часов',
    
    footer: '© 2026 Курс по Продукт-Дизайну. Все права защищены.',
    
    toast_fill_required: 'Пожалуйста, заполните все обязательные поля',
    toast_error: 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.'
  }
};

// --- i18n Functions ---
function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function switchLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
  
  // Update progress text
  updateProgress();
  
  // Save preference
  localStorage.setItem('design-course-lang', lang);
}

// DOM
const form = document.getElementById('application-form');
const progressFill = document.getElementById('progress-fill');
const progressStepText = document.getElementById('progress-step-text');
const progressLabel = document.getElementById('progress-label');
const submitBtn = document.getElementById('submit-btn');
const successScreen = document.getElementById('success-screen');
const toast = document.getElementById('toast');
const hoursSlider = document.getElementById('hours');
const hoursValue = document.getElementById('hours-value');

// --- Phone Input Mask (US format) ---
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 0) {
    if (value[0] === '1') {
      value = value.substring(0, 11);
      let formatted = '+1';
      if (value.length > 1) formatted += ' (' + value.substring(1, 4);
      if (value.length > 4) formatted += ') ' + value.substring(4, 7);
      if (value.length > 7) formatted += '-' + value.substring(7, 11);
      e.target.value = formatted;
    } else if (value[0] === '7' || value[0] === '8') {
      // Support Russian numbers too
      value = value.substring(0, 11);
      let formatted = '+7';
      if (value.length > 1) formatted += ' (' + value.substring(1, 4);
      if (value.length > 4) formatted += ') ' + value.substring(4, 7);
      if (value.length > 7) formatted += '-' + value.substring(7, 9);
      if (value.length > 9) formatted += '-' + value.substring(9, 11);
      e.target.value = formatted;
    }
  }
});

// --- Slider ---
hoursSlider.addEventListener('input', function () {
  hoursValue.textContent = this.value;
  const pct = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #7c5cfc 0%, #ff6b9d ${pct}%, rgba(255,255,255,0.05) ${pct}%)`;
});
hoursSlider.dispatchEvent(new Event('input'));

// --- Step Navigation ---
function nextStep() {
  if (!validateStep(currentStep)) return;

  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep++;
    const next = document.getElementById(`step-${currentStep}`);
    next.classList.add('active');
    next.style.animation = 'none';
    next.offsetHeight;
    next.style.animation = 'fadeInUp 0.5s ease-out';
    updateProgress();
    scrollToForm();
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep--;
    const prev = document.getElementById(`step-${currentStep}`);
    prev.classList.add('active');
    prev.style.animation = 'none';
    prev.offsetHeight;
    prev.style.animation = 'fadeInUp 0.5s ease-out';
    updateProgress();
    scrollToForm();
  }
}

function scrollToForm() {
  document.getElementById('form-card').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function updateProgress() {
  const percentage = (currentStep / totalSteps) * 100;
  progressFill.style.width = `${percentage}%`;
  progressStepText.textContent = `${t('step_prefix')} ${currentStep} ${t('step_of')} ${totalSteps}`;
  progressLabel.textContent = t('step_labels')[currentStep] || '';

  document.querySelectorAll('.steps-dot').forEach((dot, i) => {
    const step = i + 1;
    dot.classList.remove('active', 'completed');
    if (step === currentStep) dot.classList.add('active');
    else if (step < currentStep) dot.classList.add('completed');
  });
}

// --- Validation ---
function validateStep(step) {
  let isValid = true;
  clearErrors(step);

  switch (step) {
    case 1:
      if (!validateRequired('firstName')) isValid = false;
      if (!validateRequired('lastName')) isValid = false;
      if (!validateEmail('email')) isValid = false;
      if (!validateRequired('phone')) isValid = false;
      break;
    case 2:
      if (!validateSelect('occupation')) isValid = false;
      if (!validateRadio('experience')) isValid = false;
      break;
    case 3:
      if (!validateRadio('goal')) isValid = false;
      if (!validateTextarea('motivation', 10)) isValid = false;
      break;
    case 4:
      if (!validateRadio('source')) isValid = false;
      break;
  }

  if (!isValid) {
    showToast(t('toast_fill_required'));
  }
  return isValid;
}

function clearErrors(step) {
  const stepEl = document.getElementById(`step-${step}`);
  stepEl.querySelectorAll('.form-error').forEach(e => e.classList.remove('visible'));
  stepEl.querySelectorAll('.error').forEach(e => e.classList.remove('error'));
}

function validateRequired(id) {
  const el = document.getElementById(id);
  if (!el.value.trim()) {
    el.classList.add('error');
    showFieldError(id);
    return false;
  }
  return true;
}

function validateEmail(id) {
  const el = document.getElementById(id);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!el.value.trim() || !emailRegex.test(el.value)) {
    el.classList.add('error');
    showFieldError(id);
    return false;
  }
  return true;
}

function validateSelect(id) {
  const el = document.getElementById(id);
  if (!el.value) {
    el.classList.add('error');
    showFieldError(id);
    return false;
  }
  return true;
}

function validateRadio(name) {
  if (!document.querySelector(`input[name="${name}"]:checked`)) {
    showFieldError(name);
    return false;
  }
  return true;
}

function validateTextarea(id, minLength) {
  const el = document.getElementById(id);
  if (!el.value.trim() || el.value.trim().length < minLength) {
    el.classList.add('error');
    showFieldError(id);
    return false;
  }
  return true;
}

function showFieldError(id) {
  const errorEl = document.getElementById(`${id}-error`);
  if (errorEl) errorEl.classList.add('visible');
}

// --- Clear errors on input ---
document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(el => {
  el.addEventListener('input', function () {
    this.classList.remove('error');
    const errorEl = document.getElementById(`${this.id}-error`);
    if (errorEl) errorEl.classList.remove('visible');
  });
});

document.querySelectorAll('input[type="radio"]').forEach(el => {
  el.addEventListener('change', function () {
    const errorEl = document.getElementById(`${this.name}-error`);
    if (errorEl) errorEl.classList.remove('visible');
  });
});

// --- Form Submit ---
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (!validateStep(currentStep)) return;

  submitBtn.classList.add('btn--loading');
  submitBtn.disabled = true;

  try {
    // Build FormData from the actual form for Netlify
    const formData = new FormData(form);
    formData.set('form-name', 'design-course-application');
    formData.set('language', currentLang);
    
    // Explicitly set radio/checkbox values
    const experience = document.querySelector('input[name="experience"]:checked');
    if (experience) formData.set('experience', experience.value);
    const goal = document.querySelector('input[name="goal"]:checked');
    if (goal) formData.set('goal', goal.value);
    const source = document.querySelector('input[name="source"]:checked');
    if (source) formData.set('source', source.value);
    
    // Collect tools as comma-separated
    const tools = [];
    document.querySelectorAll('input[name="tools"]:checked').forEach(cb => tools.push(cb.value));
    formData.set('tools', tools.join(', '));

    // Log what we're sending
    const dataToSend = {};
    formData.forEach((value, key) => { dataToSend[key] = value; });
    console.log('📤 Sending form data:', dataToSend);

    // Check if we're on Netlify (production) or local
    const isNetlify = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    
    if (isNetlify) {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      console.log('📬 Netlify response:', response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error(`Netlify returned ${response.status}: ${response.statusText}`);
      }
    } else {
      // Demo mode for local development
      console.log('📋 Form data (demo mode — deploy to Netlify for real submissions):', dataToSend);
      await new Promise(resolve => setTimeout(resolve, 1200));
    }
    
    console.log('✅ Form submitted successfully!');
    showSuccess();
  } catch (error) {
    console.error('❌ Submit error:', error);
    showToast(t('toast_error'));
    submitBtn.classList.remove('btn--loading');
    submitBtn.disabled = false;
  }
});



// --- Success Screen ---
function showSuccess() {
  form.style.display = 'none';
  document.getElementById('progress-container').style.display = 'none';
  successScreen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  launchConfetti();
}

// --- Toast ---
function showToast(message, type = 'error') {
  toast.textContent = message;
  toast.className = 'toast ' + type;
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => toast.classList.remove('visible'), 3500);
}

// --- Confetti ---
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#7c5cfc', '#ff6b9d', '#4ecdc4', '#ffd93d', '#ff8a5c', '#a78bfa'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 22 - 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.3 + Math.random() * 0.2,
      opacity: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  const maxFrames = 180;

  function animate() {
    if (frame > maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.vx *= 0.99;
      p.opacity = Math.max(0, 1 - frame / maxFrames);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    frame++;
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// --- Init: load saved language preference ---
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('design-course-lang');
  if (saved && translations[saved]) {
    switchLang(saved);
  }
});
