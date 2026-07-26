function BlogDetails() {
    const blogs = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Sai",
        },
        {
            id: 2,
            title: "Understanding JSX",
            author: "John",
        },
    ];

    return (
        <>
            <h2>Blog Details</h2>

            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <b>{blog.title}</b> - {blog.author}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BlogDetails;