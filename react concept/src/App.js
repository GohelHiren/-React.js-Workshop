import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Counter from './Counter';
import Hookdemo from './Hookdemo';
import Sumhook from './Sumhook';
import Todo from './Todo';
import Apicall from './Apicall'

function App() {
  return (
    <>
      <div style={{ padding: "50px" }}>


        <h1>Welcome My React App</h1>


        <Router>
          <Link to='home'>Home</Link> |
          <Link to='about'>About</Link> |
          <Link to='contact'>Contact</Link> |
          <Link to='Counter'>Counter</Link> |
          <Link to='Hookdemo'>Hookdemo</Link> |
          <Link to='Sumhook'>Sumhook</Link> |
          <Link to="Todo">Todo</Link> |
          <Link to="Apicall">API Calling</Link>

          <Routes>
            <Route element={<Home />} path='/home' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<Counter />} path='/counter' />
            <Route element={<Hookdemo />} path='/hookdemo' />
            <Route element={<Sumhook />} path='/sumhook' />
            <Route element={<Todo />} path='/todo' />
            <Route element={<Apicall />} path='/apicall' />
            <Route element={<h1>404 Page Not Found</h1>} path='*' />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
