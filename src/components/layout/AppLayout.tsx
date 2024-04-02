import React, { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode | undefined
}
function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-full">{children}</div>
    </div>
  )
}

export default AppLayout
