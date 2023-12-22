import PrimaryButton from "./PrimaryButton";
import { SocialLink } from "./SocialLink";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function WhoAmI() {
    return (
        <div className="flex items-center justify-center w-full px-14 my-20 space-x-14">
            <div className="w-1/3"></div>
            <div className="flex flex-col w-2/3">
                <h1 className="text-[32px] text-primaryGreen font-medium">Who Am I?</h1>
                <p className="text-5xl font-bold text-white pt-3">
                    I'm Yuvraj Singh, a Developer & a Freelancer
                </p>
                <p className="text-2xl text-secondaryGrey pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="h-1 w-full bg-primaryGreen rounded-md my-9"></div>
                <div className="flex justify-between items-center w-full py-4">
                    <p className="text-white font-medium">From:
                        <span className="text-secondaryGrey pl-2 font-bold">New Delhi, India</span>
                    </p>
                    <p className="text-white font-medium">Email:
                        <span className="text-primaryGreen font-bold hover:underline pl-2">
                            <a href="mailto:yuvrajsingh808@gmail.com">
                                yuvrajsingh808@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
                <div className="w-full py-7 flex justify-between items-center">
                    <PrimaryButton text="Download CV" />
                    <div className="w-1/4 h-1 bg-white rounded-md"></div>
                    <div className="flex justify-between w-1/3 text-white">
                        <SocialLink link="https://twitter.com/yuvrajsingh808" icon={<FaTwitter />} />
                        <SocialLink link="https://www.linkedin.com/in/yuvraj-singh-296654190/" icon={<FaLinkedin />} />
                        <SocialLink link="https://www.github.com/YuvrajSingh808" icon={<FaGithub />} />
                        <SocialLink link="https://www.instagram.com/yuvrajsingh808/" icon={<FaInstagram />} />
                    </div>
                </div>
            </div>
        </div>
    );
}
