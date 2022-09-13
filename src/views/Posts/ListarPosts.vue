<template>
<div>
    <b-button @click="nuevo()" size="sm" variant="primary" class="mb-2 ">
      <b-icon icon="pencil-fill" aria-hidden="true"></b-icon> 
    </b-button>
    <table>
        <thead>
            <tr>
                <th> ID </th>
                <th> TITULO </th>
                <th> DESCRIPCION </th>
                <Th> ID_USER</Th>
                <Th> OPCIONES</Th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="listap in listap" :key="listap.id">
                <td>{{listap.id}}</td>
                <td>{{listap.title}}</td>
                <td>{{listap.body}}</td>
                <td>{{listap.userId}}</td>
                <td>
                    <b-button size="sm" @click="eliminar()" variant="danger" class="mb-2 ">
                     <b-icon icon="trash-fill" aria-hidden="true"></b-icon> 
                     </b-button>
                     <b-button @click="editar(listap.id)" size="sm" variant="primary" class="mb-2 ">
                     <b-icon icon="pencil-fill" aria-hidden="true"></b-icon> 
                     </b-button>
                </td>
                   
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios'

export default{
    name:'ListarPosts',
    data(){
     return{
        listap:null,
       }
    },
    component:{

    },
    computed:{

    },
    methods: {
        nuevo(){
            this.$router.push("/NuevoPosts")
        },
        eliminar(){
            alert("eliminar")
          
        },
        editar(id){
            this.$router.push("/EditarPosts/"+id)
        }
    },
    mounted: function(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
                this.listap=data.data;
        });
    },
}
</script>