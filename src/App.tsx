import './App.css'
/* @vite-ignore */
import { lazy, Suspense } from 'react'
const Header = lazy(() => import('HeaderApp/Header' ))
const Content = lazy(()=> import('ContentApp/Content'))
function App() {
  
  return (
    <div>
    
      <Suspense fallback = {<div>Loading...</div>} >
      <Header />
      <Content />
      </Suspense>
    </div>
  )
}

export default App
