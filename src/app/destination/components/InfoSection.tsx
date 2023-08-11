import { useEffect, useState } from "react";
import { Destination, DestinationName } from "../types";
import ButtonGroup from "./ButtonGroup";

const InfoSection = ({ destinations }: { destinations: Destination[] }) => {
    const [destination, setDestination] = useState<DestinationName>("Moon");
    const [data, setData] = useState<Destination | null>(null);

    useEffect(() => {
        if (destinations && destinations.length !== 0) {
            setData(destinations[0]);
        }
    }, [destinations]);

    useEffect(() => {
        setData(destinations.filter((item) => item.name === destination)[0]);
    }, [destination]);

    return (
        <section>
            <h3 className="sr-only">Destination Information</h3>
            {data && (
                <>
                    <img
                        src={data.images.webp}
                        alt={data.name}
                        className="w-[170px] h-[170px] mx-auto mt-[32px] mb-[26px] md:w-[300px] md:h-[300px] md:mt-[60px] md:mb-[53px]"
                    />
                    <ButtonGroup
                        destination={destination}
                        setDestination={setDestination}
                    />
                    <div className="border-b border-solid border-b-[#383B4B] pt-[31px] pb-[32px] my-0 mx-auto md:pt-[47px] md:max-w-[573px] md:pb-[49px]">
                        <h4 className=" text-center text-[56px] not-italic font-normal leading-normal uppercase md:text-[80px]">
                            {data.name}
                        </h4>
                        <p className="barlow text-light-purple text-center text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px]">
                            {data.description}
                        </p>
                    </div>
                    <div className="py-[32px]">
                        <dl className="grid grid-cols-1 grid-rows-2 gap-[32px] md:grid-cols-2 md:grid-rows-1 md:gap-[100px]">
                            <div className="md:justify-self-end">
                                <dt className="barlow-condensed text-light-purple text-center text-sm not-italic font-normal leading-normal tracking-[2.362px] uppercase mb-[12px]">
                                    Avg. distance
                                </dt>
                                <dd className="text-center text-[28px] not-italic font-normal leading-normal uppercase">
                                    {data.distance}
                                </dd>
                            </div>
                            <div className="md:justify-self-start">
                                <dt className="barlow-condensed text-light-purple text-center text-sm not-italic font-normal leading-normal tracking-[2.362px] uppercase mb-[12px]">
                                    Est. travel time
                                </dt>
                                <dd className="text-center text-[28px] not-italic font-normal leading-normal uppercase ">
                                    {data.travel}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </>
            )}
        </section>
    );
};

export default InfoSection;
