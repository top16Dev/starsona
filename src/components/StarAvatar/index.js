import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import fitty from 'fitty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import PrimaryButton from '../PrimaryButton';
import ToolTip from '../ToolTip';
import { numberToDollarFormatter } from '../../utils/dataformatter';
import { toggleQuickView } from '../../store/shared/actions/toggleModals';
import { starProfessionsFormater, getStarName } from '../../utils/dataToStringFormatter';
import AvatarContainer from './styled';

const StarAvatar = ({ star, type, ...props }) => {

  const [profileImage, setProfileImage] = useState(null);
  let isMounted = true;

  const autoSize = {
    'featured': {
      name: {
        minSize: 30,
        maxSize: 42,
        multiLine: true,
      }
    },
    'secondary': {
      name: {
        minSize: 10,
        maxSize: 17,
      }
    }
  }

  const autoFitText = () => {
    fitty(`#${star.user_id}-${type}-name`, type ? autoSize[type].name : {
      minSize: 10,
      maxSize: 17,
    });
  }

  useEffect(() => {
    if ((star.avatar_photo && star.avatar_photo.thumbnail_url) || star.profileImage) {
      const profileImg = new Image();
      profileImg.onload = () => {
        if (isMounted) {
          setProfileImage(profileImg.src);
        }
      };
      profileImg.src = star.profileImage || (star.avatar_photo && star.avatar_photo.thumbnail_url);
    } else {
      setProfileImage('');
    }
  });

  useEffect(() => {
    autoFitText();
  }, [star.nick_name, star.first_name, star.last_name])

  useEffect(() => {
    return (() => {
      isMounted = false
    });
  });

  const toggleQuickViewModal = () => {
    if ((document.body.getBoundingClientRect().width >= 832 || window.innerWidth >= 832) && star.celebrity_user && star.celebrity_user.rate) {
      props.toggleQuickView(true, star.user_id);
    } else {
      props.history.push(`/${star.user_id}`)
    }
  }

  const onCloseClick = (starItem) => (event) => {
    event.stopPropagation();
    props.onCloseClick(starItem);
  }

  const onPrimaryBtnClick = (event) => {
    event.stopPropagation();
    props.onPrimaryBtnClick(star);
  }

  const getWrapperComponent = () => {
    if (type === 'featured') {
      return AvatarContainer.BigAvatar;
    } else if (type === 'secondary') {
      return AvatarContainer.MediumAvatar;
    }
    return AvatarContainer.Avatar;
  };

  const WrapperComponent = getWrapperComponent();

  return (
    <AvatarContainer className={type}>
      <WrapperComponent imageUrl={profileImage} onClick={toggleQuickViewModal}>
        <AvatarContainer.ControlWrapper className="play-button">
          <AvatarContainer.ControlButton>
            <FontAwesomeIcon icon={faPlay} />
          </AvatarContainer.ControlButton>
        </AvatarContainer.ControlWrapper>
        {
          props.favoriteView &&
            <ToolTip title='Remove this Star from your favorites list'>
              <FontAwesomeIcon className='close-btn' icon={faTimes} onClick={onCloseClick(star)} />
            </ToolTip>
        }
      </WrapperComponent>
      <AvatarContainer.Content className={type} to={`/${star.user_id}`}>
        <AvatarContainer.Category title={star.celebrity_profession && starProfessionsFormater(star.celebrity_profession)} className="profession">
          { star.celebrity_profession && starProfessionsFormater(star.celebrity_profession) }
        </AvatarContainer.Category>
        <AvatarContainer.StarDescription>
          <AvatarContainer.Name title={getStarName(star.nick_name, star.first_name, star.last_name)} className="name">
            <span id={`${star.user_id}-${type}-name`}>
              {
                getStarName(star.nick_name, star.first_name, star.last_name)
              }
            </span>
          </AvatarContainer.Name>
          {
            star.celebrity_user && star.celebrity_user.rate ?
              <AvatarContainer.Price>{numberToDollarFormatter(star.celebrity_user ? star.celebrity_user.rate : 0)}</AvatarContainer.Price>
            : null
          }
        </AvatarContainer.StarDescription>
      </AvatarContainer.Content>
      {
        props.favoriteView &&
          <span className='btn-wrapper'>
            <PrimaryButton className='action-btn' onClick={onPrimaryBtnClick}>Book</PrimaryButton>
          </span>
      }
    </AvatarContainer>
  );
};

StarAvatar.defaultProps = {
  type: '',
  star: {},
  onCloseClick: () => {},
  onPrimaryBtnClick: () => {},
  favoriteView: false,
};

StarAvatar.propTypes = {
  star: PropTypes.object,
  type: PropTypes.string,
  toggleQuickView: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  favoriteView: PropTypes.bool,
  onCloseClick: PropTypes.func,
  onPrimaryBtnClick: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  toggleQuickView: (state, modalData) => dispatch(toggleQuickView(state, modalData)),
});

export default withRouter(connect(null, mapDispatchToProps)(StarAvatar));
