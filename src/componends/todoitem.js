import React from "react";
import { MDBCheckbox, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

export default function TodoItems({ item }) {
  return (
    <MDBListGroup horizontal className="rounded-0 bg-transparent">
      <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
      </MDBListGroupItem>
      <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p className="lead fw-normal mb-0">{item}</p>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
