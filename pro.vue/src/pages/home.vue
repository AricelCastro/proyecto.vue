<template>
    <div class="container mt-5" style="background-color: #D3D3D3; padding: 20px; border-radius: 10px;">
        <div class="card shadow p-4">
            <h1 style="color: black;" class="text-center">calculadora1</h1>
            <div class="mb-3">
                <label for="">Numero 1  </label>
                <input type="number" class="form-control text-center" v-model="numero1" style="background-color: #6C5CE7;">
            </div>
            <div class="mb-3">
                <label for="">Numero 2  </label>
                <input type="number" class="form-control text-center" v-model="numero2" style="background-color: #6C5CE7;">
            </div>
            <div class="d-flex justify-content-center gap-2 flex-wrap">
                <button @click="sumar" class="btn btn-success btn-lg px-4">Sumar</button>
                <button @click="resta" class="btn btn-warning btn-lg px-4">Restar</button>
                <button @click="multiplicar" class="btn btn-primary btn-lg px-4">Multiplicar</button>
                <button @click="dividir" class="btn btn-info btn-lg px-4">Dividir</button>

            </div>
            <h2 class="text-center mt-4">
                Resultado: {{ resultado }}
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        };
    },
    methods: {
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta() {
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicar() {
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        dividir() {
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        },
    },
};
</script>

