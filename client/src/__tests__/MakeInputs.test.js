import React from 'react';
import { render, cleanup, fireEvent, getByPlaceholderText, getByTestId, } from '@testing-library/react';
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import MakeInputs from '../component/articleWriting/ArticleDisplay'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import { act } from 'react-dom/test-utils';
afterEach(cleanup)

describe('the Make Inputs', () => {
  it('has input making buttons', () => {
    const { getByText,getByTestId, debug} = renderWithContext(<MakeInputs />)
    act( () => {
          fireEvent.click(getByText('Add image'))
          fireEvent.click(getByText('Add paragraph'))
          fireEvent.click(getByText('Add video'))
          
      })
      
      expect(getByTestId('article-button-container').childElementCount).toBe(3)
   
      getByText('Display Image')
      
      

      
  })
})