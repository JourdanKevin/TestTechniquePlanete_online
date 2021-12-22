<template>
     <form   v-on:submit.prevent="submitForm">
        <table class="styled-table">
        <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Tache</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.nom" class="active-row">
              <td>{{result.nom}}</td>
              <td>{{result.prenom}}</td>
              <td>
                    <select v-model="result.libelle">
                        <option v-for="tache in taches" :key="tache.libelle" v-bind:value="tache.libelle">
                            {{ tache.libelle }}
                        </option>
                    </select>
              </td>
          </tr>
        </tbody>
    </table>
    <button >Valider</button>
    </form>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/';

export default {
  name: 'InterfaceEmploye',
  data() {
      return {
      results : [],
      taches : [],
      form : {
          value : null
      }
      }
  },
  mounted(){
      axios.get('getEmploye').then(res => {
        this.results = res.data;
      }).catch(err => {
        console.log(err.response);
      });
      axios.get('getTache').then(res => {
        this.taches = res.data;
      }).catch(err => {
        console.log(err.response);
      });
  },
    methods: {
    submitForm()
    {
      console.log(this.results)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  position: relative;
  background : #009879;
  border : 0;
  padding : 14px 42px;
  border-radius : 3px;
  cursor: pointer;
  overflow: hidden;
  outline :none;
  font-size :16px;
  color :#fff;
  letter-spacing: .2em;
  box-shadow :0 8px 32px rgba(#000,.2);
  transition: .2s ease;
}
select,
input[type=text],[type=time] {
    color :#009879;
    font-size: 20px;
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}


.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    width: 100%;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    font-size: 20px;
   
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
    width: 33%;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>