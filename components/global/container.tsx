export default function Container({
  children,
  classNames = '',
  fullWidth = false
}: {
  children: React.ReactNode
  classNames?: string
  fullWidth?: boolean
}) {
  const styles = fullWidth ? 'max-w-full mx-auto my-0 px-0 md:px-0' : 'max-w-8xl mx-auto my-0 px-6 md:px-12'

  return <div className={`${styles} ${classNames}`}>{children}</div>
}
