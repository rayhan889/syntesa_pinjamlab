'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from '@/components/theme-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}
