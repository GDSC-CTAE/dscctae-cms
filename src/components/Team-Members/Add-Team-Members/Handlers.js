import axios from "axios";
import { storage } from "../../Helper/firebase";
export const DataHandler = async (file, dataRefs, setLoading, setPhotoUrl) => {
  setLoading(true);
  if (!file) {
    setLoading(false);
    return;
  }
  const url = await ImageUploadHandler(dataRefs, file, setPhotoUrl);
  console.log("hello");
  const tokenString = sessionStorage.getItem('token');
  console.log(tokenString);
  const userData = {
    name: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "name")]?.value,
    year: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "year")]?.value,
    branch: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "branch")]?.value,
    linkedIn: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "linkedIn")]?.value,
    github: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "github")]?.value,
    instagram: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "instagram")]?.value,
    role: dataRefs.current[dataRefs.current.findIndex((el) => el.id == "role")]?.value,
    picutre: url,
    uid:tokenString,
  };
  axios
    .post("http://localhost:5000/new_user", userData, { headers: { Authorization: `Bearer ${tokenString}` } })
    .then((res) => {
      console.log(res);
      console.log("ok");
      setLoading(false);
    })
    .catch((err) => {
      console.log("some error occured");
      setLoading(false);
    });
};

export const ImageUploadHandler = async (dataRefs, file, setPhotoUrl) => {
  const memberName = dataRefs.current[dataRefs.current.findIndex((el) => el.id == "name")]?.value;
  try {
    const storageRef = storage.ref(`Users/${memberName}`);
    await storageRef.put(file);
    const FileURL = await storageRef.getDownloadURL();
    setPhotoUrl(FileURL);
    return FileURL;
  } catch (err) {
    console.log("Something Went Wrong", err);
  }
};
