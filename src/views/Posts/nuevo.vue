/*
<template>
    <div>
   <b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">ID</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-small" v-model="post.id" size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">TITULO:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" v-model="post.title"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">DESCRIPCION:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" v-model="post.body"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
    <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">USER ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large"  v-model="post.userId"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
   </b-row>  
  </b-row>
</b-container>
<b-button size="sm" @click="guardar()" variant="danger" class="mb-2 ">
                     <b-icon icon="trash-fill" aria-hidden="true"></b-icon> 
                     </b-button>
                     <b-button @click="editar(listap.id)" size="sm" variant="primary" class="mb-2 ">
                     <b-icon icon="pencil-fill" aria-hidden="true"></b-icon> 
                     </b-button>
        
    </div>

</template>
    <script>
    import axios from 'axios'
    
    export default{
        name:'nuevo',
        data(){
         return{
           post:{
            id:null,
            title:null,
            body:null,
            userId:null
           }
           }
        },
        component:{
    
        },
        computed:{
    
        },
        methods: {
            
            guardar(){
          
            axios.post("https://jsonplaceholder.typicode.com/posts/",this.post).then(data=>{
             this.$router.post("/listarPosts");
          });

            editar(id){
                this.$router.post("/Nuevo")
            }
        },

       
    }
}
</script>
*/
