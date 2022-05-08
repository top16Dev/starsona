import React, { useState } from 'react';
import Select from 'react-select';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { NestedSelectStyled } from './styled';

const MultiValueRemove = prop => {
  return <span {...prop.innerProps}><FontAwesomeIcon icon={faTimes} /></span>
}

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
};

const Control = prop => {
  const textFieldProps = { ...prop.selectProps.textFieldProps };
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        classes: { root: 'select-input' },
        inputProps: {
          style: {
            display: 'flex',
            padding: 0,
          },
          className: 'multiSelectInput',
          inputRef: prop.innerRef,
          children: prop.children,
          ...prop.innerProps,
        },
      }}
      {...textFieldProps}
    />
  );
};

const handleGroupHeadClick = (id) => (event) => {
  document.getElementById(id).click();
  event.preventDefault();
}

const GroupHeading = (prop) => {
  return (
    <React.Fragment>
      <input id={prop.id.split('-heading')[0]} type='checkbox' defaultChecked />
      <label className='select__group-heading' htmlFor={prop.id.split('-heading')[0]} onClick={handleGroupHeadClick(prop.id.split('-heading')[0])}>{prop.children}</label>
    </React.Fragment>
  )
}

const Option = prop => {
  return (
    <React.Fragment>
      <MenuItem
        buttonRef={prop.innerRef}
        selected={prop.isFocused}
        component="div"
        classes={{root: 'select-option-item'}}
        {...prop.innerProps}
      >
        {prop.children}
      </MenuItem>
    </React.Fragment>
  );
};

const NestedSelect = props => {
  const [inputValue, updateInput] = useState('');

  const updateInputValue = event => {
    if (event) {
      updateInput(event.target.value);
    } else {
      updateInput('');
    }
  };

  const renderNoOptions = () => {
    return props.noOptionsMessage;
  }

  const components = {
    Control,
    MultiValueRemove,
    Option,
    GroupHeading,
  };
  return (
    <NestedSelectStyled>
      <Select
        value={props.value}
        isMulti
        name="selectedProfessions"
        menuIsOpen
        isSearchable={false}
        options={props.options}
        className="basic-multi-select"
        classNamePrefix="select"
        noOptionsMessage={renderNoOptions}
        placeholder={props.placeholder}
        onMenuClose={updateInputValue}
        components={components}
        onChange={props.onChange}
        textFieldProps={{
          label: props.label,
          onChange: updateInputValue,
          InputLabelProps: props.value && props.value.length ? { shrink: true, classes: { shrink: 'input-label-shrink', root: 'input-label' } } : { classes: { shrink: 'input-label-shrink', root: 'input-label' }},
        }}
      />
    </NestedSelectStyled>
  );
};

export default NestedSelect;
