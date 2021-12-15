import {db} from '../../Helper/firebase'

 export const FetchEvent = async() => {
     const event = []

     try{
         const docs = await db.collection("Events").get()
          docs.foreach( (doc) =>{
          event.push(doc.data() )
         })
     } catch(err){
         console.log(err);
     }

     return event;

 }