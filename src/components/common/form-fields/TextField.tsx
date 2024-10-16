import FormControl from "@mui/material/FormControl"
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"

type TypeProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>
  name: Path<T>
}

const TextField = <T extends FieldValues>({ control, name, ...restProps }: TypeProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })
  return (
    <FormControl fullWidth>
      <MuiTextField
        {...restProps}
        inputRef={ref}
        value={value}
        error={invalid}
        helperText={error ? error.message : restProps.helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FormControl>
  )
}

export default TextField
