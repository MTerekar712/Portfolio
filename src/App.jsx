import navbar from './compnets/navbar'
import home from './compnets/home'
import Skill from './compnets/Skill'
import contact from './compnets/contact'
import {Route, Routes } from 'react-router-dom'
import about from './compnets/about'
import project from './compnets/project'

const App = () => {
  return (
    <div className='mainbox'>
      {navbar()}
      <Routes>
        <Route path='/' element={home()} />
        <Route path='/about' element={about()}/>
        <Route path='/skills' element={Skill()}/>
        <Route path='/project' element={project()} />
        <Route path='/contact' element={contact()}/>
      </Routes>
    </div>

  )
}

export default App