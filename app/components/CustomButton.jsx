export default function CustomButton({ text, event, isDisabled, isRed }) {

    const buttonisRed = () => {
        return isDisabled ?
            (isRed ? 
                'bg-red-500 bg-opacity-75 text-opacity-75 border-opacity-75 text-white border-red-500' 
                :
                'text-black border-black border-opacity-25 bg-transparent text-opacity-25') 
            :
            (isRed ?
                'bg-red-500 text-white border-red-500'
                :
                'text-black border-black border-opacity-50 bg-transparent')
        
    }

    const eventHandler = () => {

    }

    return (
        <button
            onClick={eventHandler()}
            disabled={isDisabled}
            className={`px-7 py-3 border-2 rounded text-xs ${buttonisRed()}`}
        >
            {text}
        </button>
    )
}