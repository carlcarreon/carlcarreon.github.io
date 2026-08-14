export type ExperienceRole = {
  title: string
  period: string
  duration: string
  responsibilities: string[]
  skills: string[]
}

export type ExperienceGroup = {
  company: string
  employmentType: string
  totalDuration: string
  location: string
  roles: ExperienceRole[]
}

export const experiencePageTitle = "Experience"

export const experiencePageDescription =
  "Developing practical software systems focused on workflow automation, document management, business processes, and improving day-to-day operations through simple and reliable solutions."

export const experienceGroups: ExperienceGroup[] = [
  {
    company: "The Firm Consultant Inc",
    employmentType: "Full-time",
    totalDuration: "8 mos",
    location: "San Juan Nepomuceno, Guagua, Philippines",
    roles: [
      {
        title: "Full Stack Software Developer",
        period: "April 2026 – Present",
        duration: "5 mos",
        responsibilities: [
          "Develop and lead full-stack business and government-related systems from planning through implementation. Coordinate project requirements, guide interns, manage development tasks, and contribute directly to frontend and backend development. Projects include document tracking, PDF document indexing and merging, quarterly BIR filing, tax-client billing, and workflow automation.",
        ],
        skills: [
          "Laravel",
          "React.js",
          "PWA",
          "Vue.js",
          "Flutter",
          "Docker",
          "Linux",
          "Git",
          "MySQL",
          "Websocket",
          "PostgreSQL",
        ]
      },
      {
        title: "Full Stack Software Developer Intern",
        period: "January 2026 – April 2026",
        duration: "4 mos",
        responsibilities: [
          "Developed and led full-stack internal business systems, coordinating project requirements and development tasks while working with fellow interns. Contributed to both frontend and backend development for filing and workflow automation solutions, including automated BIR form generation and an internal ticketing system.",
        ],
        skills: [
          "Laravel",
          "Vue.js",
          "Docker",
          "Linux",
          "Git",
          "MySQL",
          "Websocket",
          "PostgreSQL",
        ],
      },
    ],
  },
]
