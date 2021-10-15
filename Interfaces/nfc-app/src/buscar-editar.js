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

const btnBuscar = document.getElementById('buscar')
const btnEditar = document.getElementById('editar')



const id = document.getElementById('id-venta')
const idV = document.getElementById('id-vehiculo')
const valorT = document.getElementById('valor-total')
const cantidad = document.getElementById('cantidad')
const precio = document.getElementById('precioU')
const documento = document.getElementById('documento')
const nombreC = document.getElementById('nombreC')
const fecha = document.getElementById('fecha')
const encargado = document.getElementById('encargado')
const estado = document.getElementById('estado')

var val=''


async function buscar(){
    try {
      
        
        const respuesta = await database.collection('lista-ventas').get()
        respuesta.forEach(function(item){
    
            if (item.data().id==id.value||item.data().documento==documento.value||item.data().nombreC==nombreC.value)
                val=item.id       
                idV.value=item.data().idV
                valorT.value=item.data().valorT
                cantidad.value = item.data().cantidad
                precio.value = item.data().precio
                documento.value = item.data().documento
                nombreC.value = item.data().nombreC
                fecha.value = item.data().fecha
                encargado.value = item.data().encargado
                estado.value = item.data().estado
                
        });




    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
btnBuscar.addEventListener('click', (e)=>{
    buscar()


})
async function editar(){
    try {

                database.collection("lista-ventas").doc(val).update({
                    "idV" : idV.value,
                    "valorT" : valorT.value,
                    "cantidad":cantidad.value,
                    "precio": precio.value,
                    "documento":documento.value,
                    "nombreC" :nombreC.value,
                    "fecha":fecha.value,
                    "encargado":encargado.value,
                    "estado":estado.value

    });
    
    }catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
btnEditar.addEventListener('click', (e)=>{
    editar()


})