import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Lê Quốc Tâm - Unity Developer',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://pauljaguin.com'
          },
          {
            name: 'title',
            content: 'Portfolio | Lê Quốc Tâm - Unity Developer'
          },
          {
            name: 'description',
            content:
              " Unity Developer passionate about creating engaging 2D gameplay experiences. Proficient in C# and Unity with hands-on experience in building game systems, multiplayer mechanics (Netcode for GameObjects), and data-driven tools (ScriptableObject, State Pattern). Demonstrated ability to design and implement UI/UX, animation rigging, and game logic.  Familiar with asynchronous programming and fundamental data structures. Strong problem-solving mindset, fast learner, and committed to delivering clean, scalable, and maintainable code.."
          },
          {
            name: 'keywords',
            content: 'portfolio, Lê Quốc Tâm, Unity Developer, full stack , applications web, applications mobiles, C#, C++, MVC, Git, Unity'
          },
          {
            name: 'author',
            content: 'Lê Quốc Tâm'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Lê Quốc Tâm - Unity Developer'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Lê Quốc Tâm -  Unity Developer'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Lê Quốc Tâm -  Unity Developer'
          },
          {
            name: 'twitter:description',
            content:
              " Unity Developer passionate about creating engaging 2D gameplay experiences. Proficient in C# and Unity with hands-on experience in building game systems, multiplayer mechanics (Netcode for GameObjects), and data-driven tools (ScriptableObject, State Pattern). Demonstrated ability to design and implement UI/UX, animation rigging, and game logic.  Familiar with asynchronous programming and fundamental data structures. Strong problem-solving mindset, fast learner, and committed to delivering clean, scalable, and maintainable code.."
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Lê Quốc Tâm -  Unity Developer'
          },
          {
            property: 'og:description',
            content:
              " Unity Developer passionate about creating engaging 2D gameplay experiences. Proficient in C# and Unity with hands-on experience in building game systems, multiplayer mechanics (Netcode for GameObjects), and data-driven tools (ScriptableObject, State Pattern). Demonstrated ability to design and implement UI/UX, animation rigging, and game logic.  Familiar with asynchronous programming and fundamental data structures. Strong problem-solving mindset, fast learner, and committed to delivering clean, scalable, and maintainable code.."
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Lê Quốc Tâm -  Unity Developer'
          },
          {
            property: 'og:url',
            content: 'https://pauljaguin.com'
          },
          {
            property: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:locale',
            content: 'fr_FR'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Porfolio | Lê Quốc Tâm - Unity Developer',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://pauljaguin.com/office'
          },
          {
            name: 'title',
            content: 'Quốc Tâm - Unity Developer'
          },
          {
            name: 'description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'bureau, paul jaguin, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Quốc Tâm - Unity Developer'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'application-name',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'twitter:description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'og:description',
            content:
              "Découvrez le bureau de Paul Jaguin, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'og:site_name',
            content: 'Bureau | Paul Jaguin - Développeur Web'
          },
          {
            name: 'og:url',
            content: 'https://pauljaguin.com/office'
          },
          {
            name: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:locale',
            content: 'fr_FR'
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
