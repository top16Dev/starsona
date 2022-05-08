import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/pro-light-svg-icons';
import MoreStyled from './styled';

const MoreActions = (props) => {
  const anchorEl = useRef(null);
  const [showList, toggleList] = useState(false);

  const openList = (event) => {
    event.stopPropagation();
    toggleList(!showList);
  };

  const handleClose = () => {
    toggleList(false);
  };

  const onSelectOption = optionItem => () => {
    props.onSelectOption(optionItem)
    handleClose();
  }

  return (
    <MoreStyled className={props.classes.root}>
      <MoreStyled.EllipsIcon className={props.classes.icon} showList={showList} innerRef={anchorEl} onClick={openList}>
        <FontAwesomeIcon icon={faEllipsisH} />
        <span className='quick-arrow' />
      </MoreStyled.EllipsIcon>
      <MoreStyled.Popover
          open={showList}
          anchorEl={anchorEl && anchorEl.current}
          onClose={handleClose}
          classes={{ paper: 'paper-root' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {
            props.options.map((optionItem, index) => (
              <MoreStyled.Option key={index} onClick={onSelectOption(optionItem)}>{optionItem.label}</MoreStyled.Option>
            ))
          }
        </MoreStyled.Popover>
    </MoreStyled>
  )
}

MoreActions.defaultProps = {
  onSelectOption: () => {},
  classes: {},
}

MoreActions.propTypes = {
  onSelectOption: PropTypes.func,
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default MoreActions;
