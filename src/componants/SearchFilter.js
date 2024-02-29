import React from "react";

export default function SearchFilter() {
  return (
    <>
      <div className="search-filter-container">
        <div className="search-form">
          <form>
            <div className="form-group">
              <label htmlFor="query">What do you want to work with?</label>
              <div className="input-container">
                <i className="app-icon fa fa-search" aria-hidden="true" />
                <input
                  id="query"
                  name="query"
                  type="text"
                  autoComplete="off"
                  maxLength="64"
                  required
                  placeholder="Rust, Solidity, React, Kubernetes…"
                  autoFocus
                />

                <button type="submit">search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
