import { Dispatch, SetStateAction } from "react";
import { Technology } from "../types";
import ButtonGroup from "./ButtonGroup";
import ImgArea from "../ImgArea";
import TextArea from "./TextArea";
import useResize from "@/app/useResize";

const TechnologyContainer = ({
    data,
    technologies,
    technologyIdx,
    setTechnologyIdx,
}: {
    data: Technology;
    technologies: Technology[];
    technologyIdx: number;
    setTechnologyIdx: Dispatch<SetStateAction<number>>;
}) => {
    const { images, name, description } = data;
    const width = useResize();

    return (
        <>
            {width < 1440 ? (
                <>
                    <ImgArea src={images.landscape} alt={name} />
                    <ButtonGroup
                        technologies={technologies}
                        technologyIdx={technologyIdx}
                        setTechnologyIdx={setTechnologyIdx}
                    />
                    <TextArea name={name} description={description} />
                </>
            ) : (
                <div className="flex gap-[60px] mt-[26px]">
                    <ButtonGroup
                        technologies={technologies}
                        technologyIdx={technologyIdx}
                        setTechnologyIdx={setTechnologyIdx}
                    />
                    <TextArea name={name} description={description} />
                    <ImgArea src={images.portrait} alt={name} />
                </div>
            )}
        </>
    );
};

export default TechnologyContainer;
