import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'

const DEFAULT_TABLE_TAG = 'table'

type TablePropsWeControl = 'id' | 'className' | 'ref' | 'pageNumber' | 'pageCount'

export function Table < TTag extends React.ElementType = typeof DEFAULT_TABLE_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLTableElement >, TablePropsWeControl >& {
  id?: string,
  className?: string,
  pageNumber?: number,
  pageCount?: number,
  onNext?: (currentPage : number) => void,
  onPrevious?: (currentPage : number) => void
}) {
  const id = `wallet-ui-table-${useId()}`;
  const {
    pageNumber,
    pageCount,
    onNext,
    onPrevious,
    ...passThroughProps
  } = props;
  return <React.Fragment>
      {render({
        ...passThroughProps,
        className: `table ${props.className}`,
        id
      }, {}, DEFAULT_TABLE_TAG)}
      <div className='table-footer'>
        {(typeof(pageCount) !== 'undefined' && typeof(pageNumber) !== 'undefined') && <p className='table-footer__text'>{`${pageNumber} of ${pageCount}`}</p>}
        <div className="table-footer__button-group">
          <button className='transform rotate-180'>
            <i className="uc-icon text-grey">&#xe81f;</i>
          </button>
          <button>
            <i className="uc-icon text-grey">&#xe81f;</i>
          </button>
        </div>
      </div>
    </React.Fragment>
}

const DEFAULT_TABLE_ROW_TAG = 'tr'

type TableRowPropsWeControl = 'id' | 'className' | 'ref'

export function Tr < TTag extends React.ElementType = typeof DEFAULT_TABLE_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLTableRowElement >, TableRowPropsWeControl > & {
  id?: string,
  className?: string
}) {
  const id = `wallet-ui-table-row-${useId()}`;
  return render({
    ...props,
    className: `table-row ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_TABLE_ROW_TAG)
}

const DEFAULT_TABLE_HEADER_TAG = 'th'

type TableHeaderPropsWeControl = 'id' | 'className' | 'ref'

export function Th < TTag extends React.ElementType = typeof DEFAULT_TABLE_HEADER_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLTableHeaderCellElement >, TableHeaderPropsWeControl > & {
  id?: string,
  className?: string
}) {
  const id = `wallet-ui-table-header-${useId()}`;
  return render({
    ...props,
    className: `table-header ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_TABLE_HEADER_TAG)
}

const DEFAULT_TABLE_DATA_TAG = 'td'

type TableDataPropsWeControl = 'id' | 'className' | 'ref'

export function Td < TTag extends React.ElementType = typeof DEFAULT_TABLE_DATA_TAG > (props : Props < TTag, React.HTMLAttributes < HTMLTableDataCellElement >, TableDataPropsWeControl > & {
  id?: string,
  className?: string
}) {
  const id = `wallet-ui-table-data-${useId()}`;
  return render({
    ...props,
    className: `table-data ${props.className || ''}`.trim(),
    id
  }, {}, DEFAULT_TABLE_DATA_TAG)
}

Table.Tr = Tr
Table.Th = Th
Table.Td = Td
