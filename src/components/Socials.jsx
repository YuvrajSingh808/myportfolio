import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SocialLink } from './SocialLink'

export default function Socials() {
    return (
        <div className="flex justify-end w-full px-14 pb-[20px] items-center text-white">
            <div className="flex flex-col space-y-6">
                <SocialLink link="https://twitter.com/yuvrajsingh808" icon={<FaTwitter />} />
                <SocialLink link="https://www.linkedin.com/in/yuvraj-singh-296654190/" icon={<FaLinkedin />} />
                <SocialLink link="https://github.com/YuvrajSingh808" icon={<FaGithub />} />
                <SocialLink link="https://www.instagram.com/yuvrajsingh808/" icon={<FaInstagram />} />
            </div>

        </div>
    )
}

