import React from "react";
import SearchBox from "../componants/SearchBox";
import Header from "../componants/Header";
import Title from "../componants/Title";
import SearchFilter from "../componants/SearchFilter";
import Subscribe from "../componants/Subscribe";
import Links from "../componants/Links";
import Footer from "../componants/Footer";
import Table from "../componants/Table";

export default function Home() {
  return (
    <div className="app-wrapper">
      <div className="app-left" />
      <div className="app-main">
        <div className="app-page-contents">
          <Header />
          <Title />
          <SearchFilter />
          <Table/>
        </div>
        <div className="app-footer">
          <Subscribe />
          <div className="app-footer-test">
          <div className="app-footer-links">
            <Links />
          </div>
          <SearchBox />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
