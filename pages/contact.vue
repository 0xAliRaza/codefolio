<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <section class="contact">
              <div class="contact__heading text-center my-3">
                <h1>Contact</h1>
              </div>

              <!-- Add your custom action here (i.e. formspree.io) -->
              <form
                v-if="contact"
                :action="contact.formAction"
                method="POST"
                class="contact__form py-3"
              >
                <div class="mb-3">
                  <label for="fullname" class="form-label contact__label"
                    >Full name</label
                  >
                  <input
                    id="fullname"
                    type="text"
                    class="form-control contact__input"
                    name="fullname"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label contact__label"
                    >Email</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="form-control contact__input"
                    name="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label contact__label"
                    >Subject</label
                  >
                  <input
                    id="subject"
                    type="text"
                    class="form-control contact__input"
                    name="subject"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label contact__label"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    class="form-control contact__textarea"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="d-flex justify-content-end">
                  <Button primary
                    >Submit <Icon name="paperplane" class="ms-1"
                  /></Button>
                </div>
              </form>
              <hr />
              <div class="contact__details py-3">
                <p v-if="contact.location">
                  Location<Icon class="ms-1" name="location" />:<span
                    class="ms-2"
                    >{{ contact.location }}</span
                  >
                </p>
                <p v-if="contact.email">
                  Email<Icon class="ms-1" name="email" />:<a
                    class="ms-2"
                    :href="`mailto:${contact.email}`"
                    >{{ contact.email }}</a
                  >
                </p>
                <p v-if="contact.phone">
                  Phone<Icon class="ms-1" name="phone" />:<a
                    class="ms-2"
                    :href="`tel:${contact.phone}`"
                    >{{ contact.phone }}</a
                  >
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const navbar = await $content('navbar').fetch()
    const contact = await $content('contact').fetch()
    return {
      navbar,
      contact,
    }
  },
  head: {
    title: 'Contact - Codefolio',
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.contact {
  padding: pxToRem(10);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  &__details > p {
    &:last-child {
      margin: 0;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $gray-8;
    span {
      color: $primary;
    }
  }

  &__form {
  }

  &__label {
    color: $gray-6;
    font-size: pxToRem(15);
  }
  &__input {
    min-height: pxToRem(45);
  }
  &__input,
  &__textarea {
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border: 1px solid rgba($gray-2, 0.7);
    @include hocus {
      border: 1px solid rgba($primary, 0.3);
      box-shadow: 0 0 pxToRem(5) 0 rgba($primary, 0.2);
    }
  }
}
</style>
