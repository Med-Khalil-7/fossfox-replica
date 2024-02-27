import React from 'react';

const TableRow = () => {
  return (
    <tbody className="table-body">
      <tr className="table-row">
        <td className="table-cell">
          <div className="cell-content">
            <span className="index">1</span>
          </div>
        </td>
        <td className="table-cell">
          <div className="cell-content">
            <a className="app-link" href="https://fossfox.com/automattic">Automattic</a>
          </div>
        </td>
        <td className="table-cell">
          <div className="cell-content">
            <a className="app-link" href="https://fossfox.com/docker">Docker</a>,{' '}
            <a className="app-link" href="https://fossfox.com/kubernetes">K8s</a>,{' '}
            <a className="app-link" href="https://fossfox.com/php">PHP</a>,{' '}
            <a className="app-link" href="https://fossfox.com/automattic">+8 more</a>
          </div>
        </td>
        <td className="table-cell">
          <div className="cell-content sparkline">
            <svg className="sparkline-svg" viewBox="0 0 100 18">
              <polyline className="sparkline-line" points="0 3 4 2 9 2 13 2 17 3 22 3 26 7 30 4 35 3 39 4 43 7 48 3 52 3 57 3 61 5 65 13 70 9 74 3 78 4 83 3 87 5 91 2 96 5 100 0"/>
            </svg>
          </div>
        </td>
        <td className="table-cell">
          <div className="cell-content">
            <a className="app-link" href="https://fossfox.com/senior-system-administrator-at-automattic">Sr SysAdmin</a>
          </div>
        </td>
        <td className="table-cell">
          <div className="cell-content">
            <a className="app-link apply-link" href="https://fossfox.com/~5jwg" target="_blank" rel="noopener noreferrer">apply</a>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
