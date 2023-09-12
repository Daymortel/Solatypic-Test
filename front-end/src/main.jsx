import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Signup } from './pages/auth/signup';
import { Signin } from './pages/auth/signin';
import { CreateTask } from './pages/tasks/create';
import { UpdateTask } from './pages/tasks/update';

import './styles/style.css'

const root = document.querySelector('#root');
const app = createRoot(root);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks/update" element={<UpdateTask />} />
          </Routes>
          
        <Footer />
      </BrowserRouter>
    </>
  )
}

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
