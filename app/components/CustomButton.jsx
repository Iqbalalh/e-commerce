export default function CustomButton({ text, event, isDisabled, isRed }) {

    const buttonIsRed = () => {
        return isDisabled ?
            (isRed ? 
                'bg-red-500 bg-opacity-75 text-opacity-75 border-opacity-75 text-white border-red-500' 
                :
                'text-black border-black border-opacity-25 bg-transparent text-opacity-25') 
            :
            (isRed ?
                'bg-red-500 text-white border-red-500'
                :
                'text-black border-black border-opacity-25 bg-transparent')
        
    }

    const eventHandler = () => {

    }

    return (
        <button
            onClick={eventHandler()}
            disabled={isDisabled}
            className={`lg:px-7 px-3 py-3 border-2 rounded text-xs transform transition-transform hover:scale-110 ${buttonIsRed()}`}
        >
            {text}
        </button>
    )
}