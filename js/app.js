/**
 * «ПРОЕКТ: Я» — Тетрадь самоконтроля подростка
 * Interactive Application Scripts
 */

// ==========================================================================
// 1. Workbook Data (All 10 Pages)
// ==========================================================================
const WORKBOOK_PAGES = [
  {
    page: 1,
    title: "Обложка «ПРОЕКТ: Я»",
    subtitle: "Тетрадь самоконтроля подростка (13–16 лет)",
    tag: "Старт и позиционирование",
    image: "assets/webp/self_page_1.webp",
    imageHd: "assets/preview/self_page_1.png",
    quote: "«Как научиться управлять собой, ставить цели, развивать привычки и не зависать в телефоне»",
    features: [
      {
        title: "Не стыдно показать друзьям",
        desc: "Дерзкий космический дизайн с неоном и стикерами. Подросток воспринимает её как крутой личный дневник, а не унылое школьное пособие."
      },
      {
        title: "Четкий фокус на ключевых навыках",
        desc: "Сразу задает 4 фокуса: самоконтроль, целеполагание, полезные привычки и свобода от экранной зависимости."
      },
      {
        title: "Пространство Академии",
        desc: "Разработано профессиональными наставниками и психологами проекта «Академия Планета»."
      }
    ]
  },
  {
    page: 2,
    title: "Личный Манифест",
    subtitle: "«Эта тетрадь — не про оценки. Она про тебя и твою жизнь»",
    tag: "Правила доверия",
    image: "assets/webp/self_page_2.webp",
    imageHd: "assets/preview/self_page_2.png",
    quote: "«Главное правило: Никто не изменит твою жизнь кроме тебя. Заполняй её честно — для себя.»",
    features: [
      {
        title: "Снятие школьного стресса",
        desc: "С первой же страницы снимает страх критики: здесь нет учителей, двоек, замечаний и оценок."
      },
      {
        title: "Передача ответственности",
        desc: "Подросток перестает чувствовать себя «подневольным исполнителем чужих указаний» и берет управление в свои руки."
      },
      {
        title: "Территория абсолютной честности",
        desc: "Формирует ценность искренности перед самим собой — фундамент зрелой взрослой личности."
      }
    ]
  },
  {
    page: 3,
    title: "Кто я сейчас",
    subtitle: "Глубокая инвентаризация сильных сторон и талантов",
    tag: "Самооценка",
    image: "assets/webp/self_page_3.webp",
    imageHd: "assets/preview/self_page_3.png",
    quote: "«Мои сильные стороны, навыки, что получается лучше всего и о чём я мечтаю»",
    features: [
      {
        title: "Преодоление синдрома самозванца",
        desc: "Помогает подростку увидеть свои реальные достоинства и суперсилы, которые часто обесцениваются в школе."
      },
      {
        title: "Фокус на мечтах",
        desc: "Возвращает способность мечтать масштабно без страха «осуждения взрослыми»."
      },
      {
        title: "Опора на внутренний ресурс",
        desc: "Показывает, на что можно опереться в сложные моменты учебы и стресса перед экзаменами."
      }
    ]
  },
  {
    page: 4,
    title: "Колесо моей жизни",
    subtitle: "Наглядная визуальная диагностика 8 ключевых сфер",
    tag: "Баланс жизни",
    image: "assets/webp/self_page_4.webp",
    imageHd: "assets/preview/self_page_4.png",
    quote: "«Условия жизни, Учёба, Друзья, Хобби, Саморазвитие, Настроение, Семья, Отдых»",
    features: [
      {
        title: "Адаптированная методика коучинга",
        desc: "Классическое колесо баланса, переработанное специально под приоритеты и язык подростка 13–16 лет."
      },
      {
        title: "Наглядное осознание «перекосов»",
        desc: "Подросток своими глазами видит, почему он чувствует усталость (например: учеба на 8, а отдых на 2 балла)."
      },
      {
        title: "Мотивация к гармонии",
        desc: "Ребенок сам хочет подтянуть «проседающие» сектора без родительских упреков."
      }
    ]
  },
  {
    page: 5,
    title: "Мои цели на 3 месяца",
    subtitle: "Стратегическое планирование без иллюзий и выгорания",
    tag: "Целеполагание",
    image: "assets/webp/self_page_5.webp",
    imageHd: "assets/preview/self_page_5.png",
    quote: "«Здоровье и тело • Учёба и навыки • Жизнь и хобби. Почему для меня это важно?»",
    features: [
      {
        title: "Оптимальный горизонт 90 дней",
        desc: "Подросткам тяжело планировать на 5 лет вперед, но 3 месяца — идеальный и осязаемый спринт."
      },
      {
        title: "Вопрос «Почему это важно?»",
        desc: "Включает внутреннюю мотивацию вместо внешней (делай не потому что «надо», а потому что «я так решил»)."
      },
      {
        title: "Разделение по категориям",
        desc: "Учит структурировать жизнь: тело/спорт, знания/учеба и эмоциональная жизнь."
      }
    ]
  },
  {
    page: 6,
    title: "Мои привычки",
    subtitle: "5 базовых суперсил для энергии и высокой продуктивности",
    tag: "Формирование привычек",
    image: "assets/webp/self_page_6.webp",
    imageHd: "assets/preview/self_page_6.png",
    quote: "«Читать 30 минут • Спорт и зарядка • Меньше экранного времени • Режим сна • Водный баланс»",
    features: [
      {
        title: "Точечный удар по гаджетам",
        desc: "Помогает подростку осознать ценность цифрового детокса и сократить зависание в рилсах и играх."
      },
      {
        title: "Энергия для мозга",
        desc: "Восстановление здорового сна и физической активности напрямую повышает успеваемость без репетиторов."
      },
      {
        title: "Понятные чекбоксы",
        desc: "Простой игровой формат внедрения привычек без сложной зубрежки."
      }
    ]
  },
  {
    page: 7,
    title: "Трекер привычек на 30 дней",
    subtitle: "Визуальный дофаминовый трекер ежедневных побед",
    tag: "Дисциплина без насилия",
    image: "assets/webp/self_page_7.webp",
    imageHd: "assets/preview/self_page_7.png",
    quote: "«Отметь день, когда ты выполнил привычку. Выполнение каждый день приближает к цели!»",
    features: [
      {
        title: "Принцип непрерывной цепочки",
        desc: "Закрашивание кружочков и клеточек дает мозгу порцию естественного дофамина — как прокачка персонажа в игре."
      },
      {
        title: "Фокус всего на 3 привычках",
        desc: "Защита от перегрузки: мы не берем 20 задач сразу, а доводим до автоматизма 3 самых важных действия."
      },
      {
        title: "Наглядная гордость за себя",
        desc: "Через 30 дней подросток видит материальное доказательство своей силы воли."
      }
    ]
  },
  {
    page: 8,
    title: "Мой план на неделю",
    subtitle: "Практический недельный спринт по 4 жизненным направлениям",
    tag: "Тайм-менеджмент",
    image: "assets/webp/self_page_8.webp",
    imageHd: "assets/preview/self_page_8.png",
    quote: "«Учёба • Здоровье • Развитие • Что интересного я попробую на этой неделе»",
    features: [
      {
        title: "Борьба с рутиной",
        desc: "Графа «Что интересного я попробую» пробуждает любознательность и жажду новых впечатлений."
      },
      {
        title: "Приоритезация задач",
        desc: "Подросток учится заранее распределять нагрузку и не копить долги по учебе к воскресенью."
      },
      {
        title: "Свободная зона для заметок",
        desc: "Место для инсайтов, спонтанных идей, рисунков и личных заметок."
      }
    ]
  },
  {
    page: 9,
    title: "Мысли, которые мешают",
    subtitle: "Когнитивная терапия страхов и прокрастинации",
    tag: "Психологическая защита",
    image: "assets/webp/self_page_9.webp",
    imageHd: "assets/preview/self_page_9.png",
    quote: "«У меня не получится? Я ленивый? Потом сделаю? Научись заменять их новыми сильными мыслями!»",
    features: [
      {
        title: "Обезвреживание самосаботажа",
        desc: "Ребенок учится распознавать ловушки мозга: «я глупый», «у меня все равно не выйдет», «сделаю завтра»."
      },
      {
        title: "Практика когнитивного рефрейминга",
        desc: "Пошаговая переформулировка ограничивающих убеждений в позитивные и созидательные установки."
      },
      {
        title: "Снижение тревожности перед будущим",
        desc: "Дает подростку стойкий психологический иммунитет против школьного буллинга и давления на экзаменах."
      }
    ]
  },
  {
    page: 10,
    title: "Итог и Рефлексия (90 дней)",
    subtitle: "Празднование побед и постановка новой планки роста",
    tag: "Триумф и результат",
    image: "assets/webp/self_page_10.webp",
    imageHd: "assets/preview/self_page_10.png",
    quote: "«Чему я научился • Какая привычка осталась • Что изменилось во мне • Мой главный вывод»",
    features: [
      {
        title: "Фиксация личностного роста",
        desc: "Подросток подводит итоги 3 месяцев и осознает: «Я стал другим человеком. Я могу управлять собой»."
      },
      {
        title: "Закрепление новых нейронных связей",
        desc: "Осознание привычек, которые прочно вошли в жизнь и больше не требуют силы воли."
      },
      {
        title: "Привычка жить по плану каждые 3 месяца",
        desc: "Формирует фундаментальный навык успешного человека на всю взрослую жизнь."
      }
    ]
  }
];

// ==========================================================================
// 2. State & DOM Initializer
// ==========================================================================
let currentPageIdx = 0;

// Ensure page always starts at top if opened without an anchor hash
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  initHeader();
  initShowcase();
  initQuiz();
  initFaq();
  initTariffSwitcher();
  initModals();
  initForms();
  initTimer();
  initTelegramBot();
});

// ==========================================================================
// Header & Scroll
// ==========================================================================
function initHeader() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('menuToggleBtn') || document.querySelector('.mobile-menu-toggle');
  const navLinks = document.getElementById('mainNavLinks') || document.querySelector('.nav-links');
  const stickyMenuBtn = document.getElementById('mobileStickyMenuBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  function toggleMenu(e) {
    if (e) e.stopPropagation();
    const isOpen = navLinks?.classList.toggle('open');
    toggleBtn?.classList.toggle('open', isOpen);
  }

  toggleBtn?.addEventListener('click', toggleMenu);
  stickyMenuBtn?.addEventListener('click', toggleMenu);

  if (navLinks) {
    navLinks.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn?.classList.remove('open');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn?.contains(e.target) && !stickyMenuBtn?.contains(e.target)) {
        navLinks.classList.remove('open');
        toggleBtn?.classList.remove('open');
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggleBtn?.classList.remove('open');
      }
    });
  }
}

// ==========================================================================
// Tariff Switcher (Select by Card Click)
// ==========================================================================
function initTariffSwitcher() {
  const cards = document.querySelectorAll('.pricing-card[data-tariff-card]');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked directly on a button, the button's data-open-order handler will fire
      if (e.target.closest('button')) return;

      // Highlight this card as active
      cards.forEach(c => c.classList.remove('active-selected'));
      card.classList.add('active-selected');

      // Pre-sync selection in order modal
      const btn = card.querySelector('[data-open-order]');
      const planName = btn?.getAttribute('data-plan-name');
      const planPrice = btn?.getAttribute('data-plan-price');
      if (planName && planPrice) {
        syncModalTariff(planName, planPrice);
      }
    });
  });
}

function syncModalTariff(planName, planPrice) {
  const planInput = document.getElementById('orderPlanSelect');
  const priceInput = document.getElementById('orderPlanPrice');
  const planOptions = document.querySelectorAll('.modal-plan-option');

  if (planInput) planInput.value = planName;
  if (priceInput) priceInput.value = planPrice;

  let matched = false;
  planOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    if (!radio) return;

    const isMatch = (
      radio.value.toLowerCase().includes(planName.toLowerCase()) ||
      planName.toLowerCase().includes(radio.value.toLowerCase()) ||
      (planName.includes('PDF') && radio.value.includes('PDF')) ||
      (planName.includes('Печатная') && radio.value.includes('Печатная')) ||
      (planName.includes('Наставник') && radio.value.includes('Наставник'))
    );

    if (isMatch && !matched) {
      radio.checked = true;
      opt.classList.add('selected');
      if (priceInput) priceInput.value = radio.getAttribute('data-price') || planPrice;
      matched = true;
    } else {
      opt.classList.remove('selected');
    }
  });
}

// ==========================================================================
// Showcase (Interactive Carousel & Tabs)
// ==========================================================================
function initShowcase() {
  const tabsContainer = document.getElementById('pageTabsBar');
  const imgEl = document.getElementById('showcaseImg');
  const pageTagEl = document.getElementById('showcaseTag');
  const pageTitleEl = document.getElementById('showcaseTitle');
  const pageSubtitleEl = document.getElementById('showcaseSubtitle');
  const pageQuoteEl = document.getElementById('showcaseQuote');
  const pageFeaturesEl = document.getElementById('showcaseFeatures');
  const pageIndicatorEl = document.getElementById('pageIndicator');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const imgWrapper = document.getElementById('showcaseImgWrapper');

  if (!tabsContainer || !imgEl) return;

  // Render tab buttons
  tabsContainer.innerHTML = '';
  WORKBOOK_PAGES.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `page-tab-btn ${idx === 0 ? 'active' : ''}`;
    btn.innerHTML = `<span>Стр. ${item.page}</span> <small>— ${item.title.split(' ')[0]}</small>`;
    btn.addEventListener('click', () => renderPage(idx, true));
    tabsContainer.appendChild(btn);
  });

  function renderPage(idx, scrollTabs = false) {
    currentPageIdx = idx;
    const data = WORKBOOK_PAGES[idx];

    // Update active tab
    const tabs = tabsContainer.querySelectorAll('.page-tab-btn');
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === idx);
    });

    // Scroll active tab inside horizontal tabs container ONLY (never scroll window)
    if (scrollTabs && tabs[idx]) {
      const containerWidth = tabsContainer.clientWidth;
      const tabLeft = tabs[idx].offsetLeft;
      const tabWidth = tabs[idx].clientWidth;
      tabsContainer.scrollTo({
        left: tabLeft - (containerWidth / 2) + (tabWidth / 2),
        behavior: 'smooth'
      });
    }

    // Update Image with subtle fade
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = data.image;
      imgEl.alt = `${data.title} — страница ${data.page}`;
      imgEl.style.opacity = '1';
    }, 150);

    // Update text
    if (pageTagEl) pageTagEl.textContent = `СТРАНИЦА ${data.page} • ${data.tag}`;
    if (pageTitleEl) pageTitleEl.textContent = data.title;
    if (pageSubtitleEl) pageSubtitleEl.textContent = data.subtitle;
    if (pageQuoteEl) pageQuoteEl.textContent = data.quote;
    if (pageIndicatorEl) pageIndicatorEl.textContent = `${data.page} / 10`;

    // Update features list
    if (pageFeaturesEl) {
      pageFeaturesEl.innerHTML = data.features.map(f => `
        <div class="page-feature-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <div>
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // Next / Prev listeners
  prevBtn?.addEventListener('click', () => {
    const newIdx = (currentPageIdx - 1 + WORKBOOK_PAGES.length) % WORKBOOK_PAGES.length;
    renderPage(newIdx, true);
  });

  nextBtn?.addEventListener('click', () => {
    const newIdx = (currentPageIdx + 1) % WORKBOOK_PAGES.length;
    renderPage(newIdx, true);
  });

  // Zoom click
  imgWrapper?.addEventListener('click', () => {
    openZoomModal(currentPageIdx);
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const zoomModal = document.getElementById('zoomModal');
    if (zoomModal && zoomModal.hasAttribute('open')) return; // let modal handle its own keys

    if (e.key === 'ArrowRight') {
      const newIdx = (currentPageIdx + 1) % WORKBOOK_PAGES.length;
      renderPage(newIdx, true);
    } else if (e.key === 'ArrowLeft') {
      const newIdx = (currentPageIdx - 1 + WORKBOOK_PAGES.length) % WORKBOOK_PAGES.length;
      renderPage(newIdx, true);
    }
  });

  // Initial render (do NOT scroll tabs or window on initial load)
  renderPage(0, false);
}

// ==========================================================================
// Zoom Modal Functionality
// ==========================================================================
function openZoomModal(pageIndex) {
  const modal = document.getElementById('zoomModal');
  const img = document.getElementById('zoomModalImg');
  const caption = document.getElementById('zoomModalCaption');
  const data = WORKBOOK_PAGES[pageIndex];

  if (!modal || !img || !data) return;

  img.src = data.imageHd || data.image;
  img.alt = data.title;
  if (caption) caption.textContent = `Страница ${data.page}: ${data.title} — ${data.subtitle}`;

  modal.showModal();
}

// ==========================================================================
// Interactive Diagnostic Quiz
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    question: "1. Сколько времени ваш подросток проводит в телефоне или за играми в день?",
    options: [
      { text: "Менее 2 часов — телефон только по делу и для связи", score: 1 },
      { text: "Около 3–4 часов — после уроков и вечером", score: 2 },
      { text: "5–7 часов — телефон в руках постоянно, даже за столом", score: 3 },
      { text: "8+ часов — сидит до 2–3 часов ночи, не оторвать", score: 4 }
    ]
  },
  {
    question: "2. Как подросток реагирует на просьбы убрать в комнате или сесть за уроки?",
    options: [
      { text: "Спокойно соглашается и делает в разумное время", score: 1 },
      { text: "Откладывает «на потом», но после второго напоминания садится", score: 2 },
      { text: "Раздражается, хлопает дверью или замыкается в себе", score: 3 },
      { text: "Постоянный скандал и крики: «Отстаньте, моя жизнь!»", score: 4 }
    ]
  },
  {
    question: "3. Есть ли у подростка цели и понимание своих сильных сторон?",
    options: [
      { text: "Да, четко знает, чем хочет заниматься и кем стать", score: 1 },
      { text: "Есть увлечения, но цели ставит хаотично и неуверенно", score: 2 },
      { text: "Говорит «мне всё равно» или «не знаю, кем быть»", score: 3 },
      { text: "Полная апатия, страх будущего и боязнь экзаменов", score: 4 }
    ]
  },
  {
    question: "4. Что происходит, когда он начинает новое полезное дело (спорт, язык, режим)?",
    options: [
      { text: "Доводит до устойчивой привычки, проявляет дисциплину", score: 1 },
      { text: "Держится пару недель, потом постепенно бросает", score: 2 },
      { text: "Бросает через 2–3 дня, жалуется на скуку и лень", score: 3 },
      { text: "Даже не пробует начать: уверен, что ничего не получится", score: 4 }
    ]
  }
];

let currentQuestionIdx = 0;
let quizScores = [];

function initQuiz() {
  const qTitle = document.getElementById('quizQuestionTitle');
  const qOptions = document.getElementById('quizOptionsGrid');
  const qProgressFill = document.getElementById('quizProgressFill');
  const qStepText = document.getElementById('quizStepIndicator');
  const qNextBtn = document.getElementById('quizNextBtn');
  const qResultView = document.getElementById('quizResultView');
  const qQuestionView = document.getElementById('quizQuestionView');

  if (!qTitle || !qOptions) return;

  function renderQuestion(idx) {
    const qData = QUIZ_QUESTIONS[idx];
    qTitle.textContent = qData.question;
    qStepText.textContent = `ВОПРОС ${idx + 1} ИЗ ${QUIZ_QUESTIONS.length}`;
    qProgressFill.style.width = `${((idx + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    qOptions.innerHTML = '';
    qData.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span>${opt.text}</span>
        <div class="quiz-radio-circle"></div>
      `;
      btn.addEventListener('click', () => {
        qOptions.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        quizScores[idx] = opt.score;
        if (qNextBtn) qNextBtn.disabled = false;
      });
      qOptions.appendChild(btn);
    });

    if (qNextBtn) {
      qNextBtn.disabled = true;
      qNextBtn.textContent = idx === QUIZ_QUESTIONS.length - 1 ? 'Узнать результат анализа' : 'Следующий вопрос →';
    }
  }

  qNextBtn?.addEventListener('click', () => {
    if (quizScores[currentQuestionIdx] === undefined) return;

    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      currentQuestionIdx++;
      renderQuestion(currentQuestionIdx);
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    const totalScore = quizScores.reduce((acc, val) => acc + (val || 0), 0);
    if (qQuestionView) qQuestionView.style.display = 'none';
    if (qResultView) qResultView.style.display = 'block';

    const resultBadge = document.getElementById('quizResultScore');
    const resultTitle = document.getElementById('quizResultTitle');
    const resultDesc = document.getElementById('quizResultDesc');

    if (totalScore >= 12) {
      if (resultBadge) resultBadge.textContent = '88%';
      if (resultTitle) resultTitle.textContent = 'Высокий уровень цифрового стресса и прокрастинации';
      if (resultDesc) resultDesc.textContent = 'Подростку тяжело справляться с лавиной информации. Давление и нотации только усиливают бунт. Практика «ПРОЕКТ: Я» с фокусом на страницы 2, 6, 7 и 9 поможет снять тревогу и мягко вернуть режим за 30 дней.';
    } else if (totalScore >= 8) {
      if (resultBadge) resultBadge.textContent = '65%';
      if (resultTitle) resultTitle.textContent = 'Умеренный кризис мотивации (Типичный для 13–16 лет)';
      if (resultDesc) resultDesc.textContent = 'У подростка есть потенциал, но не хватает четкой системы и навыка микрошагов. «Колесо жизни» (стр. 4) и трекер привычек (стр. 7) дадут нужный толчок без конфликтов в семье.';
    } else {
      if (resultBadge) resultBadge.textContent = '35%';
      if (resultTitle) resultTitle.textContent = 'Хороший уровень самоорганизации с потенциалом для рывка';
      if (resultDesc) resultDesc.textContent = 'Ваш подросток уже на правильном пути. Тетрадь «ПРОЕКТ: Я» станет для него личным инструментом лидерства, целеполагания на 90 дней и подготовки к взрослым победам.';
    }
  }

  // Initial render
  renderQuestion(0);
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        if (answer) answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        if (answer) answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
      }
    });
  });
}

// ==========================================================================
// Native Dialog Modals (with Modern Web Guidance fallbacks)
// ==========================================================================
function initModals() {
  const dialogs = document.querySelectorAll('dialog');

  dialogs.forEach(dialog => {
    // 1. Close buttons inside dialog
    const closeBtns = dialog.querySelectorAll('.modal-close-btn, [data-close-modal]');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => dialog.close());
    });

    // 2. Fallback for browsers without 'closedby' support
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;

        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );

        if (!isDialogContent) {
          dialog.close();
        }
      });
    }
  });

  // Modal Plan Selector Radio listeners
  const planOptions = document.querySelectorAll('.modal-plan-option');
  planOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    radio?.addEventListener('change', () => {
      planOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      const planVal = radio.value;
      const priceVal = radio.getAttribute('data-price') || '';

      const planInput = document.getElementById('orderPlanSelect');
      const priceInput = document.getElementById('orderPlanPrice');
      if (planInput) planInput.value = planVal;
      if (priceInput) priceInput.value = priceVal;
    });
  });

  // Global triggers to open Order Modal
  document.querySelectorAll('[data-open-order]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-name') || 'Печатная тетрадь (Хит)';
      const planPrice = btn.getAttribute('data-plan-price') || '780 ₽';

      const parentCard = btn.closest('.pricing-card');
      if (parentCard) {
        document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('active-selected'));
        parentCard.classList.add('active-selected');
      }

      openOrderModal(planName, planPrice);
    });
  });
}

function openOrderModal(planName, planPrice) {
  const orderModal = document.getElementById('orderModal');
  const planInput = document.getElementById('orderPlanSelect');
  const priceInput = document.getElementById('orderPlanPrice');
  const planOptions = document.querySelectorAll('.modal-plan-option');

  if (planInput) planInput.value = planName;
  if (priceInput) priceInput.value = planPrice;

  // Match corresponding radio button inside modal
  let matched = false;
  planOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    if (!radio) return;

    const isMatch = (
      radio.value.toLowerCase().includes(planName.toLowerCase()) ||
      planName.toLowerCase().includes(radio.value.toLowerCase()) ||
      (planName.includes('PDF') && radio.value.includes('PDF')) ||
      (planName.includes('Печатная') && radio.value.includes('Печатная')) ||
      (planName.includes('Наставник') && radio.value.includes('Наставник'))
    );

    if (isMatch && !matched) {
      radio.checked = true;
      opt.classList.add('selected');
      if (priceInput) priceInput.value = radio.getAttribute('data-price') || planPrice;
      matched = true;
    } else {
      opt.classList.remove('selected');
    }
  });

  orderModal?.showModal();
  setTimeout(() => {
    document.getElementById('orderEmail')?.focus();
  }, 120);
}

// ==========================================================================
// Telegram Notification Helper (with Auto-Discovery of Chat ID)
// ==========================================================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Автоматическое определение Chat ID получателей.
 * 1. Если chatId явно указан в config.js — используется он.
 * 2. Если chatId пустой — опрашиваем getUpdates в Telegram API,
 *    находя пользователей, нажавших /start в боте.
 */
async function getTelegramRecipients(token, explicitChatId) {
  if (explicitChatId && explicitChatId !== 'YOUR_CHAT_ID') {
    return [explicitChatId];
  }

  // 1. Проверяем сохраненные Chat ID в localStorage
  try {
    const cached = localStorage.getItem('tg_recipient_chats');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}

  // 2. Автоматический опрос Telegram getUpdates
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?limit=25`);
    const data = await res.json();
    if (data.ok && Array.isArray(data.result) && data.result.length > 0) {
      const chats = new Set();
      data.result.forEach(update => {
        const msg = update.message || update.channel_post || update.edited_message;
        if (msg && msg.chat && msg.chat.id) {
          chats.add(String(msg.chat.id));
        }
      });

      if (chats.size > 0) {
        const ids = Array.from(chats);
        try {
          localStorage.setItem('tg_recipient_chats', JSON.stringify(ids));
        } catch (e) {}
        return ids;
      }
    }
  } catch (err) {
    console.warn('[Telegram Order] Автоматический поиск chat_id через getUpdates:', err);
  }

  return [];
}

/**
 * Проверка новых пользователей, нажавших /start в боте.
 * При обнаружении отправляет автоматический ответ:
 * «Вы подключены, теперь вы будете получать заявки с сайта https://higolol.github.io/projectI/ в этот бот»
 */
async function initTelegramBot() {
  const config = window.TELEGRAM_CONFIG || {};
  const token = (config.botToken || '').trim();
  if (!token || token === 'YOUR_BOT_TOKEN') return;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?limit=25`);
    const data = await res.json();
    if (!data.ok || !Array.isArray(data.result)) return;

    let welcomedChats = [];
    try {
      welcomedChats = JSON.parse(localStorage.getItem('tg_welcomed_chats') || '[]');
    } catch (e) {
      welcomedChats = [];
    }

    for (const update of data.result) {
      const msg = update.message || update.edited_message;
      if (msg && msg.text && msg.text.startsWith('/start') && msg.chat && msg.chat.id) {
        const chatId = String(msg.chat.id);
        if (!welcomedChats.includes(chatId)) {
          const welcomeText =
            `✅ <b>Вы подключены!</b>\n\n` +
            `Теперь вы будете получать заявки с сайта https://higolol.github.io/projectI/ в этот бот 🚀`;

          try {
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: welcomeText,
                parse_mode: 'HTML'
              })
            });

            welcomedChats.push(chatId);
            try {
              localStorage.setItem('tg_welcomed_chats', JSON.stringify(welcomedChats));
            } catch (e) {}

            if (config.debug) {
              console.log(`[Telegram Bot] Отправлен автоответ на /start в чат ${chatId}`);
            }
          } catch (sendErr) {
            console.error(`[Telegram Bot] Не удалось отправить автоответ в ${chatId}:`, sendErr);
          }
        }
      }
    }
  } catch (err) {
    if (config.debug) {
      console.warn('[Telegram Bot] Ошибка проверки подписчиков:', err);
    }
  }
}

async function sendTelegramOrderNotification(orderData) {
  const config = window.TELEGRAM_CONFIG || {};
  const token = (config.botToken || '').trim();
  const explicitChatId = (config.chatId || '').trim();

  const now = new Date();
  const dateStr = now.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const clientName = orderData.name ? orderData.name.trim() : 'дорогой друг';
  const mailSubject = encodeURIComponent(`Ссылка на оплату: тетрадь «ПРОЕКТ: Я» (${orderData.plan})`);
  const mailBody = encodeURIComponent(
    `Здравствуйте, ${clientName}!\n\n` +
    `Благодарим вас за заказ тетради самоконтроля «ПРОЕКТ: Я»!\n` +
    `Выбранный тариф: ${orderData.plan} — ${orderData.price}.\n\n` +
    `Ваша персональная ссылка на оплату:\n` +
    `[ВСТАВЬТЕ СЮДА ССЫЛКУ НА ОПЛАТУ]\n\n` +
    `После оплаты материалы будут моментально отправлены вам на этот email.\n\n` +
    `С уважением,\nМария Маркина\nАвтор проекта «ПРОЕКТ: Я»`
  );
  const mailtoUrl = `mailto:${orderData.email}?subject=${mailSubject}&body=${mailBody}`;

  const messageText =
    `🔔 <b>НОВЫЙ ЗАКАЗ НА САЙТЕ!</b>\n` +
    `──────────────────────\n` +
    `📦 <b>Тариф:</b> ${escapeHtml(orderData.plan)}\n` +
    `💰 <b>Стоимость:</b> ${escapeHtml(orderData.price)}\n` +
    `✉️ <b>Email клиента:</b> <code>${escapeHtml(orderData.email)}</code>\n` +
    (orderData.name ? `👤 <b>Имя:</b> ${escapeHtml(orderData.name)}\n` : '') +
    (orderData.contact ? `📱 <b>Телефон/TG:</b> ${escapeHtml(orderData.contact)}\n` : '') +
    `⏰ <b>Время заказа:</b> ${dateStr} (МСК)\n` +
    `──────────────────────\n` +
    `👉 <b>Действие:</b> отправьте клиенту ссылку на оплату:\n` +
    `📨 <a href="${mailtoUrl}"><b>Нажмите сюда, чтобы открыть готовое письмо</b></a>\n` +
    `<i>(или просто скопируйте email в 1 клик выше)</i>`;

  // Check if bot token is provided
  if (!token || token === 'YOUR_BOT_TOKEN') {
    if (config.debug) {
      console.warn(
        '[Telegram Order] ⚠️ Токен бота не настроен в js/config.js.\n' +
        'Сформированное сообщение для Telegram:\n' + messageText
      );
    }
    return { success: true, simulated: true };
  }

  // Auto-discover recipient Chat IDs from getUpdates if not specified
  const recipients = await getTelegramRecipients(token, explicitChatId);

  if (recipients.length === 0) {
    if (config.debug) {
      console.warn(
        '[Telegram Order] ⏳ Токен бота активен, но клиент ещё не нажал /start в боте!\n' +
        'Клиенту достаточно открыть бота и нажать Start, после чего он сразу начнёт получать заказы.\n' +
        'Данные заказа:', orderData
      );
    }
    return { success: true, simulated: true, waitingForStart: true };
  }

  // Send message to all detected recipients
  let anySuccess = false;
  for (const chatId of recipients) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: 'HTML'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (response.ok && result.ok) {
        anySuccess = true;
        if (config.debug) {
          console.log(`[Telegram Order] ✅ Уведомление доставлено в чат ${chatId}:`, result);
        }
      } else {
        console.error(`[Telegram Order] ❌ Ошибка ответа Telegram API для чата ${chatId}:`, result);
      }
    } catch (err) {
      console.error(`[Telegram Order] ⚠️ Ошибка при отправке в чат ${chatId}:`, err);
    }
  }

  return { success: anySuccess };
}

// ==========================================================================
// Order Form & Payment Flow
// ==========================================================================
function initForms() {
  const orderForm = document.getElementById('orderForm');
  const orderModal = document.getElementById('orderModal');
  const successModal = document.getElementById('paymentSuccessModal');
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastNoticeMsg');

  orderForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('orderName');
    const contactInput = document.getElementById('orderContact');
    const emailInput = document.getElementById('orderEmail');
    const planInput = document.getElementById('orderPlanSelect');
    const priceInput = document.getElementById('orderPlanPrice');
    const submitBtn = document.getElementById('orderSubmitBtn') || orderForm.querySelector('button[type="submit"]');

    const name = nameInput?.value.trim() || '';
    const contact = contactInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const plan = planInput?.value || 'Печатная тетрадь (Хит)';
    const price = priceInput?.value || '780 ₽';

    if (!email) {
      emailInput?.focus();
      return;
    }

    // Loading state for submit button
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <svg class="spin-animation" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg>
          <span>Формируем ссылку...</span>
        </span>
      `;
    }

    // Send Telegram notification
    await sendTelegramOrderNotification({
      name,
      contact,
      email,
      plan,
      price
    });

    // Restore button state
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }

    // Close order modal
    orderModal?.close();

    // Populate and open success modal
    const successEmailEl = document.getElementById('successModalEmail');
    const successPlanEl = document.getElementById('successModalPlan');
    const successPriceEl = document.getElementById('successModalPrice');

    if (successEmailEl) successEmailEl.textContent = email;
    if (successPlanEl) successPlanEl.textContent = plan;
    if (successPriceEl) successPriceEl.textContent = price;

    if (successModal) {
      successModal.showModal();
    }

    // Also trigger celebratory toast
    if (toast && toastMsg) {
      toastMsg.innerHTML = `<strong>Заявка принята!</strong> Ссылка на оплату тарифа «${plan}» будет направлена на почту <u>${email}</u>.`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 6000);
    }

    orderForm.reset();
  });
}

// ==========================================================================
// Special Offer Countdown Timer
// ==========================================================================
function initTimer() {
  const hoursEl = document.getElementById('timerHours');
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  // Set 24 hour timer from session start
  let totalSeconds = 23 * 3600 + 45 * 60 + 12;

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }
  }, 1000);
}
