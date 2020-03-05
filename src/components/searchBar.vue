<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <input class="form-control" type="text" v-model="searchTerm" placeholder="Search" />
      </div>
      <div class="col-md-2">
        <button class="btn btn-outline-primary form-control">Search</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: null
    };
  }
};
</script>
<style scoped>

.container {
  margin-bottom: 30px;
}
</style>