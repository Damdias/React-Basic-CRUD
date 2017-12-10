import React from "react";
import CustomerList from "./CustomerListPage";
import CustomerAddModal from "./CustomerAddModal";
let customers = [
    {
        firstName: "Damith",
        lastName: "Dias"
    },
    {
        firstName: "Jemas",
        lastName: "Smith"
    }
]
class CustomerPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            customers: customers,
            selectedCustomer: {
                firstName: "",
                lastName: ""
            },
            formTitle: 'Create New Customer',
            isNew: true,
            index: 0
        };
        this.editCutomer = this.editCutomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
    onSave() {
        this.createCustomer(this.state.selectedCustomer);
    }
    onTextChanged(e) {
        var newc = Object.assign({},this.state.selectedCustomer);
        newc[e.target.id] = e.target.value;
        this.setState({selectedCustomer: newc});
    }
    createCustomer(customer) {

        var newc = this.state.customers.slice();
        if (this.state.isNew) {
            newc.push(customer);
        }
        else {
          let index = this.state.index;
            newc[index].firstName = customer.firstName;
            newc[index].lastName = customer.lastName;
        }
        this.setState({
            customers: newc,
            formTitle: 'Create New Customer',
            selectedCustomer: {
                firstName: '',
                lastName: ''
            },
            isNew: true
        });
    }
    editCutomer(customer) {
        var newc = Object.assign({}, this.state.selectedCustomer);
        this.state.selectedCustomer.firstName = customer.firstName;
        this.state.selectedCustomer.lastName = customer.lastName;
        let index = this.state.customers.findIndex(x => x.firstName === customer.firstName);
        this.setState((pre => ({
            selectedCustomer: pre.selectedCustomer,
            formTitle: 'Edit Customer',
            isNew: false,
            index:index
        })));


    }
    deleteCustomer(customer) {
        var newc = this.state.customers.slice();
        var index = newc.findIndex(x => x.firstName === customer.firstName);
        newc.splice(index, 1);
        this.setState({ customers: newc });
    }
    render() {
        return (
            <div className="col-lg-8">

                <CustomerAddModal customer={this.state.selectedCustomer}
                    onSave={this.onSave} onTextChanged={this.onTextChanged} title={this.state.formTitle} />
                <CustomerList editHandler={this.editCutomer} deleteHandler={this.deleteCustomer} customers={this.state.customers} />

            </div>
        )
    }
}
export default CustomerPage;