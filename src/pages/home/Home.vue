<template>
  <div class="container">
    <div class="row">
      <div class="card mt-5" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="m-3 text-center">
              <img
                class="rounded-circle"
                src="@/assets/images/user_no_image.png"
                width="110"
              />
            </div>
          </li>
          <li class="list-group-item">
            <strong>Name:</strong>
            {{ user.name }}
          </li>
          <li class="list-group-item">
            <strong>E-mail:</strong>
            {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  }
};
</script>
