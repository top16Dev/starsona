import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { Card, TickText } from 'styles/CommonStyled';
import PrimaryButton from '../../../PrimaryButton';
import { requestTypes } from '../../../../constants/requestTypes';
import { getTime } from '../../../../utils/dataToStringFormatter';
import { MediumText, HeadingBold, LeftContent } from '../../styled';
import GeneralStyled from './styled';

const GeneralList = (props) => {

  const renderDescription = () => {
    if (requestTypes[props.data.request_type] === 'Q&A') {
      return (
        <MediumText>
          <HeadingBold>Question</HeadingBold> requested from <HeadingBold>{props.data.fan_first_name}</HeadingBold>
        </MediumText>
      )
    } else if (requestTypes[props.data.request_type] === 'Shout-out') {
      return (
        <MediumText>
          <HeadingBold>{props.data.occasion}</HeadingBold> shoutout { props.isOpen && <br /> } for <HeadingBold>{props.data.fan_first_name}</HeadingBold>
        </MediumText>
      )
    }
    return (
      <MediumText>
          <HeadingBold>{props.data.occasion}</HeadingBold> announcement { props.isOpen && <br /> } for <HeadingBold>{props.data.fan_first_name}</HeadingBold>
      </MediumText>
    )
  }

  const renderTime = (time) => {
    const actualTimeObject = moment();
    const currentTimeObject = moment(time).add(parseInt(props.expiration, 0), 'days');
    const timeDifference = currentTimeObject.diff(actualTimeObject, 'hours');
    if (timeDifference > 48) { // does not expires in 48 hours
      return (
        <span className='time'>
          <span className='time-head'>Requested</span> { getTime(time) }
        </span>
      )
    }
    return (
        <span className='time expiring'>
          Expiring soon
        </span>
    );
  };

  const onCardClick = () => {
    if (document.body.getBoundingClientRect().width < 832 || window.innerWidth < 832) {
      props.onPrimaryClick();
    }
  }

  return (
    <Card onClick={onCardClick}>
      <GeneralStyled>
        <GeneralStyled.Section className="inner-top">
          <LeftContent className='left-content'>
            <TickText className={!props.isOpen && 'close-icon'}>
              {
                props.isOpen ?
                  'To Do'
                :
                  <React.Fragment>
                    <FontAwesomeIcon icon={faTimes} />
                    Cancelled
                  </React.Fragment>
                }
            </TickText>
          </LeftContent>
          {
            !props.isOpen && <span className="cancel-heading">Cancelled</span>
          }
          <GeneralStyled.Description>
            { renderDescription() }
          </GeneralStyled.Description>
        </GeneralStyled.Section>
        <GeneralStyled.Section>
          <GeneralStyled.Details isOpen={props.isOpen}>
            {
              props.isOpen ?
                <React.Fragment>
                  {renderTime(props.data.created_date)} | <span className='action' onClick={props.onPrimaryClick} />
                </React.Fragment>
              :
              <span className='time comment'>
                { props.data.comment }
              </span>
            }
          </GeneralStyled.Details>
          {
            props.isOpen ?
              <PrimaryButton className="action-button" onClick={props.onPrimaryClick}>Respond Now</PrimaryButton>
            : <span className='view-action' onClick={props.onPrimaryClick}>View Details</span>
          }
        </GeneralStyled.Section>
      </GeneralStyled>
    </Card>
  )
}

GeneralList.defaultProps = {
  isOpen: true,
}

GeneralList.propTypes = {
  data: PropTypes.object.isRequired,
  onPrimaryClick: PropTypes.func.isRequired,
  expiration: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
}

export { GeneralList };
