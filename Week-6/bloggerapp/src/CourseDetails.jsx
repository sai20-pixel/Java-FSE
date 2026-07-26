function CourseDetails() {
    const courses = [
        {
            id: 1,
            name: "React",
            duration: "6 Weeks",
        },
        {
            id: 2,
            name: "NodeJS",
            duration: "8 Weeks",
        },
    ];

    return (
        <>
            <h2>Course Details</h2>

            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name} - {course.duration}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CourseDetails;