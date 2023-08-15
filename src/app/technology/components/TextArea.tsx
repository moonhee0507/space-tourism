const TextArea = ({
    name,
    description,
}: {
    name: string;
    description: string;
}) => {
    return (
        <div className="mx-auto text-center my-[26px] md:my-[44px] md:max-w-[458px] desktop:m-0 desktop:text-left desktop:max-w-none desktop:pt-[111px]">
            <small className="barlow-condensed text-light-purple text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase md:text-[16px] md:tracking-[2.7px]">
                The terminology…
            </small>
            <h4 className="text-[24px] not-italic font-normal leading-normal uppercase mt-[9px] mb-[16px] md:text-[40px] desktop:text-[56px] desktop:m-0">
                {name}
            </h4>
            <p className="barlow text-light-purple text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px] desktop:text-[18px] desktop:leading-[32px] desktop:max-w-[444px]">
                {description}
            </p>
        </div>
    );
};

export default TextArea;
