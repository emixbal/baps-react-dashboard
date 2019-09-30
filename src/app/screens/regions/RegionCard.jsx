import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RegionCard extends Component {
    render(){
        return(
            <div className="col-sm-3 mb-sm-3">
                <Link to={"/admin/regions/detail/"+this.props.id}>
                    <div className="card text-center">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="fa fa-flag"></i></li>
                            <li className="list-group-item">{this.props.name}</li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    }
}

export default RegionCard;