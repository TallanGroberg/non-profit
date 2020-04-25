import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Signin from '../component/authentication/Signin'
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'
import {renderWithContext} from '../component/testHelpers/renderWithContext'

afterEach(cleanup)


  

renderWithContext()

  

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    writable: true
  });
});



describe('the login', () => {
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({ data: "Richard" }))
  };
  it('has the links', () => {
    const {getByText, getByTestId} = renderWithContext(<Signin fakeAxios={fakeAxios} />)
    document.getElementById('link-to-signup')
    getByTestId('link-to-signup')
    getByText('forgot your password?')
    expect(getByTestId('link-to-signup')).toHaveTextContent('Dont have an account?')
  })

  it('the form and submits', async () => {
    const {getByTestId, getByPlaceholderText, getByText} = renderWithContext(<Signin />)
    getByPlaceholderText('name')
    getByPlaceholderText('email')
    getByPlaceholderText('password')
    fireEvent.change(getByPlaceholderText('name'), { target: { value: 'cypress' } })
    fireEvent.change(getByPlaceholderText('email'), { target: { value: 'cypress@test.com' } })
    fireEvent.change(getByPlaceholderText('email'), { target: { value: 'password' } })
    let button = getByTestId("signin-submit-button")
  })
})
