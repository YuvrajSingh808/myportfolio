export default function ServiceCard({title, description, icon}) {
    return (
        <div className="flex flex-col items-start p-8 rounded my-6 bg-secondaryBlack">
            <div className="flex items-center justify-center text-4xl text-primaryGreen">
                {icon}
            </div>
            <h1 className="text-2xl font-bold text-white mt-4 mb-7">{title}</h1>
            <p className="text-gray-300 text-lg">{description}</p>
        </div>
    )
}