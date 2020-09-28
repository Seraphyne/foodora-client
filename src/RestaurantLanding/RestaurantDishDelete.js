import React from 'react';

export default class RestaurantDishDelete extends React.Component{
    constructor (props){
        super(props);
      this.handleDelete = this.handleDelete.bind(this);
    };
    

    handleDelete() {
        this.props.delete(this.props.dish.id)
    }

    render(){
        return(
            <div>
                <button className="button"
                onClick={this.handleDelete}
                >
                Delete
                </button>
            </div>
        );
    }
}