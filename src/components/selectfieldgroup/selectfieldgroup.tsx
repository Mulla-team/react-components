import * as React from 'react'
import {Props} from '../../types'
import {render} from '../../utils/render'
import {useId} from '../../hooks/use-id'
import {classNames} from '../../utils/class-names'

type StateDefinition = {
  selectField: HTMLInputElement | null,
  label: HTMLLabelElement | null,
  setSelectFieldElement(element : HTMLInputElement): void,
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
  const [selectFieldElement,
    setSelectFieldElement] = React.useState < HTMLInputElement | null > (null)
  const [labelElement,
    setLabelElement] = React.useState < HTMLLabelElement | null > (null)

  const context = React.useMemo < StateDefinition > (() => ({selectField: selectFieldElement, label: labelElement, setSelectFieldElement: setSelectFieldElement, setLabel: setLabelElement}), [selectFieldElement, selectFieldElement, labelElement, setLabelElement]);
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
  search?: boolean,
  onChange?: (e : React.ChangeEvent < HTMLInputElement >, value : string | number | boolean) => void
};

function ErrorMessage(props : {
  message: string
}) {
  return <div className="error-message">
    <p className='error-message__text'>{props.message}</p>
  </div>;
}

type MenuItem = {
  value: string | number | boolean,
  label: string
};

function MenuItemsList(props : {
  menuItems: MenuItem[],
  searchValue?: string,
  selectedValue?: string | number | boolean,
  onItemSelected: (value : string | number | boolean) => void
}) {

  const {menuItems, searchValue, selectedValue} = props;

  const filteredMenuItems = React.useMemo(() => menuItems.filter(el => (el.label.toLowerCase()).search((searchValue || '').toLowerCase()) > -1), [searchValue, menuItems]);
  return <div className="menu-list">
    {((searchValue && searchValue.length > 0)
      ? filteredMenuItems
      : menuItems).map((el, index) => {
      return <div
        onClick={() => {
        props.onItemSelected(el.value)
      }}
        key={index}
        className={`menu-list__item ${selectedValue === el.value
        ? 'menu-list__item--selected'
        : ''}`}>{el.label}</div>
    })
}
  </div>;
}

type TextFieldPropsWeControl = 'id' | 'className' | 'placeholder' | 'fill' | 'error' | 'onChange' | 'appendIcon' | 'required' | 'menuItems';

function SelectFieldIN < TTag extends React.ElementType = typeof DEFAULT_TEXT_FIELD_TAG > (props : Props < TTag, TextFieldRenderPropArg, TextFieldPropsWeControl > & {
  disabled?: boolean,
  fill?: boolean,
  error?: string,
  placeholder?: string,
  appendIcon?: JSX.Element;
  type?: 'email' | 'password' | 'number' | 'text',
  required?: boolean,
  menuItems?: MenuItem[],
  value?: string | number | boolean,
  onChange?: (e : React.ChangeEvent < HTMLInputElement >, value : string | number | boolean) => void,
  className?: ((bag : TextFieldRenderPropArg) => string) | string,
  search?: boolean
}, ref?: React.Ref < HTMLInputElement >) {
  const {
    disabled,
    fill,
    error,
    onChange,
    className,
    placeholder,
    required,
    type = 'text',
    menuItems,
    value,
    search = false,
    ...passThroughProps
  } = props;

  const [isMenuVisible,
    setIsMenuVisible] = React.useState < boolean > (false);
  const [filterValue,
    setFilterValue] = React.useState < string | undefined > ();
  const [changeEvent,
    setChangeEvent] = React.useState < React.ChangeEvent < HTMLInputElement > | undefined > ();
  // const filterValue = React.useMemo< string | undefined >(() => changeEvent ?
  // changeEvent.target.value : undefined, [changeEvent]);

  const keyValueMenuItems = React.useMemo < {
    [s : string]: string
  } > (() => (menuItems || []).reduce((acc, curr) => {
    return {
      ...acc,
      [`${curr.value}`]: curr.label
    }
  }, {}), [menuItems]);

  React.useEffect(() => {
    if (menuItems) {
      setFilterValue(keyValueMenuItems[`${value}`]);
    }
  }, [value]);

  const id = `wallet-ui-selectfield-${useId()}`;
  const groupContext = React.useContext(GroupContext);

  const handleChange = React.useCallback((event : React.ChangeEvent < HTMLInputElement >, value : string | number | boolean) => {
    event && event.preventDefault();
    !disabled && onChange && onChange(event, value);
  }, [onChange]);

  const propsBag = React.useMemo < TextFieldRenderPropArg > (() => ({disabled}), [disabled]);
  const propsWeControl = {
    id,
    tabIndex: 0,
    placeholder,
    className: classNames(resolvePropValue(className, propsBag), addDefaultClasses({disabled, fill, error})),
    onChange: search ?  (e : React.ChangeEvent < HTMLInputElement >) => {
      setChangeEvent(e);
      setFilterValue(e.target.value);
    } : onChange,
    required,
    'aria-labelledby': groupContext
      ?.label
        ?.id,
    type: 'text',
    disabled,
    onBlur: () => {
      window.setTimeout(() => setIsMenuVisible(false), 200);
    },
    ref,
    value: search ? filterValue : value,
    autoComplete: 'off',
    onFocus: () => {
      setIsMenuVisible(true)
    }
  }

  return <div className='select-field-container relative'>
      {render({
        children: <React.Fragment>
          {menuItems?.map((el, index) => {
            return <option value={`${el.value}`}>{el.label}</option>
          })}
        </React.Fragment>,
        ...passThroughProps,
        ...propsWeControl
      }, propsBag, search ? DEFAULT_TEXT_FIELD_TAG: 'select')}
      {(error && error.length > 0) && <ErrorMessage message={error}/>}
      <button disabled={!search} className='text-field__icon-btn'>
        <i className="uc-icon text-grey">&#xe81d;</i>
      </button>
      {(isMenuVisible && search) && <MenuItemsList
        searchValue={filterValue}
        menuItems={menuItems || []}
        selectedValue={value}
        onItemSelected={(value) => {
        if (changeEvent && changeEvent.target) {
          changeEvent.target.value = value as string;
          handleChange(changeEvent, value);
        };
      }}/>}
    </div>
  }

  interface Test {
    Group : typeof Group;
    Label : typeof Label;
    ErrorMessage : typeof ErrorMessage;
  }

  // @ts-ignore
  export const SelectField = React.forwardRef(SelectFieldIN)as Test & typeof SelectFieldIN;

  type LabelPropsWeControl = 'id' | 'ref' | 'onPointerUp'

  const DEFAULT_LABEL_TAG = 'label'

    type LabelRenderPropArg = {}

    function Label < TTag extends React.ElementType = typeof DEFAULT_LABEL_TAG > (props : Props < TTag, LabelRenderPropArg, LabelPropsWeControl >) {
      const state = useGroupContext([SelectField.name, Label.name].join('.'));
      const id = `wallet-ui-textfield-label-${useId()}`;
      const handlePointerUp = React.useCallback(() => {
        if (!state.selectField) 
          return;
        state
          .selectField
          .focus()
      }, [state.selectField])

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

    function resolvePropValue < TProperty,
    TBag > (property : TProperty, bag : TBag) {
      if(property === undefined) 
        return undefined
      if (typeof property === 'function') 
        return property(bag)
      return property;
    }

    SelectField.Group = Group
    SelectField.Label = Label
    SelectField.ErrorMessage = ErrorMessage

    function addDefaultClasses(bag : TextFieldRenderPropArg) {
      return `select-field ${bag.fill
        ? 'select-field--fill'
        : ''} ${bag.error
          ? 'select-field--error'
          : ''}`.trim();
    }
