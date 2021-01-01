import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import {classNames} from '../../utils/class-names'

const DEFAULT_BUTTON_TAG = 'button'

interface ButtonRenderPropArg extends React.ButtonHTMLAttributes < HTMLButtonElement > {
  loading?: boolean,
  disabled?: boolean,
  fill?: boolean,
  size?: 'lg' | 'sm',
  type?: 'submit' | 'reset' | 'button',
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'light' | 'link' | 'icon'
}

type ButtonPropsWeControl = 'id' | 'tabIndex' | 'onClick' | 'onKeyUp' | 'onKeyPress' | 'className' | 'variant' | 'size' | 'type' | 'fill' | 'type';

export function Button < TTag extends React.ElementType = typeof DEFAULT_BUTTON_TAG > (props : Props < TTag, ButtonRenderPropArg, ButtonPropsWeControl > & {
  loading?: boolean,
  disabled?: boolean,
  fill?: boolean,
  size?: 'lg' | 'sm',
  type?: 'submit' | 'reset' | 'button',
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'light' | 'link' | 'icon',
  onClick?: (event : React.MouseEvent < HTMLButtonElement, MouseEvent >) => void,
  className?: ((bag : ButtonRenderPropArg) => string) | string
}) {
  const {
    loading,
    disabled,
    fill,
    size,
    variant = 'primary',
    onClick,
    className,
    ...passThroughProps
  } = props;

  const id = `wallet-ui-button-${useId()}`;

  const handleClick = React.useCallback((event : React.MouseEvent < HTMLButtonElement, MouseEvent >) => {
    event.preventDefault();
    !disabled && !loading && onClick && onClick(event);
  }, [onClick])

  const handleKeyPress = React.useCallback((event : React.KeyboardEvent < HTMLElement >) => event.preventDefault(), [])

  const propsBag = React.useMemo < ButtonRenderPropArg > (() => ({loading, disabled}), [disabled, loading])
  const propsWeControl = {
    id,
    tabIndex: 0,
    className: classNames(resolvePropValue(className, propsBag), addDefaultClasses({loading, disabled, fill, size, variant})),
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    disabled
  }

  return render({
    ...passThroughProps,
    ...propsWeControl
  }, propsBag, DEFAULT_BUTTON_TAG)

}

function resolvePropValue < TProperty,
TBag > (property : TProperty, bag : TBag) {
  if(property === undefined) 
    return undefined
  if (typeof property === 'function') 
    return property(bag)
  return property
}

function addDefaultClasses(bag : ButtonRenderPropArg) {
return `btn btn--${bag.variant || 'primary'} ${bag.size
  ? 'btn--' + bag.size
  : ''} ${bag.fill
    ? 'btn--fill'
    : ''} ${bag.loading
      ? 'btn--loading'
      : ''}`.trim()
}
