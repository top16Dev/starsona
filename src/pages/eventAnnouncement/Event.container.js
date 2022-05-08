import { connect } from 'react-redux';
import Event from './Event.component';
import { fetchOccasionlist } from './actions/getOccasionList';
import { setBookingDetails, cancelBookingDetails } from '../../store/shared/actions/storeBooking';
import { showRecorder, startAudioRecording, saveAudioRecording, deviceCheck, stopAudioRecording, showFallback, saveAudioFile, closeRecorder, clearAll } from '../../store/shared/actions/audioRecorder';


const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  loading: state.session.loading,
  celebrityDetails: state.celebDetails.celebrityDetails,
  userDetails: state.celebDetails.userDetails,
  eventsDetails: state.occasionList.data,
  bookingData: state.bookingData,
  audioRecorder: state.audioRecorder,
});

const mapDispatchToProps = dispatch => ({
  fetchOccasionlist: id => dispatch(fetchOccasionlist(id)),
  setBookingDetails: data => dispatch(setBookingDetails(data)),
  cancelBookingDetails: () => dispatch(cancelBookingDetails()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
