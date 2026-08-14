export type HomeParagraphSegment = {
  text: string
  strong?: boolean
}

export const homeName = "Carl Justin Carreon"

export const homeIntroParagraphs: HomeParagraphSegment[][] = [
  [
    {
      text: "I'm a software developer focused on building modern, practical web applications that solve real-world problems and are easy to use.",
    },
  ],
  [
    { text: "I've worked on " },
    {
      text: "student capstone projects, government-related systems, and internal business applications",
      strong: true,
    },
    {
      text: ", including solutions for document tracking, workflow management, automated forms, and business processes.",
    },
  ],
  [
    { text: "I also build " },
    { text: "Progressive Web Apps (PWAs)", strong: true },
    { text: " using " },
    { text: "React", strong: true },
    { text: ", creating responsive applications for desktop and mobile." },
  ],
  [
    {
      text: "I enjoy working across frontend and backend development, turning ideas and requirements into practical, user-friendly applications.",
    },
  ],
  [
    { text: "I graduated " },
    {
      text: "Cum Laude with a Bachelor of Science in Information Technology",
      strong: true,
    },
    {
      text: " in the Philippines and received the ",
    },
    { text: "Programmer of the Year", strong: true },
    { text: " and " },
    { text: "Best Presenter", strong: true },
    { text: " awards before graduating." },
  ],
]

export const homeSectionTitle = "Tech Stack"
export const homeProjectsTitle = "Projects"

export const homeTechStack = [
  "Livewire",
  "Codex",
  "Laravel",
  "Vue.js",
  "React",
  "Inertia.js",
  "Laravel Reverb",
  "Tailwind CSS",
  "shadcn/ui",
  "MySQL",
  "Git",
  "GitHub",
  "Docker",
  "DigitalOcean",
  "VS Code",
  "Linux",
  "REST APIs",
  "PHP",
  "JavaScript",
  "HTML5",
  "CSS3",
]

export const homeTechStackPreviewCount = 8
