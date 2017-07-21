import React from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends React.Component{
    constructor(){
        super();
    }
    render(){
        var rows =[];
        var last_category = null;
        var products = this.props.products;
         if(this.props.filterText){
            products = products.filter( item =>
                item.name.toLowerCase()
                .includes(this.props.filterText))
         }
            if(this.props.inStockOnly){
                products = products.filter( item =>
                item.stocked == true
                )
            }
        products.forEach((product) => {
            if(product.category !== last_category)
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            rows.push(<ProductRow product={product} key={product.name}/>);
            last_category = product.category;
        });
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )

        
    }
    
}