import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const { createTrack } = useContext(TrackContext);
    const { state : { name, locations}, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        console.log(`Saving track: ${name} with ${locations.length} locations`);
    
        if (!locations.length || !locations[0].coords) {
            console.warn("Track has no valid locations with coords!", locations);
            return;
        }
    
        await createTrack(name, locations);
        reset();
    };
    

    return [saveTrack];
};