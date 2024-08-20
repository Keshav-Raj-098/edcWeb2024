import Blog from "../src/Pages/Blog"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/BlogPage" element={<div>Hello</div>} />

      </Routes>
    </Router>
  );
}

export default App;
