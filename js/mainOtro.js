const productos = [
     ["TUERCAS",20],
     ["TORNILLOS",10],
     ["CLAVOS",100]
];
//stockTuercas = 10;
//stockTornillos = 10;
//stockClavos = 100;
////console.log(productos[0][0]);
////console.log(productos[1][0]);
////console.log(productos[2][0]);

console.log("cantidad 1 1 = " + (parseInt(productos[1][1])+parseInt(111)));
console.log("suma=" + (10+111));


const sumarCantidades = (stockActual, stockIngresado) => stockActual + stockIngresado;
const restarCantidades = (stockActual, stockIngresado) => stockActual - stockIngresado;

function functionPrincipalSimulador(){

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - INICIO PROCESO");
  console.log("LOG - ----------------------------------");


  let articulo;
  let tipoOperacion;
  let cantidad;

  alert("Sistema de Carga/Descarga de Stock de Inventarios de Articulos");

  informarStock();
//       articulo = ingresarArticulo();
 /*
  do {

       articulo = ingresarArticulo();
       tipoOperacion = ingresarTipoOperacion();
       cantidad = ingresarCantidad();

       ejecutarTransaccion(articulo, tipoOperacion, cantidad);

       //continuarProceso = evaluarDecision();

       informarStock();

  } while (evaluarDecision());
  */
  //} while (continuarProceso);

  console.log("LOG - ----------------------------------");
  console.log("LOG - 9999 - FIN PROCESO");
  console.log("LOG - ----------------------------------");


};

functionPrincipalSimulador();

//
function informarStock(){

  console.log("LOG - informarStock - 0000");
  let listaAlert = "";

  for (const producto of productos){
      listaAlert = listaAlert + "Producto: "+ producto[0] + " - Stock: " + producto[1] + "\n";
  };

  listaAlert = "Stock Actual\n" + listaAlert;

  alert(listaAlert);
  console.log(listaAlert);

};

//
function ingresarArticulo (){
  
  console.log("LOG - ingresarArticulo - 0000") ;

  let articuloIngresado;
  let esArticuloValido;  
  
  esArticuloValido = false;

  do {

        articuloIngresado = prompt("Ingrese un articulo valido: ");
        
        if (articuloIngresado.length ==  0){
           alert("ERROR: Debe ingresar un valor."); 
        } else {
           //esArticuloValido = true;
           for ( let i = 0; i < productos.length; i++){
               //console.log("productos["+i+"][0]= " + productos[i][0]);
               if (productos[i][0] == articuloIngresado.toUpperCase()){esArticuloValido = true;};
           };
           if (!esArticuloValido) {alert("ERROR: El articulo " + articuloIngresado + " no existe.");};
       };

      } while (!esArticuloValido);

  console.log("LOG - ingresarArticulo - 9999 - articulo ingresado: " + articuloIngresado.toUpperCase());    
  return articuloIngresado.toUpperCase;

};

//
function ingresarTipoOperacion (){

  console.log("LOG - ingresarTipoOperacion - 0000") ;

  let tipoOperacionIngresada;
  let esTipoOperacionValida;  

  do {    

        tipoOperacionIngresada = prompt("Ingrese Tipo de Operacion:\n 1 para ALTA DE STOCK\n 2 para BAJA DE STOCK: ");
        
        switch (tipoOperacionIngresada) {
               case "1":
                    esTipoOperacionValida = true;
                    break;
               case "2":
                    esTipoOperacionValida = true;
                    break;
               case "":
                    alert("ERROR: Debe ingresar un valor.");
                    esTipoOperacionValida = false;
                    break;
               default:
                    alert("ERROR: El tipo operacion "+ tipoOperacionIngresada + " no existe.");
                    esTipoOperacionValida = false;
        };

  } while (!esTipoOperacionValida) ;    

  console.log("LOG - ingresarTipoOperacion - 9999 - tipo de operacion ingresada: " + tipoOperacionIngresada) ;    
  return tipoOperacionIngresada;

};

function ingresarCantidad (){

  console.log("LOG - ingresarCantidad - 0000") ;

  let cantidadIngresada;
  let esCantidadValida;

  do {

        cantidadIngresada = prompt("Ingrese la cantidad de articulos valida(valor positivo): ");

        if (cantidadIngresada == "") {
                            
           alert("Debe Ingresar un Valor");
           esCantidadValida = false;
            
        } else {
  
           if (isNaN(Number(cantidadIngresada))) {

              alert("ERROR: Debe Ingresar un Valor NUMERICO, este valor es erroneo: " + cantidadIngresada);
              esCantidadValida = false;

           } else { 
                  
                    if (parseInt(cantidadIngresada) <= 0 ) {

                       alert("Debe Ingresar un Valor NUMERICO positivo, este valor es erroneo: " + cantidadIngresada);
                       esCantidadValida = false;

                    } else {

                       esCantidadValida = true;

                   };
            };
        };

      } while (!esCantidadValida);  

  console.log("LOG - ingresarCantidad - 9999 - cantidad ingresada: " + cantidadIngresada) ;    
  return cantidadIngresada;

};


function ejecutarTransaccion (articulo,tipoTransaccion,cantidad){

  console.log("LOG - ejecutarTransaccion - 0000") ;
  console.log("LOG - ejecutarTransaccion - 0000 - Parametro articulo: " + articulo);
  console.log("LOG - ejecutarTransaccion - 0000 - Parametro tipoTransaccion: " + tipoTransaccion);
  console.log("LOG - ejecutarTransaccion - 0000 - Parametro cantidad: " + cantidad);

  if (tipoTransaccion == 1){
     console.log("LOG - ejecutarTransaccion - ALTA");
     ejecutarTransaccionAlta(articulo,cantidad);
  } else {
     console.log("LOG - ejecutarTransaccion - BAJA");
     ejecutarTransaccionBaja(articulo,cantidad);
  };

  console.log("LOG - ejecutarTransaccion - 9999 - fin.") ;
};

function ejecutarTransaccionAlta(articulo, cantidad){
  
  console.log("LOG - ejecutarTransaccionAlta - 0000") ;
  console.log("LOG - ejecutarTransaccionAlta - 0000 - Parametro articulo: " + articulo);
  console.log("LOG - ejecutarTransaccionAlta - 0000 - Parametro cantidad: " + cantidad);

  switch (articulo) {
          case "tornillos":
               //stockTornillos = parseInt(stockTornillos) + parseInt(cantidad);
               stockTornillos = sumarCantidades(parseInt(stockTornillos),parseInt(cantidad));
               console.log("LOG - ejecutarTransaccionAlta - 0010 - Stock Tornillos Actualizado = " + stockTornillos);
               alert("Stock Tornillos Actualizado = " + stockTornillos);
               break;
          case "tuercas":
               //stockTuercas = parseInt(stockTuercas) + parseInt(cantidad);
               stockTuercas = sumarCantidades(parseInt(stockTuercas),parseInt(cantidad));
               console.log("LOG - ejecutarTransaccionAlta - 0020 - Stock Tuercas Actualizado = " + stockTuercas);
               alert("Stock Tuercas Actualizado = " + stockTuercas);
               break;
          default:
               //stockClavos = parseInt(stockClavos) + parseInt(cantidad);
               stockClavos = sumarCantidades(parseInt(stockClavos) , parseInt(cantidad));
               console.log("LOG - ejecutarTransaccionAlta - 0030 - Stock Clavos Actualizado = " + stockClavos);
               alert("Stock Clavos Actualizado = " + stockClavos);
  };
  
  console.log("LOG - ejecutarTransaccionAlta - 9999 - fin.") ;

};

function ejecutarTransaccionBaja(articulo, cantidad){
  
  console.log("LOG - ejecutarTransaccionBaja - 0000");
  console.log("LOG - ejecutarTransaccionBaja - 0000 - Parametro articulo: " + articulo);
  console.log("LOG - ejecutarTransaccionBaja - 0000 - Parametro cantidad: " + cantidad);

  switch (articulo) {
         case "tornillos":
                  
              if (cantidad <= stockTornillos) { 
                 //stockTornillos = parseInt(stockTornillos) - parseInt(cantidad);
                 stockTornillos = restarCantidades(parseInt(stockTornillos) , parseInt(cantidad));
                 console.log("LOG - ejecutarTransaccionBaja - 0010 - Stock Tornillos Actualizado = " + stockTornillos);
                 alert("Stock Tornillos Actualizado = " + stockTornillos);
              } else {
                 console.log("LOG - ejecutarTransaccionBaja - 0020 - No hay stock de tornillos suficiente = " + stockTornillos + ", para la cantidad ingresada: " + cantidad + ". Cargue la transaccion nuevamente.");
                 alert("No hay stock de tornillos suficiente = " + stockTornillos + ", para la cantidad ingresada: " + cantidad + ". Cargue la transaccion nuevamente.");
              };
              break;
  
         case "tuercas":
                  
              if (cantidad <= stockTuercas) { 
                 //stockTuercas = parseInt(stockTuercas) - parseInt(cantidad);
                 stockTuercas = restarCantidades(parseInt(stockTuercas) , parseInt(cantidad));
                 console.log("LOG - ejecutarTransaccionBaja - 0030 - Stock Tuercas Actualizado = " + stockTuercas);
                 alert("Stock Tuercas Actualizado = " + stockTuercas);
              } else {
                 console.log("LOG - ejecutarTransaccionBaja - 0040 - No hay stock de tuercas suficiente = " + stockTuercas+ ", para la cantidad ingresada: " + cantidad + ". Cargue la transaccion nuevamente.");
                 alert("No hay stock de tuercas suficiente = " + stockTuercas+ ", para la cantidad ingresada: " + cantidad + ". Cargue la transaccion nuevamente.");
              };
              break;

         default:                  
                  
              if (cantidad <= stockClavos) { 
                 //stockClavos = parseInt(stockClavos) - parseInt(cantidad);
                 stockClavos = restarCantidades(parseInt(stockClavos) , parseInt(cantidad));
                 console.log("LOG - ejecutarTransaccionBaja - 0050 - Stock Clavos Actualizado = " + stockClavos);
                 alert("Stock Clavos Actualizado = " + stockClavos);
              } else {
                
                 console.log("LOG - ejecutarTransaccionBaja - 0050 - No hay stock de clavos suficiente = " + stockClavos + ", para la cantidad ingresada: " + cantidadArticulo + ". Cargue la transaccion nuevamente.");
                 alert("No hay stock de clavos suficiente = " + stockClavos + ", para la cantidad ingresada: " + cantidad + ". Cargue la transaccion nuevamente.");
              };
        };

  console.log("LOG - ejecutarTransaccionBaja - 9999 - fin.");
}

function evaluarDecision (){

  console.log("LOG - evaluarDecision - 0000") ;

  let decisionIngresada;
  let esDecisionValida;
  let continuaProceso;
  
  do {

        decisionIngresada = prompt("Desea continuar(escriba en mayusculas SI/NO): ");
        console.log("LOG - evaluarDecision - 0010 - decisionIngresada: " + decisionIngresada) ;

        switch (decisionIngresada){
        
                case "SI":
                      continuaProceso = true;
                      esDecisionValida = true;
                      break;
                case "NO":
                      continuaProceso = false;
                      esDecisionValida = true;
                      break;
                default:
                      console.log("LOG - evaluarDecision - 0030 - decision ingresada: " + decisionIngresada);
                      alert("ERROR: Error, si decide continuar, escriba en mayusculas SI/NO");
                      esDecisionValida = false;
           }

      } while (!esDecisionValida);

  console.log("LOG - evaluarDecision - 9999 - decisionIngresada: " + decisionIngresada) ;

  return continuaProceso;
};