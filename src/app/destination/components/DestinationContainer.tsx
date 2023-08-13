import { Dispatch, SetStateAction } from "react";
import { Destination, DestinationName } from "../types";
import ButtonGroup from "./ButtonGroup";
import ImgArea from "./ImgArea";
import TextArea from "./TextArea";

const DestinationContainer = ({
    data,
    destination,
    setDestination,
}: {
    data: Destination;
    destination: DestinationName;
    setDestination: Dispatch<SetStateAction<DestinationName>>;
}) => {
    return (
        <div className="desktop:flex desktop:mt-[64px]">
            <ImgArea src={data.images.webp} alt={data.name} />
            <div>
                <ButtonGroup
                    destination={destination}
                    setDestination={setDestination}
                />
                <TextArea
                    name={data.name}
                    description={data.description}
                    distance={data.distance}
                    travel={data.travel}
                />
            </div>
        </div>
    );
};

export default DestinationContainer;
