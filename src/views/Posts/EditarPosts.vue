<template>
    <div>
      
   <b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">ID</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="id" name="id" v-model="post.id" size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">TITULO:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="title" name="title" v-model="post.title"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">DESCRIPCION:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="body" name="body" v-model="post.body"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
    <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">USER ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="userId" name="userId" v-model="post.userId"  size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
   </b-row>  
  </b-row>
</b-container>
        
        
    </div>

</template>
<script>
    import axios from 'axios'
    
    export default{
        name:'',
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
           
        },
        mounted: function(){
           let id=this.$route.params
           axios.get("https://jsonplaceholder.typicode.com/posts/1").then(data=>{
               this.post.id=data.data.id
               this.post.title=data.data.title
               this.post.body=data.data.body
               this.post.userId=data.data.userId
            });
        },
    }
    </script>