'use client'

import Link from "next/link";
import CustomButton from "../components/CustomButton";
import CustomFooter from "../components/CustomFooter";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

export default function SignUp() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <TopHeader />
            <Header />

            <div className="lg:grid lg:grid-cols-2 lg:px-32 lg:py-20 py-0">
                <img src="mockup_sign.svg" />
                <div className="block items-center lg:px-32 px-5 lg:mt-0 mt-10">
                    <h1 className="lg:text-3xl text-xl font-bold lg:mb-5 mb-2">Create an account</h1>
                    <p className="lg:text-xl text-md font-semibold mb-10">Enter your details below</p>
                    <form className="flex flex-col max-w-md gap-4 mb-10">
                        <CustomTextInput placeholder='Name' value={''} />
                        <CustomTextInput placeholder='Email or phone number' value={''} />
                        <CustomTextInput placeholder='Password' value={''} />
                    </form>
                    <button className="bg-red-500 text-white border-red-500 w-full hover:bg-red-800 py-3 border-2 rounded text-xs mb-20">
                        Create Account
                    </button>
                    <div className="flex justify-center mb-20">
                        <p>
                            already have an account?
                        </p>
                        <Link className="underline pl-5 font-medium" href='/login'>Log In</Link>
                    </div>
                </div>
            </div>

            <CustomFooter />
        </main>
    );
}
