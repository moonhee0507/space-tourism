import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-x-hidden bg-cover bg-home-mobile page-std md:bg-home-tablet">
            <div className="px-[24px] py-[25px]">
                <Header />
                <main>
                    <section className="flex flex-col gap-4 items-center text-center pt-[48px] pb-[81px] md:gap-[24px]">
                        <h2 className="sr-only">Main Phrases</h2>
                        <p className="barlow-condensed text-base not-italic font-normal leading-[normal] tracking-[2.7px] text-light-purple md:text-[20px] md:tracking-[3.375px]">
                            SO, YOU WANT TO TRAVEL TO
                        </p>
                        <em className="text-white not-italic text-[80px] leading-[100px] font-normal md:text-[150px] md:leading-[150px]">
                            SPACE
                        </em>
                        <p className="barlow text-light-purple text-[15px] not-italic leading-[25px] font-normal max-w-[444px] md:text-[16px] md:leading-[28px]">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </section>
                    <Link
                        href="/destination"
                        className="block mx-auto my-0 bg-white rounded-full text-center w-[150px] h-[150px] text-space text-xl not-italic font-normal leading-[150px] tracking-[1.25px] md:w-[242px] md:h-[242px] md:text-[32px] md:leading-[242px] md:tracking-[2px]"
                    >
                        EXPLORE
                    </Link>
                </main>
            </div>
        </div>
    );
}
