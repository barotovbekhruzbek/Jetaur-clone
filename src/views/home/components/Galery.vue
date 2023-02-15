<template>
  <div class="galery-title">
   {{$t('galery')}}
  </div>
  <div class="container">
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" @click="enlargeImage(image.img)">
        <img :src="image.img" alt="gallery image">
      </div>
    </div>
   <div class="drive">
     <button><i>
       <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M18.2836 4.53125H16.2094L15.6117 3.08984C15.0141 1.57812 13.5727 0.59375 11.9555 0.59375H7.49062C5.87344 0.59375 4.43203 1.57812 3.83437 3.08984L3.23672 4.53125H1.1625C0.881248 4.53125 0.670311 4.8125 0.740623 5.05859L0.951561 5.90234C0.986717 6.11328 1.1625 6.21875 1.37344 6.21875H2.07656C1.58437 6.64062 1.30312 7.23828 1.30312 7.90625V9.59375C1.30312 10.1914 1.51406 10.6836 1.86562 11.0703V12.9688C1.86562 13.6016 2.35781 14.0938 2.99062 14.0938H4.11562C4.71328 14.0938 5.24062 13.6016 5.24062 12.9688V11.8438H14.2406V12.9688C14.2406 13.6016 14.7328 14.0938 15.3656 14.0938H16.4906C17.0883 14.0938 17.6156 13.6016 17.6156 12.9688V11.0703C17.932 10.6836 18.1781 10.1914 18.1781 9.59375V7.90625C18.1781 7.23828 17.8617 6.64062 17.3695 6.21875H18.1078C18.2836 6.21875 18.4594 6.11328 18.4945 5.90234L18.7055 5.05859C18.7758 4.8125 18.5648 4.53125 18.2836 4.53125ZM5.90859 3.93359C6.18984 3.26562 6.7875 2.84375 7.49062 2.84375H11.9555C12.6586 2.84375 13.2562 3.26562 13.5375 3.93359L14.2406 5.65625H5.24062L5.90859 3.93359ZM4.11562 9.59375C3.4125 9.59375 2.99062 9.17188 2.99062 8.46875C2.99062 7.80078 3.4125 7.34375 4.11562 7.34375C4.78359 7.34375 5.80312 8.36328 5.80312 9.03125C5.80312 9.69922 4.78359 9.59375 4.11562 9.59375ZM15.3656 9.59375C14.6625 9.59375 13.6781 9.69922 13.6781 9.03125C13.6781 8.36328 14.6625 7.34375 15.3656 7.34375C16.0336 7.34375 16.4906 7.80078 16.4906 8.46875C16.4906 9.17188 16.0336 9.59375 15.3656 9.59375Z" fill="white"/>
       </svg>

     </i>{{$t('test_drive')}}</button>
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
      margin-left: 2rem;
    }
  }

  .gallery img {
    width: 307px;
    height: 200px;

    @include lg {
      width: 400px;
      height: 250px;
    }
    @include md {
      width: 307px;
      height: 200px;
    }
    @include sm {
      width: 100%;
      height: 300px;
    }
  }
  .enlarged-image {
    transition: 0.3s;
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
  .drive {
    margin-top: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

   button {
     padding: 10px 45px;
     background: #A02218;
     color: white;
     font-weight: 600;
     font-size: 16px;
     line-height: 24px;
     text-transform: uppercase;
      i{
        margin-right: 15px;
      }

     &:hover {
       box-shadow: 0px 8px 12px rgba(160, 34, 24, 0.25);
       transition: 0.4s linear;
     }
   }
  }

</style>