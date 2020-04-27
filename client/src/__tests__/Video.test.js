import React from 'react';
import { render, cleanup, fireEvent, getByTitle, } from '@testing-library/react';
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import AuthProvider, {authContext} from '../component/providers/AuthProvider'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import Video from '../component/articleWriting/Video'


afterEach(cleanup)

describe('displays an import to embed a video', () => {

  it('has a video form', () => {
    const {getByPlaceholderText, debug} = renderWithContext(
    <Video 
      count={51}
        setVideoDeleted={jest.fn()} 
          key={51}
            id={51} 
    />
      )
      
        expect(getByPlaceholderText('Video url'))
  })
  it('edit mode', () => {
    const {getByPlaceholderText, getByText, debug} = renderWithContext(
    <Video 
      count={51}
        videoUrl='https://youtu.be/ygmQGKQdnrU'
        setVideoDeleted={jest.fn()} 
          key={51}
            id={51} 
    />
      )
      
      fireEvent.click(getByText('edit'))
        getByPlaceholderText('Editing video')
  })
  it('deletes video with videoUrl', () => {
    const {getByPlaceholderText, getByText, getByTestId, debug} = renderWithContext(
      <Video 
          videoUrl='https://youtu.be/ygmQGKQdnrU'
          setVideoDeleted={jest.fn()} 
            key={51}
              id={51} 
      />
        )

        getByTestId('video-player')
      fireEvent.click(getByText('delete'))
  })
  it('deletes video', () => {
    const {getByPlaceholderText, getByText, getByTestId, debug} = renderWithContext(
      <Video 
          setVideoDeleted={jest.fn()} 
            key={51}
              id={51} 
      />
        )

        getByPlaceholderText('Video url')
        fireEvent.click(getByText('Submit'))
        getByText('delete')

  })


})