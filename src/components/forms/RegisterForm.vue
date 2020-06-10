<template>
  <div>
    <!--Name-->
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="name"
        name="name"
        v-validate="'required|alpha_dash'"
        :class="{
          'form-control': true,
          'is-invalid': errors.has('name')
        }"
        v-model="formData.name"
        maxlength="50"
      />
      <div class="invalid-feedback">{{ errors.first("name") }}</div>
    </div>

    <!--Email-->
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        name="email"
        v-validate="'required|email'"
        :class="{
          'form-control': true,
          'is-invalid': errors.has('email')
        }"
        v-model="formData.email"
        maxlength="50"
      />
      <div class="invalid-feedback">
        {{ errors.first("email") }}
      </div>
    </div>

    <!--Password-->
    <div class="form-row">
      <div class="form-group col">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-validate="'required|min:6|max:20'"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('password')
          }"
          v-model="formData.password"
          maxlength="20"
          ref="password"
        />
        <div class="invalid-feedback">
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group col">
        <label for="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          v-validate="'required|confirmed:password'"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('password_confirmation')
          }"
          v-model="formData.password_confirmation"
          maxlength="20"
        />
        <div class="invalid-feedback">
          {{ errors.first("password_confirmation") }}
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-outline-dark" :disabled="errors.any()">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  props: ["formData"],
  inject: ["$validator"]
};
</script>
