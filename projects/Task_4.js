fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json')
    .then(response => response.json())
    .then(data => {
        let address = `Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`;
        let purchaseInfo = `${data.person.lastName} ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`;
        console.log(address);
        console.log(purchaseInfo);
    })
    .catch(error => console.error('Ошибка:', error));

