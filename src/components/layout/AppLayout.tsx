import React, { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode | undefined
}
function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      className="flex justify-center px-4"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <div className="max-w-[860px] w-full">{children}</div>
    </div>
  )
}

export default AppLayout
