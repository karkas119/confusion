import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class DishDetailComponent extends Component {
    render(){
        const COMMENTS = this.props.comment.map((comment) => {
                return(
                    <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                )
            }
        );


        return (
            <div className='container'>
                  <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dishes.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{this.props.dishes.name}</h3>
                        <hr/>
                    </div>
                </div>
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
            </div>

        )
    }

}

export default DishDetailComponent;