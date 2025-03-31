import React, { useState } from "react";
import Courses from "./Courses";

const CourseList = () => {
  const [courses, setCourses] = useState([
    {
      title: "Java Course",
      coursePrice: 100,
      courseDescription: "This is the beginner Java course",
    },
    {
      title: "ReactJS Course",
      coursePrice: 200,
      courseDescription: "This is the beginner ReactJS course",
    },
    {
      title: "Spring Course",
      coursePrice: 150,
      courseDescription: "This is the beginner Spring course",
    },
  ]);

  return (
    <div
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "red",
        margin: 1,
        borderRadius: 10,
      }}
    >
      <h2 className="text-center">List Of All Courses</h2>
      {courses.length > 0 ? (
        courses.map((item, index) => (
          <Courses key={index} course={item} className="min-3" />
        ))
      ) : (
        <p>No Courses</p>
      )}
    </div>
  );
};

export default CourseList;
