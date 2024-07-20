import Link from "next/link";
import Marquee from "react-fast-marquee";

export function Bold() {
    return (
        <div className="px-4 md:px-8 lg:px-16 mt-12 md:mt-24 lg:mt-32 text-white">
            <h1 className="font-outfit font-normal text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 space-y-2">
                Empowering Lives Through<br />
                Innovative <span className="decoration-[#7F93FF] underline underline-offset-8 font-bold">AI</span> Technologies.
            </h1>
            <p className="font-outfit font-normal text-lg md:text-xl lg:text-2xl mb-6">
                Finding new horizons for visionaries to accelerate their innovation and progress
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <a className="flex justify-center items-center bg-[#6A35FF] w-full sm:w-[239px] h-[53px] rounded-[12px] font-outfit font-bold text-lg" href="/services">Explore Our Services</a>
                <a className="flex justify-center items-center border border-[#6A35FF] w-full sm:w-[155px] h-[53px] rounded-[12px] font-outfit font-bold text-lg" href="/about">Learn More</a>
            </div>
            <div className="w-[50%] overflow-hidden marquee">
                <Marquee>
                    <span className="w-fit font-outfit font-normal text-lg md:text-2xl text-white px-4">
                        Ideas to Software Solutions💡✨From Ideas to Software Solutions🌟✨From Ideas to Software Solutions💡✨From Ideas to Software Solutions 🌟✨
                    </span>
                </Marquee>
            </div>
        </div>
    )
}
//background: linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%);
// bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] 

// bg-gradient-to-r from-transparent via-current to-transparent bg-clip-text