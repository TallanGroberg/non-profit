
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NavBar from '../component/NavBar/NavBar'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'

describe('links for navigation menu', () => {
  it('has all the links', () => {
    const {getByText } = renderWithContext(<NavBar />)
    getByText('Business')
    getByText('Art')
    getByText('Recent')
    getByText('Politics')
    getByText('Trending')
    getByText('Profile')
    getByText('Write an Article')
  })
})