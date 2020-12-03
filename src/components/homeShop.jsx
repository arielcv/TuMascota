import React, {Component} from 'react';
import _ from "lodash";
import ShopCard from "./shopCard";
/*
*  Componente que representa el panle de tiendas, agrupando a las tarjetas por columnas
*  
* params:
*
* - shops : listado de todas las tiendas con sus correspondientes caracteristicas
* - rowSize : cantidad de columnas por fila para mostrar todas las tiendas
*
* NOTA: la cantidad de filas depende de la cantidad de elementos en shops
* */
class HomeShop extends Component {
    constructor(props) {
        super(props);
        const {shops} = this.props;
        this.state={shops};
    }

    resizeArrayForRow(shops, rowNumber, rowSize){
        const startIndex=rowNumber*rowSize;
        return _(shops).slice(startIndex).take(rowSize).value();
    }

    render() {
        const numberOfRows=Math.ceil(this.state.shops.length/this.props.rowSize);

        const shopRowsItems = [];
        for (let i = 0; i < numberOfRows; i++) {
            const {shops}=this.state;
            shopRowsItems.push(
                <div className="card-deck" style={{marginLeft:'10px',marginTop:'20px', marginRight:'10px'}}>
                    {this.resizeArrayForRow(shops,i,this.props.rowSize).map((shop)=>{
                        return(
                            <ShopCard
                                key={shop.id}
                                shopName={shop.shopName}
                                shopDescription={shop.shopDescription}
                                path={shop.path}
                            />
                        )
                    })}
                </div>);
        }
        console.log("This is",shopRowsItems);
        return <div>{shopRowsItems}</div>
    }
}

export default HomeShop;