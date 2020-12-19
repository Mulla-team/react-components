import styled from 'styled-components'
import {Pill} from './pill'

const StyledPill : typeof Pill = styled(Pill)`
  padding: .5em 1em .4em 1em;
  border: 1px solid ${props => props.theme.inactiveGrey};
  border-radius: 50px;
  font-family: var(--font-family-medium);
  font-size: .7rem;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.grey};
  &.pill--danger {
    background: ${props => props.theme.dangerTransluscent};
    border-color: ${props => props.theme.dangerTransluscent};
    color: ${props => props.theme.danger};
  }
  &.pill--success {
    background: ${props => props.theme.secondaryTransluscent};
    border-color: ${props => props.theme.secondaryTransluscent};
    color: ${props => props.theme.secondary};
  }
  &.pill--warning {
    background: ${props => props.theme.orangeTransluscent};
    border-color: ${props => props.theme.warningTransluscent};
    color: ${props => props.theme.orange};
  }
`

export default StyledPill;