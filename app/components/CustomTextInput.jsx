export default function CustomTextInput({ placeholder }) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="appearance-none lg:text-lg text-xs border-none w-full py-2 pl-0 pr-10 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0"
            />
            <div
                className="absolute inset-x-0 bottom-0 h-px bg-gray-500 pointer-events-none"
                aria-hidden="true"
            ></div>
        </div>
    );
}
