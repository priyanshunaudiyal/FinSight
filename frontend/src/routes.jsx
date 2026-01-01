
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Charts from './pages/Charts'
import ChartDetail from './pages/ChartDetail'
import Analysis from './pages/Analysis'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/charts/:id" element={<ChartDetail />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
