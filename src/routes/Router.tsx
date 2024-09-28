// Pages
import TheHomePage from "pages/TheHomePage"
import TheJobCandidatePage from "pages/TheJobCandidatePage"
import TheCandidateInfoInTheJobPage from "pages/TheCandidateInfoInTheJobPage"
import TheJobDetailPage from "pages/TheJobDetailPage"
import TheJobNotePage from "pages/TheJobNotePage"
import TheNotFoundPage from "pages/TheNotFoundPage"
// Layouts
import AppLayout from "layouts/AppLayout"
import AsideNavigateLayout from "layouts/AsideNavigateLayout"
import JobDetailLayout from "layouts/JobDetailLayout"
import RightSidePortalWithOverlayLayout from "layouts/RightSidePortalWithOverlayLayout"
// Others
import { PAGE_MAP } from "constants/PAGE_MAP"
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: PAGE_MAP.HOME,
        Component: AsideNavigateLayout,
        children: [{ index: true, Component: TheHomePage }],
      },
      {
        path: "/jobs/:jobId",
        Component: JobDetailLayout,
        children: [
          {
            path: "candidates",
            Component: TheJobCandidatePage,
            children: [
              {
                path: ":candidateId",
                Component: RightSidePortalWithOverlayLayout,
                children: [{ index: true, Component: TheCandidateInfoInTheJobPage }],
              },
            ],
          },
          {
            path: "info",
            Component: TheJobDetailPage,
          },
          {
            path: "notes",
            Component: TheJobNotePage,
          },
        ],
      },
      { path: "*", Component: TheNotFoundPage },
    ],
  },
])

export default Router
