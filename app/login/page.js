'use client'

import Link from "next/link";
import CustomButton from "../components/CustomButton";
import CustomFooter from "../components/CustomFooter";
import CustomTextInput from "../components/CustomTextInput";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

export default function Login() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <TopHeader />
            <Header />

            <div className="lg:grid lg:grid-cols-2 lg:px-32 lg:py-20 py-0 mb-10">
                <img src="mockup_sign.svg" />
                <div className="block items-center lg:px-32 px-5 lg:mt-0 mt-10">
                    <h1 className="lg:text-3xl text-xl font-bold lg:mb-5 mb-2">Log in to Exclusive</h1>
                    <p className="lg:text-xl text-md font-semibold mb-10">Enter your details below</p>
                    <form className="flex flex-col max-w-md gap-4 mb-10">
                        <CustomTextInput placeholder='Name' value={''} />
                        <CustomTextInput placeholder='Email or phone number' value={''} />
                        <CustomTextInput placeholder='Password' value={''} />
                    </form>
                    <div className="flex items-center">
                        <CustomButton isDisabled={false} isRed={true} text="Login" />
                        <Link className="ml-auto" href='/login'>
                            <p className="text-red-500 ml-auto">Forget password?</p>
                        </Link>
                    </div>
                
                </div>
            </div>

            <CustomFooter />
        </main>
    );
}
