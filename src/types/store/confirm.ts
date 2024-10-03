export interface IConfirmState {
  isActive: boolean
  title: string
  content: string
  render: (() => string) | null
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  confirmText?: string
  cancelText?: string
}
