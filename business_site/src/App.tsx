import AppProviders from 'providers/AppProviders'

import './App.css'
import { HomePage } from './screens/HomePage/HomePage'

function App() {

  return (
    <AppProviders>
    <HomePage />
  </AppProviders>
  )
}

export default App
