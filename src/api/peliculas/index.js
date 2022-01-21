import { db } from "..";
import {collection,getDocs} from 'firebase/firestore'

export async function getProducts(){
    const peliculasCol = collection(db,"peliculas")
    const snapshot = await getDocs(peliculasCol)

    return snapshot.docs.map((documento)=>({...documento.data(),id:documento.id}))
}
