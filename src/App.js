import "./App.css";
import CourseList from "./component/CourseList";
import AddCourse from "./component/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Home from "./component/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header className="min-3" />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-course" element={<CourseList />} />
                <Route path="/about" element={<Home />} />
                <Route path="/contact" element={<Home />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
