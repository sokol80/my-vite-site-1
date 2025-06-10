(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();const a=`<header class="header">\r
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
`;function c(){const e=document.getElementById("header-placeholder");e&&(e.innerHTML=a);const o=document.getElementById("footer-placeholder");o&&(o.innerHTML=s)}console.log("Универсальный скрипт загружен");document.addEventListener("DOMContentLoaded",async()=>{c(),await new Promise(e=>setTimeout(e,100)),f(),m(),u(),h(),g(),d()});function d(){console.log("Инициализация анимаций");const e=document.querySelectorAll(".animate-element");console.log(`Найдено анимированных элементов: ${e.length}`),e.forEach(t=>{t.style.opacity="0",t.style.transform="translateY(30px)",t.style.transition="opacity 0.6s ease, transform 0.6s ease"});const o={threshold:.1,rootMargin:"0px 0px -50px 0px"},l=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(setTimeout(()=>{n.target.style.opacity="1",n.target.style.transform="translateY(0)"},100),l.unobserve(n.target))})},o);e.forEach(t=>{l.observe(t)}),setTimeout(()=>{document.querySelectorAll(".hero .animate-element").forEach((n,r)=>{setTimeout(()=>{n.style.opacity="1",n.style.transform="translateY(0)"},200+r*150)})},300)}function f(){console.log("Инициализация навигации");const e=document.querySelectorAll("nav a[href]");console.log(`Найдено навигационных ссылок: ${e.length}`);const o=window.location.pathname;console.log(`Текущий путь: ${o}`),e.forEach(l=>{const t=l.getAttribute("href");(o==="/"&&(t==="/"||t==="./index.html"||t==="index.html")||o.includes("/about")&&t.includes("about")||o.includes("/blog")&&t.includes("blog")||o.includes("/contact")&&t.includes("contact"))&&l.classList.add("active")})}function m(){console.log("Инициализация мобильного меню");const e=document.querySelector(".mobile-toggle"),o=document.querySelector(".main-nav");if(console.log("Mobile toggle:",e),console.log("Main nav:",o),!e||!o){console.log("Элементы мобильного меню не найдены");return}e.addEventListener("click",()=>{o.classList.toggle("active"),e.classList.toggle("active")}),o.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{o.classList.remove("active"),e.classList.remove("active")})})}function u(){console.log("Инициализация переключателя темы");const e=document.querySelector(".theme-toggle");if(console.log("Theme toggle:",e),!e){console.log("Переключатель темы не найден");return}const o=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",o),e.addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)})}function h(){console.log("Инициализация плавной прокрутки"),document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",l=>{const t=o.getAttribute("href");if(t==="#")return;const n=document.querySelector(t);n&&(l.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}))})})}function g(){console.log("Инициализация кнопки «Наверх»");const e=document.createElement("button");e.innerHTML="↑",e.className="scroll-to-top",e.style.cssText=`
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
