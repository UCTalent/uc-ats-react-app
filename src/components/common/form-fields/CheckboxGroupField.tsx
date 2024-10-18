/* eslint-disable prefer-const */
import {
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  SxProps,
  Theme,
} from "@mui/material"
import { Control, FieldValues, useController, type Path } from "react-hook-form"
import { OptionSelect } from "src/types/common"
import Checkbox from "../Checkbox"

type PropType<T extends FieldValues> = CheckboxProps & {
  control: Control<T>
  label?: string
  name?: Path<T>
  options: Array<OptionSelect>
  sx?: SxProps<Theme>
  maxSelectOption?: number
}

const CheckboxGroupField = <T extends FieldValues>({
  options,
  control,
  name,
  label,
  sx,
  maxSelectOption,
  ...props
}: PropType<T>) => {
  let {
    field: { value: values = [], onChange },
    fieldState: { invalid, error },
  } = useController({ control, name })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const value = event.target.value
    if (!values) {
      values = []
    }
    const exitsValue = values.find((item: string | number) => item === value)
    if (checked && !exitsValue && (maxSelectOption ? values?.length < maxSelectOption : true)) {
      values = [...values, value]
    }
    if (!checked) {
      values = values.filter((item: string | number) => item !== value)
    }
    onChange(values)
  }

  return (
    <FormControl sx={{ position: "relative", ...sx }} error={invalid}>
      {label && (
        <FormLabel
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: 1.6,
            color: "text.primary",
            marginBottom: "2px",
          }}
          id={name}
        >
          {label}
        </FormLabel>
      )}
      <FormGroup sx={{ flexDirection: "row", gap: "16px 26px", ...sx }} aria-labelledby={name}>
        {options.map((o) => (
          <FormControlLabel
            key={o?.value}
            control={
              <Checkbox
                {...props}
                value={o?.value}
                name={name}
                onChange={handleChange}
                checked={values.includes(o?.value)}
              />
            }
            label={o?.label}
          />
        ))}
      </FormGroup>
      {invalid && (
        <FormHelperText sx={{ position: "absolute", top: "100%", left: 0 }}>
          {error?.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default CheckboxGroupField
