import React from 'react';
import { render, cleanup, fireEvent, getByPlaceholderText, getByTestId, } from '@testing-library/react';
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import WritersDisplay from '../component/articleWriting/WritersDisplay'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import Image from '../component/articleWriting/Image'
import { act } from 'react-dom/test-utils';
afterEach(cleanup)

describe('renders a video, image or textarea', () => {
  it('renders an image input', () => {
    const {debug,getByRole,getByTestId} = renderWithContext(
      <WritersDisplay
        input={<Image />}
          count={0} 
            key={0}
      />)
      fireEvent.change(getByTestId('img-upload'), {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      })

      debug(getByTestId('img-upload'))
  })
})