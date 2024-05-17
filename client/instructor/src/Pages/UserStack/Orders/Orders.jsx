import React from 'react'
import OrderList from './OrderList'
import Pagination from '../../../Components/Pagination/Pagination'
import OrderCount from './OrderCount'

export default function Orders() {
    return (
        <>
            <div className="page-content-wrapper border">
                {/* Title */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="h3 mb-2 mb-sm-0">My Orders</h1>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <OrderCount/>
                    <div className="card-body px-0">
                        <div className="table-responsive border-0">
                            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 rounded-start">Order Id</th>
                                        <th scope="col" className="border-0">Learner Id</th>
                                        <th scope="col" className="border-0">Amount</th>
                                        <th scope="col" className="border-0">Address</th>
                                        <th scope="col" className="border-0">City</th>
                                        <th scope="col" className="border-0 rounded-end">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <OrderList />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    )
}
