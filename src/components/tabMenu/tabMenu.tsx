import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'

type StateDefinition = {
  container: HTMLDivElement | null,
  header: HTMLDivElement | null,
  body: HTMLDivElement | null,
  activePath: string | null,
  setContainerElement(element : HTMLDivElement): void,
  setHeaderElement(element : HTMLDivElement): void,
  setBodyElement(element : HTMLDivElement): void,
  setActivePath(path : string): void
}

const GroupContext = React.createContext < StateDefinition | null > (null)

function useGroupContext(component : string) {
  const context = React.useContext(GroupContext)
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <TabMenu.Group /> component.`)
    if (Error.captureStackTrace) 
      Error.captureStackTrace(err, useGroupContext)
    throw err
  }
  return context
}

const DEFAULT_GROUP_TAG = React.Fragment

function Group < TTag extends React.ElementType = typeof DEFAULT_GROUP_TAG > (props : Props < TTag >) {
  const [containerElement,
    setContainerElement] = React.useState < HTMLDivElement | null > (null)
  const [headerElement,
    setHeaderElement] = React.useState < HTMLDivElement | null > (null)
  const [bodyElement,
    setBodyElement] = React.useState < HTMLDivElement | null > (null)
  const [activePath,
    setActivePath] = React.useState < string | null > (null)

  const context = React.useMemo < StateDefinition > (() => ({
    container: containerElement,
    body: bodyElement,
    header: headerElement,
    activePath,
    setHeaderElement,
    setBodyElement,
    setContainerElement,
    setActivePath
  }), [
    headerElement,
    containerElement,
    setHeaderElement,
    bodyElement,
    setBodyElement,
    activePath,
    setContainerElement,
    setActivePath
  ]);

  return (
    <GroupContext.Provider value={context}>
      {render(props, {}, DEFAULT_GROUP_TAG)}
    </GroupContext.Provider>
  )
}

const DEFAULT_TAB_MENU_TAG = 'div';

type TabMenuPropsWeControl = 'id' | 'className' | 'ref'

export function TabMenu < TTag extends React.ElementType = typeof DEFAULT_HEADER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, TabMenuPropsWeControl >) {
  const id = `tab-menu-${useId()}`;
  const groupContext = React.useContext(GroupContext);
  return render({
    ...props,
    ref: groupContext === null
      ? undefined
      : groupContext.setContainerElement,
    className: `tab-menu ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_TAB_MENU_TAG)
}

const DEFAULT_HEADER_TAG = 'div';

type HeaderPropsWeControl = 'id' | 'className' | 'ref'

function Header < TTag extends React.ElementType = typeof DEFAULT_HEADER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, HeaderPropsWeControl > & {
  id?: string,
  className?: string,
  isActive?: boolean,
  children?: any
}) {
  const id = `tabs-menu-header-${useId()}`;
  const {setHeaderElement} = useGroupContext('TabsMenu.Header');

  return render({
    ...props,
    ref: setHeaderElement,
    className: `tabs-menu-header ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_HEADER_TAG)
};

const DEFAULT_TAB_MENU_ITEM_TAG = 'button';

type TabItemPropsWeControl = 'id' | 'className' | 'isActive' | 'path' | 'ref';

function TabMenuItem < TTag extends React.ElementType = typeof DEFAULT_TAB_MENU_ITEM_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLButtonElement >, TabItemPropsWeControl > & {
  id?: string,
  className?: string,
  isActive?: boolean,
  path: string,
  children?: any
}) {
  const id = `tab-menu-item-${useId()}`;
  const {activePath, setActivePath} = useGroupContext('TabsMenu.TabMenuItem');

  const {
    isActive: initActive,
    path,
    ...passThroughProps
  } = props;

  React.useEffect(() => {
    if (initActive) {
      setActivePath(path);
    }
  }, [initActive])

  const isActive = React.useMemo(() => {
    if (activePath) {
      return activePath === path
    } else if (initActive) {
      return initActive
    }
  }, [initActive, activePath]);

  return render({
    ...passThroughProps,
    onClick: () => {
      setActivePath(path)
    },
    children: <span className='tab-menu-item__text'>{props.children}</span>,
    className: `tab-menu-item ${props.className || ''} ${isActive
      ? 'tab-menu-item--active'
      : ''}`.trim(),
    id
  }, {}, DEFAULT_TAB_MENU_ITEM_TAG)
}

const DEFAULT_TAB_CONTENT_TAG = 'div';

type TabContentPropsWeControl = 'id' | 'className' | 'path' | 'ref';

function TabContent < TTag extends React.ElementType = typeof DEFAULT_TAB_MENU_ITEM_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, TabContentPropsWeControl > & {
  id?: string,
  className?: string,
  path: string,
  children?: any
}) {
  const id = `tab-content-${useId()}`;
  const {activePath} = useGroupContext('TabsMenu.TabContent');

  const {
    path,
    ...passThroughProps
  } = props;

  const isActive = React.useMemo(() => {
    return activePath === path
  }, [activePath]);

  return render({
    ...passThroughProps,
    className: `tab-content ${props.className || ''} ${isActive
      ? 'tab-content--active'
      : ''}`.trim(),
    id
  }, {}, DEFAULT_TAB_CONTENT_TAG)
}

const DEFAULT_BODY_TAG = 'div';

type BodyPropsWeControl = 'id' | 'className' | 'ref';

function Body < TTag extends React.ElementType = typeof DEFAULT_BODY_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, BodyPropsWeControl > & {
  id?: string,
  className?: string,
  children?: any
}) {
  const id = `tab-menu-body-${useId()}`;

  return render({
    ...props,
    className: `tab-menu-body ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_BODY_TAG)
}

TabMenu.Group = Group
TabMenu.Header = Header
TabMenu.TabMenuItem = TabMenuItem
TabMenu.TabContent = TabContent
TabMenu.Body = Body