import React, { Component } from 'react'
import { 
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
} from 'react-bootstrap'

class FormField extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: ''
    }
  }

  getValidationState() {
    const length = this.state.value.length   

    switch (this.props.data.type) {
      case 'textarea':
          if (length > 100) return 'success'
          else if (length > 5) return 'warning'
          else if (length > 0) return 'error'
          return null
      case 'text':
        if (length > 2) return 'success'
        else if (length < 0) return 'warning'
        else if (length > 10) return 'error'
        return null
      case 'tel':
        if (length > 10) return 'success'
        else if (length > 16) return 'warning'
        else if (length > 0) return 'error'
        return null
      case 'email':
        if (length > 10) return 'success'
        else if (length > 5) return 'warning'
        else if (length > 0) return 'error'
        return null
      default:
        alert( 'Я таких значений не знаю' );
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }   

  render() {
    const { id, label, type, placeholder, componentClass, help } = this.props.data
    const { getData } = this.props

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
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FormField
