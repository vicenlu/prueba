class Person {
    constructor(name) {
        this.name = name; //Propiedad
    }

    greet = () => {
        console.log(`Hola ${this.name}`);
    }

}