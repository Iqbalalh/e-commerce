import Link from "next/link";

export default function CustomFooter() {
    return (
        <>
            <div className="py-16 grid grid-cols-5 gap-4 text-white bg-black px-32">
                <div className="block">
                    <h1 className="text-2xl font-bold mb-5">Exclusive</h1>
                    <h2 className="text-md mb-5 font-semibold">Subscribe</h2>
                    <div className="text-sm">
                        <Link href=""><p className="font-light">Get 10% off your first order</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md mb-5 font-semibold">Support</h2>
                    <div className="text-sm">
                        <Link href=""><p className="mb-3 font-light">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p></Link>
                        <Link href=""><p className="mb-3 font-light">exclusive@gmail.com</p></Link>
                        <Link href=""><p className="mb-3 font-light">+88015-88888-9999</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md mb-5 font-semibold">Account</h2>
                    <div className="text-sm">
                        <Link href=""><p className="mb-3 font-light">My Account</p></Link>
                        <Link href=""><p className="mb-3 font-light">Login / Register</p></Link>
                        <Link href=""><p className="mb-3 font-light">Cart</p></Link>
                        <Link href=""><p className="mb-3 font-light">Wishlist</p></Link>
                        <Link href=""><p className="mb-3 font-light">Shop</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md mb-5 font-semibold">Quick Link</h2>
                    <div className="text-sm">
                        <Link href=""><p className="mb-3 font-light">Privacy Policy</p></Link>
                        <Link href=""><p className="mb-3 font-light">Terms Of Use</p></Link>
                        <Link href=""><p className="mb-3 font-light">FAQ</p></Link>
                        <Link href=""><p className="mb-3 font-light">Contact</p></Link>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-md mb-5 font-semibold">Download App</h2>
                    <div className="text-sm">
                        <Link href=""><p className="mb-3 font-light">Get 10% off your first order</p></Link>
                        <img src="qrcode.svg" alt="" />
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