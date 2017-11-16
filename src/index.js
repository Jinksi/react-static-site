import React from 'react'
// replace ReactDOM import with the following line:
import { render } from 'react-snapshot'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// replace ReactDOM render with react-snapshot render
render(<App />, document.getElementById('root'))
registerServiceWorker()
