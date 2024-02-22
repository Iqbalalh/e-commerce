import Link from "next/link";

export default function CustomFooter() {
    return (
        <>
            <div className="py-16 grid lg:grid-cols-5 lg:gap-4 gap-6 text-white bg-black lg:px-32 px-5">
                <div className="block">
                    <h1 className="text-2xl font-bold lg:mb-5 mb-2">Exclusive</h1>
                    <h2 className="text-md lg:mb-5 mb-2 font-semibold">Subscribe</h2>
                    <div className="text-sm">
                        <Link href=""><p className="font-light hover:underline">Get 10% off your first order</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md lg:mb-5 mb-2 font-semibold">Support</h2>
                    <div className="text-sm">
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">exclusive@gmail.com</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">+88015-88888-9999</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md lg:mb-5 mb-2 font-semibold">Account</h2>
                    <div className="text-sm">
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">My Account</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Login / Register</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Cart</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Wishlist</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Shop</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md lg:mb-5 mb-2 font-semibold">Quick Link</h2>
                    <div className="text-sm">
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Privacy Policy</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Terms Of Use</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">FAQ</p></Link>
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Contact</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md lg:mb-5 mb-2 font-semibold">Download App</h2>
                    <div className="text-sm">
                        <Link href=""><p className="lg:mb-3 mb-1 font-light hover:underline">Get 10% off your first order</p></Link>
                        <img className="w-full" src="qrcode.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-700"></div>
            <div className="py-2 text-gray-700 bg-black text-center items-center">
               <h3 className="items-center">© Copyright Rimel 2022. All right reserved</h3>
            </div>
        </>
    )
}