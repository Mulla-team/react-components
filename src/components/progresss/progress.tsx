import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import lastIndexOf from 'lodash/lastIndexOf'

const DEFAULT_PROGESS_TAG = 'div'

type ProgressPropsWeControl = 'id' | 'className' | 'steps'

export function Progress < TTag extends React.ElementType = typeof DEFAULT_PROGESS_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, ProgressPropsWeControl > & {
  id?: string,
  className?: string,
  steps: {
    label: string,
    isActive: boolean
  }[]
}) {
  const {
    id = `progress-bar-${useId()}`,
    className,
    steps,
    ...passThroughProps
  } = props;

  const activeIndex = React.useMemo(() => lastIndexOf(steps.map(el => el.isActive), true), [steps]);

  const stepList = React.useMemo(() => steps.map((el, index) => {
    return <div
      style={{
      width: `${ 100 / steps.length}%`
    }}
      key={index}
      className="progress-bar__step">
      <p
        className={`progress-step__text ${index === activeIndex
        ? 'progress-step__text--active'
        : ''} ${index < activeIndex
          ? 'progress-step__text--completed'
          : ''}`.trim()}>{el.label}</p>
    </div>
  }), [activeIndex]);

  return render({
    ...passThroughProps,
    children: <React.Fragment>
      <div
        style={{
        width: `${activeIndex !== steps.length - 1
          ? `calc(${ ((activeIndex * 100) / steps.length) + (activeIndex > 0
            ? (100 / steps.length) / 2
            : 0)}% - 10%)`
          : '80%'}`
      }}
        className="progress-bar__bar"></div>
      <div className="progress-bar__steps">
        {stepList}
      </div>
    </React.Fragment>,
    className: `progress-bar ${className || ''}`.trim(),
    id
  }, {}, DEFAULT_PROGESS_TAG);
}

export default Progress;
