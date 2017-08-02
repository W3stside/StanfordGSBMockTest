import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = applyMiddleware( thunk, routerMiddleware(history) );

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            middleware,
            DevTools.instrument()
        )
    );
}