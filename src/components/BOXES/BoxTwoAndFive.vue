<template>
  <div>
    <div id="boxTwoAndFive" class="full-container"></div>
    <table>
      <thead>
        <th>Wymiary:</th>
        <th>Dostępność:</th>
        <th>Numer Boksu:</th>
      </thead>

      <tbody>
        <tr v-for="(item, index) in boxes" :key="index">
          <td>{{ item.size }}</td>
          <td>{{ item.availability }}</td>
          <td>{{ item.number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../../firebase/config';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export default {
  async mounted() {
    try {
      const q = query(collection(db, 'boxes2,5'), orderBy('number'));
      const querySnapshot = await getDocs(q);
      const boxes = [];
      querySnapshot.forEach(doc => {
        boxes.push(doc.data());
      });
      this.boxes = boxes;
    } catch (error) {
      console.error('Error fetching boxes:', error);
    }
  },
  data() {
    return {
      boxes: []
    };
  }
};
</script>

<style scoped>
.full-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  color: rgb(255, 255, 255);
}

table {
  font-size: 1rem;
}



th {
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #99CC00;
}

td {
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.3rem;
  color: white;
}

td:hover {
  color: #99CC00;
}
</style>
