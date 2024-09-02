import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import MuiAutocomplete, { type AutocompleteProps } from "@mui/material/Autocomplete"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"
import { IconSVG } from "components/common"
import { IconSelectCaret } from "assets/icons"
import { IAutocompleteOption } from "types/common"

type IAutocompleteProps = AutocompleteProps<IAutocompleteOption, false, false, false>

type TypeProps<T extends FieldValues> = Omit<IAutocompleteProps, "renderInput" | "options"> & {
  control: Control<T>
  name: Path<T>
  label: string
  options: IAutocompleteOption[]
}

const AutocompleteField = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  ...restProps
}: TypeProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })

  return (
    <FormControl fullWidth>
      <MuiAutocomplete
        {...restProps}
        disablePortal
        options={options}
        value={value}
        popupIcon={<IconSVG src={IconSelectCaret} />}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            inputRef={ref}
            error={invalid}
            helperText={error ? error.message : undefined}
          />
        )}
        onChange={(event, newValue) => {
          onChange(newValue)
        }}
        onBlur={onBlur}
      />
    </FormControl>
  )
}

export default AutocompleteField
