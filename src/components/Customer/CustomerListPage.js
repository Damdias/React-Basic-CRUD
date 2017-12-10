import React from "react";

let CustomerList = (props) => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.customers.map((customer,i) =>
                            (
                                <tr key={i}>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>
                                    <button onClick={()=> props.editHandler(customer)} className="btn btn-warning btn-xs">Edit</button>{" "}
                                    <button onClick={()=> props.deleteHandler(customer)} className="btn btn-danger btn-xs">Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;