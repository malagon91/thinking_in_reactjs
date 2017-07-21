import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilteredTable extends React.Component{
    constructor(){
        super();
        this.state = {
            filterText:'',
            inStockOnly:false
        };
       this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    
      handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} 
                 onFilterTextInput={this.handleFilterTextInput}
                 onInStockInput={this.handleInStockInput} />
                <ProductTable products = {this.props.store}
                 filterText={this.state.filterText}
                 inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}