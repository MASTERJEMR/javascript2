let mensajeDescricion="Esta aplicación creada por John Monroy, para la segunda entrega simula la venta de paquetes de carnets.\nEn donde se capturan los datos del cliente, elementos a vender.\nAunado a ello, estima el valor del pedido"
let mensajeBienvenida =[ "Módulo de pedidos  \n","por favor elija una opción\n 1. Datos Cliente 🧍‍♂️\n 2. Agregar Productos📦\n 3. Ver Carrito 🛒\n 4. Valor del pedido💰\n 5. Salir"]
let material=0// Material del carnet acceso 0=>Sin definir 1=> plástico 2=>cartón 
//let impuestos=0.19//% del impuesto
let pago ="n" // cliente realiza el pago del producto n=>no s=>si
let precio=0
//Objeto empresa
const empresa = {nit: 830057182, nombre: "Hefestos", direccion: "Av siempre vivas 1-23", cel: 30030065111};
const cliente = {nombre:" ",identificacion:" "}
const productos = [
    { id:1, material: "papel", precio:1000},
    { id:2, material: "plástico", precio:1500},
    { id:3, material: "digital", precio:300},
]


class Carro{
    constructor(){
        this.productos=[];
        this.cantidad=0;
        this.descuento=0;
        this.total=0;
        this.iva=0.19;
    }

    agregarProducto1(){
        
        let mensaje = "";
        productos.forEach((a)=> mensaje=mensaje+"\nid: "+a.id+" "+a.material+" precio unitario "+a.precio) ;
        //alert(mensaje)
        let id=  parseInt(prompt("Seleccione el tipo de carnet que desea adquirir"+mensaje));
        let producto = productos.find(prod => prod.id === id);
         if(producto){
            this.productos.push(producto);
            alert("Agrego un producto al carro: "+producto.id);
         }else{
            //console.log("No se encontro el producto ");
            alert("no se encontro ningún elemento con este Id");
        }

         menu();
    }


    listaCarro(){
        let mensaje="";
        let total=0;
        this.productos.forEach(item => { mensaje=mensaje+"\n* "+item.id+" - "+item.material+" "+" precio "+item.precio;/* alert("Agrego Id "+item.id+" - "+" precio "+item.precio); */}  );
        alert (mensaje+"\nPrecio del pedido sin descuentos, ni impuestos "+this.precio());
        menu();
    }
    precio(){
        this.total=0;
        this.productos.forEach(item=>{this.total+=item.precio;});
        console.log("el valor del total a paga es "+this.total);
        return this.total;
    }
    descuentoAleatorio(){
        let max=30;let min =2;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }

    totalPagar(){
        let deseo ="";
        if(this.descuento<1){
            deseo = prompt("Si desea un descuento presione 1, de lo contrario presiones cualquier tecla");
        }
        if(deseo==="1" && this.descuento<1){
            this.descuento =this.descuentoAleatorio();
            console.log(this.descuento);
            alert("Felicitaciones ha obtenido un descuento "+this.descuento+" % ");
        }
        let totalParcial=Math.round(this.precio()*(1-this.descuento/100));
        let totalPagar=totalParcial+Math.round(totalParcial*this.iva);
        let mensaje="El precio de los productos es de :\n $"+this.precio();
        mensaje=mensaje+"\n Descuento aplicado "+this.descuento+"% \n- $"+(this.precio()-totalParcial);
        mensaje=mensaje+" \n IVA (impuesto)\n$"+Math.round(totalParcial*this.iva)+"\nTotal a pagar: \n$"+totalPagar;

        alert(mensaje);
        menu();
    
    }
    

}


///////

const carro = new Carro();
/////////////////
// Menú principal (case)
/////////////////
alert(mensajeDescricion)
// Menú principal (case)
menu()

//menu
function menu(){
    let option = prompt(mensajeBienvenida[0]+" "+cliente.nombre+" "+mensajeBienvenida[1])  
    console.log("Selecciono "+option)
   verificacionMenu(option)    
}
/// funciones asociadas
//Verificación dato de ingreso al menú
function verificacionMenu(option){    
    //alert ("ingreso a verificacion menu con la option "+option)
    //option1=parseInt(option)
    if(option <=5 && option>=0 ){
        //alert ("La opción "+option+" es valida")
        console.log(option)
        switch(option){

            case "0": let option = prompt(mensajeBienvenida);
                break;
            case "1":   client();//datos del cliente
                break;
            case "2":   carro.agregarProducto1(); 
                break;
            case "3":   carro.listaCarro();//valor del pedido
                break;
            case "4":   carro.totalPagar();//
                break;   
            case "5": salir();
            break;
            default: menu();
                alert("El valor ingresado no es válido");
                break;
        }
        

    }else {
        alert("no es una opcion valida,\npor favor intente nuevamente")
        menu()
    }

}

// Datos usuario
function client(){
    cliente.nombre=(prompt("Ingrese el  nombre del cliente"));
    cliente.identificacion = prompt("Ingrese el número de documento");
    console.log("nombre cliente "+cliente.nombre);
    menu()
}

function salir(){
    alert("Que tenga un buen día") 
    logout()
    
}