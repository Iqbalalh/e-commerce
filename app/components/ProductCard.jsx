import { FaStar } from "react-icons/fa";

export default function ProductCard({ productName, productImage, realPrice, discountedPrice, rating, sumReview }) {

    const stars = Array.from({ length: rating }, (_, index) => (
        <FaStar key={index} style={{ color: "#FFAD33" }} />
    ));

    return (
        <div className="block w-64">
            <div className="w-full h-64 mb-3 bg-gray-100 flex items-center justify-center rounded">
                <img src={productImage} className="h-40 w-40" alt="" />
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
        </div>
    )
}