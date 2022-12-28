import '../styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { UserContextProvider } from '../components/UserContext'
import { ThemeProvider } from 'next-themes'
import ThemeSetter from '../components/ThemeSetter'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <UserContextProvider>
          <ThemeSetter />
          <Component {...pageProps} />
        </UserContextProvider>
      </SessionContextProvider>
    </ThemeProvider>
  )
}