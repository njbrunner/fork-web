<template>
    <div class="col-md-3 card">
        <div class="card-body">
            <div class="card-title">{{ recipe.name }}</div>
            <div>{{ recipe.description }}</div>
            <p>{{ recipe.ingredients.length }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RecipeListItem',
    props: {
        recipe: Object
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped>

.card {
    max-height: 300px;
    overflow: hidden;
    display: inline-block;
}
</style>
