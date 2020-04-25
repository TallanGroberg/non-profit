import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Profile from '../component/authentication/userFeatures/Profile'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import {Router} from 'react-router-dom'
import {createMemoryHistory } from 'history'

afterEach(cleanup)

describe('is the profile menu', () => {
  it('has the profile settings link', () => {
    const {getByText} = renderWithContext(<Profile />)
    expect(getByText('Profile Settings'))
  })
})