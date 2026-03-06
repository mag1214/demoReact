import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return <h2>Hello</h2>;
}

function About() {
  return <h2>About me</h2>;
}

function Contact() {
  return <h2>My email is example@example.com</h2>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
