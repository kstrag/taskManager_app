<template>
    <div class="menu">
        <v-navigation-drawer absolute temporary v-model="openSideNav">
            <v-list>
                <v-list-item
                        v-for="menuItem in menuItems"
                        v-bind:key="menuItem.title"
                        router
                        v-bind:to="menuItem.link"
                >
                    <v-list-item-icon>
                        <v-icon left>
                            {{menuItem.icon}}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        {{menuItem.title}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark class="teal darken-1">
            <v-app-bar-nav-icon class="hidden-md-and-up" v-on:click="openSideNav = !openSideNav"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">Task Manager</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

                    <v-btn
                            text
                            v-for="menuItem in menuItems"
                            v-bind:key="menuItem.title"
                            router
                            v-bind:to="menuItem.link"
                    >
                        <v-icon left dark>
                            {{menuItem.icon}}
                        </v-icon>
                        {{menuItem.title}}
                    </v-btn>

            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        components: {},
        data: () => ({
            openSideNav: false,
            menuItems:[
                {icon: 'mdi-format-list-bulleted', title:'Pokaż zadania', link:'/tasks'},
                {icon: 'mdi-calendar-import', title:'Dodaj zadania', link:'/task/new'},
                {icon: 'mdi-account', title:'Profil', link:'/profile'},
                {icon: 'mdi-face', title:'Zaloguj się', link:'/login'},
                {icon: 'mdi-lock-open', title:'Zarejestruj się', link:'/register'},

            ]
        }),
    };
</script>
