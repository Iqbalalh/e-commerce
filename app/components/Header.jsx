import { TextInput } from "flowbite-react";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <div className="flex pt-10 pb-3 justify-between mx-32 items-center">
                <h1 className="font-extrabold text-2xl">Exclusive</h1>
                <nav>
                    <ul className="flex gap-5 font-medium">
                        <Link href=""><li className="hover:underline">Home</li></Link>
                        <Link href=""><li className="hover:underline">Contact</li></Link>
                        <Link href=""><li className="hover:underline">About</li></Link>
                        <Link href=""><li className="hover:underline">Sign Up</li></Link>
                    </ul>
                </nav>
                <div className="flex items-center gap-3">
                    <TextInput id="email4" type="email" rightIcon={IoSearchOutline} placeholder="What are you looking for?" required />
                    <Link href=""><IoIosHeartEmpty size="25px"/></Link>
                    <Link href=""><IoCartOutline size="25px"/></Link>
                </div>
            </div>
            <div className="border-b border-gray-300"></div>
        </>
    )
}