
export default function PrimaryButton({text, onclick}) {
    return (
        <button onClick={onclick} className="bg-primaryGreen text-white font-medium rounded-full px-7 py-4 text-xl hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out">
            {text}
        </button>
    )
}