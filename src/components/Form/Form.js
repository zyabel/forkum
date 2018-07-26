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
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { data } = this.props
    console.log(this.state.value)
    return (
      <FormGroup
        controlId={data.id}
        validationState={this.getValidationState()}
        label={data.label}            
      >
        <ControlLabel>{data.label}</ControlLabel>
        <FormControl
          type={data.type}
          value={this.state.value}
          placeholder={data.placeholder}
          onChange={this.handleChange}
          componentClass={data.componentClass || 'input'}
        />
        <FormControl.Feedback />
        {data.help && <HelpBlock>{data.help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FormField
