import { useEffect, useState } from "react";
import { Destination, DestinationName } from "../types";
import ButtonGroup from "./ButtonGroup";
import DestinationContainer from "./DestinationContainer";

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
                <DestinationContainer
                    data={data}
                    destination={destination}
                    setDestination={setDestination}
                />
            )}
        </section>
    );
};

export default InfoSection;
