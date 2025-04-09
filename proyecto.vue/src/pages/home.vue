<script>
export default{
    data() {
        return {
            display: '', 
            currentValue: 0,
            operator: null,
        }
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },
        calcular() {
            try {
                this.currentValue = eval(this.display);
                this.display = this.currentValue.toString();
            } catch (error) {
                this.display = 'Error'; 
            }            
        },
        limpiarDisplay() {
            this.display = '';
        },
        eliminarNumero() {
            this.display = this.display.slice(0, -1);
        },
        limpiarUltimaEntrada() {
            this.display = this.display.slice(0, -1);
        },
        agregarOperador(operador) {
            if (this.display && !['+', '-', '*', '/'].includes(this.display[this.display.length - 1])) {
                this.display += operador;
            }
        },
        agregarPunto() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        igual() {
            this.calcular();
        }
    },
}
</script>
<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 380px;">
        <div class="card p-3" style="width: 300px; background-color: Orchid;">
            <div class="card-body"> 
                <h3 class="text-center" style="color: Thistle;">Calculadora V2</h3>
                <!-- Display de la calculadora -->
                <div class="mb-3">
                    <input type="text" class="form-control text-end" v-model="display" disabled>
                </div>
                <!-- Botones de la calculadora -->
                <div class="container text-center">
                    <div class="row g-1">
                        <div class="col"><button class="btn btn-secondary w-100" @click="limpiarDisplay">C</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="limpiarUltimaEntrada">CE</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarOperador('%')">%</button></div>
                        <div class="col"><button class="btn btn-success w-100" @click="eliminarNumero">&#9003;</button></div>
                    </div>
                    <div class="row g-1 mt-1">
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(7)">7</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(8)">8</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(9)">9</button></div>
                        <div class="col"><button class="btn btn-success w-100" @click="agregarOperador('/')">/</button></div>
                    </div>
                    <div class="row g-1 mt-1">
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(4)">4</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(5)">5</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(6)">6</button></div>
                        <div class="col"><button class="btn btn-success w-100" @click="agregarOperador('*')">x</button></div>
                    </div>
                    <div class="row g-1 mt-1">
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(1)">1</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(2)">2</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(3)">3</button></div>
                        <div class="col"><button class="btn btn-success w-100" @click="agregarOperador('-')">-</button></div>
                    </div>
                    <div class="row g-1 mt-1">
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarPunto">.</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="agregarNumero(0)">0</button></div>
                        <div class="col"><button class="btn btn-secondary w-100" @click="igual">=</button></div>
                        <div class="col"><button class="btn btn-success w-100" @click="agregarOperador('+')">+</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
