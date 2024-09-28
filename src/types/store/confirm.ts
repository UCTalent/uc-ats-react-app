import { ReactNode } from "react"

export interface IConfirmState {
  isActive: boolean
  title: string
  content: string | ReactNode
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  confirmText?: string
  cancelText?: string
}
