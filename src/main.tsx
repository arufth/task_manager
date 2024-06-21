import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TasksContextProvider } from './context/TasksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
)
