import React from "react";
import {  unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {render, } from '@testing-library/react'
import mock from 'xhr-mock';
import axios from 'axios'
import {renderWithContext} from '../component/testHelpers/renderWithContext'
import {fakeArticle} from '../component/testHelpers/FakeArticle'
import OneArticle from '../component/displayingArticles/OneArticle'
// jest.mock('axios')


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe('a single article', () => {

  it('renders an article', async () => {
  //   await jest.spyOn(global, "fetch").mockImplementation(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(fakeArticle)
  //   })
  // );
  //   act( () => {
  //     renderWithContext(<OneArticle match={{params: {_id: fakeArticle._id}}} />)
  //   })
    
  //   const {getByTestId} = renderWithContext(<OneArticle match={{params: {_id: fakeArticle._id}}} />)

  //   expect(getByTestId('article-title')).toBeInDocument(fakeUser.email);
  })

//   it('should add one', () => {
//     const {getByTestId} = render(withRouter(OneArticle))
//     fireEvent.click(getByTestId('plus-one'))
//     expect(getByTestId('counter')).toHaveTextContent(1)
//   })

//   it('should subtract one', () => {
//     const {getByText, getByTestId} = render(withRouter(OneArticle))
//     const minusOne = getByText(/minus 1/i)
//     for(let i = 0; i < 2; i++) {
//       fireEvent.click(minusOne)
//     }
//     expect(getByTestId('counter')).toHaveTextContent(-2)



  })



// })