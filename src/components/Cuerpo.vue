<template>
    <div style="margin-top:60px;">
    
        <b-container id="cuerpo-cont">
            <b-row>
                <b-col>
                    <div>
                        <img src="../assets/img/sigma-image.png" id="img-logo" />
                    </div>
                </b-col>
                <b-col>
                    <div id="pixels" class="rounde shadow">
                        <br />
                        <b-form id="custumer" name="custumer">
                            <div id="labelform">Departamento*</div>
                            <b-form-select id="TxtDepartamento" name="TxtDepartamento" class="mb-3 sizecon" v-model="TxtDepartamento">
                                <option v-for="(deps,key) in info.data" v-bind:value="key" v-bind:key="key">{{ key }}</option>
                            </b-form-select>
                            <div id="labelform">Ciudad*</div>
                            <div v-for="(deps,key) in info.data" v-if="key==TxtDepartamento" :key="deps">
                                <b-form-select id="TxtMunicipio" name="TxtMunicipio" v-model="TxtMunicipio" class="mb-3 sizecon">
                                    <option v-for="(ciuds) in deps" :key="ciuds">{{ ciuds }}</option>
                                </b-form-select>
                            </div>
                            <div>
                                <b-form-select id="TxtMunicipiox" name="TxtMunicipiox" v-if="TxtDepartamento==''" v-model="TxtDepartamento" class="mb-3 sizecon">
                                    <option value="e"></option>
                                </b-form-select>
                            </div>
                            <div id="labelform">Nombre*</div>
                            <b-form-input id="TxtNombre" name="TxtNombre" class="mb-3 sizecon" v-model="TxtNombre" placeholder="Pepito de Jesús"></b-form-input>
    
                            <div id="labelform">Correo*</div>
                            <b-form-input id="TxtEmail" name="TxtEmail" class="mb-3 sizecon" v-model="TxtEmail" type="email" placeholder="Pepitodejesus@gmail.com" required></b-form-input>
    
                            <b-button id="BtnGuardar" name="BtnGuardar" class="colorboton">ENVIAR</b-button>
                            <br />
                            <br />
                        </b-form>
                    </div>
                </b-col>
            </b-row>
    
        </b-container>
        <div>
            <b-button @click="showMsgBoxOne" class="modalguarda1" hidden></b-button>
            <div class="mb-2">
            </div>
            <b-button v-b-modal.modal-2 id="modalguarda2" hidden></b-button>
            <b-modal id="modal-2" title="Prueba Maquetación" size='sm' buttonSize='sm' headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0' centered: true okVariant="warning">
                <p class="my-4">Ingrese un depatamento</p>
            </b-modal>
            <b-button v-b-modal.modal-3 id="modalguarda3" hidden></b-button>
            <b-modal id="modal-3" title="Prueba Maquetación" size='sm' buttonSize='sm' headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0' centered: true okVariant="warning">
                <p class="my-4">Ingrese una ciudad</p>
            </b-modal>
            <b-button v-b-modal.modal-4 id="modalguarda4" hidden></b-button>
            <b-modal id="modal-4" title="Prueba Maquetación" size='sm' buttonSize='sm' headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0' centered: true okVariant="warning">
                <p class="my-4">Ingrese su nombre</p>
            </b-modal>
            <b-button v-b-modal.modal-5 id="modalguarda5" hidden></b-button>
            <b-modal id="modal-5" title="Prueba Maquetación" size='sm' buttonSize='sm' headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0' centered: true okVariant="warning">
                <p class="my-4">Ingrese su correo electronico</p>
            </b-modal>
            <b-button v-b-modal.modal-7 id="modalguarda7" hidden></b-button>
            <b-modal id="modal-7" title="Prueba Maquetación" size='sm' buttonSize='sm' headerClass='p-2 border-bottom-0' footerClass='p-2 border-top-0' centered: true okVariant="warning">
                <p class="my-4">Ingrese un correo electronico valido</p>
            </b-modal>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: [],
            boxOne: '',
            TxtEmail: "",
            TxtNombre: "",
            TxtDepartamento: [],
        };
    },
    mounted() {
        axios.get('https://cors-anywhere.herokuapp.com/https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json').then(response => (this.info = response))
    },
    methods: {
        showMsgBoxOne() {
            this.boxOne = ''
            this.$bvModal.msgBoxOk('Tu información ha sido recibida satisfactoriamente', {
                    title: 'Confirmacion de guardado',
                    size: 'md',
                    buttonSize: 'md',
                    okVariant: 'success',
                    headerClass: 'p-2 border-bottom-0',
                    footerClass: 'p-2 border-top-0',
                    centered: true
                })
                .then(value => {
                    this.boxOne = value
                })
                .catch(err => {
                    // An error occurred
                })
        }
    }

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
