var books = [{
    title: "Hederskriget",
    author: "Andreas Danielson",
    src: '1VK_1.jpg',
    price: 230,
    link:"page3.html",
},
    {
        title: "Spektulära kommandoräder",
        author: "Andreas Frankson",
        src: "1vk_2.jpg",
        price: 120,
    },

    {
        title: "Fasornas krig",
        author: "John Ellis",
        src: '1vk_3.jpg',
        price: 55,
    },
    {
        title: "Stridens skönhet och sorg 1918",
        author: "Peter Englund",
        src: '1vk_4.jpg',
        price: 199,
    },
    {
        title: "Det första världskriget",
        author: "John Keegan",
        src: '1vk_5.jpg',
        price: 123,
    },
    {
        title: "Första världskriget",
        author: "Marco Smedberg",
        src: '1vk_6.jpg',
        price: 249,
    },
    {
        title: "Stridets skönhet och sorg",
        author: "Peter Englund",
        src: '1vk_7.jpg',
        price: 199,
    },
    {
        title: "Konstnären som stupade i första värdskriget",
        author: "Ivan Lönnberg",
        src: '1vk_8.jpg',
        price: 159,
    },
    {
        title: "Filosofernas krig",
        author: "Svante Nordin",
        src: '1vk_9.jpg',
        price: 170,
    },
    {
        title: "Svenskarna i första världskriget",
        author: "Nils Fabiansson",
        src: '1vk_10.jpg',
        price: 269,
    },
    {
        title: "Första världskriget i bilder",
        author: "J H J Andriessen",
        src: '1vk_11.jpg',
        price: 281,
    },
    {
        title: "Första världskriget",
        author: " H P Willmott",
        src: '1vk_12.jpg',
        price: 222 ,
    },
    {
        title: "Krigets fångar och änglar",
        author: "Per Allan Olsson",
        src: '1vk_13.jpg',
        price: 199,
    },
    {
        title: "Europa & skulden",
        author: "Niklas Ekdal",
        src: "1vk_14.jpg",
        price: 190,
    },
    {
        title: "Det första världskriget",
        author: "John Keegan",
        src: '1vk_15.jpg',
        price: 123,
    },
    {
        title: "Motståndets berättelser",
        author: " Sofi Qvarnström",
        src: '1vk_16.jpg',
        price: 225,
    },














];


let grid = document.querySelector('.book-grid');


function makeItem(title, price, author, src, link) {
    let itemElement = document.createElement('a');
    itemElement.href=link || "#";
    itemElement.classList.add('book-item');

    let imgElement = document.createElement('img');
    imgElement.src = src;

    let textElement = document.createElement('div');
    textElement.classList.add('text');



    let titleElement = document.createElement('h4');
    titleElement.innerText = title;


    let authorElement = document.createElement('strong');
    authorElement.innerText = author;


    let priceElement = document.createElement('h2');
    priceElement.innerText = price;

    let sekElement = document.createElement('sup');
    sekElement.innerText = 'SEK';

    priceElement.appendChild(sekElement);




    textElement.appendChild(titleElement);
    textElement.appendChild(authorElement);
    textElement.appendChild(priceElement);

    itemElement.appendChild(imgElement);
    itemElement.appendChild(textElement);


    grid.appendChild(itemElement);


}




for (let i = 0; i < books.length; i++) {

    var bok = books[i];


    makeItem(bok.title, bok.price, bok.author, bok.src, bok.link);

}
