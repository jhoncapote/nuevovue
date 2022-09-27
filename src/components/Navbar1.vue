<template>
    <div>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand href="#">Proyect </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" disabled>Abaut</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="post" right>
          <b-dropdown-item href="#">Nuevo</b-dropdown-item>
          <b-dropdown-item href="#">Listar</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>