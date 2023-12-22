import Navbar from "../components/Navbar";
import { Ima } from "../components/Ima";
import Socials from "../components/Socials";

export default function LandingPage() {
    return (
        <div className="h-screen flex flex-col justify-between items-center bg-bgblack w-screen">
            <Navbar />
            <div className="flex flex-col space-y-7 pt-10">
                <h1 className="text-8xl text-white font-bold">
                    Yuvraj Singh
                </h1>
                <Ima />

            </div>
            <Socials />
        </div>
    );
}

