import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import components
import RegionModalUpdate from './RegionModalUpdate';
import AlertError from '../../components/AlertError';

//import redux action
import { getDetail } from '../../redux/actions/region';
import { getClusterByRegionId } from '../../redux/actions/cluster';

class RegionsDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActiveSwitch : false,
        }
    }
    componentDidMount() {
        this.props.dispatch(getDetail(this.props.match.params.id));
        this.props.dispatch(getClusterByRegionId(this.props.match.params.id));
    }

    handleActiveSwitch(){
        alert("sss")
        // const region = {
        //     "is_active":!this.props.region.regionDetail.is_active
        // }
        // await this.props.dispatch(update(this.props.match.params.id, region));
        // await this.props.dispatch(getDetail(this.props.match.params.id));
    }
    
    render(){
        if(this.props.region.isError){
            return(
                <AlertError
                    message={this.props.region.errorMessage}
                    statusCode={this.props.region.statusCode}
                />
            )
        }
        if(this.props.region.isLoading){
            return(
                <div>Loading...</div>
            );
        }

        //destruct var
        const { regionDetail } = this.props.region;
        
        return(
            <div>
                <div className="row">
                    <div className="col-sm-10">
                        <input className="btn" onChange={()=>alert("hallo")} />
                        <div className="float-right">
                            <div className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitches"
                                    // checked={this.props.region.regionDetail.is_active}
                                    // checked={this.state.isActiveSwitch}
                                    checked={true}
                                    onChange={()=>alert("hallo")}
                                />
                                <label className="custom-control-label">isActive?</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 float-right"><RegionModalUpdate buttonLabel="Update data" id={regionDetail.id} /></div>
                </div>
                <hr />
                <div className="card text-light bg-primary mb-sm-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Region Name: <strong>{regionDetail.name}</strong></p>
                                <p>Region ID: <strong>{regionDetail.id}</strong></p>
                            </div>
                            <div className="col-sm-6">
                                <p>Description: <strong>{regionDetail.description}</strong></p>
                                <p>Towers Amount: 89</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="card">
                        <div className="card-header">
                            Clusters:
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {this.props.cluster.isLoading === true ? <div className="text-center">Loading...</div> :
                                    <>
                                    {this.props.cluster.data.length===0?<div className="col-sm-12">Belum Ada Cluster</div>:
                                        <>
                                        {
                                            this.props.cluster.data.map(data=>
                                                <div key={data.id} className="col-sm-3 mb-sm-1">
                                                    <Link to="">
                                                        <div className="card text-center">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item"><i className="fa fa-flag"></i></li>
                                                                <li className="list-group-item">{data.name}</li>
                                                            </ul>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                        </>
                                    }
                                    </>                     
                                }
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToPros = state => ({
    region: state.region,
    cluster: state.cluster,
})

export default connect(mapStateToPros)(RegionsDetailScreen);
