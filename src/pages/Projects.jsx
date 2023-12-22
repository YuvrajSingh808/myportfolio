import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";

export default function Projects() {
	return (
		<div className="flex flex-col items-center justify-between bg-bgblack w-full h-full">
			<Navbar />
			<PageHeading title="Projects" subtitle="Showcasing some of my best work" />
            <div className="py-10">
                {/* Coming soon */}
                <h1 className="text-6xl text-white font-bold">
                    Coming Soon
                </h1>
            </div>
		</div>
	);
}
