
const productos =["papa","pepe"];


     for (const producto of productos){
         console.log(producto);
     };

function functionPrincipalSimulador(){

  let salir = false;

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 

  alert("Sistema de Productos");

  do {

      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 ingresarArticulo();
                 break;
            case 2:
                 buscarArticulo();
                 break;   
            case 3:
                 modificarArticulo();
                 break;   
            case 4:
                 eliminarArticulo();
                 break;   
            case 5:
                 listarArticulos();
                 break; 
            case 6:
                 salir = true;
                 break;
            default:
                 alert("Opcion invalida, vuelva a ingresar la opcion");
      };


  } while (!salir);

  console.log("LOG - ----------------------------------");
  console.log("LOG - 9999 - PROCESO PRINCIPAL - FIN ");
  console.log("LOG - ----------------------------------");

};

functionPrincipalSimulador();

function seleccionarOpcionMenu(){

  console.log("LOG - SeleccionarOpcionMenu - 0000");

  let opcionMenu = prompt("Seleccione opcion: \n" + 
                          "1-Ingrese Articulo\n" +
                          "2-Buscar Articulo\n" +
                          "3-Modificar Articulo\n" +
                          "4-Eliminar Articulo\n" +
                          "5-Listar Articulos\n" +
                          "6-Salida"
                         );
  if (opcionMenu.length == 0)                         {
     opcionMenu = 0;
  };
  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  console.log("LOG - seleccionarOpcionMenu - 9999");
  return parseInt(opcionMenu);     
};

function ingresarArticulo(){
  console.log("LOG - 0000 - ingresarArticulo");
  console.log("LOG - 9999 - ingresarArticulo");
};
              
function buscarArticulo(){
  console.log("LOG - 0000 - buscarArticulo");
  console.log("LOG - 9999 - buscarArticulo");
};

function  modificarArticulo(){
  console.log("LOG - 0000 - modificarArticulo");
  console.log("LOG - 9999 - modificarArticulo");
};

function eliminarArticulo(){
  console.log("LOG - 0000 - modificarArticulo");
  console.log("LOG - 9999 - modificarArticulo");
};

function listarArticulos(){
  let lista = "";
  let i=1;
  console.log("LOG - 0000 - listarArticulos");

  if (productos.length == 0){
     alert("No existen articulos para informar");
  } else {
     for (const producto of productos){
         
         lista = lista + i + "-" + producto + "\n";
         i++;
     };
     console.log("LOG - 0010 - listarArticulos -\nLista de Articulos:\n" + lista);
     alert("Lista de Articulos:\n" + lista);
  };
  console.log("LOG - 9999 - listarrArticulos");
};