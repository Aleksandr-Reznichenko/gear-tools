# Gear Tools

## English

Catalog-style static website that curates popular and newcomer tools for
designers and developers. Built as a multipage, responsive experience with
lightweight vanilla JavaScript interactions and adaptive assets.

### Preview

![Gear Tools Preview](./images/preview.jpg)

### Links

- **Live Demo:** https://aleksandr-reznichenko.github.io/gear-tools/
- **Repository:** https://github.com/Aleksandr-Reznichenko/gear-tools

### Highlights

- Multipage: `index.html`, `popular-tools.html`, `newcomer-tools.html`,
  `about.html`.
- Responsive UI with shared `css/main.css` plus modular component/page styles.
- Adaptive images: `srcset` with `@2x` assets for retina/high-DPI displays
  across heroes, logos, tool cards, and team photos.
- Interactivity in vanilla JS: mobile menu with scroll lock, typed rotating
  headline, smooth anchor scrolling, current-page highlighting, scroll-aware
  back-to-top button.
- Animations via AOS (disabled below 1200px viewport to keep mobile and tablet
  devices performant).
- Accessibility touches: `aria` labels, `aria-current` on active links,
  keyboard-friendly buttons/links.

### Tech Stack

- HTML + CSS (BEM-like naming) + vanilla JavaScript.
- External CDNs: Modern Normalize, AOS; Google Fonts.

### Project Structure

- `index.html` — landing with hero, tool stats, popular preview, newcomer
  preview, testimonials, trusted brands, subscription footer.
- `popular-tools.html` — full catalog of popular tools with plan badges and
  tags.
- `newcomer-tools.html` — curated list of rising tools.
- `about.html` — mission statement, culture highlights, team roster.
- `css/` — base, layout, component, and page-level styles combined via
  `css/main.css`.
- `js/` — `mobile-menu.js`, `typed-headline.js`, `current-page.js`,
  `scroll-page.js`, `back-to-top.js`.
- `images/` — logos, icons, hero assets, team photos, sprites, favicons,
  including `@2x` variants.

### Run Locally

1. Clone or download the repo.
2. Open `index.html` in a browser, or serve the folder with any static server
   (e.g., VS Code Live Server).
3. Use the header navigation to browse other pages.

### Deployment

- Static-site ready for any host (e.g., GitHub Pages). Canonical links target
  the live demo: https://aleksandr-reznichenko.github.io/gear-tools/

---

## Українською

Статичний веб-сайт у стилі каталогу, який об'єднує популярні та нові інструменти
для дизайнерів та розробників. Побудований як багатосторінковий адаптивний
інтерфейс з легкими взаємодіями на чистому JavaScript та адаптивними ресурсами.

### Перегляд

![Прев'ю Gear Tools](./images/preview.jpg)

### Посилання

- **Жива сторінка:** https://aleksandr-reznichenko.github.io/gear-tools/
- **Репозиторій:** https://github.com/Aleksandr-Reznichenko/gear-tools

### Основні акценти

- Багатосторінковий сайт: `index.html`, `popular-tools.html`,
  `newcomer-tools.html`, `about.html`.
- Адаптивний інтерфейс: спільний `css/main.css` + модульні стилі
  компонентів/сторінок.
- Адаптивні зображення: `srcset` із `@2x` для Retina/HiDPI (герой, логотипи,
  картки інструментів, фото команди).
- Інтерактивність на чистому JS: мобільне меню зі блокуванням скролу, анімований
  заголовок, плавний скрол до якорів, підсвітка поточної сторінки, кнопка нагору
  з логікою видимості.
- Анімації AOS, відключені для вікон < 1200px для кращої продуктивності на
  мобільних та планшетних пристроях.
- Доступність: aria-атрибути, `aria-current` для активних посилань, елементи
  керовані клавіатурою.

### Техстек

- HTML + CSS (неймінг у стилі BEM) + чистий JavaScript.
- Зовнішні CDN: Modern Normalize, AOS; Google Fonts.

### Структура проєкту

- `index.html` — лендинг із героєм, статистикою, прев'ю популярних і нових
  інструментів, відгуками, брендами, підпискою.
- `popular-tools.html` — повний список популярних інструментів з бейджами планів
  і тегами.
- `newcomer-tools.html` — добірка інструментів, що набирають популярності.
- `about.html` — місія, культура, команда.
- `css/` — базові, компонетні та сторінкові стилі, зібрані у `css/main.css`.
- `js/` — `mobile-menu.js`, `typed-headline.js`, `current-page.js`,
  `scroll-page.js`, `back-to-top.js`.
- `images/` — логотипи, іконки, герой-елементи, фото команди, спрайт, фавікони,
  а також `@2x`-варіанти для ретіна екранів.

### Запуск локально

1. Клонувати або завантажити репозиторій.
2. Відкрити `index.html` у браузері або запустити будь-який статичний сервер
   (наприклад, VS Code Live Server).
3. Переміщатися між сторінками через навігацію в хедері.

### Розгортання

- Готовий до будь-якого статичного хостингу (наприклад, GitHub Pages). Канонічні
  посилання вказують на демо:
  https://aleksandr-reznichenko.github.io/gear-tools/
