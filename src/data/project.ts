export type Project = {
  name: string
  description: string
  images: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    name: "DocTrack",
    description:
      "A centralized document tracking system designed to improve the management, monitoring, and transparency of document processing in government municipalities. It enables users to locate documents, check their current status, and identify the responsible office or personnel. This helps prevent misplaced documents, reduce delays, and provide a more efficient and reliable public service.",
    images: [
      "/doctrack/landing.png",
      "/doctrack/documents.png",
      "/doctrack/tracking.png",
    ],
    stack: ["Vue.js", "Laravel 13", "AWS S3", "Spatie Rules & Permission"],
  },
  {
    name: "Filing",
    description:
      "A centralized filing and form management system that automates document processing through email integration and intelligent form handling. It uses IMAP to retrieve and scan incoming emails for confirmation receipts, automatically matches and merges them with generated BIR forms, and supports the generation of quarterly and annual BIR forms. With SMTP integration, completed forms and documents can be sent directly to clients, reducing manual work and improving the accuracy, speed, and organization of the filing process. The system also provides a flexible form builder that can be configured for different types of forms and filing requirements.",
    images: [
      "/filing/landing.png",
      "/filing/dashboard.png",
      "/filing/tracking.png",
    ],
    stack: [
      "React.js",
      "Laravel",
      "IMAP",
      "SMTP",
      "Spatie Rules & Permission",
      "AWS S3",
    ],
  },
]
