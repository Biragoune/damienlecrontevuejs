<template lang="html">
    <div class="main-container">
        <div class="form-edit-content">
            <h1>Modifier d'un film</h1>
            <hr>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom du film "
                    v-model="movie.title"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movie.year"
                    :rules="anneeRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom du/des réalisteur(s) "
                    v-model="movie.director.name"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date de naissance du/des réalisteur(s) "
                    v-model="movie.director.birthDate"
                    :rules="naissanceRules"
                    required
                ></v-text-field>
                <v-select
                    label="Genre du film "
                    v-model="movie.genre"
                    :items="items"
                    :rules="[v => !!v || 'Vous devez sélectionner un genre']"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="synopsis"
                    label="Synopsis"
                    v-model="movie.synopsis"
                    textarea
                ></v-text-field>
                <br>
                <v-btn color='success'
                    @click="submit"
                    :disabled="!valid"
                >
                    Confirmer
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    export default {

        created() {
    		this.$store.dispatch('getOneMovie', this.$route.params.id)
        },
        
        data() {
            return {
                id: this.$route.params.id,
                valid: true,
                items: [
                    'Action',
                    'Guerre',
                    'Drame',
                    'Film d\'animation',
                    'Aventure',
                    'Comédie',
                    'Péplum',
                    'Thriller',
                    'Boxe'
                ],
                naissanceRules: [
                    v => !!v || 'Le format de date doit être jj/mm/aaaa',
                    v => /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(v) || 'Le format de date doit être jj/mm/aaaa'
                ],
                anneeRules: [
                    v => !!v || "L'annee doit etre sur 4 chiffres !",
                    v => /[0-9]{4}/.test(v) || "L'annee doit etre sur 4 chiffres !"
                ],
                requiredRules: [
                    v => !!v || "Ce champ est requis.",
                ],
            }
        },

        computed: {
            movie: function() {
                return this.$store.state.currentMovie
            }
        },

        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    if (this.movie.synopsis.length === 0) {
                        this.movie.synopsis = "Aucun synopsis renseigné."
                    }
                    const movie = {
                        id: this.movie.id,
                        title: this.movie.title,
                        year: this.movie.year,
                        genre: this.movie.genre,
                        synopsis: this.movie.synopsis,
                        affiche: this.movie.affiche,
                    };

                    movie.director = {
                        name: this.movie.director.name,
                        birthDate: this.movie.director.birthDate,
                    };

                    this.$store.dispatch('updateMovieInAPI', movie)
                        .then( () => {
                            this.$router.push({ path: `/movie/${this.movie.id}`, params: { id: this.movie.id } })
                        }
                    )
                }
            },
            backToHome : function() {
				this.$router.push({ path: `/` })
			}
        }
    }
</script>

<style lang="css">

    .main-container {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 400px;
        padding-right: 400px;
        text-align: center;
    }

    .form-edit-content hr {
        margin-bottom: 20px;
    }

    .inline {
        display: inline;
    }

    .form-edit-content input[type="file"] {
        display: none;
    }
</style>
