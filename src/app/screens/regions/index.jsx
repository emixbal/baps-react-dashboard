import React, { Component } from 'react';

import RegionCard from "./RegionCard"

class RegionScreen extends Component {
    render(){
        return(
            <>
                <div className="row">
                    <button className="btn btn-primary btn-md offset-sm-10">Tambah data</button>
                </div>
                <hr />
                <div className="row">
                    <RegionCard />
                    <RegionCard />
                    <RegionCard />
                    <RegionCard />
                    <RegionCard />
                    <RegionCard />
                </div>
            </>
        )
    }
}

export default RegionScreen;