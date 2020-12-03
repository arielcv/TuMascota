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

        const {shopName,path,shopDescription} = this.props

        return (
            <div className="card col-3" style={{width: "18rem",}}>
                <img className="card-img-top" src={path} alt="Card image cap" height="200"  />
                    <div className="card-body">
                        <h4 className="card-text">{shopName}</h4>
                        <p className="card-text">{shopDescription}</p>
                        <a href="#" className="btn btn-primary btn-goShop">Go Shop</a>
                    </div>
            </div>
        )
    }
}
export default ShopCard;
