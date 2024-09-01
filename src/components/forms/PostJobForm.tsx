import Stack from "@mui/material/Stack"
import Box from "@mui/material/Stack"
import Button from "@mui/material/Button"
import {
  TextField,
  SelectField,
  AutocompleteField,
  NumberFormatField,
  RichTextEditor,
  IconSVG,
} from "components/common"
import { IconAIStar } from "assets/icons"

const PostJobForm = () => {
  return (
    <Stack sx={{ px: "24px", pt: "16px", gap: "24px", overflow: "auto", maxHeight: "500px" }}>
      <TextField label="Job Title" />
      <AutocompleteField label="Company Name" options={[]} />
      <Stack flexDirection="row" sx={{ justifyContent: "space-between", gap: "8px" }}>
        <TextField label="Add Location" />
        <button style={{ width: "fit" }}>Remote</button>
      </Stack>
      <TextField label="Headcount" />
      <SelectField
        label="Contract Detail"
        options={[
          { value: 1, name: "Full Time" },
          { value: 2, name: "Part Time" },
        ]}
      />
      <Stack
        flexDirection="row"
        sx={{ justifyContent: "space-between", alignItems: "center", gap: "16px" }}
      >
        <NumberFormatField label="Minimum Salary" value={6878} />
        <Box sx={{ width: "16px", height: "1px", bgcolor: "black" }} />
        <NumberFormatField label="Maximum Salary" value={64878} />
      </Stack>
      <Stack
        flexDirection="row"
        sx={{ justifyContent: "space-between", alignItems: "center", gap: "16px" }}
      >
        <SelectField
          label="Currency"
          options={[
            { value: 1, name: "Full Time" },
            { value: 2, name: "Part Time" },
          ]}
        />
        <SelectField
          label="Frequency"
          options={[
            { value: 1, name: "Full Time" },
            { value: 2, name: "Part Time" },
          ]}
        />
      </Stack>
      <Stack
        flexDirection="row"
        sx={{ justifyContent: "space-between", alignItems: "center", gap: "16px" }}
      >
        <Button
          variant="contained"
          sx={{ flexBasis: "50%", height: "48px", fontWeight: 600, textTransform: "none" }}
        >
          Post Job
        </Button>
        <Button
          variant="text"
          color="secondary"
          startIcon={<IconSVG src={IconAIStar} alt="AI" width={18} height={18} />}
          sx={{ flexBasis: "50%", height: "48px", fontWeight: 600, textTransform: "none" }}
        >
          Generate Job Description
        </Button>
      </Stack>
      <RichTextEditor />
    </Stack>
  )
}

export default PostJobForm
