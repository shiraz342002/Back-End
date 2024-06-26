import express from "express";
const app = express();
const port = 2022;
// CREATE (Create an array of books and store books in it using the post request)
let books = [];

app.use(express.json());
app.post("/book", (req, res) => {
    const book = req.body;
    book.id = books.length ? books[books.length - 1].id + 1: 1;
    console.log(book);
    books.push(book);
    res.send("Book is added to the database");
});

//READ All (Display tha already added books)
app.get("/book",(req,res)=>{
    res.json(books);
})

//Read by specefic id (Make sure to add only 1 book)

app.get("/book/:id", (req, res) => {
    const id = +req.params.id;
    const book = books.find((book) => book.id === id);
    if (book) { 
        // res.send("Book is found :") //For debugging
        res.status(200).json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

//Update (Update the already exsisting books details)
app.put("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    updatedBook.id = id;

    let bookFound = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i] = updatedBook;
            bookFound = true;
            break;
        }
    }

    if (bookFound) {
        res.status(200).send("Book is replaced");
    } else {
        res.status(404).send("Book not found");
    }
});

//TO update a specefic property
app.patch("/book/:id", (req, res) => {
    const id = +req.params.id;
    const book = req.body;
    book.id = id;
    for (let i = 0; i < books.length; i++) {
        if (book[i].id === id) {
           
            books[i] = { ...book[i], ...book };
        }
    }
    res.send("Book is update");
});

//Delete (To Delete an already exsisting entry)

app.delete("/book/:id", (req, res) => {
    const id = +req.params.id;
    books = books.filter((i) => i.id !== id);
    res.send("Book is deleted");
});



app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
);