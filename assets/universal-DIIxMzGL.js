(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const i=`<header class="header">\r
  <div class="container">\r
    <div class="header-content">\r
      <div class="logo">\r
        <a href="/">\r
          <!-- <img src="/src/assets/logo.svg" alt="Логотип" /> -->\r
        </a>\r
      </div>\r
\r
      <nav class="main-nav">\r
        <ul>\r
          <li><a href="/" class="nav-link">Главная</a></li>\r
          <li><a href="/about/" class="nav-link">О нас</a></li>\r
          <li><a href="/services/" class="nav-link">Услуги</a></li>\r
          <li><a href="/portfolio/" class="nav-link">Портфолио</a></li>\r
          <li><a href="/contact/" class="nav-link">Контакты</a></li>\r
          <li><a href="/blog/" class="nav-link">Блог</a></li>\r
        </ul>\r
      </nav>\r
\r
      <div class="header-actions">\r
        <button class="theme-toggle" aria-label="Переключить тему">\r
          <i class="fas fa-moon"></i>\r
        </button>\r
\r
        <button class="mobile-menu-toggle" aria-label="Меню">\r
          <span></span>\r
          <span></span>\r
          <span></span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</header>\r
`,s=`<footer class="footer">\r
  <div class="container">\r
    <div class="footer-content">\r
      <div class="footer-col">\r
        <h3>О компании</h3>\r
        <p>\r
          Краткое описание вашей компании и основных направлений деятельности.\r
        </p>\r
        <div class="social-links">\r
          <a href="#" aria-label="Facebook"\r
            ><i class="fab fa-facebook-f"></i\r
          ></a>\r
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>\r
          <a href="#" aria-label="Instagram"\r
            ><i class="fab fa-instagram"></i\r
          ></a>\r
          <a href="#" aria-label="LinkedIn"\r
            ><i class="fab fa-linkedin-in"></i\r
          ></a>\r
        </div>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h3>Быстрые ссылки</h3>\r
        <ul>\r
          <li><a href="/">Главная</a></li>\r
          <li><a href="/about.html">О нас</a></li>\r
          <li><a href="/services.html">Услуги</a></li>\r
          <li><a href="/portfolio.html">Портфолио</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h3>Услуги</h3>\r
        <ul>\r
          <li><a href="#">Веб-разработка</a></li>\r
          <li><a href="#">Дизайн</a></li>\r
          <li><a href="#">SEO</a></li>\r
          <li><a href="#">Консультации</a></li>\r
        </ul>\r
      </div>\r
\r
      <div class="footer-col">\r
        <h3>Контакты</h3>\r
        <ul class="contact-info">\r
          <li><i class="fas fa-phone"></i> +7 (999) 123-45-67</li>\r
          <li><i class="fas fa-envelope"></i> info@example.com</li>\r
          <li>\r
            <i class="fas fa-map-marker-alt"></i> г. Москва, ул. Примерная, 123\r
          </li>\r
        </ul>\r
      </div>\r
    </div>\r
\r
    <div class="footer-bottom">\r
      <p>&copy; 2024 Ваш сайт. Все права защищены.</p>\r
    </div>\r
  </div>\r
</footer>\r
`;function c(){console.log("Загрузка компонентов...");const e=document.getElementById("header-placeholder");e?(e.innerHTML=i,console.log("Header загружен")):console.warn("header-placeholder не найден");const t=document.getElementById("footer-placeholder");t?(t.innerHTML=s,console.log("Footer загружен")):console.warn("footer-placeholder не найден")}console.log("Универсальный скрипт загружен");document.addEventListener("DOMContentLoaded",async()=>{c(),await new Promise(e=>setTimeout(e,100)),f(),m(),h(),u(),g(),d()});function d(){console.log("Инициализация анимаций");const e=document.querySelectorAll(".animate-element");console.log(`Найдено анимированных элементов: ${e.length}`),e.forEach(n=>{n.style.opacity="0",n.style.transform="translateY(30px)",n.style.transition="opacity 0.6s ease, transform 0.6s ease"});const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},l=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(setTimeout(()=>{o.target.style.opacity="1",o.target.style.transform="translateY(0)"},100),l.unobserve(o.target))})},t);e.forEach(n=>{l.observe(n)}),setTimeout(()=>{document.querySelectorAll(".hero .animate-element").forEach((o,r)=>{setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},200+r*150)})},300)}function f(){console.log("Инициализация навигации");const e=document.querySelectorAll("nav a[href]");console.log(`Найдено навигационных ссылок: ${e.length}`);const t=window.location.pathname;console.log(`Текущий путь: ${t}`),e.forEach(l=>{const n=l.getAttribute("href");(t==="/"&&(n==="/"||n==="./index.html"||n==="index.html")||t.includes("/about")&&n.includes("about")||t.includes("/blog")&&n.includes("blog")||t.includes("/contact")&&n.includes("contact"))&&l.classList.add("active")})}function m(){console.log("Инициализация мобильного меню");const e=document.querySelector(".mobile-toggle"),t=document.querySelector(".main-nav");if(console.log("Mobile toggle:",e),console.log("Main nav:",t),!e||!t){console.log("Элементы мобильного меню не найдены");return}e.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active")}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("active"),e.classList.remove("active")})})}function h(){console.log("Инициализация переключателя темы");const e=document.querySelector(".theme-toggle");if(console.log("Theme toggle:",e),!e){console.log("Переключатель темы не найден");return}const t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",t),e.addEventListener("click",()=>{const n=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n)})}function u(){console.log("Инициализация плавной прокрутки"),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",l=>{const n=t.getAttribute("href");if(n==="#")return;const o=document.querySelector(n);o&&(l.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"}))})})}function g(){console.log("Инициализация кнопки «Наверх»");const e=document.createElement("button");e.innerHTML="↑",e.className="scroll-to-top",e.style.cssText=`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background: var(--primary-color, #007bff);
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  `,document.body.appendChild(e),console.log("Кнопка «Наверх» создана"),window.addEventListener("scroll",()=>{window.pageYOffset>300?(e.style.opacity="1",e.style.visibility="visible"):(e.style.opacity="0",e.style.visibility="hidden")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}
