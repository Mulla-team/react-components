import * as React from 'react'
import styled from 'styled-components'

const ThemeToggleWrap = styled.span `
	position: relative;
	#theme__toggle {
		opacity: 0;
		position: absolute;
	}

	.toggle__btn {
		display: flex;
		align-items: center;
		width: 25px;
		height: 25px;
		cursor: pointer;
	}

	.toggle__btn > svg {
		max-width: 25px;
		max-height: 25px;
		position: absolute;
		top: -2px;
		transform: rotate(0deg);
		transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition-duration: .25s;
		path {
			fill: ${props => props.theme.mode === 'dark' ? props.theme.bgWhite : props.theme.bgDark};
			stroke: ${props => props.theme.mode === 'dark' ? props.theme.bgWhite : props.theme.bgDark};
		}
	}

	#theme__toggle:checked ~ .toggle__btn > svg {
		transform: rotate(90deg);
	}
`

interface Props {
	onChangeThemeMode: () => void,
	themeMode: string
}

function ThemeToggle(props: Props) {
	return <ThemeToggleWrap>
		<input onChange={() => props.onChangeThemeMode()} id="theme__toggle" type="checkbox" />
		<label className="toggle__btn" htmlFor="theme__toggle">
			{props.themeMode === 'dark' ? <svg className='light' width="35" height="35" viewBox="0 0 35 35" fill="none">
				<path d="M18.6842 8.10526H17.3158V4H18.6842V8.10526ZM24.7733 11.1943L23.8057 10.2267L26.7086 7.3238L27.6762 8.29142L24.7733 11.1943ZM26.8947 17.6842V16.3158H31V17.6842H26.8947ZM23.8057 23.7733L24.7733 22.8057L27.6762 25.7086L26.7086 26.6762L23.8057 23.7733ZM17.3158 25.8947H18.6842V30H17.3158V25.8947ZM11.2267 22.8057L12.1943 23.7733L9.29142 26.6762L8.3238 25.7086L11.2267 22.8057ZM9.10526 16.3158V17.6842H5V16.3158H9.10526ZM12.1943 10.2267L11.2267 11.1943L8.3238 8.29142L9.29142 7.3238L12.1943 10.2267Z" fill="black" stroke="black" strokeWidth="0.5"/>
				<path d="M17.9211 22.8421C14.6509 22.8421 12 20.1912 12 16.9211C12 13.6509 14.6509 11 17.9211 11C21.1912 11 23.8421 13.6509 23.8421 16.9211C23.8421 20.1912 21.1912 22.8421 17.9211 22.8421Z" fill="black"/>
			</svg> :
			<svg className='dark' width="35" height="35" viewBox="0 0 35 35" fill="none">
				<path d="M18.7759 29.0198C16.0393 28.9981 13.3942 28.0314 11.2884 26.2834C9.18267 24.5354 7.74562 22.1135 7.22054 19.4276C6.69546 16.7417 7.11462 13.9569 8.40706 11.5446C9.6995 9.13224 11.7858 7.24062 14.3128 6.18992L14.7955 6L15.5473 6.72802L15.3653 7.22656C14.6228 9.09318 14.4431 11.1363 14.8483 13.1039C15.2535 15.0715 16.226 16.8774 17.6456 18.2987C19.0652 19.72 20.87 20.6946 22.8371 21.1021C24.8041 21.5097 26.8475 21.3324 28.715 20.5921L29.1898 20.4022L29.9416 21.1144L29.7675 21.6446C28.8856 23.834 27.3661 25.7077 25.4061 27.0229C23.4461 28.338 21.1362 29.0337 18.7759 29.0198Z" fill="black"/>
			</svg>}
		</label>
	</ThemeToggleWrap>
}

export default ThemeToggle