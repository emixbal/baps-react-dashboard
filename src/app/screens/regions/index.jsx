import React, { Component } from 'react';
import { connect } from 'react-redux';

//import componenets
import RegionCard from "./RegionCard"

//import redux action
import { fetchAll } from '../../redux/actions/regions';

class RegionScreen extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.dispatch(fetchAll());
    }
    render(){
        console.log(this.props.region.data);
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
                    <button className="btn btn-primary btn-md offset-sm-10">Tambah data</button>
                </div>
                <hr />
                <div className="row">
                    {
                        this.props.region.data.map(data =>
                            <RegionCard key={data.id} name={data.first_name} />
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