const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export function FormattedDate({
  date,
  stage,
  ...props
}: React.ComponentPropsWithoutRef<'time'> & { date: string | Date, stage?: string }) {
  date = typeof date === 'string' ? new Date(date) : date
  return (
      <time dateTime={date.toISOString()} {...props}>
        {stage || dateFormatter.format(date)}
      </time>
  )
}
