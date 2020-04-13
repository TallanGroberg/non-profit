import React from 'react'
import ReactDom from 'react-dom'
import App2 from './components/App2'

import './css/normalize.css'
import './css/index.css'

ReactDom.render(
  <App2 />, document.getElementById('root')
)








// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import AuthProvider from './component/providers/AuthProvider'
// import ArticleProvider from './component/providers/ArticleProvider'
// import {BrowserRouter as Router} from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
// import {Elements, StripeProvider,} from 'react-stripe-elements';

// ReactDOM.render(
//   <StripeProvider apiKey={
//     process.env.REACT_APP_STRIPE_PK_TEST_APIKEY ||
//     process.env.REACT_APP_STRIPE_PK_LIVE_APIKEY
//     }>
//     <Elements>
//       <Router>
//         <AuthProvider>
//           <ArticleProvider>
//             <App />
//           </ArticleProvider>
//         </AuthProvider>
//       </Router>
//     </Elements>
//   </StripeProvider>

// , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();