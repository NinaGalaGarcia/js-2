
const date = new Date();
const [hora, minutos, segundos] = [date.getHours(), date.getMinutes(), date.getSeconds()];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'junio',
'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
alert (`Buen dia Nina, hoy es ${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getUTCFullYear()}
La hora es: ${hora}:${minutos}`)

//Tareas que debo realizar

const tareasMañana = ['levantarse', 'lavarte los dientes', 'desayunar']
const tareasMedia = ['almorzar', 'lavarte los dientes', 'descansar']
const tareasTarde = ['merendar', 'hacer ejercicio', 'hacer las compras']
const tareasNoche = ['cenar', 'estudiar', 'darte un baño']

function tareasCompletas (array) {
    for (let i = 0; i < array.length; i++){
        let tareaCompleta = prompt ('Completaste la tarea '+array[i]+'?')
        if (tareaCompleta != 'Si' && tareaCompleta != 'si'){
            alert('Te falta completar la tarea')
            i = i - 1
        }        
    }
    return alert('Muy bien Nina!!! las tareas '+array+' estan completas.')
}
let a = 0

while (hora >= 10 && a <= 3) {      
    if (hora >= 10 && hora <= 11 && a === 0) {
        alert (`El día de hoy tienes que completar estas tareas: 
01: ${tareasMañana[0]} 02: ${tareasMañana[1]} 03: ${tareasMañana[2]} `)
        tareasCompletas(tareasMañana)
        a = a + 1        
    }else if (hora >= 12 && hora <= 14 && a === 1) {
        alert (`El día de hoy tienes que completar estas tareas: 
01: ${tareasMedia[0]} 02: ${tareasMedia[1]} 03: ${tareasMedia[2]} `)
        tareasCompletas(tareasMedia)
        a = a + 1        
    }else if (hora >= 16 && hora <= 19 && a === 2) {
        alert (`El día de hoy tienes que completar estas tareas:  
01: ${tareasTarde[0]} 02: ${tareasTarde[1]} 03: ${tareasTarde[2]}`)
        tareasCompletas(tareasTarde)
        a = a + 1
    }else if (hora >= 21 && hora <= 0 && a === 3) {
        alert (`El día de hoy tienes que completar estas tareas:  
01: ${tareasNoche[0]} 02: ${tareasNoche[1]} 03: ${tareasNoche[2]} `)
        tareasCompletas(tareasNoche)
        a = a + 1        
    }   
}


let saludo = prompt ('Buenas Noches Nina, hasta mañana!!')
alert (saludo)