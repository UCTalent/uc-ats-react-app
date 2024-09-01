import FormControl from "@mui/material/FormControl"
import MuiAutocomplete, { type AutocompleteProps } from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { IconSVG } from "components/common"
import { IconSelectCaret } from "assets/icons"
import { IAutocompleteOption } from "types/common"

type IAutocompleteProps = AutocompleteProps<IAutocompleteOption, false, false, false>
interface IProps extends Omit<IAutocompleteProps, "renderInput"> {
  label: string
  options: IAutocompleteOption[]
}

const AutocompleteField: React.FC<IProps> = ({ label, options }) => {
  return (
    <FormControl fullWidth>
      <MuiAutocomplete
        disablePortal
        options={options}
        popupIcon={<IconSVG src={IconSelectCaret} />}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{
          "& .MuiSelect-select": {
            py: "16px",
          },
        }}
      />
    </FormControl>
  )
}

export default AutocompleteField
