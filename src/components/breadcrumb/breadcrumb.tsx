import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import Link from 'next/link'

const DEFAULT_BC_TAG = 'div'

type BreadCrumbPropsWeControl = 'id' | 'className' | 'menuItems'

type MenuItem = {
  title: string,
  linkUrl?: string,
  isActive?: boolean
}

export function BreadCrumb < TTag extends React.ElementType = typeof DEFAULT_BC_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, BreadCrumbPropsWeControl > & {
  id?: string,
  className?: string,
  menuItems: MenuItem[]
}) {
  const {
    id = `bread-crumb-${useId()}`,
    className,
    menuItems,
    linkUrl,
    ...passThroughProps
  } = props;

  const menuList = menuItems.map((menu, index) => {
    const isLast = (index + 1) === menuItems.length;
    return < div key = {
      index
    }
    className = {`crumb ${menu.isActive && 'crumb--active'}`.trim()} id = {
      `crumb-${useId()}`
    } > <Link href={linkUrl || '#'}>{menu.title}</Link> {!isLast && <i className = 'uc-icon text-grey' >&#xe81f;</i>}
    </div >
});

return render({
  ...passThroughProps,
  children: menuList,
  className: `bread-crumb ${className || ''}`.trim(),
  id
}, {}, DEFAULT_BC_TAG);
}