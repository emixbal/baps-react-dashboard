import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

//import redux action
import { create, fetchAll } from '../../redux/actions/region';

class RegionModalAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            description:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleCancel() {
        this.setState(prevState => ({
            name: '',
            modal: !prevState.modal
        }));
    }

    handleSubmit() {
        const region = {
            "name":this.state.name,
            "description":this.state.description
        }
        this.props.dispatch(create(region));
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.props.dispatch(fetchAll());
    }

    // dinamically form fill
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        // console.log();
        
        // segera di ganti dengan toast
        if(this.props.region.isError){
            console.log(this.props.region.errorMessage)
        }
        // segera di ganti dengan toast
        if(this.props.region.isNetworkError){
            console.log("tidak dapat terhubung ke server")
        }
        return (
            <div>
                <Button color="primary" onClick={this.handleOpen}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label >Region name</label>
                            <input
                                type="name"
                                name="name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="nameHelp"
                                placeholder="Enter name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label >Region description</label>
                            <textarea
                                type="description"
                                name="description"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="nameHelp"
                                placeholder="Enter description"
                                value={this.state.description}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
                        <Button color="primary" onClick={this.handleSubmit}>Simpan</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToPros = state => ({
    region: state.region
})

export default connect(mapStateToPros)(RegionModalAdd);
