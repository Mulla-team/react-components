import styled from 'styled-components'
import {Avatar} from './avatar'

const StyledAvatar : typeof Avatar = styled(Avatar)`
  background: ${ (props) => props.theme.inactiveGrey};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .avatar__text {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: var(--font-family-medium);
    color: ${ (props) => props.theme.defaultTextColor};
  }
  .avatar__image {
    width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translateX(-50%) translateY(-50%);
  }
`

export default StyledAvatar;