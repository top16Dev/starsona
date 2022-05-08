
import isEmpty from 'lodash/isEmpty';
import Api from '../../../lib/api';
import { fetch } from '../../../services/fetch';
import { updateCelebrityFollow } from '../../../pages/landing/actions/getCelebList';
import { celebDetailstFetchFollowUpdate } from '../../../pages/starProfile/actions/getCelebDetails';
import { updateFavouriteList } from '../../../pages/favoriteStars/actions/getFavouritesList';

export const FOLLOW_CELEBRITY = {
  followFailed: 'failed/FOLLOW_CELEBRITY',
  setFollowQueue: 'set_follow_queue/FOLLOW_CELEBRITY',
  resetFollowQueue: 'reset_follow_queue/FOLLOW_CELEBRITY',
};

export const followCelebrityFailed = error => ({
  type: FOLLOW_CELEBRITY.followFailed,
  error,
});

export const updateFavouritesQueue = (celebId, follow) => ({
  type: FOLLOW_CELEBRITY.setFollowQueue,
  celebId,
  follow,
});

export const resetFavouritesQueue = () => ({
  type: FOLLOW_CELEBRITY.resetFollowQueue,
});

export const followCelebrity = (celebrityId, follow, cancelUpdate) => (dispatch, getState) => {
  return fetch.post(Api.followCelebrity, {
    celebrity: celebrityId,
    follow,
  }).then(() => {
    if (!cancelUpdate) {
      const { celebDetails } = getState().starDetails;
      if (!isEmpty(celebDetails.celebrityDetails)) {
        const obj = {
          ...celebDetails,
          userDetails: {
            ...celebDetails.userDetails,
            is_follow: follow,
          },
        };
        dispatch(celebDetailstFetchFollowUpdate(obj));
      }
      const { followLoaded } = getState().favouritesList;
      if (followLoaded) {
        dispatch(updateFavouriteList(celebrityId, follow));
      }
    }
  }).catch((exception) => {
    dispatch(followCelebrityFailed(exception));
  });
};
