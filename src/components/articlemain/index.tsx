import * as React from 'react'
import styled from 'styled-components'


const ArticleWrap = styled.div `
	display: flex;
	flex-wrap: wrap;
	& > * {
		flex-basis: 400px;
		flex-shrink: 1;
		flex-grow: 1
	}

`
const ArticleImageWrap = styled.div `
	background-color: ${props => props.theme.mode === 'dark' ? '#000712' : '#EDEEEF'};
	transition: background-color .0.15s ease-in;
	min-height: 400px;
	border-radius: 10px 10px 0 0;
	overflow: hidden;
	@media(min-width: ${props => props.theme.screenSize.tablet}) {
    border-radius: 10px 0 0 10px;
  }
`

const ArticleTextWrap = styled.div `
	padding: 1.6em 1.6em;
	background-color: ${props => props.theme.mode === 'dark' ? '#151E2E' : '#FFFFFF'};
	transition: background-color .0.15s ease-in;
	border-radius: 0 0 10px 10px;
	@media(min-width: ${props => props.theme.screenSize.tablet}) {
		border-radius: 0 10px 10px 0;
		padding: 2.5em 2.2em;
  	}
	.article--text {
		&__date {
			font-family: 'Inter-Regular';
			font-size: 0.7em;
		}
		&__header {
			font-family: 'Inter-Bold';
			font-size: 1.5em;
			line-height: 1.3em;
		}
		&__summary {
			font-family: 'Inter-Regular';
			font-size: 1.1em;
			line-height: 1.4em;
		}
		@media(min-width: ${props => props.theme.screenSize.laptop}) {
			&__date {
				font-size: 0.8em;
			}
			&__header {
				font-size: 1.8em;
				line-height: 1.4em;
			}
			&__summary {
				font-size: 1.12em;
				line-height: 1.5em;
			}
		}
	}
`

const ArticleAuthorWrap = styled.div `
	display: flex;
	align-items: center;
	.avatar--wrap {
		width: 38px;
		height: 38px;
		overflow: hidden;
		border-radius: 50%;
		background-color: ${props => props.theme.mode === 'dark' ? '#000712' : '#EDEEEF'};
		&__image {
			width: 100%;
			height: auto;
		}
	}
	.author--text {
		display: flex;
		flex-direction: column;
		&__name {
			font-family: 'Inter-Regular';
			font-size: 1em;
			line-height: 1.4em;
		}
		&__occupation {
			font-family: 'Inter-Regular';
			font-size: 0.8em;
		}
	}
`

interface Props {

}

function ArticleItem(params: Props) {
	return <ArticleWrap>
		<ArticleImageWrap></ArticleImageWrap>
		<ArticleTextWrap>
			<div className="article--text">
				<p className="article--text__date mb-2">March 10th 2021</p>
				<h2 className="article--text__header">A Catchy title for the geeks, ie: How to do this hard thing</h2>
				<ArticleAuthorWrap className='my-6'>
					<div className="avatar--wrap mr-4"></div>
					<div className="author--text">
						<p className="author--text__name mb-1">Jamie Lanister</p>
						<p className="author--text__occupation">Coder at VW</p>
					</div>
				</ArticleAuthorWrap>
				<p className="article--text__summary">CSS Grid is a new technology that allows you to problem solve at the page-layout level. Learn how to create two-dimensional layouts that adapt content.</p>
			</div>
		</ArticleTextWrap>
	</ArticleWrap>
}

export default ArticleItem;