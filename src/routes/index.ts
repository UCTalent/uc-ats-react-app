import TheHomePage from "pages/TheHomePage"
import TheJobDetailPage from "pages/TheJobDetailPage"
import NotFound from "pages/NotFound"
import { AsideNavigateLayout, JobDetailLayout } from "components/layouts"
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
  { path: "*", component: NotFound, meta: META_SEO.DEFAULT },
]
