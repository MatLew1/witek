<template>
  <div id="gallery" class="full-container">
    <the-underline>
      <div class="container">
        <div>
          <p class="underlineP">Galeria</p>
        </div>
      </div>
      <div>
        <div class="underline"></div>
      </div>
    </the-underline>

    <el-carousel
      class="gallery"
      :interval="3000"
      arrow="always"
      indicator-position="outside"
    >
      <el-carousel-item v-for="item in items" :key="item.id">
        <div class="carousel-item-content">
          <img :src="item.imageUrl" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, imageUrl: "/gallery1.jpg" },
        { id: 2, imageUrl: "/gallery2.jpg" },
        { id: 3, imageUrl: "/gallery3.jpg" },
        { id: 4, imageUrl: "/gallery4.jpg" },
        { id: 5, imageUrl: "/gallery5.jpg" },
        { id: 6, imageUrl: "/gallery6.jpg" },
        { id: 7, imageUrl: "/gallery7.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.full-container {
  margin-top: 120rem;
}

.gallery {
  margin-top: 4rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.carousel-item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.el-carousel__item img {
  max-width: 100%; /* Ustawia maksymalną szerokość na 100% kontenera */
  max-height: 100%; /* Ustawia maksymalną wysokość na 100% kontenera */
  border-radius: 8px;
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.el-carousel__arrow {
  color: aliceblue;
}
</style>
