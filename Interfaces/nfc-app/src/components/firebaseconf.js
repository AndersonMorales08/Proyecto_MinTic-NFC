

// COnfiguracion e inicializacion de la base de datos
import { initializeApp } from 'firebase/app'
// Referencia a la base de datos
import { getFirestore } from 'firebase/firestore'
// Referencia al paquete de autenticacion
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
// Metodos de interaccion con la base de datos
import { addDoc, collection, getDocs, query, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { sesionControl } from '../App'

const firebaseConfig = {
    apiKey: "AIzaSyA3WmeZZWAZz8xPCbuTWNru15kyp-OA7k8",
    authDomain: "proyecto-min.firebaseapp.com",
    databaseURL: "https://proyecto-min-default-rtdb.firebaseio.com",
    projectId: "proyecto-min",
    storageBucket: "proyecto-min.appspot.com",
    messagingSenderId: "436033150422",
    appId: "1:436033150422:web:c7bb932a9164ce80fc5877",
    measurementId: "G-CFE503S5BN"
};

initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth();
export let usuario;
export var sesionState = false;


// // Guardar base de datos
export const guardarDatabase = async (nombreColeccion, data) => {
    try {
        const respuesta = await addDoc(collection(database, nombreColeccion), data)
        console.log(respuesta);
        return respuesta
    } catch (e) {
        throw new Error(e)
    }
}

// getAll()
export const consultarDatabase = async (nombreColeccion) => {
    try {
        const respuesta = await getDocs(query(collection(database, nombreColeccion)))
        // console.log(respuesta);

        const coleccionDatos = respuesta.docs.map((documento) => {
            // console.log(documento);
            // console.log(documento.data());
            const documentoTemporal = {
                id: documento.id,
                ...documento.data()
            }
            // console.log(documentoTemporal);
            return documentoTemporal
        })

        return coleccionDatos
    } catch (e) {
        throw new Error(e)
    }
}

// gteDocumentById()
// Consultar un documento
export const consultarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await getDoc(doc(database, nombreColeccion, id))
        // console.log(respuesta);

        const documentoTemporal = {
            id: respuesta.id,
            ...respuesta.data()
        }
        return documentoTemporal
    } catch (e) {
        throw new Error(e)
    }
}

// Actualizacion de un documento
export const actualizarDocumentoDatabase = async (nombreColeccion, id, data) => {
    try {
        const respuesta = await updateDoc(doc(database, nombreColeccion, id), data)
    } catch (e) {
        throw new Error(e)
    }
}

// Eliminacion de un documento
export const eliminarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await deleteDoc(doc(database, nombreColeccion, id))
    } catch (e) {
        throw new Error(e)
    }
}

// CrearUsuarios
export const crearUsuario = async (email, password) => {
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password)
        const user = {
            id: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email
        }
        return user
    } catch (e) {
        throw new Error(e)
    }
}

// Login Usuarios
export const loginUsuario = async (email, password) => {
    try {
        const credencialesUsuario = await signInWithEmailAndPassword(auth, email, password)
        // console.log(credencialesUsuario);
        // console.log(credencialesUsuario.user);
        // console.log(credencialesUsuario.user.uid);
        const user = {
            id: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email
        }
        usuario = user
        console.log(usuario)


        return credencialesUsuario.user
    } catch (e) {
        throw new Error(e)
    }
}


// LogOut -> salir
export const logOutUsuario = async () => {
    try {
        const respuesta = await signOut(auth)
        
    } catch (e) {
        throw new Error(e)
    }
}

//  datos usuario
export const datosUsuario = async () => {
    try {
        const user = auth.currentUser
        // console.log(user);
        if (user) {
            // console.log(user);
            return user
        } else {
            // console.log('datos usuario:', user);
            return undefined
        }

    } catch (e) {
        throw new Error(e)
    }
}
// Consultar un documento por email
export const consultarDocumentoEmail = async (nombreColeccion, email) => {
    try {
        const respuesta = await getDoc(doc(database, nombreColeccion, email))
        // console.log(respuesta);

        const documentoTemporal = {
            email: respuesta.email,
            ...respuesta.data()
        }
        return documentoTemporal
    } catch (e) {
        throw new Error(e)
    }
}


// el.addEventListener('click', function)
// Usuario Activo
onAuthStateChanged(auth, (user) => {

    if (user) {
        usuario = user
        sesionState = true
        console.log('usuario logueado');
    } else {
        usuario = undefined;
        sesionState = false;
        console.log('usuario no logueado');
    }

})