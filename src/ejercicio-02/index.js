// Escribe tu código aquí:
const person = {
    name: 'John',
    edad: 30,
    ocupacion: 'Programador',
    estudios: 'Ingenieria',
    greet: function () {
        console.log(`Hola, soy {this.name}`)
    }
}

person.greet()

const person2 = {
    name: 'Alice',
    edad: 27,
    ocupacion: 'Profesora',
    estudios: 'Magisterio',
    greet: () => {
        console.log(`Hola, soy {this.name}`)
    }
}

