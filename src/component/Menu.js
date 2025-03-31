import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link, Links } from "react-router-dom";

const Menu = () => {
  return (
    <div className="min-3" style={{ margin: 2 }}>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" action to="/">
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          action
          to="/add-course"
        >
          AddCourse
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          action
          to="/view-course"
        >
          View Course
        </Link>
        <Link className="list-group-item list-group-item-action" action to="/">
          About
        </Link>
        <Link className="list-group-item list-group-item-action" action to="/">
          Contact
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menu;
