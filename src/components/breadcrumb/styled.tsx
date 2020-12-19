import styled from 'styled-components'
import {BreadCrumb} from './breadcrumb'

const StyledBreadCrumb : typeof BreadCrumb = styled(BreadCrumb)`
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.iconGrey};
    font-family: var(--font-family-regular);
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .crumb--active > a {
    color: ${props => props.theme.defaultTextColor};
    font-family: var(--font-family-medium);
  }
`

export default StyledBreadCrumb;