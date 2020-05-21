import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios'
import {createMemoryHistory } from 'history'
import {renderWithContext, } from '../component/testHelpers/renderWithContext'
import {fakeArticle} from '../component/testHelpers/FakeArticle'
import Content from '../component/displayingArticles/Content'
import { debug } from 'util';



afterEach(cleanup)


describe('test content display', () => {
  
  it('displays content with prop', () => {
    const { getByRole, getByTestId } = renderWithContext(<Content article={fakeArticle} content={fakeArticle.article} />)
  
  })
})