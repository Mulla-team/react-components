
import styled from 'styled-components'

export default styled.div `
    border-radius: 3px;
    color: ${ (props) => props.theme.defaultTextColor};
    font-size: 14px;
		padding: 1.2em;
		line-height: 1.6em;
		box-shadow: rgba(9, 30, 66, 0.28) 0px 4px 8px -2px, rgba(9, 30, 66, 0.3) 0px 0px 1px;
		background: #FFFFFF;
    a {
        color: ${ (props) => props.theme.primary};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
    }
`

