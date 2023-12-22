import Heading from "./Heading"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
    const testimonials = [
        {
            "name": "John Doe",
            "testimonial": "I am amazed by the personal portfolio website created by Yuvraj Singh. It beautifully showcases my skills and projects. Highly recommended!",
            "service": "Personal Portfolio Websites"
        },
        {
            "name": "Jane Smith",
            "testimonial": "Yuvraj Singh, as a web and app developer, did an exceptional job in creating a responsive and user-friendly website for my business. Great attention to detail and professionalism!",
            "service": "Responsive Web Development"
        },
        {
            "name": "David Johnson",
            "testimonial": "I'm extremely satisfied with the mobile app developed by Yuvraj Singh. The app is intuitive, visually appealing, and perfectly meets my requirements. Outstanding work!",
            "service": "Mobile App Development"
        }
    ]
    return (
        <div className="px-14 w-full items-start">
            <Heading text="Testimonials" subtext="What My Clients Say About Me" />
            <div className="grid grid-cols-2 grid-rows-2 gap-x-10">
                {testimonials.map((testimonial, index) => {
                    return (
                        <TestimonialCard key={index} name={testimonial.name} description={testimonial.testimonial} service={testimonial.service} />
                    )
                })}
            </div>
        </div>
    )
}