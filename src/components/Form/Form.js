import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
} from 'react-bootstrap';

import getValidationState from '../../utils/getValidationState';

class FormField extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      type: '',
    };
  }

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    componentClass: PropTypes.string,
    help: PropTypes.string,
    getData: PropTypes.func,
  };

  handleChange(e) {
    this.setState({
      type: e.target.type,
      value: e.target.value,
    });
  }

  render() {
    const {
      id,
      label,
      type,
      placeholder,
      componentClass,
      help,
    } = this.props.data;
    const { getData } = this.props;

    return (
      <FormGroup
        controlId={id}
        validationState={getValidationState(this.state.type, this.state.value)}
        label={label}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type={type}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
          componentClass={componentClass || 'input'}
          inputRef={getData}
        />
        <FormControl.Feedback />
        {getValidationState(this.state.type, this.state.value) === 'error' ? (
          <HelpBlock>{help}</HelpBlock>
        ) : null}
      </FormGroup>
    );
  }
}

export default FormField;
