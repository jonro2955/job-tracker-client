import React, { useState } from "react";
import SearchRadio from "../components/SearchRadio";
import { FormGroup, Label } from "reactstrap";
import { DatePicker } from "reactstrap-date-picker";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function SearchAccordion({
  searchString,
  setSearchString,
  loadAllRecords,
  resetSearchParams,
  selectedSearchOption,
  setSelectedSearchOption,
  dateRangeStart,
  setDateRangeStart,
  dateRangeEnd,
  setDateRangeEnd,
}) {
  const [open, setOpen] = useState("0");
  const toggle = () => {
    if (open === "1") {
      setOpen("0");
    } else {
      setOpen("1");
    }
  };

  return (
    <Accordion open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId="1" style={{ width: "100%" }}>
          Search
        </AccordionHeader>
        <AccordionBody accordionId="1">
          <div className="d-flex flex-column justify-content-center align-items-center pt-3 px-2">
            <form
              className="form-inline d-flex justify-content-center align-items-center my-2 my-lg-0"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="justify-content-center align-items-center">
                Search:&nbsp;
              </div>
              <input
                className="form-control mr-sm-2"
                id="searchInput"
                type="search"
                placeholder="keywords"
                aria-label="Search"
                value={searchString}
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={() => {
                  loadAllRecords();
                  resetSearchParams();
                }}
              >
                Reset
              </button>
            </form>
            <SearchRadio
              selectedSearchOption={selectedSearchOption}
              setSelectedSearchOption={setSelectedSearchOption}
            />
            <div className="d-flex mt-3">
              <FormGroup className="d-flex align-items-center">
                <Label>From:&nbsp;</Label>
                <DatePicker
                  id="example-datepicker1"
                  value={dateRangeStart}
                  onChange={(v, f) => {
                    //v=value, f=formatted
                    setDateRangeStart(v);
                  }}
                />
              </FormGroup>
              &nbsp;
              <FormGroup className="d-flex align-items-center">
                <Label>To:&nbsp;</Label>
                <DatePicker
                  id="example-datepicker2"
                  value={dateRangeEnd}
                  onChange={(v, f) => {
                    //v=value, f=formatted
                    setDateRangeEnd(v);
                  }}
                />
              </FormGroup>
            </div>
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
