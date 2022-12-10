import Link from "next/link"
import Image from 'next/image'
import mypic from '../assets/ece_icon.png'

const Footer =() =>
{
    return <div>
        <div className="mx-auto p-4 bg-bleu md:flex md:items-center md:justify-between dark:bg-gray-800">
        <ul className="flex flex-wrap items-center mt-3 text text-white dark:text-white sm:mt-0">
        <li>
            <Link href='/about'>
            <a className="mr-4 hover:text-black md:mr-6 ">About</a>
            </Link>
        </li>
        <li>
            <Link href='/contact'>
            <a className="mr-4 hover:text-black md:mr-6">Contact Us</a>
            </Link>
        </li>
        <li>
            <a className="mr-4 hover:text-black md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a className="hover:text-black">Github</a>
        </li>
    </ul>
    <a className="text-white text-center dark:white">© 2022 Flowbite™. All Rights Reserved.
    </a>
</div>
</div>
}

export default Footer