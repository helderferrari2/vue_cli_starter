<template>
  <div>
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

    <div class="form-group">
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
      />
      <div class="invalid-feedback">
        {{ errors.first("password") }}
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
