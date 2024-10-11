import { FC } from "react"
import Stack from "@mui/material/Stack"
import BasicTag from "components/common/tags/BasicTag"
import TypographyHtml from "components/common/TypographyHtml"
import WrapperSectionContent from "components/common/WrapperSectionContent"
import { JobInformationQueryType } from "hooks/queries/useJobInformationQuery"

interface IProps {
  data: JobInformationQueryType["business"]["job"]
}

const JobDetailContent: FC<IProps> = ({ data }) => {
  return (
    <>
      <WrapperSectionContent title="Skills & Technologies">
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {data.skills.map((tag) => (
            <BasicTag key={tag.name}>{tag.name}</BasicTag>
          ))}
        </Stack>
      </WrapperSectionContent>

      <WrapperSectionContent title="About the Job">
        <TypographyHtml>{data.about}</TypographyHtml>
      </WrapperSectionContent>

      <WrapperSectionContent title="Responsibilities">
        <TypographyHtml>{data.responsibilities}</TypographyHtml>
      </WrapperSectionContent>

      <WrapperSectionContent title="Minimum Qualifications">
        <TypographyHtml>{data.minimumQualifications}</TypographyHtml>
      </WrapperSectionContent>

      <WrapperSectionContent title="Preferred Requirement">
        <TypographyHtml>{data.preferredRequirement}</TypographyHtml>
      </WrapperSectionContent>

      <WrapperSectionContent title="Benefits">
        <TypographyHtml>{data.benefits}</TypographyHtml>
      </WrapperSectionContent>
    </>
  )
}

export default JobDetailContent
