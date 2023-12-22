import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import resume from "../assets/YuvrajSingh.svg";
import Pdf from "../assets/YuvrajSingh.pdf";

export default function Resume() {
	return (
		<div className="flex flex-col items-center bg-bgblack w-full">
			<Navbar />
			<PageHeading title="Resume" subtitle="Check Out My Resume" />
			<div className="py-10 my-10 rounded-3xl bg-gray-300">
				<img src={resume} alt="Resume" />
			</div>
			<a href={Pdf} without rel="noopener noreferrer" target="_blank" className='text-white bg-primaryGreen hover:bg-green-700 rounded-full px-10 py-2 duration-200 hover:shadow-lg transform mb-20'>
				<button trailingIcon="picture_as_pdf" label="Resume">
					Download Resume
				</button>
			</a>
		</div>
	);
}
