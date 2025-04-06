import React from 'react';

function Table() {
  const data = [
    { id: 1, name: 'Przykład 1', url: 'http://example.com', text: 'Opis 1' },
    { id: 2, name: 'Przykład 2', url: 'http://example2.com', text: 'Opis 2' },
  ];

  return (
    <div>
      <h1>Tabela</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nazwa</th>
            <th scope="col">URL</th>
            <th scope="col">Tekst</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.url}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
