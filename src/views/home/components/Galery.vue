<template>
  <div class="gallery">
    <div v-for="(image, index) in images" :key="index" @click="enlargeImage(image.img)">
      <img :src="image.img" alt="gallery image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galery',
  data() {
    return {
      images: [
        {
          img: require('@/images/gellery/big/1.jpg')
        },
        {
          img: require('../../../images/gellery/big/2.jpg')
        },
        {
          img: require('../../../images/gellery/big/3.jpg')
        },
        {
          img: require('../../../images/gellery/big/4.jpg')
        },

        {
          img: require('../../../images/gellery/big/5.jpg')
        },

        {
          img: require('../../../images/gellery/big/6.jpg')
        },

        {
          img: require('../../../images/gellery/big/7.jpg')
        },

        {
          img: require('../../../images/gellery/big/8.jpg')
        },


      ],
      isEnlarged: false,
      enlargedImage: null
    }
  },
  methods: {
    enlargeImage(image) {
      this.isEnlarged = true;
      this.enlargedImage = image;
      const div = document.createElement('div');
      div.classList.add('enlarged-image');
      div.innerHTML = `<img src="${image}" alt="enlarged image">`;
      document.body.appendChild(div);
      div.addEventListener('click', this.closeEnlargedImage);
    },
    closeEnlargedImage() {
      this.isEnlarged = false;
      this.enlargedImage = null;
      const enlargedImage = document.querySelector('.enlarged-image');
      if (enlargedImage) {
        enlargedImage.remove();
      }
    }
  }
}
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gallery img {
  max-width: 100%;
  height: auto;
  cursor: pointer;
}

.enlarged-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.enlarged-image img {
  max-width: 80%;
  max-height: 80%;
}
</style>
