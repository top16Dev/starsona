import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { DialogStyled } from './Modal.styles';

class Modal extends Component {

  componentWillUnmount() {

  }

  onModalMount = () => {

  }

  render() {
    return (
      <DialogStyled
        disableBackdropClick
        open={this.props.open}
        onClose={this.props.onClose}
        onRendered={this.onModalMount}
        classes={{ paper: 'body', paperScrollPaper: 'paperScroll' }}
      >
        {this.props.children}
      </DialogStyled>
    );
  }
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
