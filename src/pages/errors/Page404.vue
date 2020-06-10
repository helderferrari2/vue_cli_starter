<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="error-template">
          <h1>
            Oops!
          </h1>
          <h2>
            404 Not Found
          </h2>
          <div class="error-details">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div class="error-actions">
            <router-link :to="{ name: 'home' }" class="btn btn-outline-dark"
              >go home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}
</style>
