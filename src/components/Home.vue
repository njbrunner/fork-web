<template>
    <div>
        <search-bar></search-bar>
        <div class="row">
            <div class="col-md-3">
                <router-link to="/recipe/new" class="btn btn-outline-primary">Create New Recipe</router-link>
            </div>
            <div class="col-md-9">
                <div class="horizontal-scroll">
                    <recipe-list-item v-for="recipe in recipies" :recipe="recipe" :key="recipe._id"></recipe-list-item>
                </div>
            </div>    
        </div>  
    </div>    
</template>
<script>
import CreateRecipeForm from './recipeBook/CreateRecipeForm.vue';
import RecipeListItem from './recipeBook/RecipeListItem.vue';
import SearchBar from './searchBar.vue';
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        CreateRecipeForm,
        RecipeListItem,
        SearchBar,
    },
    data() {
        return {
            recipies: []
        }
    },
    created() {
        // this.$store.dispatch('fetchRecipies')
        // .then(response => {
        //     this.recipies = response.data['Data'];
        // })
        // .catch(error => {
        //     console.log(error.response.data)
        // })
    }
}
</script>
<style>

.horizontal-scroll {
    display: flex;
    overflow-x: scroll;
}
</style>
