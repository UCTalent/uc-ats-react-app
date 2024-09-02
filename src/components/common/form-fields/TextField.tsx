import FormControl from "@mui/material/FormControl"
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"

type TypeProps<T extends FieldValues = FieldValues> = TextFieldProps & {
  control: Control<T>
  name: Path<T>
}

const TextField = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...restProps
}: TypeProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })

  return (
    <FormControl fullWidth>
      <MuiTextField
        {...restProps}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        inputRef={ref}
        error={invalid}
        helperText={error ? error.message : restProps.helperText}
      />
    </FormControl>
  )
}

export default TextField
