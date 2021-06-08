import * as React from 'react'
import styled from 'styled-components'

const MenuToggleWrap = styled.div `
	position: fixed;
	z-index: 20;
	width: 26px;
	height: 26px;
	top: 28px;
	right: 29px;
	padding: 0;
	margin: 0;
`

const NavMenuToggle = styled.span `
	#menu__toggle {
		opacity: 0;
	}

	#menu__toggle:checked ~ .menu__btn > span {
		transform: rotate(45deg);
	}

	#menu__toggle:checked ~ .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		visibility: visible;
		left: 0;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		width: 26px;
		height: 26px;
		cursor: pointer;
		z-index: 1;
		transform: translateY(-16px);
	}

	.menu__btn > span,
	.menu__btn > span::after {
		display: block;
		position: absolute;
		width: 26px;
		height: 2px;
		background-color: ${props => props.theme.mode === 'dark' ? props.theme.bgWhite : props.theme.bgDark};
		transition-duration: .25s;
	}

	.menu__btn > span {
		transform: translateY(-4px);
	}

	.menu__btn > span::after {
		content: '';
		top: 8px;
	}
`

interface Props {
  onToggleNavMenu: () => void
}

function MenuToggle(props: Props) {
	return <MenuToggleWrap className='block sm:hidden'>
		<NavMenuToggle>
			<input onChange={() => props.onToggleNavMenu()} id="menu__toggle" type="checkbox" />
			<label className="menu__btn" htmlFor="menu__toggle">
				<span></span>
			</label>
		</NavMenuToggle>
	</MenuToggleWrap>
}

export default MenuToggle