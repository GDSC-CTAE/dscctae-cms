import axios from "axios";

function cleanUp(refs, setContName) {
  refs.current.map((el) => {
    el.value = "";
  });
  setContName([]);
}
export const createEventHandler = (refs, contName, setLoading, setContName) => {
  const tokenString = sessionStorage.getItem("token");
  setLoading(true);
  if (!tokenString) {
    console.log("User is not Authenticated !");
    setLoading(false);
    return;
  }
  console.log(refs);
  const event = {
    name: refs.current[refs.current.findIndex((el) => el.id == "projectName")]?.value,
    status: refs.current[refs.current.findIndex((el) => el.id == "projectStatus")]?.value,
    domain: refs.current[refs.current.findIndex((el) => el.id == "projectDomain")]?.value,
    github: refs.current[refs.current.findIndex((el) => el.id == "githuburl")]?.value,
    about: refs.current[refs.current.findIndex((el) => el.id == "aboutproject")]?.value,
    contributors: contName,
  };
  axios
    .post(
      "http://localhost:5000/new_project",
      { data: event, uid: tokenString || null },
      { headers: { Authorization: `Bearer ${tokenString}` } }
    )
    .then((res) => {
      console.log(res);
      console.log("Ok");
      setLoading(false);
    })
    .catch((err) => {
      console.log(err, "Error");
      setLoading(false);
    });
  cleanUp(refs, setContName);
};
