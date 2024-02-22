export default function NavArrow({ onScrollLeft, onScrollRight }) {
    return (
        <div className="ml-auto lg:flex hidden">
            <button onClick={onScrollLeft}>
                <img src="larrow.svg" className="transform transition-transform hover:scale-110" alt="" />
            </button>
            <button onClick={onScrollRight} className="pl-5">
                <img src="rarrow.svg" className="transform transition-transform hover:scale-110" alt="" />
            </button>
        </div>
    )
}