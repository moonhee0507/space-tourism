import useResize from "@/app/useResize";

const ImgArea = ({ src, alt }: { src: string; alt: string }) => {
    const width = useResize();
    return (
        <>
            {width < 1440 ? (
                <div
                    className={`h-[222px] w-full box-content border-b-[#383b4b] border-b border-solid my-[32px] md:flex-grow md:border-0 md:mt-[40px] md:mb-[-25px] desktop:relative desktop:h-auto desktop:my-0`}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="h-full mx-auto my-0 desktop:absolute desktop:mx-0 desktop:m-0 desktop:w-full"
                    />
                </div>
            ) : (
                <img src={src} alt={alt} className="" />
            )}
        </>
    );
};

export default ImgArea;
