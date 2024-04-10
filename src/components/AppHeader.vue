<script>
export default {
    name: 'AppHeader',
    props: {
        menuItems: Array,
    },
    methods: {
        toggleDropdown(index) {
            this.$emit('toggle-dropdown', index); // Emit the toggle-dropdown event
        }
    }
};
</script>

<template>
    <!-- HEADER -->
    <header>
        <div class="container">
            <div class="d-flex align-center j-between">
                <div class="logo">
                    <img src="/public/image/logo.png" alt="">
                </div>
                <div class="right-menu d-flex">
                    <div class="menu">
                        <ul class="text-c d-flex unstyled g-2">
                            <li v-for="(item, index) in menuItems" :key="index">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" :id="'dropdownMenu' + index" aria-haspopup="true"
                                        aria-expanded="false" @click="toggleDropdown(index)">
                                        {{ item.label }}
                                    </button>
                                    <div class="dropdown-menu" :id="'dropdownMenu' + index + 'Content'">
                                        <a class="dropdown-item" href="#" v-for="(option, optionIndex) in item.options"
                                            :key="optionIndex">{{ option }}</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <span><a href="#">new</a></span>
                    <button class="workout" type="button"><a href="#">Schedule a Workout</a></button>
                    <div class="icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
@import url('/src/assets/css/_header.css');
</style>