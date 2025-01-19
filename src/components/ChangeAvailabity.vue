<template>
  <div class="container">
    <h1>Zmień dostępność boksów</h1>
    <div v-for="box in boxes" :key="box.id">
      <p class="number-box">Numer boksu: {{ box.number }}</p>
      <p class="actualy-availabity">
        Aktualna dostępność: {{ box.availability }}
      </p>
      <button @click="toggleAvailability(box, 'boxes')">Zmień dostępność</button>
    </div>
    <h2>Boksy z kolekcji boxes2,5</h2>
    <!-- Dodany nagłówek -->
    <div v-for="box in boxes2AndFive" :key="box.id">
      <p class="number-box">Numer boksu: {{ box.number }}</p>
      <p class="actualy-availabity">
        Aktualna dostępność: {{ box.availability }}
      </p>
      <button @click="toggleAvailability(box, 'boxes2,5')">Zmień dostępność</button>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export default {
  data() {
    return {
      boxes: [],
      boxes2AndFive: [],
    };
  },
  async mounted() {
    await this.fetchBoxes();
    await this.fetchBoxes2_5();
  },
  methods: {
    async fetchBoxes() {
      try {
        const q = query(collection(db, "boxes"), orderBy("number"));
        const querySnapshot = await getDocs(q);
        const boxes = [];
        querySnapshot.forEach((doc) => {
          boxes.push({ id: doc.id, ...doc.data() });
        });
        this.boxes = boxes;
      } catch (error) {
        console.error("Error fetching boxes:", error);
      }
    },

    async fetchBoxes2_5() {
      try {
        const q = query(collection(db, "boxes2,5"), orderBy("number"));
        const querySnapshot = await getDocs(q);
        const boxes2AndFive = [];
        querySnapshot.forEach((doc) => {
          boxes2AndFive.push({ id: doc.id, ...doc.data() });
        });
        // Po pobraniu danych, połącz je z istniejącymi danymi z `boxes`
        this.boxes2AndFive = boxes2AndFive;
      } catch (error) {
        console.error("Error fetching boxes2_5:", error);
      }
    },
    async toggleAvailability(box, collectionName) {
      const newAvailability =
        box.availability === "dostepny" ? "brak" : "dostepny";
      try {
        const boxRef = doc(db, collectionName, box.id);
        await updateDoc(boxRef, { availability: newAvailability });

        // Aktualizacja stanu w zależności od nazwy kolekcji
        if (collectionName === "boxes") {
          const updatedBoxes = this.boxes.map((item) => {
            if (item.id === box.id) {
              return { ...item, availability: newAvailability };
            }
            return item;
          });
          this.boxes = updatedBoxes;
        } else if (collectionName === "boxes2,5") {
          const updatedBoxes2AndFive = this.boxes2AndFive.map((item) => {
            if (item.id === box.id) {
              return { ...item, availability: newAvailability };
            }
            return item;
          });
          this.boxes2AndFive = updatedBoxes2AndFive;
        }
      } catch (error) {
        console.error("Error updating availability:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  h1 {
    margin-bottom: 0;
  }
}

.number-box {
  font-size: 1.5rem;
}
.actualy-availabity {
  font-weight: bold;
}
</style>
