<template>
    <div>
            <div class="">

                <table class="">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Nombre</th>
                        <th>DNI</th>
                        <th>TELEFONO</th>
                        <th >CORREO</th>
                    </tr>
                </thead>
                <tbody>
                   
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
    },
    mounted:function(){
        let direccion = "https://api.solodata.es/pacientes2?page=1";
        axios.get(direccion).then( reponse =>{
            this.Listapacientes = reponse.data.pacientes
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>