import React, {Component} from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import {COMMENTS} from './shared/comments';
import {LEADERS} from './shared/leaders';
import {PROMOTIONS} from './shared/promotions';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import Contact from './components/ContactComponent';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router-dom';
import DishDetailComponent from "./components/DishDetailComponent";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comment: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home dishes={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotions={this.state.promotions.filter((promo) => promo.featured)[0]}
                      leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetailComponent
                    dishes={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comment={this.state.comment.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
            );
        };

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/home' component={HomePage}/>
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
                        <Route path='/menu/:dishId' component={DishWithId}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Redirect to='/home'/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;