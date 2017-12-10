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
            formTitle: ''
        };
        this.editCutomer = this.editCutomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }
    createCustomer(customer) {
        var newc = this.state.customers.slice();
        newc.push(customer);
        this.setState({ customers: newc });
    }
    editCutomer(customer) {
       var newc = Object.assign({}, this.state.selectedCustomer);
       this.state.selectedCustomer.firstName = "datmi";
        this.setState((pre=> ({
            selectedCustomer: pre.selectedCustomer,
            formTitle: 'Edit Customer infor',
        })));
        console.log(this.state.selectedCustomer);
      
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

                <CustomerAddModal customer = {this.state.selectedCustomer}
                     createCustomer={this.createCustomer} title={this.state.formTitle} />
                <CustomerList editHandler={this.editCutomer} deleteHandler={this.deleteCustomer} customers={this.state.customers} />

            </div>
        )
    }
}
export default CustomerPage;