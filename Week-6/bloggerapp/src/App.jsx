import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = false;

  let courseComponent;

  if (showCourses) {
    courseComponent = <CourseDetails />;
  }

  return (
    <>
      {courseComponent}

      {showBooks && <BookDetails />}

      {showBlogs ? <BlogDetails /> : <p>No Blogs Available</p>}
    </>
  );
}

export default App;