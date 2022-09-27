<template>
    <div>
        <div class="wrapper">
            <div class="formContent">
                <div class="fadein">
                    <img src="@/assets/logo.png" class="icon" alt="">
                </div>
                <div>
                    <b-row class="my-1">
                    <b-col sm="2">
                    <label for="input-small">Email:</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
                    </b-col>
                    </b-row>

                    <b-row class="my-1">
                    <b-col sm="2">
                    <label for="input-small">Usuario:</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
                    </b-col>
                    </b-row>

                    <b-row class="my-1">
                    <b-col sm="2">
                    <label for="input-small">Contraseña:</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
                    </b-col>
                    </b-row>

                    <b-button pill variant="outline-danger">Aceptar</b-button>
                </div>

            </div>

        </div>
    </div>
    
</template>
<style>
    .wrapper{
        width:100% ;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        
    }
    .formContent{
        padding: 30px;
        width: 90%;
        max-width: 450px;
        background: rgb(120, 118, 240);
        position: relative;
        text-align: center;
        -webkit-box-shadow:0 30px 60px 0 rgb(15, 14, 14)(0,0,0,0,3);
        border-right: 10px 10px 10px 10px;
    }
</style>