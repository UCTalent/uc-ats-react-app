import { Resolver, FieldValues } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type MakeKeysOptional<T> = {
  [K in keyof T]?: T[K]
}

const resolver = <TFieldValues extends FieldValues>(
  schema: yup.ObjectSchema<MakeKeysOptional<TFieldValues>>
): Resolver<TFieldValues> => {
  return yupResolver(schema) as unknown as Resolver<TFieldValues>
}

export default resolver
