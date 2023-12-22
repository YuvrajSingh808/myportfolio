import { useEffect } from "react";
import { useState } from "react";

export function Ima() {
    const [text, setText] = useState("Student");
    const [index, setIndex] = useState(0);
    const allText = ["Student", "Freelancer", "Web Developer", "Flutter App Developer", "ML Engineer", "Open Source Contributor"];

    useEffect(() => {
        for (let i = 0; i < allText[index].length; i++) {
            setTimeout(() => {
                setText(allText[index].slice(0, i + 1));
            }, i * 100); // time after which the text is shown
        }
        setTimeout(() => {
            for (let i = allText[index].length; i >= 0; i--) {
                setTimeout(() => {
                    setText(allText[index].slice(0, i));
                }, (allText[index].length - i) * 100); // time after which the text is removed
            }
            setTimeout(() => {
                setIndex((index + 1) % allText.length);
            }, allText[index].length * 100);
        }, allText[index].length * 250); // time for which the text is shown
    }, [index]);



    return (
        <div className="flex items-center justify-center overflow-hidden">

            <h1 className="text-4xl text-white pr-1">
                I'm a {text}
            </h1>
            <div className=" border-l h-full w-0  transition-all ease-in-out duration-500"></div>
        </div>
    );
}
