import React, { useEffect, useState } from 'react'
import OrderList from '../Orders/OrderList'
import Pagination from '../../../Components/Pagination/Pagination'
import PaymentList from './PaymentList'
import PaymentCount from './PaymentCount'
import PaymentService from '../../../Services/PaymentService/PaymentService'

export default function Payment() {
  const [loading, setLoading] = useState(false)
  const [pays, setPays] = useState([''])
  const [total, setTotal] = useState(0)
  const [totalAmt, setTotalAmt] = useState(0)
  const [totalApproved, setTotalApproved] = useState(0)
  const [totalPending, setTotalPending] = useState(0)
  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await PaymentService.getAllInstructorsPays()
      console.log(result)
      if (result) {
        setTotal(result.data.data.total)
        setTotalAmt(result.data.data.total_amount)
        setTotalApproved(result.data.data.approved_payments)
        setTotalPending(result.data.data.pending_payments)
        setPays(result.data.data.payments)
      }
    } catch (error) {
      if (error.response.data.code) {
        setPays([''])
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="page-content-wrapper border">
          {/* Title */}
          <div className="row">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">My Payments</h1>
            </div>
          </div>
          <PaymentCount total={total} totalAmt={totalAmt} approved={totalApproved} pending={totalPending} />
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
                      <PaymentList pays={pays} />
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination total={total}/>
          </div>
        </div>
      )}

    </>
  )
}
