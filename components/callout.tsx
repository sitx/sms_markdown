import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CalloutProps {
  children?: ReactNode
  type?: 'default' | 'warning' | 'danger'
}

export function Callout({
  children,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 w-full items-start rounded-md border border-l-4 p-4 dark:max-w-none',
        {
          'dark:prose border-red-900 bg-red-500/10 dark:text-red-500':
            type === 'danger',
          'dark:prose border-yellow-900 bg-yellow-500/10 dark:text-yellow-500':
            type === 'warning'
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  )
}
