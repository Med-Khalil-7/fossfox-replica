import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Title from "../components/Title";
import SearchFilter from "../components/SearchFilter";
import Subscribe from "../components/Subscribe";
import Links from "../components/Links";
import Footer from "../components/Footer";
import Table from "../components/Table";

export default function Home() {
 

  return (
    <div className="app-wrapper">
      <div className="app-left" />
      <div className="app-main">
        <div className="app-page-contents">
          <Header />
          <Title />
        </div>
        <div className="app-footer">
          <div className="app-footer-test">
            <div className="app-footer-links">
              <Links />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
