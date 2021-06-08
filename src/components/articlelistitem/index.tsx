import * as React from 'react'
import styled from 'styled-components'


const ArticleWrap = styled.div `
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;

`
const ArticleImageWrap = styled.div `
	background-color: ${props => props.theme.mode === 'dark' ? '#000712' : '#EDEEEF'};
	transition: background-color .0.15s ease-in;
	min-height: 200px;
	border-radius: 10px 10px 0 0;
	overflow: hidden;
`

const ArticleTextWrap = styled.div `
	padding: 1.2em 1.2em;
	background-color: ${props => props.theme.mode === 'dark' ? '#151E2E' : '#FFFFFF'};
	border-radius: 0 0 10px 10px;
	transition: background-color .0.15s ease-in;
	@media(min-width: ${props => props.theme.screenSize.tablet}) {
		padding: 1.8em 1.6em 1.6em 1.6em;
		border-radius: 0 0 10px 10px;
  }
	.article--text {
		&__date {
			font-family: 'Inter-Regular';
			font-size: 0.7em;
		}
		&__header {
			font-family: 'Inter-Bold';
			font-size: 1.3em;
			line-height: 1.3em;
		}
		&__summary {
			font-family: 'Inter-Regular';
			font-size: 1em;
			line-height: 1.4em;
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
			font-size: .9em;
			line-height: 0.9em;
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
				<h2 className="article--text__header mb-2">A Catchy title for the geeks, ie: How to do this hard thing</h2>
				<p className="article--text__summary">CSS Grid is a new technology that allows you to problem solve at the page-layout level. Learn how to create two-dimensional layouts that adapt content.</p>
				<ArticleAuthorWrap className='mt-4'>
					<div className="avatar--wrap mr-4"></div>
					<div className="author--text">
						<p className="author--text__name mb-2">Jamie Lanister</p>
						<p className="author--text__occupation">Coder at VW</p>
					</div>
				</ArticleAuthorWrap>
			</div>
		</ArticleTextWrap>
	</ArticleWrap>
}

export default ArticleItem;