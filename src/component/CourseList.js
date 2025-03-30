import React, {useState} from "react";
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
        <div>
            <div>
                <h1>
                    All Courses
                </h1>
            </div>
            <p className="App-intro">List Of All Courses</p>
            {courses.length > 0 ? (
                courses.map((item, index) => (
                    <Courses key={index} course={item}/>
                ))
            ) : (
                <p>No Courses</p>
            )}

        </div>
    );
};

export default CourseList;
