import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
        console.log('this.state.dishes =', this.state.dishes[0])
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish });
    }

    render() {
        return (
            <div>

                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <DishDetailComponent dishes={this.state.dishes} />
            </div>
        );
    }
}

export default Main;
