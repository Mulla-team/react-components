import styled from 'styled-components'
import {Progress} from './progress'

const StyledProgress : typeof Progress = styled(Progress)`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  .progress-bar__bar {
    align-self: flex-start;
    height: 2px;
    border-radius: 2px;
    transition: width .2s ease-out;
    background: ${props => props.theme.opalBlue};
    margin: 0 10% 20px 10%;
    &:before {
      content: '';
      width: 80%;
      height: 2px;
      position: absolute;
      background: #EAEBED;
      z-index:-1;
    }
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #FFFFFF;
      background: ${props => props.theme.opalBlue};
      float: right;
      transform: translateX(6px) translateY(-5px);
    }
  }
  .progress-bar__steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
  .progress-step__text {
      font-family: var(--font-family-reg);
      font-size: 14px;
      color: ${props => props.theme.iconGrey};
      text-align: center;
      &.progress-step__text--active {
        color: ${props => props.theme.defaultTextColor}
      }
      &.progress-step__text--completed {
        color: ${props => props.theme.primary}
      }
    }
  }
`

export default StyledProgress;
