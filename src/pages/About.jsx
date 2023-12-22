import MessageMe from "../components/MessageMe";
import MyServices from "../components/MyServices";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import Testimonials from "../components/Testimonials";
import { WhoAmI } from "../components/WhoAmI";

export default function About() {
    return (
        <div className="flex flex-col items-center bg-bgblack w-full">
            <Navbar />
            <PageHeading title="About me" subtitle="Get To Know Me" />
            <WhoAmI />
            <MyServices />
            <Testimonials />
            <MessageMe />
        </div>
    );
}

