<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h2 class="mb-0 text-center">Lista zadań</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm10 md6 offset-sm1 offset-md3>

                <v-list>
                    <v-list-item
                            v-for="(task, index) in tasks"
                            :key="index"
                    >
                        <v-list-item-content class="py-1">
                            <v-container>
                                <v-layout row wrap class="align-center">
                                    <v-flex xs12 sm12 md12 lg5>
                                        <v-list-item-title>
                                            {{task.title}} {{task.id}}
                                        </v-list-item-title>
                                    </v-flex>
                                    <v-flex xs12 sm12 md12 lg7 class="text-lg-right text-md-center">
                                        <v-btn v-bind:disabled="task.completed" v-bind:dark="!task.completed" v-on:click="completeTask" color="teal darken-1" class="mr-2 task-button">
                                            <template v-if="task.completed">
                                                Zadanie zakończone
                                            </template>
                                            <template v-else>
                                                Zakończ zadanie
                                            </template>
                                        </v-btn>
                                       <v-btn color="error" v-on:click="deleteTask(index)">Usuń zadanie</v-btn>

                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        components: {},
        data: () => ({

        }),
        methods:{
            deleteTask: function (id) {
                this.tasks.splice(id, 1)
            },
            completeTask: function () {
                this.tasks.completed = true
            }
        },
        computed:{
            tasks() {
                return this.$store.state.tasks
            }
        }

    };
</script>

<style lang="scss">
    .task-button{
        @media screen and (max-width: 1264px){
            width: calc(100%/ 2 - 5px);

        }
    }
</style>
