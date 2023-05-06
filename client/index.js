//on load functionality
document.addEventListener('DOMContentLoaded', () => {
  //variable to store the selected body - easier to append
  const body = document.querySelector('body');

  //fetch request to get all the items from the grocery list
  fetch('/items')
    .then((data) => data.json())
    .then((res) => {
      //iterate through the groceryList and create a div/append to body at each iteration
      //create a div element and individual p tags containing item price and quantity
      for (let i = 0; i < res.length; i++) {
        //variables to extract info returned from fetch request
        const item = res[i].item;
        const price = res[i].price;
        const quantity = res[i].quantity;

        //set the text content to the grocery list
        const singleItem = document.createElement('div');
        singleItem.textContent = `item: ${item}, price: ${price}, quantity: ${quantity}`;
        //append it to the body
        body.appendChild(singleItem);
      }
    })
    .catch((err) => console.log('error: ', err));

  //functionality to add new items on click of submit button
  function addItems(item, price, quantity) {
    const data = { item: item, price: price, quantity: quantity };
    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(data),
      },
    })
      .then((data = data.json()))
      .then((res) =>
        console.log(res).catch((err) => console.log('error: ', err))
      );
  }

  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    //grab the values of all inputs
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    //if any fields are empty, throw error (alert)
    if (!item || !price || !quantity)
      return alert('Please fill out all inputs🚫!');
    //otherwise invoke addItems
    //else console.log(item, price, quantity);
    else addItems(item, price, quantity);
  });
});
