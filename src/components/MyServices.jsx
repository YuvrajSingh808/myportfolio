import Heading from "./Heading"
import ServiceCard from "./ServiceCard"
import { FaBriefcase, FaDesktop, FaMobileAlt, FaShoppingCart, FaCode, FaRobot, FaBrain, FaDatabase } from "react-icons/fa"

export default function MyServices() {

    const services = [
        {
            "title": "Personal Portfolio Websites",
            "description": "Create stunning and personalized portfolio websites using React and Flutter. Showcase your skills, projects, and achievements. ",
            "icon": <FaBriefcase />
        },
        {
            "title": "Responsive Web Development",
            "description": "Build responsive and user-friendly websites that work seamlessly across various devices and screen sizes using React. ",
            "icon": <FaDesktop />
        },
        {
            "title": "Mobile App Development",
            "description": "Design and develop mobile applications for iOS and Android platforms using Flutter. Tailored to your specific requirements.",
            "icon": <FaMobileAlt />
        },
        {
            "title": "E-commerce Websites",
            "description": "Create secure and feature-rich e-commerce websites with payment integration, product management, and customer support using React. ",
            "icon": <FaShoppingCart />
        },
        {
            "title": "Custom Web Applications",
            "description": "Develop custom web applications using React and Flutter to streamline your business processes and enhance efficiency. ",
            "icon": <FaCode />
        },
        {
            "title": "Machine Learning Solutions",
            "description": "Build machine learning models and algorithms to extract insights from your data. Utilize libraries such as scikit-learn and TensorFlow.",
            "icon": <FaRobot />
        },
        {
            "title": "Deep Learning Applications",
            "description": "Develop deep learning models and neural networks for advanced pattern recognition and predictive analytics.",
            "icon": <FaBrain />
        },
        {
            "title": "Data Mining and Analysis",
            "description": "Apply data mining techniques to extract valuable information and patterns from large datasets. Utilize tools like Python and R.",
            "icon": <FaDatabase />
        }
    ]


    return (
        <div className="px-14 w-full items-start">
            <Heading text="My Services" subtext="Services I offer to my clients" />
            <div className="grid grid-cols-3 grid-rows-2 gap-x-10">
                {services.map((service, index) => {
                    return (
                        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
                    )
                })}
            </div>
        </div>
    )
}