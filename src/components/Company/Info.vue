<template>
    <table class="table">
        <tbody>
        <tr>
            <th class="fw-bold" scope="row">Razão Social</th>
            <td>{{ company.name }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">CNAE Principal</th>
            <td>{{ company.main_activity_description }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Data de Abertura</th>
            <td>{{ company.activity_start_date }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Última Atualização</th>
            <td>{{ company.registration_status_date || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Logradouro</th>
            <td>{{ company.address.street_name || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Número</th>
            <td>{{ company.address.number || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Complemento</th>
            <td>{{ company.address.complement || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">CEP</th>
            <td>{{ company.address.postal || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Bairro</th>
            <td>{{ company.address.neighborhood || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Município</th>
            <td>{{ company.address.city || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">UF</th>
            <td>{{ company.address.state || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Telefone</th>
            <td>{{ company.phone_number || '-' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Capital Social</th>
            <td>{{ company.share_capital || '-' }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>
    const props = defineProps({
    company: {
        type: Object,
        default: () => ({})
    }
    });
</script>