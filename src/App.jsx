import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Chat from './Components/Chat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route path="/homepage" element={<div>HomePage</div>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/agent-workflow" element={<div>Agent Workflow</div>} />
          </Route>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
