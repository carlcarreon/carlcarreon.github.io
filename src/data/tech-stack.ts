export type TechStackIcon =
  | "codex"
  | "css"
  | "digitalocean"
  | "docker"
  | "git"
  | "github"
  | "godaddy"
  | "html"
  | "inertia"
  | "javascript"
  | "laravel"
  | "linux"
  | "livewire"
  | "mysql"
  | "php"
  | "postgresql"
  | "prettier"
  | "pwa"
  | "railway"
  | "react"
  | "rest"
  | "shadcn"
  | "supabase"
  | "tailwind"
  | "vscode"
  | "vercel"
  | "vue"

export type TechStackItem = {
  name: string
  url: string
  icon: TechStackIcon
}

export type TechStackCategory = {
  name: string
  technologies: TechStackItem[]
}

export const techStackCategories: TechStackCategory[] = [
  {
    name: "Frontend",
    technologies: [
      { name: "Vue.js", url: "https://vuejs.org/", icon: "vue" },
      { name: "React", url: "https://react.dev/", icon: "react" },
      {
        name: "Livewire",
        url: "https://livewire.laravel.com/",
        icon: "livewire",
      },
      { name: "Inertia.js", url: "https://inertiajs.com/", icon: "inertia" },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        icon: "tailwind",
      },
      { name: "shadcn/ui", url: "https://ui.shadcn.com/", icon: "shadcn" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
        icon: "javascript",
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/docs/Web/HTML",
        icon: "html",
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/docs/Web/CSS",
        icon: "css",
      },
      {
        name: "PWA",
        url: "https://developer.mozilla.org/docs/Web/Progressive_web_apps",
        icon: "pwa",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Laravel", url: "https://laravel.com/", icon: "laravel" },
      {
        name: "Laravel Reverb",
        url: "https://laravel.com/docs/reverb",
        icon: "laravel",
      },
      { name: "PHP", url: "https://www.php.net/", icon: "php" },
      { name: "MySQL", url: "https://www.mysql.com/", icon: "mysql" },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        icon: "postgresql",
      },
      {
        name: "Supabase",
        url: "https://supabase.com/",
        icon: "supabase",
      },
      {
        name: "REST APIs",
        url: "https://developer.mozilla.org/docs/Glossary/REST",
        icon: "rest",
      },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      { name: "Docker", url: "https://www.docker.com/", icon: "docker" },
      {
        name: "DigitalOcean",
        url: "https://www.digitalocean.com/",
        icon: "digitalocean",
      },
      { name: "Railway", url: "https://railway.com/", icon: "railway" },
      { name: "Vercel", url: "https://vercel.com/", icon: "vercel" },
      { name: "GoDaddy", url: "https://www.godaddy.com/", icon: "godaddy" },
      { name: "Linux", url: "https://www.linux.org/", icon: "linux" },
    ],
  },
  {
    name: "Tools",
    technologies: [
      {
        name: "Codex",
        url: "https://developers.openai.com/codex/",
        icon: "codex",
      },
      { name: "Git", url: "https://git-scm.com/", icon: "git" },
      { name: "GitHub", url: "https://github.com/", icon: "github" },
      {
        name: "Prettier",
        url: "https://prettier.io/",
        icon: "prettier",
      },
      {
        name: "VS Code",
        url: "https://code.visualstudio.com/",
        icon: "vscode",
      },
    ],
  },
]
