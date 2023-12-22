export default function Heading({text, subtext}) {
    return (
        <div className="flex flex-col items-start">
            <h2 className="text-2xl text-gray-300 mb-4 mt-28">{subtext}</h2>
            <h1 className="text-5xl font-bold text-white mt-4 mb-7">{text}</h1>
        </div>
    )
}