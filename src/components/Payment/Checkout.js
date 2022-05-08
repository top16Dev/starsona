import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements';
import {
  CardElement,
  CardIcon,
  Error,
  Wrapper,
  CardElementSmall,
  FlexBox,
} from './Checkout.styles';
import { FlexCenter } from '../../styles/CommonStyled';
import Button from '../PrimaryButton';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumberError: '',
      cardExpiryError: '',
      cvvError: '',
      cardTypeImage: null,
      cardNumber: true,
      cardExpiry: true,
      cardCCV: true,
      formValid: true,
    };
    this.styles = {
      base: {
        fontSize: '18px',
        color: 'rgb(97, 81, 149)',
        textAlign: 'center',
        fontFamily: 'Gilroy',
        '::placeholder': {
          color: '#b7b7b7',
        },
      },
      invalid: {
        color: 'rgb(255, 108, 88)',
      },
    };
  }

  setErrorMsg = (event, element, errorElm) => {
    let { cardTypeImage } = this.state;
    if (event.elementType === 'cardNumber') {
      cardTypeImage =
        event.brand && event.brand !== 'unknown'
          ? `assets/images/card-icons/${event.brand}.png`
          : null;
    }
    const errorMsg = event.error ? event.error.message : '';
    this.setState(
      { [element]: errorMsg, cardTypeImage, [errorElm]: false },
      this.checkFormValid,
    );
  };


  returnErrorMsg = element => {
    if (this.state[element] !== '') {
      return <Error>{this.state[element]}</Error>;
    }
    return null;
  };

  sourceUpdated = source => () => {
    this.props.handleBooking(source);
  };

  addCardToList = (source, customerId) => {
    this.props.modifySourceList(
      source.source.id,
      customerId,
      true,
      this.sourceUpdated(source),
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.stripe) {
      this.props.loaderAction(true);
      this.props.stripe
        .createSource({
          type: 'card',
        })
        .then(res => {
          this.addCardToList(res, this.props.customerId);
        })
        .catch(() => {
          this.props.loaderAction(false);
        });
    }
  };

  checkFormValid = () => {
    if (
      this.state.cardNumberError === '' &&
      this.state.cardExpiryError === '' &&
      this.state.cvvError === '' &&
      !this.state.cardCCV &&
      !this.state.cardExpiry &&
      !this.state.cardNumber
    ) {
      this.setState({ formValid: false });
    } else {
      this.setState({ formValid: true });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement>
          <Wrapper>
            <CardIcon cardImage={this.state.cardTypeImage} />
            <CardNumberElement
              onChange={event =>
                this.setErrorMsg(event, 'cardNumberError', 'cardNumber')
              }
              style={this.styles}
              placeholder="1234 1234 1234 1234"
            />
          </Wrapper>
          {this.returnErrorMsg('cardNumberError')}
        </CardElement>

        <FlexBox>
          <CardElementSmall>
            <CardExpiryElement
              onChange={event =>
                this.setErrorMsg(event, 'cardExpiryError', 'cardExpiry')
              }
              style={this.styles}
              placeholder="MM/YY"
            />
            {this.returnErrorMsg('cardExpiryError')}
          </CardElementSmall>
          <CardElementSmall>
            <CardCVCElement
              onChange={event => this.setErrorMsg(event, 'cvvError', 'cardCCV')}
              style={this.styles}
              placeholder="CCV Code"
            />
            {this.returnErrorMsg('cvvError')}
          </CardElementSmall>
        </FlexBox>
        <FlexCenter>
          <Button
            className="button payment-btn"
            disabled={this.state.formValid}
            isDisabled={this.state.formValid}
          >
            Pay ${this.props.rate}
          </Button>
        </FlexCenter>
      </form>
    );
  }
}

Checkout.propTypes = {
  updateCustomerId: PropTypes.func.isRequired,
  handleBooking: PropTypes.func.isRequired,
  loaderAction: PropTypes.func.isRequired,
  modifySourceList: PropTypes.func.isRequired,
  createSource: PropTypes.func,
  customerId: PropTypes.string,
  stripe: PropTypes.object.isRequired,
  rate: PropTypes.string.isRequired,
};
Checkout.defaultProps = {
  customerId: null,
  createSource: () => {},
};

export default injectStripe(
  connect(
    state => ({
      customerId: state.commonReducer.customerId,
    }),
    null,
  )(Checkout),
);
