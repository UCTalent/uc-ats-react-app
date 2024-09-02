import { Helmet } from "react-helmet"
import type { IMetaSEO } from "types/common"

type TypeProps = IMetaSEO

const WrappedSEO: React.FC<TypeProps> = ({ title, description = "", lang = "en" }) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
      ]}
      link={[{ rel: "icon", type: "image/ico", href: "/favicon.ico" }]}
    />
  )
}

export default WrappedSEO
