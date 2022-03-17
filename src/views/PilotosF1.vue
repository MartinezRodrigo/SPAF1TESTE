<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Pilotos Inscritos 2021</h2>
    <v-img
      class="inicio-imagem mb-4"
      src="https://phantom-marca.unidadeditorial.es/e4d546cfd245dc6f4d135a1fda1cf915/resize/660/f/webp/assets/multimedia/imagenes/2021/11/16/16370593936896.jpg"
    >
    </v-img>
    <p>
      Estamos de volta para mais uma temporada do emocionante campeonato da F1,
      onde os melhores competes em carros extremamente rapidos.
    </p>
    <div class="piltos-numeros margin-5">
          <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Numero
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in pilotos"
          :key="item.name"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.numero }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>

    
  </v-container>
</template>

<script>
export default {
  name: "PilotosF1",
  data(){
      return{
          pilotos:[
              {
                  nome: 'Max Verstappen',
                  numero: '33'
              },
               {
                  nome: 'Valtteri Bottas',
                  numero: '77'
              },
               {
                  nome: 'Fernando Alonso',
                  numero: '14'
              },
               {
                  nome: 'Antonio Giovinazzi',
                  numero: '99'
              },
               {
                  nome: 'Lewis Hamilton',
                  numero: '44'
              },
               {
                  nome: 'Robert Kubica',
                  numero: '88'
              },
               {
                  nome: 'Nicholas Latifi',
                  numero: '6'
              },
               {
                  nome: 'Charles Leclerc',
                  numero: '16'
              },
               {
                  nome: 'Nikita Mazepin',
                  numero: '9'
              },
               {
                  nome: 'Lando Norris',
                  numero: '4'
              },
               {
                  nome: 'Esteban Ocon',
                  numero: '31'
              },
               {
                  nome: 'Sergio Pérez',
                  numero: '11'
              },
               {
                  nome: 'Kimi Räikkönen',
                  numero: '7'
              },
               {
                  nome: 'Daniel Ricciardo',
                  numero: '3'
              },
               {
                  nome: 'George Russell',
                  numero: '63'
              },
               {
                  nome: 'Max Verstappen',
                  numero: '33'
              },
               {
                  nome: 'Carlos Sainz',
                  numero: '55'
              },
               {
                  nome: 'Mick Schumacher',
                  numero: '47'
              },
               {
                  nome: 'Lance Stroll',
                  numero: '18'
              },
               {
                  nome: 'Yuki Tsunoda',
                  numero: '22'
              },
          ]
      }
  }
  
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 3px;
}
</style>