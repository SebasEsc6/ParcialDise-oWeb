import React from 'react'

const ShowChances = ({chances}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Loteria</th>
                    <th>Número</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>{chances?.map((item, i) => (
                
                <tr key={i}>
                    <td> {item.loteriaValue}</td>
                    <td>{item.numeroValue}</td>
                    <td>{item.precioValue}</td>
                </tr>
            )
            )
            }
            </tbody>
        </table>
  )
}

export default ShowChances