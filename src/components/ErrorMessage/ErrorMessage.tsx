interface ErrorMessageProps {
  error: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <div className={'text-center text-red-600'}>{error}</div>
}

export default ErrorMessage
