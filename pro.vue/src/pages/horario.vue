<template>
    <div class="container text-center">
        <h2 class="mt-4">LISTA DE ALUMNOS</h2>
    </div>

    <div class="container text-center">
        <table class="table table-bordered table-striped mt-4">
            <thead class="thead-dark">
                <tr>
                    <th>No. Control</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Gusto</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="alumno in alumnos" :key="alumno.id">
                    <td>{{ alumno.id }}</td>
                    <td>{{ alumno.nombre }}</td>
                    <td>{{ alumno.carrera }}</td>
                    <td>{{ alumno.gusto }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- NUEVA TABLA: HORARIO DE CLASES -->
    <div class="container text-center">
        <h2 class="mt-4">HORARIO DE CLASES</h2>
    </div>

    <div class="container text-center mt-4">
        <table class="table table-bordered table-striped shadow-lg">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hora in horario" :key="hora.hora" class="odd:bg-gray-100 even:bg-white text-center">
                    <td class="bg-yellow-200 text-black font-bold">{{ hora.hora }}</td>
                    <td>{{ hora.lunes }}</td>
                    <td>{{ hora.martes }}</td>
                    <td>{{ hora.miercoles }}</td>
                    <td>{{ hora.jueves }}</td>
                    <td>{{ hora.viernes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
            alumnos: [
                { id: 20001, nombre: 'Alejandro', carrera: 'Sistemas', gusto: 'Karate' },
                { id: 20002, nombre: 'Valeria', carrera: 'Arquitectura', gusto: 'Box' },
                { id: 20003, nombre: 'Emilio', carrera: 'Civil', gusto: 'Piano' },
                { id: 20004, nombre: 'Renata', carrera: 'Sistemas', gusto: 'Pintura' },
                { id: 20005, nombre: 'Martín', carrera: 'Arquitectura', gusto: 'Juegos' },
                { id: 20006, nombre: 'Carla', carrera: 'Civil', gusto: 'Acrílico' },
                { id: 20007, nombre: 'David', carrera: 'Sistemas', gusto: 'Spinning' },
                { id: 20008, nombre: 'Lucía', carrera: 'Arquitectura', gusto: 'Leer' },
                { id: 20009, nombre: 'Andrés', carrera: 'Civil', gusto: 'Mecanografía' },
                { id: 20010, nombre: 'Paula', carrera: 'Sistemas', gusto: 'Arte' },
                { id: 20011, nombre: 'Rodrigo', carrera: 'Arquitectura', gusto: 'Ballet' },
                { id: 20012, nombre: 'Fernanda', carrera: 'Civil', gusto: 'Música' },
                { id: 20013, nombre: 'Joaquín', carrera: 'Sistemas', gusto: 'Atletismo' }
            ],
            horario: [
                { hora: "11:00 - 13:00", lunes: "Redes De Computadoras Aula: RDS / Profesor: Garcia Hernandez Astrid Mildred", martes: "", miercoles: "Redes De Computadoras Aula: RDS / Profesor: Garcia Hernandez Astrid Mildred / Grupo: 6AS", jueves: "Lenguajes Y Automatas I Aula: ACS / Profesor: Acevedo Bautista Ivor / Grupo: 6AS", viernes: "Lenguajes Y Automatas I Aula: ACS / Profesor: Acevedo Bautista Ivor / Grupo: 6AS" },
                { hora: "12:00 - 14:00", lunes:"", martes:  "Lenguajes Y Automatas Aula: ACS / Profesor: Acevedo Bautista Ivor / Grupo: 6AS", miercoles: "Programacion Web Aula: RDS / Profesor: Vasquez Martínez Josué Israel / Grupo: 6AS", jueves: "Administracion De Bases De Datos Aula: RDS / Profesor: Solano Hernandez Miguel Angel / Grupo: 6AS", viernes: "Redes De Computadoras Aula: RDS / Profesor: Garcia Hernandez Astrid Mildred / Grupo: 6AS" },
                 {hora: "13:00 - 15:00", lunes: "Ingenieria De Software Aula: RDS / Profesor: Roman Cruz Jose Alfredo", martes: "", miercoles: "Ingenieria De Software Aula: RDS / Profesor: Roman Cruz Jose Alfredo / Grupo: 6AS", jueves: "Taller De Sistemas Operativos Aula: ACS / Profesor: Cruz Perez Jorge / Grupo: 6AS", viernes: "Programacion Web Aula: LDS / Profesor: Vasquez Martínez Josué Israel / Grupo: 6AS" },
                { hora: "15:00 - 17:00", lunes: "Programacion Web Aula: ACS / Profesor: Vasquez Martínez Josué Israel", martes: "Taller De Sistemas Operativos Aula: ACS / Profesor: Cruz Perez Jorge / Grupo: 6AS", miercoles: "", jueves: "", viernes: "" },
                { hora: "17:00 - 19:00", lunes: "Administracion De Bases De Datos Aula: RDS / Profesor: Solano Hernandez Miguel Angel", martes: "", miercoles: "", jueves: "", viernes: "" },
            ]
        };
    }
};
</script>

<style scoped>
h2 {
    color: rgb(19, 16, 16);
    background-color: rgb(114, 83, 111);
    border-radius: 15px;
    padding: 10px;
}

table {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
}

th {
    font-size: 1.1rem;
    background-color: rgb(49, 168, 189);
    color: white;
}

tbody tr:hover {
    background-color: #f0f0f0;
}
</style>
