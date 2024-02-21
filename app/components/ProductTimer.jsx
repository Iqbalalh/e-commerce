export default function ProductTimer({ days, hours, minutes, seconds }) {
    return (
        <div className="flex items-center">
            <div className="block">
                <p className="text-xs leading-none font-semibold">Days</p>
                <h1 className="text-3xl font-bold">{days}</h1>
            </div>
            <h1 className="px-5 text-3xl text-red-500 font-bold">:</h1>
            <div className="block">
                <p className="text-xs leading-none font-semibold">Hours</p>
                <h1 className="text-3xl font-bold">{hours}</h1>
            </div>
            <h1 className="px-5 text-3xl text-red-500 font-bold">:</h1>
            <div className="block">
                <p className="text-xs leading-none font-semibold">Minutes</p>
                <h1 className="text-3xl font-bold">{minutes}</h1>
            </div>
            <h1 className="px-5 text-3xl text-red-500 font-bold">:</h1>
            <div className="block">
                <p className="text-xs leading-none font-semibold">Seconds</p>
                <h1 className="text-3xl font-bold">{seconds}</h1>
            </div>
        </div>
    )
}