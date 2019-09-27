import React, { Component } from 'react'

class RegionCard extends Component {
    render(){
        return(
            <div className="col-sm-3 mb-sm-3">
                <div className="card">
                    <div className="card-body">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default RegionCard;