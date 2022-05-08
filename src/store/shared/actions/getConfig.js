
import Api from '../../../lib/api';
import { fetch } from '../../../services/fetch';
import { updatePriceRange } from '../../../pages/landing/actions/updateFilters';

export const CONFIG = {
  start: 'fetch_start/config',
  end: 'fetch_end/config',
  success: 'fetch_success/config',
  failed: 'fetch_failed/config',
};

export const configFetchStart = () => ({
  type: CONFIG.start,
});

export const configFetchEnd = () => ({
  type: CONFIG.end,
});

export const configFetchSuccess = (data) => {
  return (
    {
      type: CONFIG.success,
      data,
    });
};

export const configFetchFailed = error => ({
  type: CONFIG.failed,
  error,
});

const processConfig = (config) => {
  const newConfig = { ...config };
  const tips = config.tip_amounts ? config.tip_amounts.split(',') : [];
  const requestFeedback = config.request_feedback ? config.request_feedback.split(',') : [];
  const declineComments = config.decline_comments ? config.decline_comments.split(',') : [];
  const supportTopics  = config.topics ? config.topics.topics.map((topic) => {
    return ({
      label: topic,
      value: topic,
    })
  }): [];
  const cancelReasons  = config.cancel_booking_reasons ? config.cancel_booking_reasons.cancel_booking_reasons.map((reason) => {
    return ({
      label: reason,
      value: reason,
    })
  }): [];
  newConfig.tipAmounts = tips;
  newConfig.supportTopics = supportTopics;
  newConfig.cancelReasons = cancelReasons;
  newConfig.requestFeedback = requestFeedback;
  newConfig.declineComments = declineComments;
  return newConfig;
};

export const getConfig = () => (dispatch) => {
  dispatch(configFetchStart());
  return fetch.get(Api.getConfig).then((resp) => {
    if (resp.data && resp.data.success) {
      dispatch(configFetchEnd());
      const configData = processConfig(resp.data.data.config);
      dispatch(configFetchSuccess(configData));
      dispatch(updatePriceRange(parseInt(configData.min_rate, 0), parseInt(configData.max_rate, 0)));
    } else {
      dispatch(configFetchEnd());
    }
  }).catch((exception) => {
    dispatch(configFetchEnd());
    dispatch(configFetchFailed(exception));
  });
};
