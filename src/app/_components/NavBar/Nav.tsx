import { Links } from "./Links"
export function Nav() {
    return (
        <div className="bg-[#00000033] py-4 px-6 z-20 relative">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <div className="bg-[url('/logo.png')] bg-cover bg-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[30px]"></div>
                </div>

                <div className="mb-4 md:mb-0 order-3 md:order-2">
                    <Links />
                </div>

                <div className="order-2 md:order-3">
                    <button className="flex justify-center items-center border border-[#6881ff] border-[1px] py-2 px-4 md:py-3 md:px-6 rounded-[12px] font-outfit font-bold text-white text-sm md:text-base whitespace-nowrap">
                        Book a Call
                    </button>
                </div>
            </div>
        </div>
    )
}