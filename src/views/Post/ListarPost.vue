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
                <th >TITULO</th>
                <th>DESCRIPCION</th>
                
            </tr>
        </thead>
        <tbody>
           <tr v-for="lista in Listapost" :key="lista.id">
            <td>{{lista.id}}</td>
            <td>{{lista.title}}</td>
            <td>{{lista.body}}</td>
           </tr>
        </tbody>
        </table>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
      name:"MostrarPost",
    
      data(){
            return {
                Listapost:null,
              
            }
        },
        components:{
          
        },
        methods:{  
          
        },
       
        mounted:function(){
        
        axios.get("https://jsonplaceholder.typicode.com/posts").then( data =>{
            this.Listapost = data.data
        });
    }
        
    }
    </script>
