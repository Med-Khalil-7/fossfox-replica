import React from 'react';


const TableRow = (props) => {
    const { index, company, founded, building, stack, oss, activity, offices, hiring, compensation, type, employment, applyLink, columns,sortBy } = props;

    return (
        <tr className="table-row">
            <td className="table-cell">
                <div className="index">
                    <span className="index">{index}</span>
                </div>
            </td>

            <td className={`table-cell ${sortBy === "company" && "selected"}`}>
                <div className="cell-content">
                    <a className="app-link" href={company.href}>{company.name}</a>
                </div>
            </td>
            {columns.founded && (
                <td className={`table-cell ${sortBy === "founded" && "selected"}`}>
                    <div className="cell-content">
                        <span>{founded}</span>
                    </div>
                </td>
            )}
            {columns.building && (
                <td className={`table-cell ${sortBy === "building" && "selected"}`}>
                    <div className="cell-content">
                        <a className="app-link" href={building.href}>{building.name}</a>
                    </div>
                </td>)}
            {columns.stack && (
                <td className={`table-cell ${sortBy === "stack" && "selected"}`}>
                    <div className="cell-content">
                        {stack.map((tech, index) => (
                            <React.Fragment key={index}>
                                <a className="app-link" href={tech.href}>{tech.name}</a>
                                {index < stack.length - 1 && ', '}
                            </React.Fragment>
                        ))}
                    </div>
                </td>
            )}
            {columns.oss && (
                <td className={`table-cell ${sortBy === "oss" && "selected"}`}>
                    <div className="cell-content">
                        <span>{oss ? "✔" : "-"}</span>
                    </div>
                </td>
            )}
            {columns.activity && (
                <td className={`table-cell ${sortBy === "activity" && "selected"}`}>
                    <div className="cell-content sparkline">
                        <svg className="sparkline-svg" viewBox="0 0 100 18">
                            <polyline className="sparkline-line" points={activity} />
                        </svg>
                    </div>
                </td>
            )}
            {columns.offices && (
                <td className={`table-cell ${sortBy === "offices" && "selected"}`}>
                    <div className="cell-content">
                        {offices.map((tech, index) => (
                            <React.Fragment key={index}>
                                <a className="app-link" href={tech.href}>{tech.name}</a>
                                {index < offices.length - 1 && ', '}
                            </React.Fragment>
                        ))}
                    </div>
                </td>
            )}
            <td className={`table-cell ${sortBy === "hiring" && "selected"}`}>
                <div className="cell-content">
                    <a className="app-link" href={hiring.href}>{hiring.name}</a>
                </div>
            </td>
            {columns.compensation && (
                <td className={`table-cell ${sortBy === "compensation" && "selected"}`}>
                    <div className="cell-content">
                        <span >{compensation}</span>
                    </div>
                </td>
            )}
            {columns.type && (
                <td className={`table-cell ${sortBy === "type" && "selected"}`}>
                    <div className="cell-content">
                        <a className="app-link" href={type.href}>{type.name}</a>
                    </div>
                </td>
            )}
            {columns.employment && (
                <td className={`table-cell ${sortBy === "employment" && "selected"}`}>
                    <div className="cell-content">
                        <a className="app-link" href={employment.href}>{employment.name}</a>
                    </div>
                </td>
            )}
            <td className="table-cell">
                <div className="cell-content">
                    <a className="app-link apply-link" href={applyLink.href} target="_blank" rel="noopener noreferrer">{applyLink.text}</a>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;
