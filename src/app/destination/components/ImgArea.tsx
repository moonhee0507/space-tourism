const ImgArea = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-[170px] h-[170px] mx-auto mt-[32px] mb-[26px] md:w-[300px] md:h-[300px] md:mt-[60px] md:mb-[53px] desktop:w-[445px] desktop:h-[445px] desktop:mt-[33px] desktop:ml-[63px] desktop:mr-[157px]"
        />
    );
};

export default ImgArea;
