import { Checkbox as MuiCheckbox, CheckboxProps as CheckboxPropsMui } from "@mui/material"
import CheckedCheckBox from "./icons/CheckedCheckbox"
import UnCheckedCheckBox from "./icons/UnCheckedCheckBox"

type CheckboxProps = CheckboxPropsMui & {
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  checked: boolean
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <MuiCheckbox
      checkedIcon={
        <CheckedCheckBox
          sx={{
            "& path": {
              fill: "primary.main",
            },
          }}
        />
      }
      icon={
        <UnCheckedCheckBox
          sx={{
            "& path": {
              fill: "primary.main",
            },
          }}
        />
      }
      {...props}
    />
  )
}

export default Checkbox
