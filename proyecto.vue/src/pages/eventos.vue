<template>
    <div class="container text-center">
        <div class="row mt-4">
            <div>
                <h4 style="font-family: 'Arial', sans-serif; color: #4CAF50;"><i>Evento Click</i></h4>
                <button @click="clic" class="btn btn-success" type="button" style="width: 180px; height: 60px; background-color: #4CAF50; border: none; border-radius: 10px; font-size: 16px;">
                     Dale clic</button>
                <button @click="soyboton" class="btn btn-danger mx-4" type="button" style="width: 180px; height: 60px; background-color: #F44336; border: none; border-radius: 10px; font-size: 16px;">
                     Dale clic 2</button>
            </div>
        </div>
        <div>
            <h4 style="font-family: 'Arial', sans-serif; color: #3f51b5;"><i>Evento change</i></h4>
            <label class="input-group-text" for="" style="padding: 10px; width: 300px; margin: auto; font-size: 18px; background-color: #3f51b5; color: white; border-radius: 5px;">Ingresa tu nombre:</label> 
            <input class="form-control mt-3" type="text" id="nombre" @change="nombreE" style="width: 300px; height: 40px; margin: auto; border: 2px solid #3f51b5; border-radius: 5px; font-size: 16px;">
            <p class="mt-2" style="font-size: 18px;">El nombre ingresado es:<strong>{{ nombre }}</strong> </p>
        </div>
        <div>
            <h3 style="font-family: 'Arial', sans-serif; color: #FFC107;"><i>Evento de mouseenter y mouseleave</i></h3>
            <div class="text-center" 
                style="color: #fff; width: 420px; height: 160px; background-color: #2196F3; text-align: center; padding: 20px; border-radius: 15px; margin: auto; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);"
                @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                <p style="font-size: 20px;">Pase el mouse</p>
                <p>{{ mensaje }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nombre: '',
            mensaje: ''
        }
    },
    methods: {
        clic () {
            alert("Gracias por darle clic");
        },
        soyboton() {
            alert("Soy un botón");
        },
        nombreE(event) {
            this.nombre = event.target.value;
        },
        mostrarMensaje() {
            this.mensaje = "El mouse está dentro del rectángulo";
        },
        ocultarMensaje() {
            this.mensaje = "El mouse está fuera del rectángulo";
        }
    }
}
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si lo deseas */
</style>
