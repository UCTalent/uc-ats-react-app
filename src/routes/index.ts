import TheHomePage from "pages/TheHomePage"
import NotFound from "pages/NotFound"
// import { BaseLayout } from "components/layouts"
import { PAGE_MAP } from "constants/PAGE_MAP"
import { TypeRoute } from "routes/type"
import { AsideNavigateLayout } from "components/layouts/index"
import { META_SEO } from "constants/META_SEO"

export const ROUTES: TypeRoute[] = [
  { path: PAGE_MAP.HOME, component: TheHomePage, layout: AsideNavigateLayout, meta: META_SEO.HOME },
  { path: "*", component: NotFound, meta: META_SEO.DEFAULT },
]
