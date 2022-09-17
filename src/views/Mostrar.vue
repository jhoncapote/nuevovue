<template>
        <div>
            <div class="">
                <b-button v-b-tooltip.hover title="Nuevo Registro" variant="primary" @click="nuevo()">
                <b-icon icon="plus-lg" aria-hidden="true"></b-icon>Nuevo registro
                  </b-button>
                
      <b-form-input :id="buscar" :type="search" v-model="filter" ></b-form-input>

    <b-table :filter="filter" id="my-table" :items="Listapacientes" :fields="fields" 
    class="my-table" :per-page="perPage" :current-page="currentPage" >
    
    <template #cell(ACCIONES)="row">
        <b-button size="sm" @click="eliminar()" variant="danger" class="mb-2 ">
                     <b-icon icon="trash-fill" aria-hidden="true"></b-icon> 
                     </b-button>
                     <b-button @click="editar(row.item.PacienteId)" size="sm" variant="primary" class="mb-2 ">
                     <b-icon icon="pencil-fill" aria-hidden="true"></b-icon> 
                     </b-button>
    </template>
    </b-table>
    
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>


            </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            fields:[
                {key:'PacienteId', label:'#'},
                {key:'Nombre', label:'nombre'},
                {key:'DNI', label:'documento'},
                {key:'Telefono', label:'#tel'},
                {key:'Correo', label:'email'},
                'ACCIONES'
            ],
            filter:null,
        currentPage:1,
        rows:10,
        perPage:2,
        
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