import { useContext } from 'react'
import { useRouter } from 'next/router'
import UserContext from './UserContext'
import Gravatar from 'react-gravatar'

//{user.user_metadata.preferred_username}
export default function LoggedIn(){
  const router = useRouter()
  const {user, logout} = useContext(UserContext)
  function onClick() {
    if (user)
      router.push('/profile')
    else
      router.push('/login')
  }
  return (
    <button
      className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
      onClick={onClick}
    >
      {user ?
        <>
          <Gravatar email={user.email} />
          
        </>
        :
        <>
          Login
        </>
      }
    </button>
  )}