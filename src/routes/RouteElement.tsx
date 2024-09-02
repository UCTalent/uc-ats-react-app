import { WrappedSEO } from "components/common"
import type { TypeRoute } from "routes/type"

interface TypeProps {
  route: TypeRoute
}

const RouteElement: React.FC<TypeProps> = ({ route }) => {
  const Page = route.component
  const Layout = route.layout

  const page = (
    <>
      <WrappedSEO {...route.meta} />
      <Page />
    </>
  )

  return Layout ? <Layout>{page}</Layout> : page
}

export default RouteElement
