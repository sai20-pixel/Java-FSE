function BookDetails() {
    const books = [
        {
            id: 1,
            title: "React Basics",
            author: "Jordan Walke",
            price: 550,
        },
        {
            id: 2,
            title: "JavaScript ES6",
            author: "Brendan Eich",
            price: 650,
        },
    ];

    return (
        <>
            <h2>Book Details</h2>

            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <b>{book.title}</b> | {book.author} | ₹{book.price}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BookDetails;