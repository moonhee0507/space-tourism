import { useEffect, useState } from "react";
import { Technology } from "../types";
import ButtonGroup from "./ButtonGroup";

const InfoSection = ({ technologies }: { technologies: Technology[] }) => {
    const [technologyIdx, setTechnologyIdx] = useState<number>(0);
    const [data, setData] = useState<Technology | null>(null);

    useEffect(() => {
        if (technologies && technologies.length !== 0) {
            setData(technologies[0]);
        }
    }, [technologies]);

    useEffect(() => {
        setData(technologies[technologyIdx]);
    }, [technologyIdx]);

    return (
        <section>
            <h3 className="sr-only">Technology Information</h3>
            {data && (
                <>
                    <div className="relative mt-[32px] mb-[34px] mx-[-24px] h-[170px] overflow-hidden md:mt-[60px] md:mb-[56px] md:mx-[-39px] md:h-[310px]">
                        <img
                            src={data.images.landscape}
                            alt={data.name}
                            className="absolute"
                        />
                    </div>
                    <ButtonGroup
                        technologies={technologies}
                        technologyIdx={technologyIdx}
                        setTechnologyIdx={setTechnologyIdx}
                    />
                    <div className="mx-auto text-center my-[26px] md:my-[44px] md:max-w-[458px]">
                        <small className="barlow-condensed text-light-purple text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase md:text-[16px] md:tracking-[2.7px]">
                            The terminology…
                        </small>
                        <h4 className="text-[24px] not-italic font-normal leading-normal uppercase mt-[9px] mb-[16px] md:text-[40px]">
                            {data.name}
                        </h4>
                        <p className="barlow text-light-purple text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px]">
                            {data.description}
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default InfoSection;
