import React from "react"
import Product from "./product"
const productsApi = "http://localhost:8080/products"

console.log("Products: (Remove this line in app.js!)", productsApi)

class App extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch(productsApi)
      .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        products: json
      })
    })
  }

  render() {

    return (
      <div className="Header"><h1>Produkter</h1>
        <div className="App">
          {this.state.products.map((product) => {
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
