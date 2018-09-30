import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {

    return (
      <div className="Header"><h1>Produkter</h1>
        <div className="App">
          {productsJson.products.map((product) => {
            return <Product title={product.name}
                     image={product.image}
                     substance={product.substance}
                     type={product.type}
                     size={product.size}
                     numberInPack={product.numberInPack}
                     price={product.price}
                     deliveryTime={product.deliveryTime} />
        })}
        </div>
      </div>
    )
  }

}

export default App
