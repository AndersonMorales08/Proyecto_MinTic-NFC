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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const database = firebase.firestore()
let listaVentas = []

// Variables DOM
const btnGuardar = document.getElementById('guardar')
const formulario = document.getElementById('formulario')

const idV = document.getElementById('id-vehiculo')
const valorT = document.getElementById('valor-total')
const cantidad = document.getElementById('cantidad')
const precio = document.getElementById('precioU')
const documento = document.getElementById('documento')
const nombreC = document.getElementById('nombreC')
const fecha = document.getElementById('fecha')
const encargado = document.getElementById('encargado')
const estado = document.getElementById('estado')


async function guardar(){
    try {
       
        adicionarVenta(idV,valorT,cantidad,precio,documento,nombreC ,fecha,encargado,estado)

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function adicionarVenta(idV,valorT,cantidad,precio,documento,nombreC ,fecha,encargado,estado){
    const venta = {
        id:uuid.v4(), 
        idV : idV.value,
        valorT : valorT.value,
        cantidad:cantidad.value,
        precio: precio.value,
        documento:documento.value,
        nombreC :nombreC.value,
        fecha:fecha.value,
        encargado:encargado.value,
        estado:estado.value
    }

    const respuesta = await guardarVenta(venta)
    console.log(respuesta);


}


async function guardarVenta(task){
    try{
       const respuesta = await database.collection('lista-ventas').add(task)
       return respuesta
    }catch(error){
        console.error(error)
        throw new Error(error)
    }
}


btnGuardar.addEventListener('click', (e)=>{
    guardar()


})

