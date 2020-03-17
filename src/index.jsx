import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux_reducers/root_reducer'
import './index.scss'
import MainPage from './pages/MainPage'

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={(<div>Loading...</div>)}>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

