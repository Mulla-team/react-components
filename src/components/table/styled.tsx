import styled from 'styled-components'
import {Table} from './table'

const StyledTable : typeof Table = styled(Table)`
  font-family: var(--font-family-regular);
  color: ${ (props) => props.theme.defaultTextColor};
  font-size: 1em;
  .table-header {
    font-family: var(--font-family-medium);
    text-align: left;
    padding: .8em 1.3em;
    background: #FFFFFF;
  }
  .table-row {
    border-bottom: 1px solid ${ (props) => props.theme.lightGrey};
    transition: background .1s ease-in;
    &:hover {
      background: #F9F9F9;
    }
  }
  .table-data {
    padding: .8em 1.3em;
    font-family: var(--font-family-regular);
  }
  & ~ .table-footer {
    padding: .8em 1.3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .table-footer__text {
      color: ${ (props) => props.theme.defaultTextColor};
      font-size: .95em;
      margin-right: 10px;
    }
    .table-footer__button-group {
      button {
        --box-shadow-color: ${ (props) => props.theme.lightGrey};
        border-radius: ${ (props) => props.theme.borderRadius};
        padding: .4em;
        border: 1px solid ${ (props) => props.theme.lightGrey};
        transition: box-shadow .2s ease-out, background .1s ease-in;
        margin-left: 10px;
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
    }
  }
`

export default StyledTable