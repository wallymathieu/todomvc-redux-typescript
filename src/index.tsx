import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import { callAPIMiddleware } from './middlewares/callapimiddleware'
const store = createStore(reducer,applyMiddleware(callAPIMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
