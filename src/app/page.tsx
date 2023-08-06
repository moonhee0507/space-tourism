import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="w-screen h-screen bg-cover bg-home">
            <div className="px-[24px] py-[25px]">
                <Header />
                <main>
                    <section className="flex flex-col gap-4 text-center pt-[48px] pb-[81px]">
                        <h2 className="sr-only">Main Phrases</h2>
                        <p className="barlow-condensed text-base not-italic font-normal leading-[normal] tracking-[2.7px] text-light-purple">
                            SO, YOU WANT TO TRAVEL TO
                        </p>
                        <em className="text-white not-italic text-[80px] leading-[100px] font-normal">
                            SPACE
                        </em>
                        <p className="barlow text-light-purple text-[15px] not-italic leading-[25px] font-normal">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </section>
                    <Link
                        href="/destination"
                        className="block mx-auto my-0 bg-white rounded-full text-center w-[150px] h-[150px] text-space text-xl not-italic font-normal leading-[150px] tracking-[1.25px]"
                    >
                        EXPLORE
                    </Link>
                </main>
            </div>
        </div>
    );
}
