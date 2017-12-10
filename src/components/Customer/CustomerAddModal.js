import React, { Component } from 'react';

class CustomerAddModal extends Component {
    constructor(props) {
        super(props);

        this.onSave = this.onSave.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
    onSave() {
        this.props.createCustomer(this.props.customer);
    }
    onTextChanged(e) {
        this.props[e.target.id] = e.target.value;

    }
    render() {
        return (

            <div className="form">
                <h2>{this.props.title}</h2>
                <div className="form-grop">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={this.props.customer.firstName} 
                    onChange={this.onTextChanged} className="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div className="form-grop">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={this.props.customer.lastName} onChange={this.onTextChanged} 
                    className="form-control" id="lastName" placeholder="Last Name" />
                </div>
                <div className="form-group">

                </div>
                <button type="submit" onClick={this.onSave} className="btn btn-success">Submit</button>
            </div>

        )
    }
}
export default CustomerAddModal;