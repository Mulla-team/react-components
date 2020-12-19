import styled from 'styled-components'
import {FormContainer} from './formcontainer'

const StyledFormContainer : typeof FormContainer = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${ (props) => props.theme.lightGrey};
  box-shadow: 0px 3px 3px -2px rgba(157, 157, 157, 0.25);
  border-radius: 4px;
  .form-container-header {
    width: 100%;
    color: ${ (props) => props.theme.defaultTextColor};
    font-size: 1.1em;
    font-family: var(--font-family-semibold);
    padding: .9em 1.3em;
    border-bottom: 1px solid ${ (props) => props.theme.lightGrey};
  }
  .form-container-body {
    width: 100%;
    padding: .9em 1.3em;
  }
`

export default StyledFormContainer;