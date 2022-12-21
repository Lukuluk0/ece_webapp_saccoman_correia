import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useContext, useEffect,useState } from 'react'
import UserContext from '../components/UserContext'


const ThemeSetter= ()=>{
    const supabase = useSupabaseClient()
  const { user, logout, loading } = useContext(UserContext)
  //const r = document.querySelector(':root')
  
  const setColor = async () =>{
    const {data,error} = await supabase
    .from('profiles')
    .select('color')
    .eq('id',user?.id)
    .limit(1)
    .single()
    //console.log(data?.color)
    
    if(user){
    document.documentElement.style.setProperty('--bleu', data?.color);
}

  }

  useEffect(() => {
    //const color = getComputedStyle(document.documentElement).getPropertyValue('--bleu')
    //console.log(`--bleu: ${color}`);
    setColor()
    

  }, [user])
  
  return(<></>)
}

export default ThemeSetter