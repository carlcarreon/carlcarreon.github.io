import Step from "@mui/material/Step"
import StepContent from "@mui/material/StepContent"
import StepLabel from "@mui/material/StepLabel"
import Stepper from "@mui/material/Stepper"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  experienceGroups,
  experiencePageDescription,
  experiencePageTitle,
} from "@/data/experience"

function RoleStepIcon() {
  return (
    <span className="block size-2.5 rounded-full border border-foreground/30 bg-background" />
  )
}

function getInitials(company: string) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export default function Experience() {
  return (
    <main className="mx-auto min-h-[calc(100vh-6rem)] w-full max-w-2xl py-6">
      <h1 className="m-0 text-3xl text-foreground">
        {experiencePageTitle}
      </h1>

      <p className="max-w-2xl py-10 text-sm leading-7 text-foreground/85 lg:text-base">
        {experiencePageDescription}
      </p>

      <Stepper
        orientation="vertical"
        nonLinear
        sx={{
          fontFamily: "inherit",
          "& > .MuiStep-root": { padding: 0 },
          "& > .MuiStepConnector-root": { marginLeft: "24px" },
          "& > .MuiStepConnector-root .MuiStepConnector-line": {
            borderColor: "var(--border)",
          },
        }}
      >
        {experienceGroups.map((group) => (
          <Step key={group.company} active>
            <div className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-start gap-x-5">
              <Avatar className="row-span-2 size-12 rounded-xl bg-card after:rounded-xl">
                <AvatarFallback className="rounded-xl bg-card font-mono text-xs text-muted-foreground">
                  {getInitials(group.company)}
                </AvatarFallback>
              </Avatar>

              <h2 className="min-w-0 pt-0.5 text-lg font-semibold tracking-[-0.025em] text-foreground">
                {group.company}
              </h2>

              <p className="pt-1 text-right font-mono text-xs whitespace-nowrap text-muted-foreground">
                {group.employmentType} · {group.totalDuration}
              </p>

              <p className="col-start-2 col-end-4 mt-1 font-mono text-xs text-muted-foreground">
                {group.location}
              </p>
            </div>

            <StepContent
              sx={{
                marginLeft: "24px",
                borderLeft: "1px solid var(--border)",
                paddingBottom: 6,
                paddingLeft: "40px",
                paddingRight: 0,
              }}
            >
              <Stepper
                orientation="vertical"
                nonLinear
                sx={{
                  paddingTop: "28px",
                  fontFamily: "inherit",
                  "& .MuiStep-root": { padding: 0 },
                  "& .MuiStepLabel-root": { padding: 0 },
                  "& .MuiStepLabel-iconContainer": {
                    width: 26,
                    paddingRight: 0,
                  },
                  "& .MuiStepConnector-root": { marginLeft: "4px" },
                  "& .MuiStepConnector-line": {
                    minHeight: 30,
                    borderColor: "var(--border)",
                  },
                }}
              >
                {group.roles.map((role) => (
                  <Step key={`${role.title}-${role.period}`} active>
                    <StepLabel
                      slots={{ stepIcon: RoleStepIcon }}
                      sx={{
                        "& .MuiStepLabel-label, & .MuiStepLabel-label.Mui-active": {
                          color: "var(--foreground)",
                          fontFamily: "inherit",
                          fontSize: "1rem",
                          fontWeight: 600,
                          letterSpacing: "-0.02em",
                        },
                      }}
                    >
                      {role.title}
                    </StepLabel>

                    <StepContent
                      sx={{
                        marginLeft: "4px",
                        borderColor: "var(--border)",
                        paddingBottom: 5,
                        paddingLeft: "22px",
                        paddingRight: 0,
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 pt-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        <p>{role.period}</p>
                        <p className="shrink-0 text-right">{role.duration}</p>
                      </div>

                      {role.responsibilities.length > 0 ? (
                        <div className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground lg:text-base lg:leading-7">
                          {role.responsibilities.map((responsibility) => (
                            <p key={responsibility}>{responsibility}</p>
                          ))}
                        </div>
                      ) : null}

                      {role.skills.length > 0 ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </main>
  )
}
