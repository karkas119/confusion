import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetailComponent extends Component {
    render(){
        const COMMENTS = this.props.dishes.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {comment.date}</p>
                    </div>
                )
            }
        );
        return (
            <div key={this.props.id} className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width = '100%' src={this.props.dishes.image} alt={this.props.dishes.name} />
                        <CardBody>
                            <CardTitle>{this.props.dishes.name}</CardTitle>
                            <CardText>{this.props.dishes.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>{ COMMENTS }</CardText>
                        </CardBody>
                    </Card>
                </div>

            </div>
        )
    }

}

export default DishDetailComponent;