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
                <tr v-for="(socio, index) in company.qsa" :key="index">
                    <td>{{ socio.nome_socio || 'Não disponível' }}</td>
                    <td>{{ socio.cnpj_cpf_do_socio || 'Não disponível' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const props = defineProps({
        company: {
            type: Object,
            default: () => ({})
        }
    });
</script>