// Pages
import TheHomePage from "pages/TheHomePage"
import TheJobCandidatePage from "pages/TheJobCandidatePage"
import TheJobDetailPage from "pages/TheJobDetailPage"
import TheJobNotePage from "pages/TheJobNotePage"
import TheNotFoundPage from "pages/TheNotFoundPage"
// Layouts
import AsideNavigateLayout from "layouts/AsideNavigateLayout"
import JobDetailLayout from "layouts/JobDetailLayout"
// Others
import { PAGE_MAP } from "constants/PAGE_MAP"
import { META_SEO } from "constants/META_SEO"
import type { TypeRoute } from "routes/type"

const MEMBER_ROUTES: TypeRoute[] = [
  { path: PAGE_MAP.HOME, component: TheHomePage, layout: AsideNavigateLayout, meta: META_SEO.HOME },
  {
    path: "/jobs/:id/candidates",
    component: TheJobCandidatePage,
    layout: JobDetailLayout,
    meta: META_SEO.DEFAULT,
  },
  {
    path: "/jobs/:id/info",
    component: TheJobDetailPage,
    layout: JobDetailLayout,
    meta: META_SEO.DEFAULT,
  },
  {
    path: "/jobs/:id/notes",
    component: TheJobNotePage,
    layout: JobDetailLayout,
    meta: META_SEO.DEFAULT,
  },
  { path: "*", component: TheNotFoundPage, meta: META_SEO.DEFAULT },
]

const ROUTERS = {
  MEMBER: MEMBER_ROUTES,
}

export default ROUTERS
