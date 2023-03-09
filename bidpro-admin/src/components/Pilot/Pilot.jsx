import React from "react";
import PropTypes from "prop-types";

/**
 *
 * View component that displays a single pilots profile.
 *
 */

export function Pilot({
  id,
  airline,
  fleet,
  seat,
  domicile,
  firstName,
  lastName,
  email,
  areacode,
  prefix,
  suffix,
  address1,
  address2,
  city,
  state,
  postalCode,
  photo,
  socials,
}) {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <div className="d-flex col-12 col-lg-4 p-4">
              <div className="white-bg mx-auto p-3">
                <div className="row justify-content-center ">
                  <div className="col-3 my-3">
                    <img
                      src={photo}
                      className="img-fluid float-start rounded-circle"
                    />
                  </div>
                  <div className="row justify-content-center m-auto px-4 col-9">
                    <h4 className="col-12 fw-bold mb-0">
                      {firstName} {lastName}
                    </h4>
                    <div className="col-12 align-items-center">{airline}</div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-3 text-center">
                    <span className="text-nowrap fw-bold">
                      {seat} {fleet}
                    </span>
                    <br />
                    <span className="fw-bold">{domicile}</span>
                  </div>
                  <div className="col-8 m-auto px-4">
                    <address>
                      <strong>{socials}</strong>
                      <br />
                      {address1}, {address2}
                      <br />
                      {city}, {state} {postalCode}
                      <br />
                      P: ({areacode}) {prefix}-{suffix}
                      <br />
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Pilot.propTypes = {
  id: PropTypes.number,
  airline: PropTypes.string,
  fleet: PropTypes.string,
  seat: PropTypes.string,
  domicile: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  areacode: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postalCode: PropTypes.string,
  photo: PropTypes.string,
};
