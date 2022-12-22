import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th onClick={() => handleClick(column.label)}>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </th>
            ),
        };
    });

    // Only sort data if sorOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    );
}

function getIcons(label, sorBy, sortOrder) {
    if (label !== sorBy) {
        return 'show both';
    }

    if (sortOrder === null) {
        return 'show both';
    } else if (sortOrder === 'asc') {
        return 'up';
    } else if (sortOrder === 'desc') {
        return 'down';
    }
}

export default SortableTable;
