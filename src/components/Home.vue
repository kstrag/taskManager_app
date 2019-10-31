<template>
    <v-container>
        <v-layout row>
            <v-flex xs10 sm4 offset-sm4 offset-1>
                <v-card class="mt-5">
                    <v-card-text class="text-center">
                        <h1 class="mb-5">Task Manager</h1>
                        <p class="mb-0">
                            Z łatwością zarządzaj swoim zadaniami. W jaki spósb manager może Ci pomóc ?
                        </p>
                        <v-list v-if="showItems" class="custom-list">
                            <transition-group
                                    appear
                                    name="staggered-fade"
                                    v-bind:css="false"
                                    v-on:before-enter="beforeEnter"
                                    v-on:enter="enter"
                                    v-on:leave="leave"
                                    tag=""
                            >
                                <v-list-item
                                        v-for="(benefit, index) in benefits"
                                        :key="benefit.text"
                                        v-bind:data-index="index"
                                >
                                    <v-list-item-icon class="mr-2">
                                        <v-icon color="teal darken-1">
                                            mdi-check-bold
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        {{benefit.text}}
                                    </v-list-item-content>
                                </v-list-item>
                            </transition-group>
                        </v-list>

                            <v-container>
                                <v-layout row wrapw>
                                    <v-flex xs12>
                                        <v-btn dark router to="/task/new" large color="teal darken-1">Stwórz pierwsze zadanie</v-btn>

                                    </v-flex>
                                    <v-flex xs12>
                                        <v-btn dark router to="/register" large color="teal darken-1">Zarejestruj się</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Velocity from 'velocity-animate'
    export default {
        components: {},
        data: () => ({
            benefits: [
                {text: 'Dodawaj nowe zadania'},
                {text: 'Edytuj aktywne zadania'},
                {text: 'Usuwaj ukończone zadania'}
            ],
            showItems: false,

        }),
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.right = '-100px'

            },
            enter: function (el, done) {
                var delay = el.dataset.index * 900
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: '1', right: 0 },
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 900
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: '0', right: '-100%' },
                        { complete: done }
                    )
                }, delay)
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.showItems = true

            })
        }
    }

</script>

<style lang="scss">
    .custom-list{
        overflow: hidden;
    }
</style>
