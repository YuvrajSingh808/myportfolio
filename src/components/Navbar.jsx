import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex justify-between w-full px-14 items-center  text-white">
            <div className="flex items-center w-1/2">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                </Link>
            </div>
            <div className="flex items-center space-x-14 justify-end w-1/2 ">
                <Navlink text="About" link="/about" />
                <Navlink text="Resume" link="/resume" />
                <Navlink text="Projects" link="/projects" />
                <Navlink text="Contact" link="/contact" />
            </div>
        </div>
    )
}

function Navlink({ text, link }) {
    return (
        <Link to={link} className="py-[40px] text-xl text-right self-end font-medium hover:text-gray-300">{text}</Link>
    )
}
