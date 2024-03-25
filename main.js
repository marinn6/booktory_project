//must create variables
const bookForm = document.getElementById("form");
const bookList = document.getElementById("book-list");
const header = document.getElementById("header");

//removes book, works the trash can
// trash.forEach(trashButton => {
//     trashButton.addEventListener('click', (e)=> {
//         e.target.parentElement.remove()
//     })
// })


bookForm.addEventListener('submit', (e) => { //submit is an event type
    e.preventDefault(); //prevents page from resetting when clicking on add book button and form is submitted


    const [title, author, imageUrl, price, stock] = e.target

    const bookObj = {title: title.value, author: author.value, imageUrl: imageUrl.value, price: price.value, stock: stock.value}


    // console.log(createBook(bookObj));

    createBook(bookObj)

})

function createBook(bookObj) {
    const listItem = document.createElement("li");
    listItem.setAttribute("class","book");

    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("class","book__info");

    const title = document.createElement("p");
    title.setAttribute("class","title");

    const author = document.createElement("p")
    author.setAttribute("class","author")

    const imageUrl = document.createElement("img")
    imageUrl.setAttribute("class","imageUrl")
    imageUrl.setAttribute("src",bookObj.imageUrl); //add source for imageUrl
    
    const price = document.createElement("p")
    price.setAttribute("class","price")
    
    const stock = document.createElement("p")
    stock.setAttribute("class","stock")
    
    const trash = document.createElement("button");
    trash.setAttribute("class","trash");

    trash.addEventListener('click', () => {
        trash.parentElement.remove(); //parentElement = book
    })
    
    const icon = document.createElement("i");
    icon.setAttribute("class","fa-regular fa-trash-can");

/* 
                    li
    img          infoDiv                trash
          title-author-price-stock

*/

    title.innerText = bookObj.title;
    author.innerText = bookObj.author;
    price.innerText = bookObj.price;
    stock.innerText = bookObj.stock;
    if (stock.innerText === "Out of Stock"){
        stock.style["border"]= "1px solid red"
        stock.style["background"] = "red";
    }


//adding the children to the parent ex:parent = bookInfo and child = title,author, price, stock
bookInfo.append(title, author, stock, price)
bookList.append(listItem);
listItem.append(imageUrl, bookInfo, trash);
trash.append(icon);

// This helps reset each section in the form each time a book is added
    bookForm.reset()

}






