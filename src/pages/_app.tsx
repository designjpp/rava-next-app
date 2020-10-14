import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

import GlobalStyles from '../styles/base'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
