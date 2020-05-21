import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios'
import {createMemoryHistory } from 'history'
import {renderWithContext, } from '../component/testHelpers/renderWithContext'
import {fakeArticle} from '../component/testHelpers/FakeArticle'
import Admin from '../component/authentication/userFeatures/admin/Admin'

afterEach(cleanup)

describe('renders admin only features', () => {
  it('renders the component', () => {
    const {getByTestId} = renderWithContext(<Admin />)
    getByTestId('admin')

    


  })
})