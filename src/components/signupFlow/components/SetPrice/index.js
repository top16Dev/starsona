import React from 'react';
import PropTypes from 'prop-types';

import { iosPriceFinder, numberToCommaFormatter, commaToNumberFormatter } from '../../../../utils/dataformatter'
import { TextInput } from '../../../TextField'
import PrimaryButton from '../../../PrimaryButton';
import SetPriceWrapper from './styled';
import { ReferralCode } from '../ReferralCode';
import {convertedApplePrice} from '../../constants';
import { validatePromo } from '../../../../services';
import { BackArrow, CloseButton} from '../../../../styles/CommonStyled';

export default class SetPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReferred: props.switched ? props.switched : false,
      confirmPrice: false,
      referralCode: { value: props.signupDetails.referral, isValid: props.signupDetails.referral ? true : false, message: '' },
      price: { value: props.signupDetails.price, isValid: false, message: '' },
    };
  }

  onSubmit = () => {
    const priceValue = commaToNumberFormatter(this.state.price.value);
    const priceDetails = {
      rate: priceValue,
      in_app_price: iosPriceFinder(priceValue, this.props.inAppPriceList) ? iosPriceFinder(priceValue, this.props.inAppPriceList) : null,
      referral_code: this.state.referralCode.value,
    }
    this.props.setSignupFlow({
      price: this.state.price.value,
      referral: this.state.referralCode.value,
    })
    if (this.checkPriceRequired()) {
      if (parseInt(priceValue) < 500 ) {
        this.props.primaryButtonClick(priceDetails)
      } else if(this.state.confirmPrice) {
        this.props.primaryButtonClick(priceDetails)
      } else {
        this.setState({
          confirmPrice: true
        })
      }
    }
  }

  onSubmitReferralCode = async () => {
    if (await this.checkReferralCodeRequired()) {
      this.setState({
        isReferred: false
      })
      this.props.disableClose(false);
    }
  }

  onRefer = () => {
    this.setState({
      isReferred: true
    });
    this.props.scrollRef.scrollTop = 0;
    this.props.disableClose(true);
  }
  
  checkReferralCodeRequired = async () => {
    const priceEmpty = !this.state.referralCode.value
    if (priceEmpty) {
      const referralCodeMsg = "Referral code can't be blank";
      this.setState({
        referralCode: {
          ...this.state.referralCode,
          message: referralCodeMsg
        }
      });
      return false;
    }
    
    try {
      const promoResp = await validatePromo(this.state.referralCode.value);
      this.setState({ loading: false });
      if (promoResp.success) {
        this.setState({
          referralCode: {
            ...this.state.referralCode,
            message: '',
            isValid: true
          },
        });
      }
      return promoResp.success;
    } catch (exception) {
        const referralCodeMsg = "Please enter a valid referral code";
        this.setState({
          referralCode: {
            ...this.state.referralCode,
            message: referralCodeMsg,
            isValid: false
          }
        });
        return false;
    }
  };

  checkPriceRequired = () => {
    const pattern = /(?=.*\d)^\$?(([1-9]\d{0,4}(,\d{3})*)|0)?(\.\d{1,2})?$/;
    const priceEmpty = !this.state.price.value
    if (priceEmpty) {
      const priceMsg = "Price can't be blank";
      this.setState({
        price: {
          ...this.state.price,
          message: priceMsg
        }
      });
      return false;
    }
    if (!pattern.test(commaToNumberFormatter(this.state.price.value))) {
      this.setState({
        price: {
          ...this.state.price,
          message: 'Price must be a number'
        }
      });
      return false;
    }
    this.setState({
      price: {
        ...this.state.price,
        message: '',
        isValid: true
      },
    });
    return true;
  };

  saveFormEntries = (event, type) => {
    const pattern = /(?=.*\d)^\$?(([1-9]\d{0,4}(,\d{3})*)|0)?(\.\d{1,2})?$/;
    const dollarpattern = /^\$.*$/;
    const value = dollarpattern.test(event.target.value) ? event.target.value.substr(1) : event.target.value;
    
    if(type==='price' && value !== '') {
      this.setState({
        [type]: {
          ...this.state[type],
          value: pattern.test(commaToNumberFormatter(value)) ? numberToCommaFormatter(commaToNumberFormatter(value)) : this.state.price.value,
        },
      });
    } else {
    this.setState({
      [type]: {
        ...this.state[type],
        value: type === 'price' ? value : event.target.value
      },
    });
  }
  };
  backArrowClick = () => {
    if (this.state.isReferred) {
      this.setState({isReferred: false});
      this.props.disableClose(false);
    } else {
      this.props.onBack(false);
    }
  };

  closeSetPrice = () => {
    if (this.state.isReferred) {
      this.setState({isReferred: false});
      this.props.disableClose(false);
    } else {
      this.props.closeSignupFlow(this.state.isReferred)
    }
  }

  render() {
    const { props } = this;
    const { isReferred, confirmPrice } = this.state;
    return (
      <React.Fragment>
      <BackArrow className="leftArrow" onClick={this.backArrowClick} />
      <CloseButton className="close" onClick={this.closeSetPrice} />
      { isReferred ? <ReferralCode
      error={this.state.referralCode.message}
      value={this.state.referralCode.value}
      description={props.referralDescription}
      onChange={(event) => this.saveFormEntries(event, "referralCode")}
      onPrimaryButtonClick={this.onSubmitReferralCode}
    /> :
      <SetPriceWrapper>
        <SetPriceWrapper.ComponentWrapper>
        <SetPriceWrapper.Title>
              {props.action}
            </SetPriceWrapper.Title> 
          {/* {this.state.referralCode.value ?
            <SetPriceWrapper.Title>
              {props.action}
            </SetPriceWrapper.Title> : null
          } */}
          <SetPriceWrapper.Image className="image-wrap"
            imageUrl={props.image_url}>
          </SetPriceWrapper.Image>
          <SetPriceWrapper.HeaderText confirmation={confirmPrice}>
            {confirmPrice ? props.confirmationTitle : props.title}
          </SetPriceWrapper.HeaderText>
          <SetPriceWrapper.Description error={this.state.price.message}>
            {(this.state.price.message) ?
              this.state.price.message : confirmPrice ? props.confirmDescription : props.description}
          </SetPriceWrapper.Description>
          <SetPriceWrapper.WrapsInput>
            <TextInput
              error={!!this.state.price.message}
              placeholder={'Price'}
              type="text"
              name="price"
              value={`${this.state.price.value !== '' ? '$':''}${this.state.price.value}`}
              onChange={(event) => this.saveFormEntries(event, "price")}
            />
          </SetPriceWrapper.WrapsInput>
          {confirmPrice ? null :
            <SetPriceWrapper.Block>
              <SetPriceWrapper.Label>
              { this.state.price.value && this.state.price.value > 0 && this.state.price.value < 10000 ?
                (<React.Fragment>Converted Apple Price: <b>${iosPriceFinder(this.state.price.value, this.props.inAppPriceList)}</b>. &nbsp;</React.Fragment> )  : ''
              }
                {convertedApplePrice(commaToNumberFormatter(this.state.price.value), this.props.inAppPriceList)}
              </SetPriceWrapper.Label>
              <SetPriceWrapper.HighLight onClick={this.onRefer}>
                {this.state.referralCode.value && this.state.referralCode.isValid ?
                  `Referral Code: ${this.state.referralCode.value}` :
                  props.link}
              </SetPriceWrapper.HighLight>
            </SetPriceWrapper.Block>
          }
          <SetPriceWrapper.ButtonWrapper confirmation={confirmPrice} className="align-center">
            <PrimaryButton onClick={this.onSubmit}>
              {confirmPrice ? props.confirmPrimaryButton : props.primary_button}
            </PrimaryButton>
          </SetPriceWrapper.ButtonWrapper>
        </SetPriceWrapper.ComponentWrapper>
      </SetPriceWrapper>
        }
        </React.Fragment>
    );
  }
}

SetPrice.propTypes = {
  action: PropTypes.string,
  confirmDescription: PropTypes.string,
  confirmationTitle: PropTypes.string,
  confirmPrimaryButton: PropTypes.string,
  description: PropTypes.string,
  help_text: PropTypes.string,
  image_url: PropTypes.string,
  link: PropTypes.string,
  primary_button: PropTypes.string,
  primaryButtonClick: PropTypes.func,
  title: PropTypes.string,
  switched: PropTypes.bool,
};
SetPrice.defaultProps = {
  action: '',
  confirmDescription: '',
  confirmationTitle: '',
  confirmPrimaryButton: '',
  description: '',
  help_text: '',
  image_url: '',
  link: '',
  primary_button: '',
  primaryButtonClick: () => { },
  title: '',
  switched: false,
};
