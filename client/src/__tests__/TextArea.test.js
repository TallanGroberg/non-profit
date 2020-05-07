import React from 'react';
import { render, cleanup, fireEvent, getByTitle } from '@testing-library/react';
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import AuthProvider, {authContext} from '../component/providers/AuthProvider'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import TextArea from '../component/articleWriting/TextArea'
import { debug } from 'util';

afterEach(cleanup)

describe('shows a texarea working', () => {
  it('has a textArea', () => {
    const {getByRole} = renderWithContext(<TextArea key={50}
      id={50}
      text={{textarea: 'test content', orderAppear: 50}}
      textForm={false}
      setText={jest.fn()}
      setTextForm={jest.fn()}
      saveParagraph={jest.fn()}
      setParagraphDeleted={jest.fn()}
      deleteTextArea={jest.fn()}
       />)
  })
  it('submits text',() => {
    
      const {getByText, getByTitle, debug, getByTestId} = renderWithContext(
      <TextArea key={50}
        id={50}
        text={{textarea: 'test content', orderAppear: 50}}
        textForm={false}
        setText={jest.fn()}
        setTextForm={jest.fn()}
        saveParagraph={jest.fn()}
        setParagraphDeleted={jest.fn()}
        deleteTextArea={jest.fn()}
          />)
          
          const button = getByText('save paragraph')
            fireEvent.click(button)
              const paragraph = getByTestId('paragraph-displayed')
                expect(paragraph.textContent)
            fireEvent.click(getByText('edit'))
            
            expect(getByTestId("text-area-display"))
            getByTitle('textarea')
            
            fireEvent.click(getByText('save paragraph'))
            
          fireEvent.click(getByText('delete'))
            getByTestId('text-area-display')
        //  getByTestId('paragraph-displayed')

  })
})