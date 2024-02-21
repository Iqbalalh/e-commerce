export default function CustomButton({ text, event, disabledState, filling }) {

    const buttonFilling = () => {
        return disabledState ?
            (filling ? 
                'bg-red-500 bg-opacity-75 text-opacity-75 border-opacity-75 text-white border-red-500' 
                :
                'text-black border-black border-opacity-25 bg-transparent text-opacity-25') 
            :
            (filling ?
                'bg-red-500 text-white border-red-500'
                :
                'text-black border-black border-opacity-50 bg-transparent')
        
    }

    const eventHandler = () => {

    }

    return (
        <button
            onClick={eventHandler()}
            disabled={disabledState}
            className={`px-7 py-3 border-2 rounded text-xs ${buttonFilling()}`}
        >
            {text}
        </button>
    )
}