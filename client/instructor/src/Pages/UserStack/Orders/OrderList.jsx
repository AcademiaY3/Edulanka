import React from 'react'
import formatDate from '../../../Utils/Constants/FormatDate'

export default function OrderList({ orders }) {
  console.log(orders)
  return (
    <>
      {orders.length !== 0 ? (
        <>
          {orders.map((order) => (
            <tr>
              <td>{order._id}</td>
              <td>{order.learner_id}</td>
              <td className="text-center text-sm-start">Rs {order.price}.00</td>
              <td>{order.delivery_address}</td>
              <td>{order.delivery_city}</td>
              <td>{formatDate(order.createdAt)}</td>
            </tr>
          ))}
        </>
      ) : (
        <h2>no orders</h2>
      )}
    </>
  )
}
