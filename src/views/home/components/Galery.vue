<template>
  <div class="galery-title">
    Galereya
  </div>
<div class="container">
  <div class="gallery">
    <div v-for="(image, index) in images" :key="index" @click="enlargeImage(image.img)">
      <img :src="image.img" alt="gallery image">
    </div>
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
@import "src/styles/components/_vars.scss";
@import "src/styles/components/_mixins.scss";
.galery-title {
  padding-top: 180px;
  text-align: center;
  font-weight: 700;
  font-size: 56px;
  line-height: 67px;
  color: #212529;
  padding-bottom: 20px;

}
.gallery {
 display: grid;
  grid-template-columns: auto auto auto auto;

  @include xl {
    grid-template-columns: auto auto auto;
  }
@include lg {
  grid-template-columns: auto auto;
}
  @include sm {
    grid-template-columns: auto;
    align-items: center;
}

.gallery img {
  height: 200px;
  width: 307px;
  @include lg {
    width: 400px;
    height: 250px;
  }
  @include md {
    width: 307px;
    height: 200px;

  }
  @include sm {
  width: 300px;
  }
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
}}
</style>
