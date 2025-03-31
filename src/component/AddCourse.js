import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const AddCourse = () => {
  return (
    <div
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "red",
        margin: 2,
        borderRadius: 10,
      }}
    >
      <h2 className="text-center">Add Course Here</h2>
      <div className="min-3">
        <Form action="">
          <FormGroup>
            <Label for="UserID">Course Id</Label>
            <Input
              type="text"
              placeholder="Enter ID Here"
              name="UserID"
              id="UserID"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="CourseName">Course Title</Label>
            <Input
              type="text"
              placeholder="Enter Course Name"
              name="CourseName"
              id="CourseName"
            ></Input>
          </FormGroup>
          <FormGroup>
            <label>Course Description</label>
            <Input
              type="textarea "
              placeholder="Enter Course Description Here"
              name="CourseDescription"
              id="CourseDescription"
              style={{ height: 100 }}
            ></Input>
          </FormGroup>
          <Container>
            <Button outline color="success">
              Add Course
            </Button>
            <Button outline color="warning" style={{ margin: 3 }}>
              Clear
            </Button>
          </Container>
        </Form>
      </div>
    </div>
  );
};
export default AddCourse;
