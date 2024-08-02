<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th class="fw-bold" scope="col">Código</th>
                <th class="fw-bold" scope="col">Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary">
                    <td>{{ company.cnae_fiscal || 'Não disponível' }}</td>
                    <td>{{ company.cnae_fiscal_descricao || 'Não disponível' }}</td>
                </tr>
                <tr v-for="(cnae, index) in company.cnaes_secundarios" :key="index">
                    <td>{{ cnae.codigo || 'Não disponível' }}</td>
                    <td>{{ cnae.descricao || 'Não disponível' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        company: {
            type: Object,
            default: () => ({})
        }
    });
</script>