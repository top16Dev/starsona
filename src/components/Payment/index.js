import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { BackArrow, CloseButton, FlexCenter } from '../../styles/CommonStyled';
import { Layout, SubHeader, Heading } from './styled';
import UserCard from './UserCard';
import {
  createCharge,
  tipPayment,
  fetchSourceList,
  modifySourceList,
} from '../../store/shared/actions/processPayments';
import { updateCustomerId } from '../../store/shared/actions/commonActions';
import fetchEphemeralKey from '../../services/generateEmphemeralKey';

const Payment = props => {
  const [isNewCard, cardSelection] = useState(false);

  const getEphemeralKey = () => {
    props.loaderAction(true);
    fetchEphemeralKey()
      .then(resp => {
        if (resp.success) {
          const customerId =
            resp.data.ephemeralKey.associated_objects &&
            resp.data.ephemeralKey.associated_objects[0]
              ? resp.data.ephemeralKey.associated_objects[0].id
              : null;
          props.updateCustomerId(customerId);
          if (props.sourceList && Object.keys(props.sourceList).length === 0)
            props.fetchSourceList();
          else {
            props.loaderAction(false);
          }
        }
        props.loaderAction(false);
      })
      .catch(() => {
        props.loaderAction(false);
      });
  };

  useEffect(() => {
    getEphemeralKey();
  }, []);

  const contentSwitchCallback = value => {
    cardSelection(value);
  };

  const backArrowClick = () => {
    if (Object.keys(props.sourceList).length === 0) {
      props.backArrowHandler();
    } else if (isNewCard) {
      cardSelection(false);
    } else if (!isNewCard && Object.keys(props.sourceList).length > 0) {
      props.backArrowHandler();
    }
  };

  const paymentSuccess = () => {
    props.paymentSuccessCallBack();
  };

  const handleBooking = source => {
    if (props.tipRequestId) {
      props.tipPayment(
        props.tipRequestId,
        props.celebDetails.rate,
        source.source.id,
        paymentSuccess,
      );
    } else {
      props.createCharge(
        props.request.id,
        props.celebDetails.rate,
        source.source.id,
        paymentSuccess,
      );
    }
  };

  return (
    <React.Fragment>
      <SubHeader>
        <FlexCenter>
          <BackArrow onClick={backArrowClick} />
          <Heading>Payment Details</Heading>
          <CloseButton onClick={props.closeHandler} />
        </FlexCenter>
      </SubHeader>
      <Scrollbars
        className="customScroll"
        renderView={prop => <div {...prop} className="scrollRenderView" />}
      >
        {Object.keys(props.celebDetails).length > 0 && (
          <Layout>
            {Object.keys(props.celebDetails).length > 0 &&
              Object.keys(props.userDetails).length > 0 && (
                <UserCard
                  {...props}
                  CardList={props.sourceList}
                  contentSwitchCallback={contentSwitchCallback}
                  isNewCard={isNewCard}
                  handleBooking={handleBooking}
                  paymentSuccessCallBack={props.paymentSuccessCallBack}
                  celebDetails={props.celebDetails}
                  userDetails={props.userDetails}
                  loaderAction={props.loaderAction}
                  modifySourceList={props.modifySourceList}
                  updateCustomerId={props.updateCustomerId}
                  type={props.type}
                />
              )}
          </Layout>
        )}
      </Scrollbars>
    </React.Fragment>
  );
};

Payment.propTypes = {
  backArrowHandler: PropTypes.func.isRequired,
  paymentSuccessCallBack: PropTypes.func.isRequired,
  request: PropTypes.object,
  closeHandler: PropTypes.func.isRequired,
  sourceList: PropTypes.object.isRequired,
  createCharge: PropTypes.func.isRequired,
  fetchSourceList: PropTypes.func.isRequired,
  fetchCelebDetails: PropTypes.func.isRequired,
  modifySourceList: PropTypes.func.isRequired,
  loaderAction: PropTypes.func.isRequired,
  updateCustomerId: PropTypes.func.isRequired,
  tipPayment: PropTypes.func.isRequired,
  celebDetails: PropTypes.object,
  userDetails: PropTypes.object,
  type: PropTypes.string.isRequired,
  tipRequestId: PropTypes.string,
};
Payment.defaultProps = {
  celebDetails: {},
  userDetails: {},
  request: PropTypes.object,
  tipRequestId: '',
};

const mapStateToProps = state => ({
  request: state.paymentDetails.requestDetails,
  sourceList: state.paymentDetails.sourceList,
});

function mapDispatchToProps(dispatch) {
  return {
    createCharge: (starsonaId, amount, tokenId, callBack) => {
      dispatch(createCharge(starsonaId, amount, tokenId, callBack));
    },
    tipPayment: (starsonaId, amount, tokenId, callBack) => {
      dispatch(tipPayment(starsonaId, amount, tokenId, callBack));
    },
    fetchSourceList: () => {
      dispatch(fetchSourceList());
    },
    modifySourceList: (source, customer, action, callBack) => {
      dispatch(modifySourceList(source, customer, action, callBack));
    },
    updateCustomerId: value => {
      dispatch(updateCustomerId(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payment);
