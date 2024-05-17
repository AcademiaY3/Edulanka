import React from 'react'
import OrderList from '../Orders/OrderList'
import Pagination from '../../../Components/Pagination/Pagination'
import PaymentList from './PaymentList'
import PaymentCount from './PaymentCount'

export default function Payment() {
  return (
    <>
      <div className="page-content-wrapper border">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h1 className="h3 mb-2 mb-sm-0">My Payments</h1>
          </div>
        </div>
        <PaymentCount/>
        <div className="card bg-transparent">
          <div className="card-body px-0">
            <div className="table-responsive border-0">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 rounded-start">Payment Id</th>
                    <th scope="col" className="border-0">User Id</th>
                    <th scope="col" className="border-0">Amount</th>
                    <th scope="col" className="border-0">Course Name</th>
                    <th scope="col" className="border-0">Approved</th>
                    <th scope="col" className="border-0 rounded-end">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <PaymentList />
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
