const menu = [
    { id: 1, name: "Hamburguer", price: 15, image: "./src/assets/burgers.svg" },
    { id: 2, name: "Churrasco", price: 34.9, image: "./src/assets/steak.svg" },
    {
      id: 3,
      name: "Frango assado",
      price: 29.9,
      image: "./src/assets/roast-chicken.svg",
    },
    {
      id: 4,
      name: "Feijoada",
      price: 17.8,
      image: "./src/assets/pork-and-beans.svg",
    },
    { id: 5, name: "Prato feito", price: 15, image: "./src/assets/lunch.svg" },
    { id: 6, name: "Salada", price: 12, image: "./src/assets/salad.svg" },
    {
      id: 7,
      name: "Macarrão de arroz",
      price: 14.9,
      image: "./src/assets/rice-noodle.svg",
    },
    {
      id: 8,
      name: "Hamburguer vegano",
      price: 15,
      image: "./src/assets/vegan-burger.svg",
    },
    {
      id: 9,
      name: "Salada de frutas",
      price: 13.9,
      image: "./src/assets/fruit-salad.svg",
    },
    { id: 10, name: "Sushi", price: 29.9, image: "./src/assets/sushi.svg" },
    { id: 11, name: "Pastel", price: 12, image: "./src/assets/fried-pastry.svg" },
    { id: 12, name: "Pizza", price: 35, image: "./src/assets/pizza.svg" },
    {
      id: 13,
      name: "Bolo de morango",
      price: 26.9,
      image: "./src/assets/strawberry-cake.svg",
    },
    { id: 14, name: "Açaí", price: 7.9, image: "./src/assets/acai.svg" },
    { id: 15, name: "Quindim", price: 19.9, image: "./src/assets/custard.svg" },
    { id: 16, name: "Sorvete", price: 4.9, image: "./src/assets/icecream.svg" },
  ];

  function renderMenu(array){
    const menuList = document.querySelector('.menu__list');

    menuList.innerHTML = '';

    for(let i = 0; i <array.length; i++){
        const currentItem = array[i];

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const pPrice = document.createElement('p');
        const button = document.createElement('button');
        const icon = document.createElement('i');
        const pAdd = document.createElement('p');

        img.src = currentItem.image;
        h2.innerText = currentItem.name;
        pPrice.innerText = 'R$' + currentItem.price.toFixed(2);
        button.id = currentItem.id;
        pAdd.innerText = 'Adidcionar';


        li.classList.add('menu__item');
        h2.classList.add('item__title');
        button.classList.add('item__button-add');
        icon.classList.add('fa', 'fa-cart-plus');
        
        button.append(icon, pAdd);
        li.append(img, h2, pPrice, button);

        menuList.appendChild(li)
    }

  }
  renderMenu(menu)