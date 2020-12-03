import React, {Component} from "react"
/*
Componente que representa a la tarjeta de cada tienda

Params:
-path : ruta de la imagen de la tienda
-shopName : nombre de la tienda
-shopDescription :  descripcion de la tienda

 */
class ShopCard extends Component {
    render() {
        return (
            <div className="card" style={{width: "18rem",}}>
                <img className="card-img-top" src={this.props.path} alt="Card image cap" height="200"  />
                    <div className="card-body">
                        <h4 className="card-text">{this.props.shopName}</h4>
                        <p className="card-text">{this.props.shopDescription}</p>
                        <a href="#" className="btn btn-primary btn-goShop">Go Shop</a>
                    </div>
            </div>
        )
    }
}
export default ShopCard;