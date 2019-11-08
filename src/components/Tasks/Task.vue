<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h2>Edycja zadania</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-form>
                    <v-text-field

                    ></v-text-field>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        tastName: 'test',
        taskState: ["ukończone", "nieukończone"]
    })
}
</script>