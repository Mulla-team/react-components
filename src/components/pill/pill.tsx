import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'

const DEFAULT_PILL_TAG = 'span'

type PillPropsWeControl = 'id' | 'className' | 'variant'

export function Pill < TTag extends React.ElementType = typeof DEFAULT_PILL_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, PillPropsWeControl > & {
  id?: string,
  className?: string,
  variant?: 'default' | 'success' | 'warning' | 'danger'
}) {
  const {
    id = `pill-${useId()}`,
    className,
    variant,
    ...passThroughProps
  } = props;
  return render({
    ...passThroughProps,
    className: `pill pill--${variant} ${className || ''}`.trim(),
    id
  }, {}, DEFAULT_PILL_TAG);
}