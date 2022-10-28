let individuo = {
    nombreIndividuo: ["Manuel", "Hernandez"],
    edadIndividuo: 21,
    generoIndividuo: "Masculino",
    interesesIndividuo: ["Gym", "Fiesta"]
};
let { nombreIndividuo: nombreCom, edadIndividuo, generoIndividuo, interesesIndividuo } = individuo;
let presentacion;
console.log(`Mi nombre es ${nombreCom[0]} ${nombreCom[1]} tengo ${edadIndividuo} años, soy del genero
${generoIndividuo} y me gusta ir al ${interesesIndividuo[0]} y me gusta salir de ${interesesIndividuo[1]}`);
