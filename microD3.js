let animal = "Perro";
let enIngles;


switch (animal) {
    case "Perro":
        enIngles = "Dog"
        break;
    case "Gato":
            enIngles = "Cat"
            break;
    case "Ventana":
            enIngles = "Window"
            break;
    case "Mesa":
            enIngles = "Table"
            break;
    case undefined:
            enIngles = "Debe ingresar un palabra"
            break;
    case " ":
            enIngles = "Debe ingresar un palabra"
            break;
    default:
            enIngles = "La palabra ingresada es incorrecta"
        break;
}
console.log("En ingles se dice:", enIngles);


