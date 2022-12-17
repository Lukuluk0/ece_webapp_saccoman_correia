import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../components/Layout'


export default function Contact() {
  const supabase = useSupabaseClient()
 
    const { error,datas } = supabase
    .storage
    .from('pictures-projetcs')
    .getPublicUrl('POO-java1.png')
    console.log(datas)
    
  return (
    <Layout>

    </Layout>
  )
}