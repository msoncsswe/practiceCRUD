//on load functionality
document.addEventListener('DOMContentLoaded', () => {
  //variable to store the selected body - easier to append
  const body = document.querySelector('body');

  //fetch request to get all the items from the grocery list
  async function getGroceryList() {
    try {
      const response = await fetch('/items');
      const jsonData = response.json();
      return jsonData;
    } catch (error) {
      return 'error:', error;
    }
  }

  //below should get the grocery list from the database in an array of objects
  const groceryList = getGroceryList();

  console.log(groceryList);

  //iterate through the groceryList and create a div/append to body at each iteration
  for (let i = 0; i < groceryList.length; i++) {
    //create a div element and individual p tags containing item price and quantity
    const singleItem = document.createElement('div');

    //variables to extract info returned from fetch request
    const item = groceryList[i].item;
    const price = groceryList[i].price;
    const quantity = groceryList[i].quantity;
    console.log(item, price, quantity);

    //set the text content to the grocery list
    singleItem.textContent(
      `item: ${item}, price: ${price}, quantity: ${quantity}`
    );
    //append it to the body
    body.appendChild(singleItem);
  }
});
