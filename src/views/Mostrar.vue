<template>
        <div>
            <div class="">
                <b-button v-b-tooltip.hover title="Nuevo Registro" variant="primary" @click="nuevo()">
                <b-icon icon="plus-lg" aria-hidden="true"></b-icon>Nuevo registro
                  </b-button>
                <table class="table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Nombre</th>
                        <th>DNI</th>
                        <th>TELEFONO</th>
                        <th >CORREO</th>
                        <th >ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                   <tr v-for="lista in Listapacientes" :key="lista.PacienteId">
                    <td>{{lista.PacienteId}}</td>
                    <td>{{lista.Nombre}}</td>
                    <td>{{lista.DNI}}</td>
                    <td>{{lista.Telefono}}</td>
                    <td>{{lista.Correo}}</td>
                    <td>
                        <b-button v-b-tooltip.hover title="Eliminar Registro" variant="danger" @click="eliminar(lista.PacienteId)">
                        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                        </b-button>

                        <b-button variant="success" v-b-tooltip.hover title="Editar Registro" @click="editar(lista.PacienteId)">
                        <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                        </b-button>
                    </td>
                   </tr>
                </tbody>
                </table>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            Listapacientes:null,
        }
    },
    components:{
    },
    methods:{  
        nuevo(){
            this.$router.push("/Registrar");
        },
        editar(id){
        
            this.$router.push('/Editar/'+id);
        },
        eliminar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                let direccion=`https://api.solodata.es/pacientes/${id}`;
                axios.delete(direccion).then(response=>{
                   }).catch(error=>{
                    console.log(error);
            }) ;
        }
      }
    },
    mounted:function(){
        let direccion = "https://api.solodata.es/pacientes?page=1";
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>