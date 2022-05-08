import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { TextInput } from 'components/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { Scrollbars } from 'react-custom-scrollbars';
import { Layout } from './styled';

const renderSuggestion = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  props,
}) => {
  const isHighlighted = highlightedIndex === index;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion[props.valueKey]}
      selected={isHighlighted}
      component="div"
    >
      {suggestion[props.labelKey]}
    </MenuItem>
  );
};

renderSuggestion.propTypes = {
  suggestion: PropTypes.object,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  highlightedIndex: PropTypes.number,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  props: PropTypes.object,
};
renderSuggestion.defaultProps = {
  suggestion: {},
  index: 0,
  itemProps: {},
  highlightedIndex: 0,
  valueKey: '',
  labelKey: '',
  props: {},
};

const AutoComplete = props => {
  const [inputVal, setInputValue] = useState('');
  useEffect(() => {
    if (props.value && props.value[props.labelKey]) {
      setInputValue(props.value[props.labelKey]);
    } else {
      setInputValue(props.value);
    }
  }, [props.value]);
  const handleInputChange = event => {
    setInputValue(event.target.value);
    props.onChange(event.target.value, props.type);
  };

  const renderInput = inputProps => {
    const { InputProps } = inputProps;
    return (
      <TextInput
        onChange={InputProps.onChange}
        value={inputVal}
        label={props.placeholder}
        InputProps={{
          ...InputProps,
          classes: { input: 'input-field' },
        }}
        InputLabelProps={{ classes: { root: 'float-label' } }}
      />
    );
  };

  const getSuggestions = value => {
    const inputValue = deburr(value.trim()).toLowerCase();
    setInputValue(inputValue);
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : props.list.filter(suggestion => {
          const keep = suggestion[props.labelKey]
            .toLowerCase()
            .includes(inputValue);
          return keep;
        });
  };

  const handleOptionChange = item => {
    setInputValue(item);
    props.onChange(
      props.list.find(
        x => x[props.labelKey].toLowerCase() === item.toLowerCase(),
      ),
      props.type,
    );
  };

  return (
    <Downshift
      id="downshift-simple"
      onChange={handleOptionChange}
      inputValue={inputVal}
    >
      {({
        getInputProps,
        getItemProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
      }) => (
        <div style={{ height: '100%' }}>
          {renderInput({
            InputProps: getInputProps({
              onChange: handleInputChange,
            }),
          })}
          <Layout>
            {isOpen && getSuggestions(inputValue).length > 0 ? (
              <Paper className="paper">
                <Scrollbars className="scrollbar">
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({
                        item: suggestion[props.labelKey],
                      }),
                      highlightedIndex,
                      selectedItem,
                      props,
                    }),
                  )}
                </Scrollbars>
              </Paper>
            ) : null}
          </Layout>
        </div>
      )}
    </Downshift>
  );
};

AutoComplete.propTypes = {
  labelKey: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  list: PropTypes.array,
};

AutoComplete.defaultProps = {
  labelKey: '',
  value: '',
  type: '',
  list: [],
};
export default AutoComplete;
