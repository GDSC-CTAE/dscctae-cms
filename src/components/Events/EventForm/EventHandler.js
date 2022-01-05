import axios from "axios"
import { storage } from "../../Helper/firebase";

export const EventHandler = async (file, dataRefs, setLoader, setPhotoUrl) =>{

    setLoader(true);
    if (!file) {
      setLoader(false);
      return;
    }

    const tokenString = sessionStorage.getItem("token");
    if (!tokenString) {
        console.log("User is not Authenticated !");
        setLoader(false);
        return;
      }

      const url = await ImageHandle(dataRefs, file, setPhotoUrl);
      console.log("hello");
      console.log(tokenString);

    const eventData ={
        nameofevent: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "nameofevent")]?.value,
        dateofevent: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "dateofevent")]?.value,
        organiser: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "organiser")]?.value,
        description: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "description")]?.value,
        image: url
    }
axios.post(
    "http://localhost:5000/new_event",
    { data: eventData, uid: tokenString || null },
    { headers: { Authorization: `Bearer ${tokenString}` } }
)
.then( (res) => {
    console.log(res);
    setLoader(false);
})
.catch( (err) =>{
     console.log(err)
     setLoader(false);
})
}

export const ImageHandle = async (dataRefs, file, setPhotoUrl) => {
    const eventName = dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "nameofevent" )]?.value;
    try {
        const storageRef = storage.ref(`Events/${eventName}`);
        await storageRef.put(file)
        const FileUrl = await storageRef.getDownloadURL();
        setPhotoUrl(FileUrl)
        return FileUrl

    }catch(err){
        console.log("Something Went Wrong", err);
    }
}