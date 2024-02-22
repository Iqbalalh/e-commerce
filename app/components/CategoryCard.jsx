import Link from "next/link";

export default function CategoryCard({ text, isActive, image }) {

    const cardIsActive = () => (
        isActive ?
            'bg-red-500 text-white border-red-500'
            :
            'text-black border-black border-opacity-20 bg-transparent'
    );

    const imageColorConvert = () => (
        isActive ?
            'invert-icon'
            :
            ''
    );

    return (
        <Link href=''>
        <div className={`border-2 rounded border min-w-40 min-h-40 flex flex-col items-center justify-center ${cardIsActive()} hover:bg-red-500 hover:text-white hover:border-red-500 hover:invert-icon`}>
                <img className={`mb-3 ${imageColorConvert()}`} src={image} alt="" />
                <h3 className={`text-md`}>{text}</h3>
        </div>
        </Link>
    )
}
