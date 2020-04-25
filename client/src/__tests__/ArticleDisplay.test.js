import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import AuthProvider, {authContext} from '../component/providers/AuthProvider'
import ArticleDisplay from '../component/articleWriting/ArticleDisplay';

afterEach(cleanup)

const renderWithContext = (component) => {

  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        <AuthProvider value={authContext}>
          <ArticleProvider value={articleContext}>
            {component}
          </ArticleProvider>
        </AuthProvider>
      </Router>
    )
  }
}

describe('displays an article', () => {
  it('has a delete button', () => {
    const {getByText} = renderWithContext(<ArticleDisplay isForEditing={{article: []}} />)
    getByText('Delete Article')
  })
})