<template>
  <section class="container">
    <h1>forms</h1>
    <div class="row">
      <div class="col-4 mb-3">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Email address</label
        >
        <input
          type="email"
          class="form-control input-design"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>

    <h1>OTP</h1>
    <div class="row">
      <div class="col-4">
        <v-otp-input length="4"></v-otp-input>
      </div>
    </div>

    <h1>Button</h1>
    <div class="row">
      <div class="col-4">
        <button class="btn btn-primary btn-design" type="submit">
          Create Account
        </button>
      </div>
    </div>
  </section>
</template>
    
  <script>
export default {
  layout: "auth",
  data() {
    return {};
  },
  // page properties go here
};
</script>
  
<style>
/* modify OTP input start */
.v-input__control > .v-input__slot fieldset {
  color: rgba(0, 0, 0, 0.38);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border-color: rgba(102, 107, 112, 1);
  background-color: rgba(246, 246, 246, 1);
}

.v-input__control:focus > .v-input__slot fieldset:focus {
  border-color: green;
}

.theme--light.v-input input,
.theme--light.v-input textarea {
  margin-top: 5px;
  margin-right: 5px;
  width: 50px;
  height: 50px;
  font-weight: 500px;
  font-size: 28px;
  color: rgba(65, 105, 225, 1);
}

.v-otp-input {
  /* display: inherit; */
  flex-wrap: nowrap;
  flex: none;
  margin-right: -4px;
  margin-left: -4px;
}

.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  display: block;
  flex: none;
  position: relative;
}
/* modify OTP input end */


/* modify OTP input start */
</style>