import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'

type StateDefinition = {
  container: HTMLDivElement | null,
  header: HTMLDivElement | null,
  body: HTMLDivElement | null,
  setContainerElement(element : HTMLDivElement): void,
  setHeaderElement(element : HTMLDivElement): void,
  setBodyElement(element : HTMLDivElement): void
}

const GroupContext = React.createContext < StateDefinition | null > (null)

function useGroupContext(component : string) {
  const context = React.useContext(GroupContext)
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <FormContainer.Group /> component.`)
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

  const context = React.useMemo < StateDefinition > (() => ({
    container: containerElement,
    body: bodyElement,
    header: headerElement,
    setHeaderElement,
    setBodyElement,
    setContainerElement
  }), [headerElement, setHeaderElement, bodyElement, setBodyElement, setContainerElement]);
  return (
    <GroupContext.Provider value={context}>
      {render(props, {}, DEFAULT_GROUP_TAG)}
    </GroupContext.Provider>
  )
}

const DEFAULT_FORM_CONTAINER_TAG = 'div'

type FormContainerPropsWeControl = 'id' | 'className' | 'ref'

export function FormContainer < TTag extends React.ElementType = typeof DEFAULT_FORM_CONTAINER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, FormContainerPropsWeControl > & {
  id?: string,
  className?: string
}) {
  const id = `wallet-ui-formcontainer-${useId()}`;
  const groupContext = React.useContext(GroupContext);
  return render({
    ...props,
    ref: groupContext === null
      ? undefined
      : groupContext.setContainerElement
  }, {
    className: 'form-container',
    id
  }, DEFAULT_FORM_CONTAINER_TAG)
}

const DEFAULT_HEADER_TAG = 'div';

type HeaderPropsWeControl = 'id' | 'className' | 'ref'

function Header < TTag extends React.ElementType = typeof DEFAULT_HEADER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, HeaderPropsWeControl >) {
  const id = `wallet-ui-formcontainer-header-${useId()}`;
  const groupContext = useGroupContext('FormContainer.Header');
  return render({
    ...props,
    ref: groupContext.setHeaderElement,
    className: `form-container-header ${props}`,
    id
  }, {}, DEFAULT_HEADER_TAG)
}

const DEFAULT_BODY_TAG = 'div'

type BodyPropsWeControl = 'id' | 'className' | 'ref'

function Body < TTag extends React.ElementType = typeof DEFAULT_BODY_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, BodyPropsWeControl > & {
  id?: string,
  className?: string
}) {
  const id = `wallet-ui-formcontainer-body-${useId()}`;
  const groupContext = useGroupContext('FormContainer.Body');
  return render({
    ...props,
    ref: groupContext.setBodyElement,
    className: `form-container-body ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_BODY_TAG)
}

FormContainer.Group = Group
FormContainer.Header = Header
FormContainer.Body = Body
