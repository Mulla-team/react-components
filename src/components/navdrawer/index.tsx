import * as React from 'react'
import styled from 'styled-components'
import ThemeToggleButton from '@Components/themetoggle'

const DrawerWrap = styled.nav `
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 10;
	overflow: hidden;
	background-color: ${props => props.theme.mode === 'dark' ? 'rgba(21, 30, 46, 0.93)' : 'rgba(255, 255, 255, 0.85)'};
	backdrop-filter: blur(5px);
	transition: opacity .3s;
`

const MenuList = styled.ul `
	list-style: none;
	padding: 0;
	max-height: 500px;
	height: 100vh;
	.menu-list--item {
		color: ${props => props.theme.mode === 'dark' ? props.theme.bgWhite : props.theme.bgDark};
		font-size: 1.875em;
		font-family: 'Inter-semibold';
		line-height: 60px;
	}
`

interface Props {
	isVisible: boolean,
	themeMode: string,
	onClose: () => void,
	onToggleMode: () => void
}

function DrawerMenu(props: Props) {
	return <DrawerWrap style={{
		opacity: props.isVisible ? 1 : 0,
		left: props.isVisible ? 0 : '100vw'
	}} className='flex flex-col  md:hidden items-center'>
		<MenuList className='w-3/4 flex flex-col justify-center'>
			<li className="menu-list--item">Blog</li>
			<li className="menu-list--item">Community</li>
			<li className="menu-list--item">About</li>
			<li className="menu-list--item">People</li>
		</MenuList>
		<div className="flex w-3/4">
			<ThemeToggleButton themeMode={props.themeMode} onChangeThemeMode={props.onToggleMode}/>
		</div>
	</DrawerWrap>
}

export default DrawerMenu;