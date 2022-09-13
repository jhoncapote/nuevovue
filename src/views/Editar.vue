<template>
 
          <div class="container">
             
                  <div class="form-group left">
                     <label for="" class="control-label col-sm-2">Nombre</label>
                     <div class="col-sm-10">
                        <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                     </div>
                  </div>
                  <div class="form-group left">
                     <label for="" class="control-label col-sm-2">Direccion</label>
                     <div class="col-sm-10">
                        <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.direccion">
                     </div>
                  </div>
                  <div class="form-group left row">
                    <div class="col">
                          <label for="" class="control-label col-sm-3">Correo</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="correo" id="correo" v-model="form.correo">
                          </div>
                      </div>
                      <div class="col">
                        <label for="" class="control-label col-sm-5">codigo Postal</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" name="codigopostal" id="codigopostal" v-model="form.codigoPostal">
                        </div>
                      </div> 
                  </div>
                  <div class="form-group left row">
                       <div class="col">
                          <label for="" class="control-label col-sm-2">Genero</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="genero" id="genero" v-model="form.genero">
                          </div>
                        </div>
                       <div class="col">
                            <label for="" class="control-label col-sm-2">Telefono</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="telefono" id="telefono" v-model="form.telefono">
                            </div>
                      </div>
                  </div>
                  <div class="form-group left row ">
                      <div class="col">
                            <label for="" class="control-label col-sm-2">Fecha nacimiento</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="fechanacimineto" id="telefono" v-model="form.fechaNacimiento">
                          </div>
                      </div>
                      <div class="col">
                             <label for="" class="control-label col-sm-2">DNI</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">
                              </div>
                      </div>
                      <div class="col">
                             <label for="" class="control-label col-sm-2">TOKEN</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="token" id="token" v-model="form.token">
                              </div>
                      </div>
                  </div>


                  <div class="form-group">
                    <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                    <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                  </div> 
          </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name:"Editar",
        data(){
            return{
                form:{
                    "nombre":null,
                    "direccion":null,
                    "dni":null,
                    "genero":null,
                    "token":null,
                    "telefono":null,
                    "codigoPostal":null,
                    "fechaNacimiento":null,
                }
            }
        },
        components:{
        },
        methods:{

        },
        mounted:function(){
            let direccion="https://api.solodata.es/pacientes?id=454";
            axios.get(direccion).then(datos=>{
                this.form.nombre=datos.data[0].Nombre
            });
        }
    }
</script>










