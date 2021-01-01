import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import {classNames} from '../../utils/class-names'

type StateDefinition = {
  textField: HTMLInputElement | null,
  label: HTMLLabelElement | null,
  setTextFieldElement(element : HTMLInputElement): void,
  setLabel(element : HTMLLabelElement): void
}

const GroupContext = React.createContext < StateDefinition | null > (null)

function useGroupContext(component : string) {
  const context = React.useContext(GroupContext)
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <TextField.Group /> component.`)
    if (Error.captureStackTrace) 
      Error.captureStackTrace(err, useGroupContext)
    throw err
  }
  return context
}

const DEFAULT_GROUP_TAG = React.Fragment

function Group < TTag extends React.ElementType = typeof DEFAULT_GROUP_TAG > (props : Props < TTag >) {
  const [textFieldElement,
    setTextFieldElement] = React.useState < HTMLInputElement | null > (null)
  const [labelElement,
    setLabelElement] = React.useState < HTMLLabelElement | null > (null)

  const context = React.useMemo < StateDefinition > (() => ({textField: textFieldElement, label: labelElement, setTextFieldElement: setTextFieldElement, setLabel: setLabelElement}), [textFieldElement, setTextFieldElement, labelElement, setLabelElement]);
  return (
    <GroupContext.Provider value={context}>
      {render(props, {}, DEFAULT_GROUP_TAG)}
    </GroupContext.Provider>
  )
}

const DEFAULT_TEXT_FIELD_TAG = 'input'

interface TextFieldRenderPropArg {
  disabled?: boolean,
  error?: string,
  fill?: boolean,
  onChange?: (e : React.ChangeEvent < HTMLInputElement >, value : string | number) => void
};

const DEFAULT_ERROR_TEXT_TAG = 'div'

type ErrorPropsWeControl = 'id' | 'ref' | 'message'

function ErrorMessage < TTag extends React.ElementType = typeof DEFAULT_ERROR_TEXT_TAG > (props : Props < TTag, {}, ErrorPropsWeControl > & {
  message?: string
}) {

  const {
    id,
    message,
    ...passThroughProps
  } = props;

  const propsWeControl = {
    id
  }

  return render({
    ...passThroughProps,
    ...propsWeControl,
    className: `${props.className} error-message`,
    children: props.children || <p className='error-message__text'>{message}</p>
  }, {}, DEFAULT_ERROR_TEXT_TAG)
}

type TextFieldPropsWeControl = 'id' | 'className' | 'placeholder' | 'fill' | 'error' | 'onChange' | 'appendIcon' | 'required' | 'value';

function TextFieldIN < TTag extends React.ElementType = typeof DEFAULT_TEXT_FIELD_TAG > (props : Props < TTag, TextFieldRenderPropArg & React.InputHTMLAttributes < HTMLInputElement >, TextFieldPropsWeControl > & {
  disabled?: boolean,
  fill?: boolean,
  error?: string,
  placeholder?: string,
  appendIcon?: JSX.Element,
  type?: 'email' | 'password' | 'number' | 'text',
  value?: string | number,
  onChange?: (e : React.ChangeEvent < HTMLInputElement >, value : string | number) => void,
  className?: ((bag : TextFieldRenderPropArg) => string) | string
}, ref?: React.Ref < HTMLInputElement >) {
  // control text visibility for password text fields
  const [isTextVisible,
    setIsTextVisible] = React.useState < boolean | undefined > (undefined);
  const {
    disabled,
    fill,
    error,
    onChange,
    className,
    placeholder,
    appendIcon,
    required,
    value,
    autoFocus,
    type = 'text',
    ...passThroughProps
  } = props;

  const id = `wallet-ui-textfield-${useId()}`;
  const groupContext = React.useContext(GroupContext);

  const handleChange = React.useCallback((event : React.ChangeEvent < HTMLInputElement >) => {
    event.preventDefault();
    !disabled && onChange && onChange(event, event.target.value);
  }, [onChange])

  const propsBag = React.useMemo < TextFieldRenderPropArg > (() => ({disabled}), [disabled]);
  const propsWeControl = {
    id,
    tabIndex: 0,
    placeholder,
    className: classNames(resolvePropValue(className, propsBag), addDefaultClasses({disabled, fill, error})),
    onChange: handleChange,
    required,
    value,
    'aria-labelledby': groupContext
      ?.label
        ?.id,
    type: typeof(isTextVisible) === 'undefined'
      ? type
      : isTextVisible
        ? 'text'
        : type,
    ref,
    autoFocus,
    disabled
  };

  return <div className='text-field-container relative'>
      {render({
        ...passThroughProps,
        ...propsWeControl
      }, propsBag, DEFAULT_TEXT_FIELD_TAG)}
      {(error && typeof(error) === 'string' && error.length > 0) && <ErrorMessage message={error}/>}
      {(type === 'password' && !appendIcon) && <button
        disabled={disabled}
        className='text-field__icon-btn'
        onClick={() => setIsTextVisible(!isTextVisible)}>
        {isTextVisible
          ? <i className="uc-icon text-grey">&#xe9a7;</i>
          : <i className="uc-icon text-grey">&#xe9a8;</i>}
      </button>}
      {appendIcon && <button disabled={disabled} className='text-field__icon-btn'>
        {appendIcon}
      </button>}
    </div>
}

interface Test {
  Group : typeof Group;
  Label : typeof Label;
  ErrorMessage : typeof ErrorMessage;
}

// @ts-ignore
export const TextField = React.forwardRef(TextFieldIN)as Test & typeof TextFieldIN;

type LabelPropsWeControl = 'id' | 'ref' | 'onPointerUp'

const DEFAULT_LABEL_TAG = 'label'

  type LabelRenderPropArg = {}

  function Label < TTag extends React.ElementType = typeof DEFAULT_LABEL_TAG > (props : Props < TTag, LabelRenderPropArg, LabelPropsWeControl >) {
    const state = useGroupContext([TextField.name, Label.name].join('.'));
    const id = `wallet-ui-textfield-label-${useId()}`;
    const handlePointerUp = React.useCallback(() => {
      if (!state.textField) 
        return;
      state
        .textField
        .focus()
    }, [state.textField])

    const propsWeControl = {
      ref: state.setLabel,
      id,
      onPointerUp: handlePointerUp
    }

    return render({
      ...props,
      ...propsWeControl,
      className: `${props.className} mb-3`
    }, {}, DEFAULT_LABEL_TAG)
  }

  TextField.Group = Group
  TextField.Label = Label
  TextField.ErrorMessage = ErrorMessage

  function resolvePropValue < TProperty,
  TBag > (property : TProperty, bag : TBag) {
    if(property === undefined) 
      return undefined
    if (typeof property === 'function') 
      return property(bag)
    return property
}

function addDefaultClasses(bag : TextFieldRenderPropArg) {
  return `text-field ${bag.fill
    ? 'text-field--fill'
    : ''} ${bag.error
      ? 'text-field--error'
      : ''}`.trim()
}
