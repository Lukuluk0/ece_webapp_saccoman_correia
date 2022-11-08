import Link from "next/link"
import Image from 'next/image'
import mypic from '../assets/logo.png'

const Footer =() =>
{
    return <div>
        <footer className = " inset-x-0 py-2 px-2 mx-auto bg-vert-mousse-f  fixed bottom-0" >
            < div className = "grid grid-cols-4 gap-4">
                <div className="col-span-2 items-center"> <Image src={mypic}
                width="50px"
                height="50px"
                alt="my-blog"/></div>
                <div className="text-xl text-white items-center">Privacy Policy</div>
                <div className="text-xl text-white items-center">Terms and Conditions</div>
                <div className="col-span-3 items-center text-2xl text-white">© 2022 Copyright:</div>
                <div className="text-xl text-white">GITHUB</div>
            </div>
        </footer>
            </div>
}

export default Footer