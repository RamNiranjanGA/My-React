import html from "./assets/html.png";
import Content from "./content";

function CourseList(){

    const courses = [
        {
            name : 'html',
            image : html,
            rating : 5,
            price : 199
        },
        {
            name : 'Css',
            image : html,
            rating : 4,
            price : 199
        },
        {
            name : 'javaScript',
            image : html,
            rating : 5,
            price : 499
        }
    ]

    const courseList = courses.map(
        (courses, index) => 
            <Content key ={index} name={courses.name}
            image={courses.image}
            price={courses.price}
            rating = {courses.rating}/>)

    return(
        <>
            {courseList}
        </>
    );
}

export default CourseList