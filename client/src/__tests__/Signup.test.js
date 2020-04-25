import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Signup from '../component/authentication/Signup'
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import ArticleProvider ,{articleContext} from '../component/providers/ArticleProvider'
import AuthProvider, {authContext} from '../component/providers/AuthProvider'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
afterEach(cleanup)




describe('a user signs up.', () => {

  it('has all the links', () => {
    const{ getByText } = renderWithContext(<Signup />)
    getByText('already have an account?')
  })
  it('has the form', () => {
    const{ getByPlaceholderText, getByText } = renderWithContext(<Signup />)
    getByPlaceholderText('name')
    getByPlaceholderText('email')
    getByPlaceholderText('password')
    getByText('Signup')
  })
})
