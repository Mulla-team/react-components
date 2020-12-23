import styled from 'styled-components'
import {TabMenu} from './tabMenu'

const StyledTabMenu : typeof TabMenu = styled(TabMenu)`
  --inactive-color: #CDCDCD;
  background: white;
  .tabs-menu-header {
    display: flex;
  }
  .tab-menu-body{
    background: red;
    position: relative;
  }
  .tab-content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity .2s ease-in-out;
    &.tab-content--active {
      opacity: 1;
      z-index: 1;
    }
  }
  .tab-menu-item {
    font-family: var(--font-family-regular);
    color: var(--inactive-color);
    padding: 6px 12px;
    overflow: hidden;
    position: relative;
    min-width: 72px;
    box-sizing: border-box;
    min-height: 48px;
    text-align: center;
    flex-shrink: 0;
    etter-spacing: 0.02857em;
    transition: background .1s ease-in-out, color .05s ease-out, border-color .1s ease-out;
    border-bottom: 2px solid #DFDFDF;
    &:active {
      outline: none;
      box-shadow: none;
      background: #F3F3F3;
      color: var(--opalBlue);
    }
    &:focus {
      outline: none;
    }
    &.tab-menu-item--active {
      color: var(--opalBlue);
      border-bottom: 2px solid var(--opalBlue);
    }
    .tab-menu-item__text {
      width: 100%;
      display: inline-flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export default StyledTabMenu;
