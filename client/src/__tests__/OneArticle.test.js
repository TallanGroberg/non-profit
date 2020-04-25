import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import OneArticle from '../component/displayingArticles/OneArticle'
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext, } from '../component/providers/ArticleProvider'
import AuthProvider, {authContext} from '../component/providers/AuthProvider'
import axiosMock from 'axios'
import '@testing-library/jest-dom/extend-expect'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import {fakeArticle} from '../component/testHelpers/fakeArticle'

// jest.mock('axios')






afterEach(cleanup)

describe('a single article', () => {

  it('renders an article', async () => {

    const {getByTestId, getByText, getByLabelText} = renderWithContext(<OneArticle /> )
    
    
    
    
  })

//   it('should add one', () => {
//     const {getByTestId} = render(withRouter(OneArticle))
//     fireEvent.click(getByTestId('plus-one'))
//     expect(getByTestId('counter')).toHaveTextContent(1)
//   })

//   it('should subtract one', () => {
//     const {getByText, getByTestId} = render(withRouter(OneArticle))
//     const minusOne = getByText(/minus 1/i)
//     for(let i = 0; i < 2; i++) {
//       fireEvent.click(minusOne)
//     }
//     expect(getByTestId('counter')).toHaveTextContent(-2)



  })



// })