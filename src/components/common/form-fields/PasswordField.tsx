import { useState } from "react"
import { Icon, IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material"
import { Control, FieldValues, Path, useController } from "react-hook-form"
import IconEye from "assets/icons/eye.svg"
import IconEyeOff from "assets/icons/eye-off.svg"

type TypeProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>
  name: Path<T>
}

const PasswordField = <T extends FieldValues>({ control, name, ...restProps }: TypeProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })
  return (
    <TextField
      {...restProps}
      inputRef={ref}
      sx={{ width: "100%", "& input": { paddingRight: 0 } }}
      type={showPassword ? "text" : "password"}
      value={value}
      error={invalid}
      helperText={error ? error.message : restProps.helperText}
      onChange={onChange}
      onBlur={onBlur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <Icon>
                  <img src={IconEye} />
                </Icon>
              ) : (
                <Icon>
                  <img src={IconEyeOff} />
                </Icon>
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordField
