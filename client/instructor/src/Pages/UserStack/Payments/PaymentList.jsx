import React from 'react'
import formatDate from '../../../Utils/Constants/FormatDate'

export default function PaymentList({ pays }) {
  console.log(pays)
  return (
    <>
      {pays.length === 0 ? (
        <>
          <h5>no payments</h5>
        </>) : (
        pays.map((pay) => (
          <tr>
            <td>{pay._id}</td>
            <td>{pay.learner_id}</td>
            <td>Rs {pay.amount}.00</td>
            <td>{pay.course_name}</td>
            <td className='text-center'>
              {pay.approved ? (
                `✅`
              ) : (
                `❌`
              )}
            </td>
            <td>{formatDate(pay.createdAt)}</td>
          </tr>
        ))
      )}
    </>
  )
}
