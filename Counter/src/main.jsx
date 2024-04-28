import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)