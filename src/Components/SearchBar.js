import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }
        handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }
    
    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }
    render(){
        return (
            <form>k
             <div className="form-group">
                <label htmlFor="search-input" className="col-2 col-form-label">Search</label>
                <div className="col-10">
                    <input className="form-control" type="text" placeholder="Search..." id="search-input" 
                    value={this.props.filterText}  onChange={this.handleFilterTextInputChange}/>
                </div>
                <div className="checkbox">
                    <p>
                        <input type="checkbox" checked={this.props.inStockOnly} 
                        onChange={this.handleInStockInputChange}/>
                        {' '}
                        Only show products in stock
                    </p>
                </div>
             </div>
            </form>
        )
    }
}