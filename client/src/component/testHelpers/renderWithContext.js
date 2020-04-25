import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext} from '../providers/ArticleProvider'

import AuthProvider, {authContext} from '../providers/AuthProvider'

afterEach(cleanup)

export const renderWithContext = (component) => {

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