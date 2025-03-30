import React, {useState} from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {toast, ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = ({course}) => {
    const [courseDetails, setNewCourseDetails] = useState(course);

    const changeCourse = () => {
        setNewCourseDetails({
            title: "Updated Course",
            coursePrice: "453",
            courseDescription: "Updated Course Description",
        });
    }


    const handleButtonClick = () => {
        toast.success(`You selected: ${course.title}`, {
            position: "top-right",
            autoClose: 1000,
        });
        changeCourse();
    };

    return (
        <div>
            {/* Keep ToastContainer at the top level */}
            <ToastContainer position="top-right" transition={Zoom}/>

            <Card className="text-center">
                <CardBody>
                    <CardTitle className="text-center">{courseDetails.title}</CardTitle>
                    <CardSubtitle className="text-center">Price: ${courseDetails.coursePrice}</CardSubtitle>
                    <CardText>{courseDetails.courseDescription}</CardText>

                    {/* Button triggers toast on click */}
                    <Button color="warning" outline onClick={handleButtonClick}>
                        Change Course
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Courses;
