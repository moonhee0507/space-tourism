import useResize from "../useResize";

const ImgArea = ({ src, alt }: { src: string; alt: string }) => {
    const width = useResize();
    return (
        <>
            {width < 1440 ? (
                <div className="relative mt-[32px] mb-[34px] mx-[-24px] h-[170px] overflow-hidden md:mt-[60px] md:mb-[56px] md:mx-[-39px] md:h-[310px]">
                    <img src={src} alt={alt} className="absolute" />
                </div>
            ) : (
                <img src={src} alt={alt} className="absolute right-0" />
            )}
        </>
    );
};

export default ImgArea;
