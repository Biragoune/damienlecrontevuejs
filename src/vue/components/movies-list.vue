<template>
    <div style="width:100%; margin-left: auto; margin-right: auto; padding-top: 50px; padding-bottom: 50px;">
        <h1 style="padding-left: 37%; padding-right:35%;">MA BIBLIOTHÈQUE DE FILMS</h1>
        <p>Nombre total de films dans le bibliothèque: {{movies.length}}</p>

        <router-link :to="{path: '/addMovie'}"> 
			<v-btn color='success'>Ajouter un film</v-btn> 
		</router-link>

        <v-text-field type="text" label='Rechercher un film :' v-model="search" style="width:25%;"/>
        <ul style="display: flex; justify-content: center; flex-wrap: wrap; list-style: none">
            <movie-item v-for="(movie) in movies_search" v-bind:key="movie.title" v-bind:movieitem="movie" v-on:edit="edit(movie)"></movie-item>
        </ul>
    </div>
</template>

<script>

export default {

    created: function() {
        this.$store.dispatch('getAllMovies')
    },

    data() {
        return {
            movie_to_add: {},
            movie_to_edit: null,
            search: ""
        }
    },

    computed: {
        movies: function() {
            return this.$store.state.movies
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1)
        }
    }
}
</script>

<style>

</style>
