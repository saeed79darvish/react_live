import React, { useEffect, useState } from 'react';

const List = ({ removeItem, items }) => {
    const [filtered, setFiltered] = useState([])
    useEffect(() => {
        setFiltered(items)
    }, [])

    const handleChange = (e) => {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = items;
            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();

                return lc.includes(filter);
            });
        } else {
            newList = items;
        }
        setFiltered(newList)

    }

    return (
        <div>
            <input type="text" className="input" onChange={handleChange} placeholder="Search..." />
            <ul>
                {filtered.map((item, index) => (
                    <li key={index}> {item}
                        <button onClick={() => removeItem(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;