import React from 'react';
import PropTypes from 'prop-types'

const Table = ({ cols, data }) => {
    return (
        <div class="table-responsive">
            <table className={`table `}>
                <thead>
                    <tr>
                        {cols.map((headerItem, index) => (
                            <th key={index}>{headerItem.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {cols.map((col, key) => (
                                <td key={key}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    cols: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    
}



export default Table;