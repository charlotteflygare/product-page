import React from "react"

const productsJson = require("../products.json")

// console.log("Products: (Remove this line in app.js!)", productsJson)

class Product extends React.Component {

  render() {
    return (
        <div className="Container">
          <h2>{this.props.title}</h2>
          <div className="Imagecontainer">
            <img src={this.props.image}/>
          </div>

          <div className="List">
            <ul>
              <li>{this.props.type}</li>
              <li>{this.props.substance}</li>
              <li>{this.props.size}</li>
              <li>{this.props.numberInPack}st i förpackningen</li>
            </ul>
          </div>
          <div className="Buttoncontainer">
            <div className="Kop"><p>{this.props.price} kr</p></div>
            <button className="Buttonstyling"><p>Köp</p></button>
          </div>
          <div className="Leverans">
            <p>Leveranstid {this.props.deliveryTime}</p>
          </div>
        </div>
    )
  }

}

export default Product
