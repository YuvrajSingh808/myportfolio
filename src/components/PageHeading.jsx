import { motion } from "framer-motion"

export default function PageHeading({title, subtitle}) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-2xl text-secondaryGrey text-center">{subtitle}</h2>
            <h1 className="text-[80px] text-white font-extrabold text-center">{title}</h1>
            <GreenUnderline />
        </div>
    )
}

function GreenUnderline(){
    return (
        <div className="w-[10%] h-1 flex">
            <motion.div
                initial={{ width: "5%",
                    x: "0%"
                 }}
                animate={{ width: "100%",
                    x: "10%"
             }}
                transition={{ duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                 }}
                
             className="h-full bg-primaryGreen pr-1 rounded-md"></motion.div>
            <div className="w-2 h-full bg-transparent pl-1"></div>
            <motion.div 
                
            className="w-[5%] h-full bg-primaryGreen px-2"></motion.div>
            {/* <div className="w-2 h-full bg-transparent pl-1"></div> */}
            <motion.div 
                initial={{ width: "100%",
                    x: "0%" }}
                animate={{ width: "5%",
                    x: "50%" }}
                transition={{ duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                    }}
            className="h-full bg-primaryGreen rounded-md"></motion.div>
        </div>
    )
}