<template>
    <form @submit.prevent="handleSearch">
        <div class="mb-3">
            <label for="cnpj" class="form-label">Pesquisar CNPJ</label>
            <input type="text" class="form-control" id="cnpj" v-model="cnpj" v-maska="'##.###.###/####-##'">
        </div>
        <button type="submit" class="btn btn-primary">Consultar</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
     import { vMaska } from "maska/vue"

    const emit = defineEmits(['search']);
    const cnpj = ref('');

    const handleSearch = () => {
        emit('search', cnpj.value);
    };
</script>



