import { Description } from "@radix-ui/react-toast";
import { title } from "process";

export default {
  nav: {
    projects: "Кейсы",
    about: "Обо мне",
    contact: "Контакты",
  },
  hero: {
    subtitle: "FULLSTACK РАЗРАБОТЧИК",
    services: [
      "Сайты",
      "Telegram-боты",
      "Приложения",
      "E-commerce",
      "Админ-панели",
      "DevOps & Деплой",
    ],
  },
  about: {
    title: "Обо мне",
    paragraphs: [
    "Я в мире IT с 2025 года. Я — <span class='text-accent-green'>full-stack разработчик</span>: создаю современные сайты, Telegram-боты, веб-приложения, а также CRM/ERP-системы. Специализируюсь на <span class='text-accent-green'>Python</span>, <span class='text-accent-green'>React</span>, <span class='text-accent-green'>Node.js</span> и <span class='text-accent-green'>TypeScript</span>.",
    "Работал с заказчиками разного уровня — от предпринимателей до крупных компаний. Люблю писать чистый, производительный код и делать понятные интерфейсы.",
    "Постоянно изучаю новые технологии и подходы к разработке. <span class='text-accent-green'>Открыт для интересных проектов и новых вызовов</span>."
    ],
    skillsTitle: "Технологии",
    skills: [
      "Python","JavaScript","TypeScript","React","Next.js",
      "Node.js","Express","MongoDB","PostgreSQL",
      "Tailwind CSS","Docker","Git",
    ],
  },
  projects: {
    title: "Кейсы",

    mediCare: {
    title: "Medicare",
    description:
      "Информационный сайт медицинского направления с упором на SEO и мультиязычность (RU/UZ/EN). Разработан как лёгкий лендинг на React/Vite/Tailwind с мгновенным переключением языков без перезагрузки страницы. Оптимизирован для высокой скорости и индексации поисковыми системами. Деплой выполнен на Netlify, CDN и DNS управляются через Cloudflare.",
    },

    essenza: {
      title: "Essenza Perfumes",
      description: "Оптовая платформа под Узбекистан (официальный дистрибьютор Argeville): акцент на продажу парфюмов литрами (5–30 L), строгий lux-каталог, мультиязычность (RU/UZ/EN), быстрый лендинг на React/Vite/Tailwind, деплой на Netlify, CDN и DNS через Cloudflare, бэкенд и админ-модуль в разработке, планируется на Node.js/Prisma/PostgreSQL."
    },

    pitStopOne: {
      title: "PitStop One",
      description: "PitStop One — веб-приложение для управления автосервисом.\nОдностраничная система администрирования, предназначенная для централизованного управления клиентами, автомобилями и сервисными операциями. Проект реализован как SPA с упором на скорость, удобство интерфейса и логичную структуру данных. Развёрнут на Netlify, обеспечена быстрая доставка контента через CDN.",
    },

    ecoLife: {
      title: "Eco Life Etiqod",
      description: `Eco Life Etiqod — это сайт курорта здоровья, который демонстрирует целебную родниковую воду, шведский стол и уютную семейную атмосферу. Сайт имеет адаптивный многостраничный дизайн с современным оформлением и плавными анимациями. Построен с использованием HTML, CSS, JavaScript и React, он обеспечивает удобный пользовательский опыт на всех устройствах.`,
    },

    noPreview: "Нет превью",
    liveDemo: "Смотрть демо",
    code: "Исходный код",
  },

  contact: {
    title: "Контакты",
    subtitle: "Заинтересованы в сотрудничестве? Напишите мне — обсудим ваш проект и найдём лучшее решение.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    footer: "© 2025 Все права защищены",
  },
};