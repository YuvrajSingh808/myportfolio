import { FaPhoneAlt, FaRecordVinyl } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Heading from "./Heading";

export default function ContactInfo() {
    return (
        <div className="flex flex-col items-start justify-center w-full px-14">
            <Heading text="Contact Info" />
            <p className="text-secondaryGrey text-center font-light text-xl">
                Always available for freelance work if the right project comes along, Feel free to contact me!
            </p>
            <div className="w-1/2 py-7">
                <ContactDetails text="Name" subtext="Yuvraj Singh" icon={<FaRecordVinyl />} />
                <ContactDetails text="Call Me" subtext="+91 9540918736" icon={<FaPhoneAlt />} />
                <ContactDetails text="Email" subtext="yuvrajsingh808@gmail.com" icon={<HiMail />} />
            </div>
        </div>
    );
}

function ContactDetails({ icon, text, subtext }) {
    return (
        <div className="flex">
            <div className="p-14 border-r-2 border-secondaryGrey text-white text-[56px]">
                {icon}
            </div>
            <div className="flex flex-col p-14 items-start justify-center">
                <p className="text-secondaryGrey text-xl font-light">{text}</p>
                <p className="text-white text-2xl font-medium">{subtext}</p>
            </div>
        </div>
    );
}