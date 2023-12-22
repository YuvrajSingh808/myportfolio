import ContactInfo from "../components/ContactInfo";
import MessageMe from "../components/MessageMe";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";

export default function Contact() {
    return (
        <div className="flex flex-col items-center bg-bgblack w-full">
            <Navbar />
            <PageHeading subtitle="Feel free to contact me anytimes" title="Get In Touch" />
            <ContactInfo />
            <MessageMe />
        </div>
    );
}