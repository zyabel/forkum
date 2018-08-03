import React, { Component } from 'react';
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
} from 'react-bootstrap';

class FormField extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

    this.state = {
      value: '',
      type: '',
    };
  }

  getValidationState() {
    const length = this.state.value.length;

    switch (this.state.type) {
      case 'textarea':
        if (length > 10) {
          return 'success';
        } else {
          return 'error';
        }
      case 'text':
        let text = /^[A-Za-z0-9_]+$/;
        if (text.test(this.state.value)) {
          return 'success';
        } else {
          return 'error';
        }
      case 'tel':
        let tel = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
        if (tel.test(this.state.value)) {
          return 'success';
        } else {
          return 'error';
        }
      case 'email':
        let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.test(this.state.value)) {
          return 'success';
        } else {
          return 'error';
        }
      default:
        return null;
    }
  }

  handleChange(e) {
    this.setState({ type: e.target.type, value: e.target.value });
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
        validationState={this.getValidationState()}
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
        {this.getValidationState() === 'error' ? (
          <HelpBlock>{help}</HelpBlock>
        ) : null}
      </FormGroup>
    );
  }
}

export default FormField;
