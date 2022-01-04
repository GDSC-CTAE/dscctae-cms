import React, { useState, useRef } from "react";
import "./create-project.css";
import * as AiIcons from "react-icons/ai";
import { createEventHandler } from "./Handlers";
import Loading from "../../Team-Members/Add-Team-Members/Loading";
export default function CreateProject() {
  const [contName, setContName] = useState([]);
  const [newCont, setNewCont] = useState("");
  const refs = useRef([]);
  const [loading, setLoading] = useState(false);
  const onAddContibuterName = () => {
    if (newCont === "") {
      return;
    }
    setContName((prev) => {
      return [...prev, newCont];
    });
    setNewCont("");
    console.log(contName);
  };
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <div className="create-project-container">
      {loading && <Loading message={"Adding Project.... Please Wait"} />}
      <div className="card p-5 ">
        <div>
          <h5 className="text-muted">Create New Project</h5>
        </div>
        <br />
        <br />
        <div className="row justify-content-between ">
          <div className="col-lg-3">
            <label htmlFor="emailaddress">Project Name</label>
            <input
              ref={addToRefs}
              className="form-control mt-2"
              id="projectName"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="col-lg-2">
            <label htmlFor="projectstatus">Project Status</label>
            <select ref={addToRefs} className="form-select mt-2" id="projectStatus">
              <option value="1">Ongoing</option>
              <option value="1">Complete</option>
              <option value="2">About to Start</option>
            </select>
          </div>
          <div className="col-lg-2">
            <label htmlFor="projectstatus">Project Domain</label>
            <select ref={addToRefs} className="form-select mt-2" id="projectDomain">
              <option value="1">Web</option>
              <option value="1">Android</option>
              <option value="2">ML</option>
            </select>
          </div>
          <div className="col-lg-3 ">
            <label htmlFor="githuburl">Github Url</label>
            <input ref={addToRefs} className="form-control mt-2" id="githuburl" type="text" placeholder="Enter Url" />
          </div>
          <div className="col-lg-12 ">
            <label htmlFor="aboutproject">About Project</label>
            <textarea
              ref={addToRefs}
              className="form-control mt-2"
              id="aboutproject"
              type="text"
              placeholder="Enter Details"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="aboutproject" className="mt-4">
              Add Contributors
            </label>
            <div className="input-group  mt-2">
              <input
                onChange={(e) => setNewCont(e.target.value)}
                className="form-control"
                id="contributor"
                type="text"
                placeholder="Enter Contributor"
                value={newCont}
              />
              <button type="button" className="input-group-text btn primary-button" onClick={onAddContibuterName}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-2  ">
          {contName.map((val, index) => {
            return (
              <div className="chips rounded-pill col-2 m-1" key={index}>
                <span className="chip-text">{val}</span>
                <AiIcons.AiOutlineClose
                  onClick={() => setContName(contName.filter((cont) => cont !== val))}
                  className="close-bars mb-1"
                />
              </div>
            );
          })}
        </div>

        <div className="row text-center mt-5 justify-content-center">
          <button
            onClick={() => createEventHandler(refs, contName, setLoading, setContName)}
            type="button"
            className="btn primary-button"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
