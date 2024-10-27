import React from 'react'

export const Table = ({ data }) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>E-mail</th>
                <th>Phone no.</th>
            </tr>
            {data.map((item) =>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}          
        </tbody>
    </table>
  )
}
