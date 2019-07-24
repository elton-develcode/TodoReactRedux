import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field';


ReactDOM.render(
  <Field initialValue='Teste'/>
  , document.getElementById('app'))