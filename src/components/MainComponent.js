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
import {addComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from "../redux/ActionCreators";
import {actions} from 'react-redux-form';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {
        dispatch(fetchDishes())
    },
    resetFeedbackForm: () => {
        dispatch(actions.reset('feedback'))
    },
    fetchComments: () => {
        dispatch(fetchComments())
    },
    fetchPromos: () => {
        dispatch(fetchPromos())
    },
    fetchLeaders: () => {
        dispatch(fetchLeaders());
    }
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders()
    }

    render() {
        const HomePage = () => {
            return (
                <Home dishes={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.dishes.isLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotions={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                      promosLoading={this.props.promotions.isLoading}
                      promosErrMess={this.props.promotions.errMess}
                      leaders={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                      leadersLoading = {this.props.leaders.isLoading}
                      leadersErrMess = {this.props.leaders.errMess}
                />
            )
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetailComponent
                    dishes={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comment={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}

                />
            );
        };
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/aboutus' component={() => <AboutUs leaders={this.props.leaders.leaders}/>}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/contact'
                           component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        )

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));