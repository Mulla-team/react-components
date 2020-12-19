import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'

const DEFAULT_AVATAR_TAG = 'div'

type AvatarPropsWeControl = 'id' | 'className' | 'fullName' | 'imageUrl'

export function Avatar < TTag extends React.ElementType = typeof DEFAULT_AVATAR_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLDivElement >, AvatarPropsWeControl > & {
  id?: string,
  className?: string,
  fullName: string,
  imageUrl?: string
}) {
  const {
    fullName,
    id = `avatar-image-${useId()}`,
    className,
    imageUrl
  } = props;
  return render({
    ...props,
    children: <React.Fragment>
      {imageUrl
        ? <img src={imageUrl} alt="avatar"/>
        : <p className='avatar__text'>{`${fullName.split(' ')[0][0]}${fullName.split(' ')[1]
            ? fullName.split(' ')[1][0]
            : ''}`.trim()}</p>}
    </React.Fragment>,
    className: `avatar ${className || ''}`.trim(),
    id
  }, {}, DEFAULT_AVATAR_TAG);
}