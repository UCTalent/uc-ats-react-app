import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { useId, useMemo } from "react"
import { IconSVG } from "components/common"
import { IconSelectCaret } from "assets/icons"
import { type IBaseOption } from "types/common"

interface IProps {
  label: string
  options: IBaseOption[]
}

const SelectField: React.FC<IProps> = ({ label, options }) => {
  const labelId = useId()

  const menuElements = useMemo(
    () =>
      options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      )),
    [options]
  )
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        IconComponent={() => <IconSVG src={IconSelectCaret} />}
        sx={{
          pr: "12px",
          "& .MuiSelect-select": {
            py: "16px",
          },
        }}
      >
        {menuElements}
      </Select>
    </FormControl>
  )
}

export default SelectField
