import { createContext, useEffect, useState } from "react";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut,} from 'firebase/auth'
import { collection, addDoc ,onSnapshot,deleteDoc,doc} from "firebase/firestore";
import {auth } from '../api/index'
import { db } from '../api'
import { useSelector } from "react-redux";

const UserContext = createContext()


const UserProvider =({children})=>{
    const {peliculas,loading} = useSelector(state=>state.peliculas)
    
    const [loginEmail, setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")
    
    const [user , setUser]= useState({})
    const[entrar,setEntrar]=useState(true)
    const logout =async ()=>{
        await signOut(auth);
        setEntrar(true)
        
    }  
    
    
    const login =async ()=>{
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setEntrar(false)
            console.log(user)
        }catch(error) {
        console.log(error.message)
        
    }
    }    
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    })
    
    
    /*gregar nuevas Peliculas*/

    const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);
    
    // console.log(colors)
    const[nombre,setNombre]=useState("")
    const[Id,setID]=useState("")
    const[año,setAño]=useState("")
    const[descripción,setDescripción]=useState("")
    const[genero,setGenero]=useState("")
    const[img,setImg]=useState("")
    const[duracion,setDuracion]=useState("")
    const[trailer,setTrailer]=useState("")
    const pelicula ={nombre:nombre,ID:Id,año:año,descripción:descripción,genero:genero,img:img,duracion:duracion,trailer:trailer}
    const com =[]
    const handleNew = async () => {
        // const name = prompt("Enter color name");
        // const value = prompt("Enter color value");

        const collectionRef = collection(db, "peliculas");
        const payload = { pelicula,com};
        const docRef = await addDoc(collectionRef, payload);
        console.log("The new ID is: " + docRef.id);
        window.location.reload();
    };

    useEffect(
        () =>
        onSnapshot(collection(db, "peliculas"), (snapshot) =>
            setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
    );
    
    
    
    // borrar pelis

    
      
      const handleDelete = async (id) => {
        const docRef = doc(db, "peliculas", id);
        await deleteDoc(docRef);
        window.location.reload();

      };
    



    //Filtrar por Nombre
    const [input,setInput]=useState([])
    const filtrarNombre=()=>{
        if(input===" "){         
            setShow(true)
            const filtroPeticion =[]
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)
        }else{
            setShow(false)
            const filtroPeticion= peliculas.filter((pelicula)=>{
                return pelicula.pelicula.nombre.toUpperCase().includes(input.toUpperCase())
            })
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)

        }
    }
    //Filtrar por año
    const [input2,setInput2]=useState([])
    const filtrarAño=()=>{
        if(input2===null){         
            setShow(true)
            console.log("hola")
            const filtroPeticion =[]
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)
        }else{
            setShow(false)
            const filtroPeticion= peliculas.filter((pelicula)=>{
                return ((pelicula.pelicula.año).toString()).includes(input2.toString())
            })
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)

        }
    }
    //Filtrar por Categoria
    const[categoria,setCategoria]=useState([])
    const filtrarCategoria=(e)=>{
        if(categoria===" "){         
            setShow(true)
            const filtroPeticion =[]
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)
        }else{
            setShow(false)
            const filtroPeticion= peliculas.filter((pelicula)=>{
                
                return pelicula.pelicula.genero.toUpperCase().includes(categoria.toUpperCase())
            })
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)

        }
    }
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }
    
    
    const [mostrarCategoria,setMostrarCategoria]= useState(false)
    
    //pelisola
    
    const [show,setShow]=useState(true)
    const[peliSola,setPeliSola]=useState([])
    const [filtroPeticion,actualizarFiltroPeticion]= useState([])
    const [filtroPeticionId,actualizarFiltroPeticionId]= useState([])
    const [showPeliSola,setShowPeliSola]=useState(true)
    const filtrarId=()=>{
        if(peliSola===" "){         
            setShow(true)
            const filtroPeticion =[]
            actualizarFiltroPeticion(filtroPeticion)
            console.log(filtroPeticion)
        }else if(peliSola===pelicula.id){
            setShow(false)
            const filtroPeticion= peliculas.filter((pelicula)=>{
                return pelicula.id.toUpperCase().includes(peliSola.toUpperCase())
            })
            actualizarFiltroPeticion(filtroPeticion)
            console.log("Filtro",filtroPeticion)

        }
    }
    const data ={login,logout,user,entrar,loginEmail,loginPassword,setLoginEmail,setLoginPassword,setNombre,setAño,setColors,setDescripción,setDuracion,setID,setGenero,setTrailer,setImg,handleNew,handleDelete,filtroPeticion,actualizarFiltroPeticion,peliSola,setPeliSola,filtrarId,show,setShow,actualizarFiltroPeticionId, setShowPeliSola,filtroPeticionId,showPeliSola,filtrarNombre,input,setInput,filtrarCategoria,setMostrarCategoria,setCategoria,mostrarCategoria,variants, filtrarAño, setInput2,filtrarAño}
    return(
        <UserContext.Provider value ={data}>
            {children}

        </UserContext.Provider>
    )
}

export{UserProvider}
export default UserContext