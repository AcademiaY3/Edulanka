import React, { useEffect, useState } from 'react'
import OrderList from './OrderList'
import Pagination from '../../../Components/Pagination/Pagination'
import OrderCount from './OrderCount'
import OrderService from '../../../Services/OrderService/OrderService'

export default function Orders() {
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([''])
    const [total, setTotal] = useState(0)
    const [totalApproved, setTotalApproved] = useState(0)
    const [totalPending, setTotalPending] = useState(0)
    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await OrderService.getAllInstructorsOrders()
            console.log(result)
            if (result) {
                setTotal(result.data.data.total)
                setTotalApproved(result.data.data.approved)
                setTotalPending(result.data.data.pending)
                setOrders(result.data.data.orders)
            }
        } catch (error) {
            if (error.response.data.code) {
                setOrders([''])
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
                            <h1 className="h3 mb-2 mb-sm-0">My Orders</h1>
                        </div>
                    </div>
                    <div className="card bg-transparent">
                        <OrderCount total={total} approved={totalApproved} pending={totalPending} />
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
                                        <OrderList orders={orders} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination total={total} />
                    </div>
                </div>
            )}

        </>
    )
}
