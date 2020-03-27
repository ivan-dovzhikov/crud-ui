import React, { Component } from 'react';

class AddRecordForm extends Component {
  renderTextInput = name => {
    return (
      <label
        className={'add-record__label'}
        key={name}
      >
        {name}:
        <input
          type={'text'}
          name={name}
          className={'add-record__input'}
          onChange={this.props.handleInputChange}
        />
      </label>
    )
  };

  render() {
    return (
      <form>
        {this.props.labels
          .slice(1) // weeds id off
          .map(this.renderTextInput)}

        <div className={'add-record__btns'}>
          <input
            type={'submit'}
            className={'add-record__submit btn'}
            onClick={this.props.handleSubmit}
            value={'Add'}
          />

          <button
            type={'button'}
            className={'add-record__close btn'}
            onClick={this.props.closeForm}
          >Close</button>
        </div>
      </form>
    )
  };
}

export default AddRecordForm;