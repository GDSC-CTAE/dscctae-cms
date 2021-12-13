import React, { useState } from "react";
import "./add-member.css";
import { useRef } from "react";
import Loading from "./Loading";
import { DataHandler } from "./Handlers";
export default function AddTeamMember() {
  const [file, setFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const dataRefs = useRef([]);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const addToRefs = (el) => {
    if (el && !dataRefs.current.includes(el)) {
      dataRefs.current.push(el);
    }
  };

  return (
    <div className="card p-5" style={{ position: "relative" }}>
      {loading && <Loading message={"Adding Member.... Please Wait"} />}
      <div>
        <h5 className="text-muted">Add Team Member</h5>
      </div>
      <br />
      <div className="row justify-content-between ">
        <div className="col-lg-4 mt-3">
          <label htmlFor="name">Member Name</label>
          <input ref={addToRefs} className="form-control mt-2" id="name" type="text" placeholder="Enter Name" />
        </div>

        <div className="col-lg-3 mt-3">
          <label htmlFor="year">Select Year </label>
          <select ref={addToRefs} className="form-select mt-2" id="year">
            <option value="1">First</option>
            <option value="1">Second</option>
            <option value="2">third</option>
            <option value="2">final</option>
          </select>
        </div>
        <div className="col-lg-4 mt-3">
          <label htmlFor="branch">Branch</label>
          <input ref={addToRefs} className="form-control mt-2" id="branch" type="text" placeholder="Enter Branch" />
        </div>
        <div className="col-lg-3 mt-3">
          <label htmlFor="linkedIn">Linkedin Url</label>
          <input ref={addToRefs} className="form-control mt-2" id="linkedIn" type="text" placeholder="Enter Url" />
        </div>
        <div className="col-lg-3 mt-3">
          <label htmlFor="github">Github Url</label>
          <input ref={addToRefs} className="form-control mt-2" id="github" type="text" placeholder="Enter Url" />
        </div>
        <div className="col-lg-3 mt-3">
          <label htmlFor="instagram">Instagram Url</label>
          <input ref={addToRefs} className="form-control mt-2" id="instagram" type="text" placeholder="Enter Url" />
        </div>
        <div className="col-lg-2 mt-3">
          <label htmlFor="role">Select Role </label>
          <select ref={addToRefs} className="form-select mt-2" id="role">
            <option value="1">Lead</option>
            <option value="1">Web Lead</option>
            <option value="2">ML</option>
          </select>
        </div>
        <div className="mt-3 col-lg-4">
          <label htmlFor="photo">Upload member's photo</label>
          <input
            ref={addToRefs}
            type="file"
            accept=".jpg,.jpeg,.png"
            id="photo"
            className="form-control mt-2"
            onChange={handleChange}
          />
        </div>
        <div className="mt-5 col-lg-7 ">
          {file ? (
            <div className="member-image-container">
              <img src={URL.createObjectURL(file)} alt={file} className="member-image h-100 4" />
            </div>
          ) : (
            <h4>Please select a photo</h4>
          )}
        </div>
      </div>
      <div className="row text-center mt-5 justify-content-center">
        <button
          type="button"
          class="btn primary-button"
          onClick={() => DataHandler(file, dataRefs, setLoading, setPhotoUrl)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
