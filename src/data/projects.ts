import type { Project } from "types";

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce",
    description:
      "Test online store to learn e-commerce with nextjs, headlessCMS & stripe",
    type: "shop",
    tech_stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Commerce.js",
    ],
    tags: ["shop", "headlessCMS", "context", "stripe"],
    code: "https://github.com/kubo550/ecommerce",
    preview: "https://lucid-wescoff-783163.netlify.app/",
    image: "https://user-images.githubusercontent.com/43968748/128085334-6dc74a6a-3446-42ee-b482-e8a4ea0a7cf7.PNG",
    finished: true,
  },
  {
    id: 2,
    name: "Typeracer Clone",
    description:
      "TypeRacer is a multiplayer online browser-based typing game. In TypeRacer, players complete typing tests of various texts as fast as possible,",
    type: "PWA",
    tech_stack: [
      "Next.js",
      "Firebase",
      "TypeScript",
      "Styled-Components",
      "Material-ui",
    ],
    tags: ["auth", "CRUD app", "react-hook-form", "context", "API"],
    code: "https://github.com/kubo550/type-racer-clone",
    preview: "https://",
    image: "https://raw.githubusercontent.com/kubo550/TypeRacer-clone/master/trc-pv1.png",
    finished: false,
  },
  {
    id: 3,
    name: "Notefy",
    description:
      "Make own note in less than 10 seconds and share unique link for your message to your friends.",
    type: "PWA",
    tech_stack: ["Next.js", "Firebase", "TypeScript", "Styled-Components"],
    tags: [
      "nookies",
      "framer-motion",
      "react-icons",
      "nProgress",
      "mobile frendly",
    ],
    code: "https://github.com/kubo550/notefy",
    preview: "https://admiring-heyrovsky-a8f15b.netlify.app/",
    image: "https://user-images.githubusercontent.com/43968748/128223199-2d793711-6535-45ae-b660-51361dea5b96.png",
    finished: false,
  },
  {
    id: 4,
    name: "Search Autocomplete",
    description:
      "Searching input with autocompleting example with jsonplaceholder api. Using React, Redux and TypeScript",
    type: "Example",
    tech_stack: ["React", "Redux", "TypeScript", "Module CSS"],
    tags: ["Thunk", "Search", "Axios", "Accessibility", "Optymalization"],
    code: "https://github.com/kubo550/search-autocomplite",
    preview: "https://kubo550.github.io/search-autocomplite/",
    image: "https://raw.githubusercontent.com/kubo550/search-autocomplite/master/preview/preview.png",
    finished: true,
  },
  {
    id: 5,
    name: "Mc'd coupon generator",
    description: "Quick app to generate for you coupon from McDonalds. You can get food like hamburger, chips, icecreams etc.",
    type: "PWA",
    tech_stack: ["Vue.js", "TypeScript", "Sass"],

    tags: [
      "framer-motion",
      "react-icons",
      "nProgress",
      "dark mode",
      "react-scroll",
      "responsive",
    ],
    code: "https://github.com/kubo550/vue-mcd-coupons",
    preview: "https://k8h8v.csb.app/",
    image:
      "https://raw.githubusercontent.com/kubo550/vue-mcd-coupons/master/mcd-vue-preview.png",
    finished: true,
  },
  {
    id: 6,
    name: "Messenger custom theme",
    description: "Chrome extention to change facebook messenger colors on page to whatever you want.",
    type: "Extention",
    tech_stack: ["chrome extention", "TypeScript", "React"],

    tags: [
      "framer-motion",
      "react-icons",
      "nProgress",
      "dark mode",
      "react-scroll",
      "responsive",
    ],
    code: "https://github.com/kubo550/dark-messenger-extention",
    preview: "https://github.com/kubo550/dark-messenger-extention",
    image:
      "https://raw.githubusercontent.com/kubo550/dark-messenger-extention/master/dark-messenger-preview.png",
    finished: false,
  },
];
