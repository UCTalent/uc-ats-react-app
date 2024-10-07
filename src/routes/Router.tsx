import { createBrowserRouter } from "react-router-dom"
// Layouts
import AppLayout from "layouts/_app"
import {
  AppHeaderWithAsideBarLayout,
  JobDetailCandidateInfoLayout,
  JobDetailLayout,
} from "layouts/app"

const Router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: AppHeaderWithAsideBarLayout,
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
                    Component: JobDetailCandidateInfoLayout,
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
        path: "/login",
        async lazy() {
          const module = await import("pages/TheLoginPage")
          const Component = module.default
          return { Component }
        },
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
