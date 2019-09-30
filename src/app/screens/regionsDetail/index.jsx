import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
import RegionModalUpdate from './RegionModalUpdate'

//import redux action
import { getDetail } from '../../redux/actions/region';

class RegionsDetailScreen extends Component {
    componentDidMount() {
        this.props.dispatch(getDetail(this.props.match.params.id));
    }
    
    render(){
        if(this.props.region.isError){
            alert(this.props.region.errorMessage)
        }
        // segera di ganti dengan toast
        if(this.props.region.isNetworkError){
            alert("tidak dapat terhubung ke server")
        }

        const { regionDetail } = this.props.region

        if(this.props.region.isLoading){
            return(
                <>
                    <div>Loading...</div>
                </>
            );
        }
        
        return(
            <div>
                <div className="row">
                    <div className="offset-sm-10"><RegionModalUpdate buttonLabel="Update data" /></div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Region Name: {regionDetail.name}</p>
                                <p>Region: {regionDetail.id}</p>
                            </div>
                            <div className="col-sm-6">
                                Description: {regionDetail.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToPros = state => ({
    region: state.region
})

export default connect(mapStateToPros)(RegionsDetailScreen);
