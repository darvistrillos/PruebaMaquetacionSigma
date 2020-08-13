<template>
    <div style="margin-top:60px;">
        <b-container id="cuerpo-cont">
            <b-row>
                <b-col>
                    <div>
                        <img src="../assets/img/sigma-image.png" id="img-logo">
                    </div>
                </b-col>
                <b-col>
                    <div id="pixels" class="rounde shadow   ">
                        <br>
                        <b-form @submit="onSubmit" @reset="onReset">
                            <div id="labelform">Departamento*</div>
                            <b-form-select v-model="departamento" :options="Departamentos" class="mb-3 sizecon" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-select>
    
                            <div id="labelform">Ciudad*</div>
                            <b-form-select v-model="ciudad" :options="Ciudades" class="mb-3 sizecon" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-select>
    
                            <div id="labelform">Nombre*</div>
                            <b-form-input class="mb-3 sizecon" v-model="form.name" placeholder="Pepito de Jesús"></b-form-input>
    
                            <div id="labelform">Correo*</div>
                            <b-form-input class="mb-3 sizecon" v-model="form.email" type="email" placeholder="Pepitodejesus@gmail.com"></b-form-input>
    
                            <b-button class="colorboton">ENVIAR</b-button>
                            <br><br>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div>
            {{ info }}
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
            },
            departamento: 'A',
            Departamentos: [
                { item: 'A', name: 'Antioquia' },
                { item: 'B', name: 'Atlantico' },
                { item: 'D', name: 'Amazonas', notEnabled: true }
            ],
            ciudad: 'F',
            Ciudades: [
                { item: 'E', name: 'Barranquilla' },
                { item: 'F', name: 'Medellin' },
                { item: 'G', name: 'Leticia', notEnabled: true }
            ],
            info: null,

        }
    },
    mounted() {
        axios
            .get('.assets/Json/colombia.json')
            .then(response => (this.info = response))
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.email = ''

            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
