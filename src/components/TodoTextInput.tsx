import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
export interface TodoTextInputProps{
  onSave(text:string):void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}
interface TodoTextInputState{
  text: string;
}

export default class TodoTextInput extends PureComponent<TodoTextInputProps,TodoTextInputState> {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value })
  }

  handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
