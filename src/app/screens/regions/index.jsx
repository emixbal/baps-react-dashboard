import React, { Component } from 'react';
import { connect } from 'react-redux';

//import componenets
import RegionCard from "./RegionCard"
import RegionModalAdd from "./RegionModalAdd"

//import redux action
import { fetchAll } from '../../redux/actions/region';

class RegionScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetchAll());
    }
    render(){
        // segera di ganti dengan toast
        if(this.props.region.isError){
            alert(this.props.region.errorMessage)
        }
        // segera di ganti dengan toast
        if(this.props.region.isNetworkError){
            alert("tidak dapat terhubung ke server")
        }

        if(this.props.region.isLoading){
            return(
                <>
                    <div>Loading...</div>
                </>
            );
        }
        return(
            <>
                <div className="row">
                    <div className="offset-sm-10"><RegionModalAdd buttonLabel="Tambah data" /></div>
                </div>
                <hr />
                <div className="row">
                    {
                        this.props.region.data.map(data =>
                            <RegionCard key={data.id} name={data.name} id={data.id} />
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToPros = state => ({
    region: state.region
})

export default connect(mapStateToPros)(RegionScreen);