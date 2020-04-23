import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import OneArticle from '../component/displayingArticles/OneArticle'
import {withRouter} from 'react-router-dom'
afterEach(cleanup)

describe('a counter function', () => {

  it('should equal 0', () => {
    const {getByTestId} = render( withRouter(OneArticle) )
    
    console.log(getByTestId('like-unlike-button'))
  })

  it('should add one', () => {
    const {getByTestId} = render(withRouter(OneArticle))
    fireEvent.click(getByTestId('plus-one'))
    expect(getByTestId('counter')).toHaveTextContent(1)
  })

  it('should subtract one', () => {
    const {getByText, getByTestId} = render(withRouter(OneArticle))
    const minusOne = getByText(/minus 1/i)
    for(let i = 0; i < 2; i++) {
      fireEvent.click(minusOne)
    }
    expect(getByTestId('counter')).toHaveTextContent(-2)



  })
})