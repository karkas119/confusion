import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent'

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };

    }


    onDishSelect(dish){
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null){
            return (
                 <DishDetailComponent dishes = {this.state.selectedDish}/>
            )
        } else {
            return (
                <div></div>
            );
        }
    }


    render(){
        const Menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width = '100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return(
            <div className='container'>
                <div className='row'>
                    {Menu}
                </div>
                <div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}

export default Menu;