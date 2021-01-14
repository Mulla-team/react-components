import {Button} from './button'
import styled from 'styled-components'

const StyledButton : typeof Button = styled(Button)`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: relative;
  outline: none;
  border-radius: ${ (props) => props.theme.borderRadius};
  border: none;
  padding: .8em 2em .85em 2em;
  font-size: 15px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
  font-family: var(--font-family-regular);
  --box-shadow-color: ${ (props) => props.theme.lightGrey};
  --spinner-size: 20px;
  align-self: flex-start;
  transition: box-shadow .2s ease-out, background .1s ease-in;
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  &.btn--primary {
    --box-shadow-color: ${ (props) => props.theme.darkPrimaryTransluscent};
    color: #FFFFFF;
    background: ${ (props) => props.theme.primary};
    &:hover {
      background: ${ (props) => props.theme.darkPrimary};
    }
  }
  &.btn--secondary {
    --box-shadow-color: ${ (props) => props.theme.secondaryTransluscent};
    color: #FFFFFF;
    background: ${ (props) => props.theme.secondary};
    &:hover {
      background: ${ (props) => props.theme.darkSecondary};
    }
  }
  &.btn--accent {
    --box-shadow-color: ${ (props) => props.theme.darkAccentTransluscent};
    color: #FFFFFF;
    background: ${ (props) => props.theme.accent};
    &:hover {
      background: ${ (props) => props.theme.darkAccent};
    }
  }
  &.btn--danger {
    --box-shadow-color: ${ (props) => props.theme.dangerTransluscent};
    color: #FFFFFF;
    background: ${ (props) => props.theme.danger};
    &:hover {
      background: ${ (props) => props.theme.darkRed};
    }
  }
  &.btn--loading {
    --box-shadow-color: ${ (props) => props.theme.lightGrey};
    background: ${ (props) => props.theme.inactiveGrey};
    &:hover {
      background: ${ (props) => props.theme.inactiveGrey};
      cursor: not-allowed;
    }
    &:before {
      display: block;
    }
  }
  &.btn--light {
    --box-shadow-color: ${ (props) => props.theme.lightGrey};
    background: ${ (props) => props.theme.borderedButtonBg};
    color: #FFFFFF;
    &:hover {
      background: ${ (props) => props.theme.borderedButtonFocusBg};
    }
  }
  &.btn--icon {
    --box-shadow-color: ${ (props) => props.theme.lightGrey};
    border-radius: ${ (props) => props.theme.borderRadius};
    padding: .4em;
    border: 1px solid ${ (props) => props.theme.lightGrey};
    transition: box-shadow .2s ease-out, background .1s ease-in;
    box-shadow: 0px 3px 3px -2px rgba(157, 157, 157, 0.25);
    font-size: 18px;
    &:hover {
      background: #F9F9F9;
    }
    &:active {
      outline: none;
      box-shadow: 0 0 0 3px var(--box-shadow-color);
    }
    &:focus {
      outline: none;
    }
  }
  &:disabled {
    --box-shadow-color: ${ (props) => props.theme.lightGrey};
    background: ${ (props) => props.theme.inactiveGrey};
    &:hover {
      background: ${ (props) => props.theme.inactiveGrey};
      cursor: not-allowed;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--box-shadow-color);
    }
  }
  &:active {
    outline: none;
    box-shadow: 0 0 0 4px var(--box-shadow-color);
  }
  &:focus {
    outline: none;
  }
  &:before {
    display: none;
    content: '';
    position: absolute;
    top: calc(50% - 9.5px);
    right: 1em;
    bottom: auto;
    width: var(--spinner-size);
    height: var(--spinner-size);
    border: 2px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  &.btn--fill {
    width: 100%;
  }
  &.btn--sm {
    padding: .6em 2em;
    font-size: 14px;
    &:before {
      right: calc(50% - 14px);
    }
    &.btn--loading {
      color: rgba(0,0,0,0);
      text-shadow: none;
    }
  }
`

export default StyledButton;