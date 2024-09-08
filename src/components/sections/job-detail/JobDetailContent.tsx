import { BasicTag, TypographyHtml, WrapperSection } from "components/common"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const TAGS = [
  { id: "1", title: "Javascript" },
  { id: "2", title: "React" },
  { id: "3", title: "Node.js" },
  { id: "4", title: "Express" },
  { id: "5", title: "MongoDB" },
  { id: "6", title: "PostgreSQL" },
  { id: "7", title: "MySQL" },
  { id: "8", title: "Redis" },
  { id: "9", title: "PostgreSQL" },
  { id: "10", title: "MySQL" },
  { id: "11", title: "Redis" },
  { id: "12", title: "PostgreSQL" },
  { id: "13", title: "MySQL" },
]

const JobDetailContent = () => {
  return (
    <>
      <WrapperSection title="Skills & Technologies">
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {TAGS.map((tag) => (
            <BasicTag key={tag.id}>{tag.title}</BasicTag>
          ))}
        </Stack>
      </WrapperSection>

      <WrapperSection title="About the Job">
        <Typography>
          Rogo is looking for a Product Lead to run our product development process end-to-end,
          primarily as a product manager but with design input as well. We are an engineering-heavy
          team of 10 and want someone to come onboard and spend 100% of their time living and
          breathing our product. We are building a search-based data analytics platform and need to
          balance nuanced product tradeoffs––highly intuitive search & querying, sophisticated
          analytics, opinionated data workflows, and personalizable analytic flexibility. If that
          sounds like a lot, it's because it is. We're building the future of data analytics and we
          need smart people who are passionate about building incredible technology.
        </Typography>
      </WrapperSection>

      <WrapperSection title="Responsibilities">
        <Typography>
          Rogo is looking for a Product Lead to run our product development process end-to-end,
          primarily as a product manager but with design input as well. We are an engineering-heavy
          team of 10 and want someone to come onboard and spend 100% of their time living and
          breathing our product. We are building a search-based data analytics platform and need to
          balance nuanced product tradeoffs––highly intuitive search & querying, sophisticated
          analytics, opinionated data workflows, and personalizable analytic flexibility. If that
          sounds like a lot, it's because it is. We're building the future of data analytics and we
          need smart people who are passionate about building incredible technology.
        </Typography>
      </WrapperSection>

      <WrapperSection title="Minimum Qualifications">
        <Typography>
          Rogo is looking for a Product Lead to run our product development process end-to-end,
          primarily as a product manager but with design input as well. We are an engineering-heavy
          team of 10 and want someone to come onboard and spend 100% of their time living and
          breathing our product. We are building a search-based data analytics platform and need to
          balance nuanced product tradeoffs––highly intuitive search & querying, sophisticated
          analytics, opinionated data workflows, and personalizable analytic flexibility. If that
          sounds like a lot, it's because it is. We're building the future of data analytics and we
          need smart people who are passionate about building incredible technology.
        </Typography>
      </WrapperSection>

      <WrapperSection title="Preferred Requirement">
        <Typography>
          Rogo is looking for a Product Lead to run our product development process end-to-end,
          primarily as a product manager but with design input as well. We are an engineering-heavy
          team of 10 and want someone to come onboard and spend 100% of their time living and
          breathing our product. We are building a search-based data analytics platform and need to
          balance nuanced product tradeoffs––highly intuitive search & querying, sophisticated
          analytics, opinionated data workflows, and personalizable analytic flexibility. If that
          sounds like a lot, it's because it is. We're building the future of data analytics and we
          need smart people who are passionate about building incredible technology.
        </Typography>
      </WrapperSection>

      <WrapperSection title="Benefits">
        <TypographyHtml>
          {
            "\u003cul\u003e\u003cli\u003eA front-row seat to one of the most exciting blockchain projects that make positive impacts in changing many people’s lives."
          }
        </TypographyHtml>
      </WrapperSection>
    </>
  )
}

export default JobDetailContent
