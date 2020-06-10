<template>
  <div class="mt-3">
    <div v-if="type === 'danger'">
      <div class="alert alert-danger" role="alert">
        <ul class="pl-3">
          <li v-for="text in messages" :key="text">{{text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>
