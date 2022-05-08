import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { TextInput } from 'components/TextField';
import { FlexCenter } from 'styles/CommonStyled';
import Button from 'components/PrimaryButton';
import Tooltip from 'components/ToolTip';
import { FormContainer, InputLabel } from './styled';
import { Container, Wrapper } from '../styled';

const AccountInfo = props => {
  const [formData, updateFormData] = useState({
    firstName: props.userDetails.first_name,
    lastName: props.userDetails.last_name,
    email: props.userDetails.email,
  });

  const [errorObject, updateErrorObj] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    formValid: false,
  });

  const validateEmail = email => {
    const regX = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (regX.test(email)) {
      return false;
    }
    return true;
  };

  const validateFields = (state, event, errorState) => {
    let isValid = false;
    const { value } = event.target;
    if (state === 'email') {
      isValid = validateEmail(value);
    } else {
      isValid = isEmpty(value);
    }
    updateErrorObj({
      ...errorObject,
      [errorState]: isValid,
    });
  };

  const inputChange = ({ state }) => event => {
    updateFormData({
      ...formData,
      [state]: event.target.value,
    });
  };

  const handleBlur = ({ state, errorState }) => event => {
    validateFields(state, event, errorState);
  };

  const validateForm = () => {
    const formValid = [
      !isEmpty(formData.firstName),
      !isEmpty(formData.lastName),
      !validateEmail(formData.email),
    ].every(condition => condition);

    updateErrorObj({ ...errorObject, formValid });
  };

  const saveChanges = () => {
    props.handleAccountSave({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
    });
  };

  const tooltipWrapper = (text, isTooltip, fun) => {
    if (isTooltip) {
      return <Tooltip title={text}>{fun()}</Tooltip>;
    }
    return fun();
  };

  useEffect(() => {
    validateForm();
  }, [errorObject, formData]);

  const getTextInput = ({
    placeholder,
    state,
    value,
    error,
    errorState,
    nativeProps,
  }) => {
    return (
      <section className="inputWrapper">
        <TextInput
          error={error}
          placeholder={placeholder}
          onChange={inputChange({ state, errorState })}
          onBlur={handleBlur({ state, errorState })}
          value={value}
          InputProps={{
            classes: { error: 'error-field', input: 'input-field' },
          }}
          InputLabelProps={{ classes: { root: 'float-label' } }}
          nativeProps={nativeProps}
        />
      </section>
    );
  };

  const getTooltipInput = () => {
    return getTextInput({
      placeholder: props.labels.emailLbl,
      state: 'email',
      value: formData.email,
      error: errorObject.emailErr,
      errorState: 'emailErr',
      nativeProps: { readOnly: true },
    });
  };

  return (
    <Container className="popstyle-wrap">
      <Wrapper className="popstyle-inner">
        <h2
          className="sub-head"
          data-web={props.webHead}
          data-mob={props.mobHead}
        >
          {''}
        </h2>
        <FormContainer>
          {errorObject.firstNameErr || errorObject.lastNameErr ? (
            <InputLabel
              error={errorObject.firstNameErr || errorObject.lastNameErr}
            >
              Enter valid full name
            </InputLabel>
          ) : (
            <InputLabel className="labelHead">{props.labels.nameHead}</InputLabel>
          )}
          <section className="row-wrap">
            {getTextInput({
              placeholder: props.labels.firstNameLbl,
              state: 'firstName',
              value: formData.firstName,
              error: errorObject.firstNameErr,
              errorState: 'firstNameErr',
              nativeProps: {},
            })}
            {getTextInput({
              placeholder: props.labels.lastNameLbl,
              state: 'lastName',
              value: formData.lastName,
              error: errorObject.lastNameErr,
              errorState: 'lastNameErr',
              nativeProps: {},
            })}
          </section>
          <InputLabel error={errorObject.emailErr}>
            {props.labels.emailHead}
          </InputLabel>
          {tooltipWrapper(
            props.tooltip.emailTooltipText,
            props.tooltip.emailTooltip,
            getTooltipInput,
          )}
        </FormContainer>
        <FlexCenter>
          <Button
            className="button"
            disabled={!errorObject.formValid}
            isDisabled={!errorObject.formValid}
            onClick={saveChanges}
          >
            {props.labels.buttonLbl}
          </Button>
        </FlexCenter>
      </Wrapper>
    </Container>
  );
};

AccountInfo.propTypes = {
  userDetails: PropTypes.object.isRequired,
  handleAccountSave: PropTypes.func.isRequired,
  webHead: PropTypes.string,
  mobHead: PropTypes.string,
  labels: PropTypes.object.isRequired,
  tooltip: PropTypes.object,
};

AccountInfo.defaultProps = {
  webHead: '',
  mobHead: '',
  tooltip: {},
};

export default AccountInfo;
