import { useEffect, useState } from "react";
import { Technology } from "../types";
import TechnologyContainer from "./TechnologyContainer";

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
                <TechnologyContainer
                    data={data}
                    technologies={technologies}
                    technologyIdx={technologyIdx}
                    setTechnologyIdx={setTechnologyIdx}
                />
            )}
        </section>
    );
};

export default InfoSection;
