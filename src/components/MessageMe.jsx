import Heading from "./Heading";
import AnimatedFormField from "./AnimatedFormField";
import PrimaryButton from "./PrimaryButton";

export default function MessageMe() {
    return (
        <div className="w-full px-14">
            <Heading text="Message Me" subtext="Get In Touch" />
            <form className="flex flex-col items-end justify-center w-full mb-10">
                <div className="grid grid-cols-2 w-full gap-x-7 gap-y-12">
                    <AnimatedFormField type="text" name="name" label="Name" />
                    <AnimatedFormField type="email" name="email" label="Email" />
                    <div className="col-span-2">
                        <AnimatedFormField type="text" name="subject" label="Subject" />
                    </div>
                    <div className="row-span-3 col-span-2">
                    <AnimatedFormField type="textarea" name="message" label="Message" />
                    </div>
                </div>
                <PrimaryButton text="Send Message" />
            </form>
        </div>
    );
}