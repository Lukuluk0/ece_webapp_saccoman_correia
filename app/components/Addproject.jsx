import Link from 'next/link'
import UserContext from './UserContext'
import { useContext } from 'react'

const Addproject = () => {
    const { user } = useContext(UserContext)

    if (user == undefined) {
        return (
            <div className="mt-12 flex gap-x-4 justify-center">
                <button className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-gray-300 hover:ring-gray-300 cursor-not-allowed">
                    Add a project
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="mt-12 flex gap-x-4 justify-center">
                <Link href='/projects/creation'>
                    <button className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-gray-300 hover:ring-gray-300" >
                        Add a project
                    </button>
                </Link>
            </div>
        )
    }
}

export default Addproject