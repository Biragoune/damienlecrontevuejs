<template lang="html">
    <div class="form-edit-content">
        <div class="main-container">
            <h1>Ajouter un film</h1>
            <hr>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom du film "
                    v-model="movieToAdd.title"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movieToAdd.year"
                    :rules="anneeRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom du/des réalisateur(s) "
                    v-model="movieToAdd.director.name"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date de naissance du/des réalisteur(s) "
                    v-model="movieToAdd.director.birthDate"
                    :rules="naissanceRules"
                    required
                ></v-text-field>
                <v-select
                    :items="items"
                    label="Genre du film "
                    v-model="movieToAdd.genre"
                    :rules="[v => !!v || 'Vous devez sélectionner un genre']"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="synopsis"
                    v-model="movieToAdd.synopsis"
                    label="Synopsis"
                    textarea
                    style="margin-top: 10px;"
                ></v-text-field>
                <br>
                <v-btn color='success'
                        @click="submit"
                        :disabled="!valid"
                >
                    AJouter !
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    export default {
        
        data: () => ({
            valid: true,
            items: [
                'Action',
                'Animation',
                'Aventure',
                'Biographique',
                'Fantastique',
                'Comédie',
                'Drame'
            ],

            movieToAdd : {
                title: '',
                year: '',
                language: '',
                genre: null,
                director : {
                    name: '',
                    birthDate: '',
                },
                synopsis: '',
                affiche: ''
            },

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
        }),

        methods: {
            submit() {
                if (this.$refs.form.validate()) {

                    const movie = {
                        title: this.movieToAdd.title,
                        year: this.movieToAdd.year,
                        genre: this.movieToAdd.genre,
                        synopsis: this.movieToAdd.synopsis,
                        affiche: this.movieToAdd.affiche ? this.movieToAdd.affiche : '/../../static/affiche/pas_afficheee.jpg'
                    };

                    movie.director = {
                        name: this.movieToAdd.director.name,
                        birthDate: this.movieToAdd.director.birthDate,
                    };

                    this.$store.dispatch('addMovieToAPI', movie)
                        .then( (res) => {
                            console.log('réponse', res)
                            this.$router.push({ path: `/movie/${res.id}`, params: { id: res.id } })
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

</style>
