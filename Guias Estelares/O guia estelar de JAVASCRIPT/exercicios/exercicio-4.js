/* 
buscar e contar dados de array

contar o numero de categorias e numero de livros em cada categoria
contar o numero de autores
mostrar livros do autor Augusto cury
transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor
*/

//array de objetos 
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalCategories = booksByCategory.length;

for(let index of booksByCategory){
    console.log('Total de livros da categoria: ', index.category)
    console.log(index.books.length);
}

function countAuthors(){
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }
    
    console.log("total de autores:", authors.length)
}


let autorLivro = '';

function booksOfAuthor(autor){
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === autor){
                books.push(book.title);
            }
        }
    }
    
    console.log(`Total de livros do autor ${autor}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');