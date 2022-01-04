import React from "react";
import { useState, useEffect } from "react";
import { FetchProjects } from "./Handlers";
import { Link } from "react-router-dom";
import Loading from "../../Team-Members/Add-Team-Members/Loading";
import * as MdIcons from "react-icons/md";
export default function ViewProjects() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    const FetchProject = async () => {
      try {
        setLoading(true);
        console.log("hello");
        const Projects = await FetchProjects();
        if (Projects) {
          setData(Projects);
        }
      } catch (err) {
        console.log(err, "Something went wrong!");
      }
      setLoading(false);
    };
    FetchProject();
  }, []);
  return (
    <>
      <div className="row mt-1 w-100 justify-content-between a">
        <div className="col-lg-3 mt-2">
          <input className="form-control" placeholder="Search by Name" onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="col-lg-6 align-self-end mt-2 ">
          <Link to="/dash-board/add-team-Project">
            <button className="btn primary-button add-Project">Add Project</button>
          </Link>
        </div>
      </div>
      <br />
      <div className="table-container p-0" style={{ position: "relative" }}>
        <table>
          <thead className="table-header">
            <tr>
              <th> Name</th>
              <th>Status</th>
              <th>Domain</th>
              <th>Github Id</th>
              <th>About</th>
              <th>Contributors</th>
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
                    <td>{val.status ? <div>{val.status}</div> : "NA"}</td>
                    <td>{val.domain ? <div>{val.domain}</div> : "NA"}</td>
                    <td>
                      <a href={val.github}>{val.github ? "Link" : "NA"}</a>
                    </td>
                    <td>{val.about ? <div>{val.about}</div> : "NA"}</td>
                    <td>
                      {val.contributors ? (
                        <div>
                          {val.contributors.map((cont, index) => {
                            return <p key={index}>{cont}</p>;
                          })}
                        </div>
                      ) : (
                        "NA"
                      )}
                    </td>
                    <td>
                      <span className="fs-4 edit-button">
                        <MdIcons.MdModeEditOutline />
                      </span>
                    </td>
                    <td>
                      <span className="fs-4 delete-button">
                        <MdIcons.MdDelete />
                      </span>
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
