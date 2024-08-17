import React, { useState } from 'react';

const ListWrapper = ({ items }) => {
    const [selectedItemId, setSelectedItemId] = useState(undefined);

    const selectedItem = items.find(item => item.id === selectedItemId);

    return (
      <>
        Opção selecionada: {selectedItem && <div>{selectedItem.name}</div>}
        <ul>
          {items.map(item => (
            <li
              data-cy="list-item"
              key={item.id}
              onClick={() => setSelectedItemId(item.id)}
              style={{
                cursor: 'pointer',
                backgroundColor: item.id === selectedItemId ? 'darkblue' : 'lightgreen',
                color: 'magenta',
                fontSize: '18px',
                listStyle: 'none',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListWrapper