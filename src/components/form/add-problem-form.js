import React, { Component } from 'react';
import { Button, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import './form.css'

class AddProblemForm extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <FieldGroup
            className='form-control-field'
            type='text'
            label='Name'
            placeholder='Enter name'
            onChange={this.props.handleProblemNameChange}/>
          <FieldGroup
            className='form-control-field'
            id='form-control-description'
            componentClass='textarea'
            type='text'
            label='Description'
            placeholder='Enter description'
            onChange={this.props.handleProblemDescriptionChange}/>
          <FieldGroup
            className='form-control-field'
            type='text'
            label='Tip'
            placeholder='Enter tip'
            onChange={this.props.handleProblemTipChange}/>
          <FormGroup>
            <ControlLabel>Tags</ControlLabel>
            { this.props.tags.map((tag, index) => (
              <div class='input-group mb-3'>
                <input
                  id='tag-name'
                  type='text'
                  class='form-control'
                  placeholder={ `Tag #${index + 1} name` }
                  value={ tag }
                  onChange={this.props.handleTagChange(index)}
                >
                </input>
                <div class="input-group-append">
                  <Button
                    id='remove-tag-btn'
                    class='btn btn-outline-secondary'
                    onClick={ this.props.handleRemoveTag(index) }
                  >
                    -
                  </Button>
                </div>
              </div>
            )) }
            <div id='add-tag-btn-div'>
              <Button
                onClick={ this.props.handleAddTag }
                className='add-tag-btn'
              >
                +
              </Button>
            </div>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Tests</ControlLabel>
            { this.props.tests.map((test, index) => (
              <div class='input-group mb-3'>
                <textarea
                  id='test-name'
                  type='text'
                  class='form-control'
                  placeholder={ `Test #${index + 1} name` }
                  value={ test.name }
                  onChange={ this.props.handleTestNameChange(index) }
                >
                </textarea>
                <textarea
                  id='test-tip'
                  type='text'
                  class='form-control'
                  placeholder={ `Test #${index + 1} tip` }
                  value={ test.tip }
                  onChange={ this.props.handleTestTipChange(index) }
                >
                </textarea>
                <textarea
                  id='test-input'
                  type='text'
                  class='form-control'
                  placeholder={ `Test #${index + 1} input` }
                  value={ test.input }
                  onChange={ this.props.handleTestInputChange(index) }
                >
                </textarea>
                <textarea
                  id='test-output'
                  type='text'
                  class='form-control'
                  placeholder={ `Test #${index + 1} output` }
                  value={ test.output }
                  onChange={ this.props.handleTestOutputChange(index) }
                >
                </textarea>
                <div class="input-group-append">
                  <Button
                    id='remove-test-btn'
                    class='btn btn-outline-secondary'
                    onClick={ this.props.handleRemoveTest(index) }
                  >
                    -
                  </Button>
                </div>
              </div>
            ))}
            <div id='add-test-btn-div'>
              <Button
                onClick={ this.props.handleAddTest }
                className='add-test-btn'
              >
                +
              </Button>
            </div>
          </FormGroup>
        </form>
        <button type="submit" className='button-submit' onClick={ this.props.handleSubmit }>
          Submit
        </button>
      </div>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={ id }>
      <ControlLabel>{ label }</ControlLabel>
      <FormControl { ...props } />
      { help && <HelpBlock>{help}</HelpBlock> }
    </FormGroup>
  );
}

export default AddProblemForm;
