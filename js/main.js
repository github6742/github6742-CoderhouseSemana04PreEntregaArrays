
const productos =[];


function functionPrincipalSimulador(){

  let salir = false;

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - INICIO PROCESO PRINCIPAL");
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
  console.log("LOG - 9999 - FIN PROCESO PRINCIPAL");
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
  console.log("LOG - 0000 - INICIO PROCESO - ingresarArticulo");
  console.log("LOG - 9999 - FIN PROCESO - ingresarArticulo");
};
              
function buscarArticulo(){
  console.log("LOG - 0000 - INICIO PROCESO - buscarArticulo");
  console.log("LOG - 9999 - FIN PROCESO - buscarArticulo");
};

function  modificarArticulo(){
  console.log("LOG - 0000 - INICIO PROCESO - modificarArticulo");
  console.log("LOG - 9999 - FIN PROCESO - modificarArticulo");
};

function eliminarArticulo(){
  console.log("LOG - 0000 - INICIO PROCESO - modificarArticulo");
  console.log("LOG - 9999 - FIN PROCESO - modificarArticulo");
};

function listarArticulos(){
  console.log("LOG - 0000 - INICIO PROCESO - listarArticulos");
  console.log("LOG - 9999 - FIN PROCESO - listarrArticulos");
};