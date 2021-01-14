import styled from 'styled-components'
import {TextField} from './textfieldgroup'

const StyledTextField : typeof TextField = styled(TextField)`
  appearance: none;
  padding: .6em .9em;
  --box-shadow-color: #D7ECFF;
  border-radius: ${ (props) => props.theme.inputBorderRadius};
  border: 1px solid ${ (props) => props.theme.inactiveGrey};
  box-shadow: 0px 3px 3px -2px rgba(157, 157, 157, 0.25);
  color: ${ (props) => props.theme.defaultTextColor};
  font-size: .95em;
  background: #FFFFFF;
  transition: all .1s ease-in-out;
  font-family: var(--font-family-regular);
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${ (props) => props.theme.textFieldBorder};
    box-shadow: 0 0 0 2px var(--box-shadow-color);
  }
  &.text-field--fill {
    width: 100%;
  }
  &.text-field--error {
    border-color: ${ (props) => props.theme.danger};
    --box-shadow-color: ${ (props) => props.theme.dangerTransluscent};
    &:hover {
      box-shadow: 0 0 0 2px var(--box-shadow-color);
    }
  }
  &[type=password] {
    letter-spacing: .4em;
  }
  & + div.error-message {
    background: ${ (props) => props.theme.dangerTransluscent};
    border-radius: ${ (props) => props.theme.inputBorderRadius};
    padding: .6em .8em;
    margin: .6em 0 0 0;
    width: 100%;
    .error-message__text {
      font-family: var(--font-family-regular);
      margin: 0;
      font-size: 14px;
      color: ${ (props) => props.theme.danger};
    }
  }
  & ~ button.text-field__icon-btn {
    position: absolute;
    background: #FFFFFF;
    right: 1em;
    bottom: .65em;
    outline: none;
    font-size: 17px;
    &:focus {
      outline: none;
    }
    .uc-icon {
      transition: opacity .1s ease-out;
      opacity: .7;
    }
    &:hover {
      .uc-icon {
        opacity: 1;
      }
    }
  }
  ::placeholder {
    letter-spacing: normal;
  }
  &:disabled, &:disabled ~ button.text-field__icon-btn {
    opacity: .5;
  }
`

const StyledTextFieldLabel : typeof TextField.Label = styled(TextField.Label)`
  color: ${ (props) => props.theme.defaultTextColor};
  font-size: .9rem;
`

const StyledTextFielErrorMessage : typeof TextField.ErrorMessage = styled(TextField.ErrorMessage)`
  color: ${ (props) => props.theme.danger};
  font-size: .9rem;
`

StyledTextField.Label = StyledTextFieldLabel;
StyledTextField.ErrorMessage = StyledTextFielErrorMessage;

export default StyledTextField;