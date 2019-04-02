import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import AboutUs from './AboutComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DishDetailComponent from "./DishDetailComponent";
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comment,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home dishes={this.props.dishes.filter((dish) => dish.featured)[0]}
                      promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
                      leaders={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetailComponent
                    dishes={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
            );
        };
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/aboutus' component={() => <AboutUs leaders = {this.props.leaders}/>}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        )

    }
}

export default withRouter(connect(mapStateToProps)(Main));