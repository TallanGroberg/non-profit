import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios'
import {createMemoryHistory } from 'history'
import ArticleDisplay from '../component/articleWriting/ArticleDisplay';
import {renderWithContext, fakeArticle } from '../component/testHelpers/renderWithContext'
let mockAxios = jest.fn('axios')
afterEach(cleanup)



describe('displays an article', () => {
  it('has a delete button', () => {
    const {getByTestId, getByText,} = renderWithContext(<ArticleDisplay isForEditing={{article: []}} />)
    createMemoryHistory('/profile')
    fireEvent.click(getByText('Delete Article'))
    
   
  })
})