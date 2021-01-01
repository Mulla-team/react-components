import styled from 'styled-components'
import {TabMenu} from './tabMenu'

const StyledTabMenu : typeof TabMenu = styled(TabMenu)`
  --inactive-color: #CDCDCD;
  background: white;
  .tabs-menu-header {
    display: flex;
  }
  .tab-menu-body{
    position: relative;
  }
  .tab-content {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: opacity .2s ease-in-out;
    position: absolute;
    &.tab-content--active {
      position: static;
      display: block;
      opacity: 1;
      height: auto;
      overflow: visible;
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
