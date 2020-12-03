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
    state = {
        shops: null
    }

    constructor(props) {
        super(props);
        // const {shops} = this.props;
        // this.state={shops};
    }

    resizeArrayForRow(shops, rowNumber, rowSize){
        const startIndex=rowNumber*rowSize;
        return _(shops).slice(startIndex).take(rowSize).value();
    }

    componentWillMount() {
        const shops = []
        const ids = [1,2,3,4,5,6,7,8]
        const shopName = ['a','b','c','d','e','f','g','8']
        const shopDescription = ["xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx"]
        const path = ["root","root","root","root","root","root","root","root"]

        for (let i = 0; i < 8; i++){
            shops.push({id:ids[i],shopName:shopName[i],shopDescription:shopDescription[i],path:path[i]})
        }
        this.setState({shops})
    }

    render() {

        const numberOfRows=Math.ceil(this.state.shops.length/this.props.rowSize);


        const shopRowsItems = [];
        for (let i = 0; i < numberOfRows; i++) {
            const {shops}=this.state;
            shopRowsItems.push(
                <div className="row card-deck card-style">
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
