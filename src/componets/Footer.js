import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container my-5 text-dark">
      <footer className="text-center ">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/">Home</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/about">About</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/pricing">Pricing</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/support">Support</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/product">Why E-Docs</Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Bring knowledge, documents, and projects together in one spot
                  with this modern, straightforward, and lightning-fast method
                  to collaborate.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3">
          © 2020 Copyright&nbsp;
          <a href="#">E-Docs</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
