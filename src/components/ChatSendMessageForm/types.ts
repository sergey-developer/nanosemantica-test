export interface SendMessageFormProps {
  onSubmit: (message: string) => Promise<void>
  onRestart: () => Promise<void>
  isLoading?: boolean
}