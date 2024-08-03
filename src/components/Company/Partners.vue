<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th class="fw-bold" scope="col">Nome</th>
                <th class="fw-bold" scope="col">CPF</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(partner, index) in partners" :key="index">
                    <td>{{ partner.name || '-' }}</td>
                    <td>{{ partner.cpf || '-' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const props = defineProps({
        partners: {
            type: Object,
            default: () => ({})
        }
    });
</script>