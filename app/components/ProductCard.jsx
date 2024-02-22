import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ productName, productImage, realPrice, discountedPrice, rating, sumReview, id }) {

    const stars = Array.from({ length: rating }, (_, index) => (
        <FaStar key={index} style={{ color: "#FFAD33" }} />
    ));

    return (
        <div className="block w-40 lg:w-64 relative">
            <Link href=''>
            <div className="w-40 lg:w-64 lg:h-64 mb-3 bg-gray-100 flex items-center justify-center rounded relative overflow-hidden">
                <div className="absolute top-0 right-0 mt-2 mr-2 gap-2 flex flex-col items-end">
                    <img className="transform transition-transform hover:scale-110" src="view_prod.svg" alt="" />
                    <img className="transform transition-transform hover:scale-110" src="add_fav.svg" alt="" />
                </div>
                <img src={productImage} className="h-40 w-40 transform transition-transform hover:scale-110" alt="" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black text-white py-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-center">Add To Cart</p>
                </div>
            </div>
            <h3 className="font-semibold mb-3 line-clamp-2">{productName}</h3>
            <div className="flex gap-3 mb-3">
                <h3 className="text-red-500">${discountedPrice.toFixed(2)}</h3>
                <h3 className="line-through text-gray-500">${realPrice.toFixed(2)}</h3>
            </div>
            <div className="flex mb-3 items-center">
                {stars}
                <p className="px-2 text-gray-500">{`(${sumReview})`}</p>
            </div>
            </Link>
        </div>
    )
}
