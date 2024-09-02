import Stack from "@mui/material/Stack"
import Box from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useForm } from "react-hook-form"
import { resolver } from "services/schema"
import {
  TextField,
  SelectField,
  AutocompleteField,
  NumberFormatField,
  RichTextEditor,
  IconSVG,
} from "components/common"
import { IconAIStar } from "assets/icons"
import { POST_JOB_DEFAULT_VALUE } from "constants/FORM_DATA"
import { schemaPostJobForm } from "services/schema/formPostJob"
import type { TypePostJobForm } from "types/forms"

const PostJobForm = () => {
  const {
    control,
    // handleSubmit,
    // formState: { isValid },
  } = useForm<TypePostJobForm>({
    defaultValues: POST_JOB_DEFAULT_VALUE,
    // values: {},
    resolver: resolver(schemaPostJobForm),
    mode: "onChange",
  })

  return (
    <Stack sx={{ gap: "24px", mx: "auto", maxWidth: "796px", minWidth: "796px" }}>
      <Stack>
        <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>Create Job</Typography>
        <Typography variant="body2">
          A job represents a new opening, an open position or a vacancy listing. Creating a job will
          allow you to add candidates to that job and advertise it on your career page and job
          boards
        </Typography>
      </Stack>
      <TextField label="Job Title" control={control} name="jobTitle" error />
      <AutocompleteField label="Company Name" options={[]} />
      <Stack flexDirection="row" sx={{ justifyContent: "space-between", gap: "8px" }}>
        <TextField label="Add Location" control={control} name="location" />
        <button style={{ width: "fit" }}>Remote</button>
      </Stack>
      <TextField label="Headcount" control={control} name="headcount" />
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
          Add Job Description
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
