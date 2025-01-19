<template>
  <div id="boxTwo" class="full-container">
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
      const q = query(collection(db, 'boxes'), orderBy('number'));
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
  margin-top: 2rem;
  color: rgb(255, 255, 255);
  padding-top: 5rem;
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
}

td:hover {
  color: #99CC00;
}
</style>
