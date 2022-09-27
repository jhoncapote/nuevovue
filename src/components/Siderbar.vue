<template>
    <div class="Container">
        <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
       
        <b-img src="https://picsum.photos/200/200/?image=54"  v-bind="mainProps" rounded="circle"  alt="Rounded image"></b-img>
      </div>
    </b-sidebar>
  </div>
    </div>
</template>

<style>
   .Container{
    width:50%;
    height:100%;
    background-color: black;
    display: flex;

   }
</style>