import courses from "../data/courses";

import CourseCard from "../components/CourseCard";



function CourseList() {

  return (

    <div>

      <h2>
        Course List
      </h2>



      {

        courses.map((course) => (

          <CourseCard
            key={course.id}
            course={course}
          />

        ))
      }

    </div>
  );
}

export default CourseList;