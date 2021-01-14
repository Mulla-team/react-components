import styled from 'styled-components'
import {SelectField} from './selectfieldgroup'

const StyledSelectField : typeof SelectField = styled(SelectField)`
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
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  min-height: 39px;
  &:focus {
    outline: none;
    border-color: ${ (props) => props.theme.textFieldBorder};
    box-shadow: 0 0 0 3px var(--box-shadow-color);
  }
  &.text-field--fill {
    width: 100%;
  }
  &.text-field--error {
    border-color: ${ (props) => props.theme.danger};
    --box-shadow-color: ${ (props) => props.theme.dangerTransluscent};
    &:hover {
      box-shadow: 0 0 0 3px var(--box-shadow-color);
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
    top: 1.25em;
    outline: none;
    font-size: 18px;
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
  & ~ .menu-list {
    position: absolute;
    top: 65px;
    width: 100%;
    transform: translateY(-10px);
    box-shadow: 0px 5px 5px -1px rgba(157, 157, 157, 0.25);
    border-radius: 4px;
    overflow: hidden;
    background: #FFFFFF;
    z-index: 10;
    .menu-list__item {
      position: relative;
      padding: .9em 1em;
      border-bottom: 1px solid ${ (props) => props.theme.lightGrey};
      cursor: default;
      transition: background .1s ease-in-out;
      font-size: 16px;
      color: ${ (props) => props.theme.defaultTextColor};
      &.menu-list__item--selected:after {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        right: 1.5em;
        bottom: auto;
        display: inline-block;
        transform: rotate(45deg) translateY(-70%);
        height: 12px;
        width: 6px;
        border-bottom: 2px solid ${ (props) => props.theme.primary};
        border-right: 2px solid ${ (props) => props.theme.primary};
      }
      &:last-child {
        border-bottom: 1px solid #FFFFFF;
      }
      &:hover {
        background: ${ (props) => props.theme.lightGrey};
        &:last-child {
          border-bottom: 1px solid ${ (props) => props.theme.lightGrey};
        }
      }
    }
  }
`

const StyledSelectFieldLabel : typeof SelectField.Label = styled(SelectField.Label)`
  color: ${ (props) => props.theme.defaultTextColor};
  font-size: .9rem;
`

StyledSelectField.Label = StyledSelectFieldLabel;

export default StyledSelectField;