<template>
    <div class="form">
        <h2>
            Let's work together.
        </h2>
        <v-app id="inspire" dark>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="message"
                    :rules="messageRules"
                    label="Message"
                    textarea
                    dark
                    required
                ></v-text-field>
                <v-btn
                    :disabled="!valid"
                    @click="submit"
                >
                    submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'I have to know who I am speaking to!'
    ],
    email: '',
    emailRules: [
      v => !!v || `You've been so kind to send me a message. Let me say thanks!`,
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'At least say Hi.'
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   select: this.select,
        //   checkbox: this.checkbox
        // })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="postcss">
.form {
    padding: 5%;
}
</style>
