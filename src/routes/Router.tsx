import { createBrowserRouter } from "react-router-dom"
// Layouts
import AppLayout from "layouts/app"
import HeaderWithAsideBarLayout from "layouts/app/header-with-asidebar"
import JobDetailLayout from "layouts/app/header-with-asidebar/job-detail-header"
import JobCandidateInfoLayout from "layouts/app/header-with-asidebar/job-detail-header/job-candidate-info"

const Router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: HeaderWithAsideBarLayout,
        children: [
          {
            index: true,
            async lazy() {
              const module = await import("pages/TheHomePage")
              const Component = module.default
              return { Component }
            },
          },
          {
            path: "/jobs/:jobId",
            Component: JobDetailLayout,
            children: [
              {
                path: "candidates",
                async lazy() {
                  const module = await import("pages/TheJobCandidatePage")
                  const Component = module.default
                  return { Component }
                },
                children: [
                  {
                    path: ":candidateId",
                    Component: JobCandidateInfoLayout,
                    children: [
                      {
                        path: "summary",
                        async lazy() {
                          const module = await import(
                            "pages/job-candidate/TheJobCandidateSummaryPage"
                          )
                          const Component = module.default
                          return { Component }
                        },
                      },
                      {
                        path: "resume",
                        async lazy() {
                          const module = await import(
                            "pages/job-candidate/TheJobCandidateResumePage"
                          )
                          const Component = module.default
                          return { Component }
                        },
                      },
                      {
                        path: "notes",
                        async lazy() {
                          const module = await import("pages/job-candidate/TheJobCandidateNotePage")
                          const Component = module.default
                          return { Component }
                        },
                      },
                      {
                        path: "jobs",
                        async lazy() {
                          const module = await import(
                            "pages/job-candidate/TheJobCandidateJobListPage"
                          )
                          const Component = module.default
                          return { Component }
                        },
                      },
                    ],
                  },
                ],
              },
              {
                path: "info",
                async lazy() {
                  const module = await import("pages/TheJobDetailPage")
                  const Component = module.default
                  return { Component }
                },
              },
              {
                path: "notes",
                async lazy() {
                  const module = await import("pages/TheJobNotePage")
                  const Component = module.default
                  return { Component }
                },
              },
            ],
          },
        ],
      },
      {
        path: "*",
        async lazy() {
          const module = await import("pages/TheNotFoundPage")
          const Component = module.default
          return { Component }
        },
      },
    ],
  },
])

export default Router
