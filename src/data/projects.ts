import type { Project } from "types";

export const projects: Project[] = [
  {
    id: "-2",
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
    image: "/images/projects/img1.jpg",
  },
  {
    id: "-1",
    name: "Search Autocomplete",
    description:
      "Searching input with autocompleting example with jsonplaceholder api. Using React, Redux and TypeScript",
    type: "Example",
    tech_stack: ["React", "Redux", "TypeScript", "Module CSS"],
    tags: ["Thunk", "Search", "Axios", "Accessibility", "Optymalization"],
    code: "https://github.com/kubo550/search-autocomplite",
    preview: "https://kubo550.github.io/search-autocomplite/",
    image: "/images/projects/img4.jpg",
  },
  {
    id: "0",
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
    preview: "https://",
    image: "/images/projects/img2.jpg",
  },
  {
    id: "1",
    name: "Dev Blog",
    description:
      "Blog for evry programmer who live alone to improve Your coding and cooking skills. Blog how to coode and how to cook all in one place.",
    type: "PWA",
    tech_stack: [
      "Next.js",
      "HeadlesCMS",
      "TypeScript",
      "TailwindCSS",
      "MarkDown",
    ],

    tags: [
      "framer-motion",
      "react-icons",
      "nProgress",
      "dark mode",
      "react-scroll",
      "responsive",
    ],
    code: "https://github.com/kubo550/dev-blog",
    preview: "https://",
    image: "/images/projects/img3.jpg",
  },
];
