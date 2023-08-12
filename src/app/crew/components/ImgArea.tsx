const ImgArea = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div
            className={`h-[222px] w-full box-content border-b-[#383b4b] border-b border-solid my-[32px] md:flex-grow md:border-0 md:mt-[40px] md:mb-[-25px]`}
        >
            <img src={src} alt={alt} className="h-full mx-auto my-0" />
        </div>
    );
};

export default ImgArea;
