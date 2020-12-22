import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

type StateDefinition = {
  container: HTMLDivElement | null,
  header: HTMLDivElement | null,
  body: HTMLDivElement | null,
  footer: HTMLDivElement | null,
  setContainerElement(element : HTMLDivElement): void,
  setHeaderElement(element : HTMLDivElement): void,
  setBodyElement(element : HTMLDivElement): void,
  setFooterElement(path : HTMLDivElement): void
}

const GroupContext = React.createContext < StateDefinition | null > (null)

function useGroupContext(component : string) {
  const context = React.useContext(GroupContext)
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Modal.Group /> component.`)
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
  const [footerElement,
    setFooterElement] = React.useState < HTMLDivElement | null > (null)

  const context = React.useMemo < StateDefinition > (() => ({
    container: containerElement,
    body: bodyElement,
    header: headerElement,
    footer: footerElement,
    setHeaderElement,
    setBodyElement,
    setContainerElement,
    setFooterElement
  }), [
    headerElement,
    containerElement,
    setHeaderElement,
    bodyElement,
    setBodyElement,
    setContainerElement
  ]);

  return (
    <GroupContext.Provider value={context}>
      {render(props, {}, DEFAULT_GROUP_TAG)}
    </GroupContext.Provider>
  )
}

const DEFAULT_MODAL_TAG = React.Fragment;

type ModalPropsWeControl = 'id' | 'className' | 'ref' | 'isVisible' | 'onHide'

export function Modal < TTag extends React.ElementType = typeof DEFAULT_MODAL_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, ModalPropsWeControl > & {
  isVisible: boolean,
  onHide: () => void,
  size?: 'sm' | 'lg' | 'xl'
}) {
  const id = `modal-${useId()}`;
  const groupContext = React.useContext(GroupContext);
  const {
    onHide,
    isVisible,
    size,
    ...passThroughProps
  } = props;

  React.useEffect(() => {
    if (isVisible) {
      // @ts-ignore
      document
        .body
        .classList
        .add("overflow-y-hidden");
    } else {
      // @ts-ignore
      document
        .body
        .classList
        .remove("overflow-y-hidden");
    }
  }, [isVisible]);

  return render({
    ...passThroughProps,
    ref: groupContext === null
      ? undefined
      : groupContext.setContainerElement,
    children: <TransitionGroup>
      {props.isVisible && <CSSTransition classNames="overlay-fade" timeout={300}>
        <div onClick={props.onHide} className='overlay'></div>
      </CSSTransition>}
      {props.isVisible && <CSSTransition classNames='modal' timeout={350}>
        <div className={`modal modal--${props.size || 'md'}`.trim()}>
          <div className='modal__content'>
            <button onClick={props.onHide} className='close-modal'>
              <i className="uc-icon text-grey">&#xeb8e;</i>
            </button>
            {props.children}
          </div>
        </div>
      </CSSTransition>}
    </TransitionGroup>,
    id
  }, {}, DEFAULT_MODAL_TAG)
}

const DEFAULT_HEADER_TAG = 'div';

type HeaderPropsWeControl = 'id' | 'className' | 'ref'

function Header < TTag extends React.ElementType = typeof DEFAULT_HEADER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, HeaderPropsWeControl >) {
  const id = `modal-header-${useId()}`;
  const {setHeaderElement} = useGroupContext('Modal.Header');

  return render({
    ...props,
    ref: setHeaderElement,
    className: `modal-header ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_HEADER_TAG)
};

const DEFAULT_BODY_TAG = 'div';

type BodyPropsWeControl = 'id' | 'className' | 'ref';

function Body < TTag extends React.ElementType = typeof DEFAULT_BODY_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, BodyPropsWeControl > & {
  id?: string,
  className?: string,
  children?: any
}) {
  const id = `modal-body-${useId()}`;
  const {setBodyElement} = useGroupContext('Modal.Header');

  return render({
    ...props,
    ref: setBodyElement,
    className: `modal-body ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_BODY_TAG)
}

const DEFAULT_FOOTER_TAG = 'div';

type FooterPropsWeControl = 'id' | 'className' | 'ref'

function Footer < TTag extends React.ElementType = typeof DEFAULT_FOOTER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, FooterPropsWeControl >) {
  const id = `modal-footer-${useId()}`;
  const {setFooterElement} = useGroupContext('Modal.Header');

  return render({
    ...props,
    ref: setFooterElement,
    className: `modal-footer ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_FOOTER_TAG)
};

Modal.Group = Group
Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer
