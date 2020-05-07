import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios'
import {createMemoryHistory } from 'history'
import {renderWithContext, fakeArticle } from '../component/testHelpers/renderWithContext'
import Likes from '../component/displayingArticles/Likes'

let mockAxios = jest.fn('axios')
afterEach(cleanup)

describe('renders a thumbs up and the number of likes', () => {
  it('displays the like component', () => {
    const {getByTestId} = renderWithContext(<Likes likes={3} />) 
    expect(getByTestId('likes')).toHaveTextContent(3)
  })
})