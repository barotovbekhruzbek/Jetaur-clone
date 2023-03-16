<template>
<section class="contact">
  <div class="container">
    <div class="contact-img">
    <h3>{{$t('form_text')}}</h3>
      <p>{{$t('form_text_meneger')}}</p>
    </div>
    <div class="form-contact">
      <form ref="form" @submit.prevent="sendEmail">
        <label for="name">{{$t('name')}}</label> <br>
        <input type="text"
               id="name"
               placeholder="Ismingizni kiriting"
               v-model="name" /> <br>
        <label for="phone">{{$t('phone_number')}}</label> <br>
        <input type="number"
               name="phone"
               id="phone"
               placeholder="+998 (__) ___-__-__"
               v-model="phone"
        /> <br>
        <label for="text">{{$t('questions')}}</label> <br>
        <input type="message"
               id="text"
               placeholder="Savolingizni yozib qoldiring"
              v-model="message"
        />
        <button>{{$t('submit')}}</button>
      </form>
    </div>
  </div>
</section>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_wzm20kf', 'template_dfozejq', e.target,
            'zF09BtqDGi5v9QvdU', {
              name: this.name,
              phone: this.phone,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.phone = ''
      this.message = ''
    },
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_vars.scss";
@import "src/styles/components/_mixins.scss";
.contact {
  padding-top: 80px;
}
.container {
  display: flex;

  @include xl{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact-img {
    width: 625px;
    height: 494.06px;
    background: url("../../../images/form_img.png");
    background-size: cover;
    background-repeat: no-repeat;

    @include sm {
      width: 100%;
    }
    h3 {
      padding: 40px 0px 9px 40px;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      color: #FFFFFF;
    }
    p{
      padding-left: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;
    }
  }

  .form-contact {
    padding: 48px;
    background: #fff;
    width: 625px;
    height: 490px;
@include sm {
  width: 100%;
}

    form{
      label {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 9px;
      }
      input{
        width: 527px;
        height: 62px;
        padding: 21px;
        background: #EEEEEE;
        border: 1px solid #CED4DA;
        border-radius: 4px;
        margin-bottom: 17px;
        @include sm {
          width: 80%;
        }

        &::placeholder {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #6C757D;
        }
      }
      button {
        padding: 16px 41px;
        background: #A02218;
        box-shadow: 0px 8px 12px rgba(160, 34, 24, 0.25);
        color: white;
        border: none;
      }
    }
  }
}
</style>