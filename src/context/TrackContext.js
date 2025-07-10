import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"; 
import { navigate } from "../navigationRef";

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            console.log("Updating State with Tracks:", action.payload);
            return action.payload;
        
        case 'create_track':
            // Optionally add the new track to the state directly
            // This avoids having to refetch all tracks
            return state; // Just return current state, we'll fetch fresh data after navigation
    
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => {
    return async () => {
        try {
            const response = await trackerApi.get('/tracks');
            console.log("Fetched Tracks:", response.data); // Debugging
            dispatch({ type: 'fetch_tracks', payload: response.data });
        } catch (err) {
            console.log('Error fetching tracks:', err);
        }
    };
};

const createTrack = (dispatch) => {
    return async (name, locations) => {
        console.log("Sending to API - Track Name:", name);
        console.log("Sending to API - Locations:", JSON.stringify(locations, null, 2));

        if (!locations.length || !locations[0].coords) {
            console.warn("Cannot save track - No valid location data!");
            return;
        }

        try {
            const response = await trackerApi.post('/tracks', { name, locations });
            console.log('Track created successfully:', response.data);
            dispatch({ type: 'create_track' });
            navigate('mainFlow', { screen: 'TrackListFlow', params: { screen: 'TrackList' } });
        } catch (err) {
            console.log('Error creating track:', err);
        }
    };
};


export const { Provider, Context} = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);