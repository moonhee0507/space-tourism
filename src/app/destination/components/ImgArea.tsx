const ImgArea = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="mx-auto mt-[32px] mb-[26px] md:mt-[60px] md:mb-[53px] desktop:m-0 desktop:flex desktop:items-center">
            <img
                src={src}
                alt={alt}
                className="roundAnimation mx-auto my-0 w-[170px] h-[170px] md:w-[300px] md:h-[300px] desktop:w-[445px] desktop:h-[445px]"
            />
        </div>
    );
};

export default ImgArea;
