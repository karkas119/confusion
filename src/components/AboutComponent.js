import React, {Component} from 'react';
import {Media,} from 'reactstrap';
import {baseUrl} from "../shared/baseUrl";


class AboutUs extends Component{
    render(){
        const leader = this.props.leaders.map((item) => {
        return (
                <div key={item.id} className='col-12 mt-3'>
                <Media>

                    <Media left>
                        <img src={baseUrl + item.image} alt='not found'/>
                    </Media>
                    <Media body>
                        <Media heading>
                            {item.name}
                        </Media>
                        <h6>{item.designation}</h6>
                        {item.description}
                    </Media>
                </Media>
            </div>
        )
    });
        return(
            <div className='container'>
                <div className='row'>
                    {leader}
                </div>
            </div>
        )
    }
}



export default AboutUs;