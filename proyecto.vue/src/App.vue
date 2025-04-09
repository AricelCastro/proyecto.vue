<script >
import router from './router';
</script>
<template>
<div id="app">

  <div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-decoration-none" href="#"><router-link to="/about">CalculadoraV1</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/home">CalculadoraV2</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/lista">Lista de alumnos</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/eventos">Eventos</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/padre">Props</router-link>
          </a>
        </li>

       
      </ul>
    </div>
  </div>
</nav>  
  <!-- <nav>
  </nav> -->

  <router-view></router-view>
</div>
</div>
</template>

<style>
</style>