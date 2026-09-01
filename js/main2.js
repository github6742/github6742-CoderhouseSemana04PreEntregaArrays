
const productos =["CLAVO","TUERCA","TORNILLO","ARANDELA","MARTILLO"];

console.log("productos1>="+productos);

productos.splice(4,1);

console.log("productos2>="+productos);

productos.splice(2,1,'xxxx');

console.log("productos3>="+productos);