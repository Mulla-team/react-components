import Head from 'next/head'
import * as React from 'react'
import styled from 'styled-components'
import ArticleMain from '@Components/articlemain'
import ArticleListItem from '@Components/articlelistitem'

const OuterWrap = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerWrap = styled.div `
  width: 90%;
  max-width: ${props => props.theme.largeWindowSize};
  padding: 60px 0;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 80px 32px 96px;
  }
`

const ArticleList = styled.div `
	display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
	& > * {
		flex-basis: 400px;
		flex-shrink: 1;
    flex-grow: 1;
    max-width: 100%;
    @media(min-width: ${props => props.theme.screenSize.tablet}) {
      max-width: 48%;
    }
	}
`

const FeaturedArticleListWrap = styled.div `
  background: linear-gradient(180deg, #3B6EF0 0%, #2F8EE6 100%);
  padding: 1.6rem;
  width: 100%;
  border-radius: 10px;
  align-self: flex-start;
  .featured-content {
    &__header {
      text-transform: uppercase;
      font-family: 'Inter-Regular';
      color: rgba(255, 255, 255, 0.82);
      font-size: .8rem;
    }
    &__list {
      &--item {
        position: relative;
        padding-left: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        &::before {
          margin-top: 5px;
          content: '';
          width: 15px;
          height: 15px;
          position: absolute;
          left: 0;
          background-image: url('/static/arrow_right.svg');
          background-repeat: no-repeat;
          transition: transform .15s ease-in;
        }
        &:hover {
          &::before {
            transform: translateX(5px);
          }
        }
      }
    }
    .featured-article {
      &__title {
        color: #FFFFFF;
        font-family: 'Inter-Medium';
        font-size: 1rem;
        line-height: 22px;
      }
      &__author {
        color: #FFFFFF;
        font-family: t'Inter-Regular';
        font-size: .8rem;
      }
    }
  }
`

function Home() {
  return <OuterWrap>
		<InnerWrap>
			<ArticleMain/>
			<div className="flex flex-col xl:flex-row w-100 mt-10">
				<div className="w-100 xl:w-2/3">
          <ArticleList className='mt-10'>
          {
            [1,2,3,4].map((el, idx) => {
              return <ArticleListItem key={idx}/>
            })
          }
        </ArticleList>
				</div>
				<div className="flex flex-1 xl:mt-10 xl:ml-10">
          <FeaturedArticleListWrap>
            <div className="featured-content">
              <h3 className="featured-content__header mb-4">Featured</h3>
              <ul className="featured-content__list">
                <li className="featured-content__list--item">
                  <div className="flex flex-col featured-article">
                    <h3 className="featured-article__title mb-3">A Catchy title for the geeks, ie: How to do this hard thing</h3>
                    <p className="featured-article__author">Jamie Lanister, Coder at Atlassian</p>
                  </div>
                </li>
                <li className="featured-content__list--item">
                  <div className="flex flex-col featured-article">
                    <h3 className="featured-article__title mb-3">A Catchy title for the geeks, ie: How to do this hard thing</h3>
                    <p className="featured-article__author">Jamie Lanister, Coder at Atlassian</p>
                  </div>
                </li>
              </ul>
            </div>
          </FeaturedArticleListWrap>
				</div>
			</div>
		</InnerWrap>
	</OuterWrap>
}

export default Home;