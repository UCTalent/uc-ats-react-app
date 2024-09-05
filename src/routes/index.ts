// Pages
import TheHomePage from "pages/TheHomePage"
import TheJobDetailPage from "pages/TheJobDetailPage"
import TheNotFoundPage from "pages/TheNotFoundPage"
// Layouts
import AsideNavigateLayout from "layouts/AsideNavigateLayout"
import JobDetailLayout from "layouts/JobDetailLayout"
// Others
import { PAGE_MAP } from "constants/PAGE_MAP"
import { META_SEO } from "constants/META_SEO"
import type { TypeRoute } from "routes/type"

export const ROUTES: TypeRoute[] = [
  { path: PAGE_MAP.HOME, component: TheHomePage, layout: AsideNavigateLayout, meta: META_SEO.HOME },
  {
    path: "/jobs/:id/candidates",
    component: TheJobDetailPage,
    layout: JobDetailLayout,
    meta: META_SEO.DEFAULT,
  },
  { path: "*", component: TheNotFoundPage, meta: META_SEO.DEFAULT },
]
