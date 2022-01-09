import axios from "axios"
import { storage } from "../../Helper/firebase";

export const EventHandler = async (file, dataRefs, setLoading, setPhotoUrl) =>{

    setLoading(true);
    if (!file) {
      setLoading(false);
      return;
    }

    const tokenString = sessionStorage.getItem("token");
    if (!tokenString) {
        console.log("User is not Authenticated !");
        setLoading(false);
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
    setLoading(false);
})
.catch( (err) =>{
     console.log(err)
     setLoading(false);
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