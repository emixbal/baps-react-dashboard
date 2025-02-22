import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

//import redux action
import { update, getDetail } from '../../redux/actions/region';

class RegionModalUpdate extends React.Component {
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

    componentDidMount(){
        this.setState({
            name:this.props.region.regionDetail.name,
            description:this.props.region.regionDetail.description
        })
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

    async handleSubmit(id) {
        const region = {
            "name":this.state.name,
            "description":this.state.description
        }
        await this.props.dispatch(update(this.props.id, region));
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        await this.props.dispatch(getDetail(this.props.id));
    }

    // dinamically form fill
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { regionDetail } = this.props.region
        return (
            <div>
                <Button color="primary" onClick={this.handleOpen}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Region</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label >Current name: {regionDetail.name}</label>
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
                            <label >Current description:{regionDetail.description}</label>
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

export default connect(mapStateToPros)(RegionModalUpdate);
