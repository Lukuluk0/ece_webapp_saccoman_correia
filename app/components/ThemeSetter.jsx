import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useContext, useEffect, useState } from 'react'
import UserContext from '../components/UserContext'

const ThemeSetter = () => {
  const supabase = useSupabaseClient()
  const { user, logout, loading } = useContext(UserContext)

  const setColor = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('color')
      .eq('id', user?.id)
      .limit(1)
      .single()
    if (user) {
      document.documentElement.style.setProperty('--bleu', data?.color);
    }

  }

  useEffect(() => {
    setColor()
  }, [user])

  return (<></>)
}

export default ThemeSetter