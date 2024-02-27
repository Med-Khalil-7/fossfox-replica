import React from "react";

export default function SearchBox() {
  return (
    <>
      <div className="search-box">
        <div className="app-search app-search--has-query">
          <div className="app-input app-input--icon">
            <input
              name="search"
              type="text"
              autoComplete="off"
              maxLength="255"
              placeholder="search"
            />
            <i className="app-icon app-icon-search app-input__icon" aria-hidden="true" />
            <i className="app-icon app-icon-close" aria-hidden="true" />
          </div>
          <div className="app-search__results">
            <menu className="app-menu">
              {/* Menu items */}
            </menu>
          </div>
        </div>
      </div>
    </>
  );
}
