const products = [
    {
      id : 1,
      name: "Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
      price: "Rp. 5.000.000",
    },{
      id : 2,
      name: "Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
      price: "Rp. 5.000.000",
    },
    {
      id : 3,
      name: "Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
      price: "Rp. 5.000.000",
    },
    {
      id : 4,
      name: "Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
      price: "Rp. 5.000.000",
    },
    {
      id : 5,
      name: "Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
      price: "Rp. 5.000.000",
    },
  ];
//   let main = document.getElementById("main");
  products.forEach((product) => {
      document.write(`
      <figure>
        <img src="${product.image}" alt="${product.name}">
        <figcaption>
          <h1>${product.name}</h1>
          <h2>${product.price}</h2>
          <button onClick="confirm('Apakah anda ingin membeli?')">Beli Sekarang</button>
          <button onClick="alert('Like saja')">Like</button>
          <button onClick="prompt('Apa kmu menyukai produk ini?')">Komen</button>
        </figcaption>
      </figure>
    `);
  });