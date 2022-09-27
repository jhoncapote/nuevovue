<template>
    <div>
        <div class="wrapper">
            <div class="formContent">
                <div class="fadein">
                    <img src="@/assets/logo.png" class="icon">
                </div>
                <div>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">id:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.id_user" id="input-small" size="sm" placeholder="Ingrese su email"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Nombre:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.nombre" id="input-small" size="sm" placeholder="Ingrese su email"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Apellido:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.apellido" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Telefono:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.telefono" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Direccion:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.direccion" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Usuario:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.usuario" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Password:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.password" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                        <label for="input-small">Email:</label>
                        </b-col>
                        <b-col sm="10">
                        <b-form-input v-model="formulario.email" id="input-small" size="sm" placeholder="Ingrese su usuario"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-button @click="guardar()" variant="outline-warning">Aceptar</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
         formulario:{
            id_user:null,
            nombre:null,
            apellido:null,
            direccion:null,
            telefono:null,
            email:null,
            password:null,
            usuario:null,
         }
        }
    },
    components:{},
    methods: {  
        guardar(){
            this.axios.post("http://127.0.0.1:4000/api/User",this.formulario).then(response=>{
                this.$router.push('/')
            })
        }
    },
    computed:{},
    mounted:{}
}
</script>

<style>
    .wrapper{
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        align-items: center;
    }
    .formContent{
        padding: 30px;
        width: 90%;
        max-width: 450px;
        background: rgb(73, 74, 152);
        position: relative;
        text-align: center;
        -webkit-box-shadow:0 30px 60px 0 rgba(0,0,0,0.3);
        border-radius:10px 10px 10px 10px
    }
</style>