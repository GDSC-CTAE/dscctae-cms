import React, { useEffect, useState } from "react";
import "./view-members.css";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { TeamData } from "./../../Data/team-member-data";
import { FetchMembers } from "./Handlers";
import Loading from "../Add-Team-Members/Loading";
// pagination={paginationFactory({ sizePerPage: 5 })}
export default function ViewTeamMembers() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const FetchMember = async () => {
      try {
        setLoading(true);
        const members = await FetchMembers();
        if (members) {
          setData(members);
        }
      } catch (err) {
        console.log(err, "Something went wrong!");
      }
      setLoading(false);
    };
    FetchMember();
  }, []);
  return (
    <>
      <div className="row mt-1 w-100 justify-content-between a">
        <div className="col-lg-3 mt-2">
          <input className="form-control" placeholder="Search by Name" onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="col-lg-6 align-self-end mt-2 ">
          <Link to="/dash-board/add-team-member">
            <button className="btn primary-button add-member">Add Member</button>
          </Link>
        </div>
      </div>
      <br />
      <div className="table-container p-0" style={{ position: "relative" }}>
        <table>
          <thead className="table-header">
            <tr>
              <th> Name</th>
              <th>Role</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Linkedin Id</th>
              <th>Github Id</th>
              <th>Intagram Id</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {loading && <Loading />}
            {data
              ?.filter((post) => {
                if (query === "") {
                  return post;
                } else if (post.name?.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }
              })
              .map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.name ? <div>{val.name}</div> : "NA"}</td>
                    <td>{val.role ? <div>{val.role}</div> : "NA"}</td>
                    <td>{val.branch ? <div>{val.branch}</div> : "NA"}</td>
                    <td>{val.year ? <div>{val.year}</div> : "NA"}</td>
                    <td>
                      <a href={val.linkedin}>{val.linkedin ? "Link" : "NA"}</a>
                    </td>
                    <td>
                      <a href={val.github}>{val.github ? "Link" : "NA"}</a>
                    </td>
                    <td>
                      <a href={val.instagram}>{val.instagram ? "Link" : "NA"}</a>
                    </td>
                    <td>
                      <span className="fs-4 edit-button">{val.editIcon}</span>
                    </td>
                    <td>
                      <span className="fs-4 delete-button">{val.deleteIcon}</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
