import React from "react";
import TableRow from "./TableRow";

export default function Component() {
  return (
    <section className="app-section">
      <div className="app-table">
        <table className="table">
          <thead>
            <tr>
              <th className="header-cell">
                <div className="header-content" />
              </th>
              <th className="header-cell sortable">
                <div className="header-content">Company</div>
              </th>
              <th className="header-cell sortable">
                <div className="header-content">Stack</div>
              </th>
              <th className="header-cell sortable">
                <div className="header-content">Activity</div>
              </th>
              <th className="header-cell sortable">
                <div className="header-content">Hiring</div>
              </th>
              <th className="header-cell sortable">
                <div className="header-content">...</div>
              </th>
            </tr>
          </thead>
          <TableRow />
          <TableRow />
        </table>
      </div>
    </section>
  );
}
