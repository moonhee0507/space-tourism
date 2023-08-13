const TextArea = ({
    name,
    description,
    distance,
    travel,
}: {
    name: string;
    description: string;
    distance: string;
    travel: string;
}) => {
    return (
        <>
            <div className="border-b border-solid border-b-[#383B4B] pt-[31px] pb-[32px] my-0 mx-auto md:pt-[47px] md:max-w-[573px] md:pb-[49px] desktop:max-w-[444px]">
                <h4 className="text-center text-[56px] not-italic font-normal leading-normal uppercase md:text-[80px] desktop:text-[100px] desktop:text-left">
                    {name}
                </h4>
                <p className="barlow text-light-purple text-center text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px] desktop:text-[18px] desktop:leading-[32px] desktop:text-left">
                    {description}
                </p>
            </div>
            <div className="py-[32px]">
                <dl className="grid grid-cols-1 grid-rows-2 gap-[32px] md:grid-cols-2 md:grid-rows-1 md:gap-[100px] desktop:gap-0">
                    <div className="md:justify-self-end desktop:justify-self-start">
                        <dt className="barlow-condensed text-light-purple text-center text-sm not-italic font-normal leading-normal tracking-[2.362px] uppercase mb-[12px] desktop:text-left">
                            Avg. distance
                        </dt>
                        <dd className="text-center text-[28px] not-italic font-normal leading-normal uppercase desktop:text-left">
                            {distance}
                        </dd>
                    </div>
                    <div className="md:justify-self-start">
                        <dt className="barlow-condensed text-light-purple text-center text-sm not-italic font-normal leading-normal tracking-[2.362px] uppercase mb-[12px] desktop:text-left">
                            Est. travel time
                        </dt>
                        <dd className="text-center text-[28px] not-italic font-normal leading-normal uppercase desktop:text-left">
                            {travel}
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    );
};

export default TextArea;
