import axios from "axios"

export const EventHandler = async (file, dataRefs, setLoader) =>{

    setLoader(true);
    if (!file) {
      setLoader(false);
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
        console.log("User is not Authenticated !");
        setLoader(false);
        return;
      }

    const eventData ={
        nameofevent: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "nameofevent")]?.value,
        dateofevent: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "dateofevent")]?.value,
        organiser: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "organiser")]?.value,
        description: dataRefs.current[dataRefs.current.findIndex( (input) => input.id == "description")]?.value,
    }
axios.post(
    "http://localhost:3000/new_event",
    { data: eventData, uid: token || null },
    { headers: { Authorization: `Bearer ${token}` } }
)
.then( (res) => {
    console.log(res)
})
.catch( (err) =>{
     console.log(err)
})
}