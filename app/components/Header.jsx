import { TextInput } from "flowbite-react";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <div className="flex lg:pt-10 pt-3 pb-3 justify-between lg:mx-32 mx-5 items-center">
                <h1 className="font-extrabold text-2xl">Exclusive</h1>
                <nav>
                    <ul className="lg:flex hidden gap-5 font-medium">
                        <Link href="/"><li className="hover:underline active-nav">Home</li></Link>
                        <Link href="/contact"><li className="hover:underline">Contact</li></Link>
                        <Link href="/about"><li className="hover:underline">About</li></Link>
                        <Link href="/signup"><li className="hover:underline">Sign Up</li></Link>
                    </ul>
                </nav>
                <div className="lg:flex hidden items-center gap-3">
                    <TextInput id="email4" type="email" rightIcon={IoSearchOutline} placeholder="What are you looking for?" required />
                    <Link href="" className="transform transition-transform hover:scale-110"><IoIosHeartEmpty size="25px"/></Link>
                    <Link href="" className="transform transition-transform hover:scale-110"><IoCartOutline size="25px"/></Link>
                </div>
                <button className="lg:hidden flex"><IoMenu size="25px" /></button>
            </div>
            <div className="border-b border-gray-300"></div>
        </>
    )
}