import { fetchCelebDetails, resetCelebDetails } from './getCelebDetails';
// import { fetchCelebVideosList } from './getCelebVideos';
import { fetchCelebGroups, resetCelebGroups } from './getCelebGroups';

const fetchStarDetails = id => (dispatch) => {
    dispatch(fetchCelebDetails(id));
    // dispatch(fetchCelebVideosList(id, 0, true));
    dispatch(fetchCelebGroups(id, 0, true));
};

const resetStarDetails = () => (dispatch) => {
    dispatch(resetCelebDetails());
    dispatch(resetCelebGroups());
}

export { fetchStarDetails, resetStarDetails };
