let products = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    category: "editor",
    stock: 5,
    price: 3500,
    offer: 20,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "/img/2-image.jpg",
    category: "editor",
    stock: 5,
    price: 800,
    offer: false,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    category: "admin",
    stock: 5,
    price: 1200,
    offer: 50,
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    category: "admin",
    stock: 2,
    price: 2200,
    offer: null,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    category: "suscriptor",
    stock: 0,
    price: 4800,
    offer: "",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    category: "suscriptor",
    stock: 2,
    price: 2750,
  },
];

/* id: 6,
email: "tracey.ramos@reqres.in",
first_name: "Tracey",
last_name: "Ramos",
avatar: "https://reqres.in/img/faces/6-image.jpg",
category: "suscriptor",
stock: 2,
price: 2750, */

// shallow copy
/*
 * const newProducts = [...products];
 * const newProducts = products.map(item => item)
 */

// deep clone (con JS vanilla)
const productsJSON = JSON.stringify(products);
const newProducts = JSON.parse(productsJSON);

const newUser = { id: 10, first_name: "Maxi" };
newProducts.push(newUser);

newProducts[5].category = "Administrador";

console.log(newProducts);
