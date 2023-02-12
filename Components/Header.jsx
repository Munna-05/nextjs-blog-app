
import {ImFacebook,ImTwitter,ImYoutube} from 'react-icons/im'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="p-2 border-b pb-3 border-b-0.">
                <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center ">
                    <div className="md:flex-none w-96 order-2 flex justify-center sm:order-1">
                        <input placeholder="Search ..." className="bg-white text-black my-4 md:my-0 lg:my-0 xl:my-0 px-2 rounded-full text-sm
                        shadow-sm placeholder-slate-500 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500
                        block w-60" type="text" />
                    </div>
                    <div className=" shrink w-80 sm:order-2">
                        <Link href={'/'}>Blog Name</Link>
                    </div>
                    <div className="w-96 order-3 flex justify-center">
                        <div className="flex gap-3">
                            <Link href={'/'} className="cursor-pointer"><img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png?f=avif&w=512" className="h-6" alt="" /></Link>
                            <Link href={'/'} className="cursor-pointer"><img src="https://cdn.iconscout.com/icon/free/png-512/instagram-52-151106.png?f=avif&w=512" className="h-6" alt="" /></Link>
                            <Link href={'/'} className="cursor-pointer"><img src="https://cdn.iconscout.com/icon/free/png-512/play-443-789839.png?f=avif&w=512" className="h-6" alt="" /></Link>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    )
}