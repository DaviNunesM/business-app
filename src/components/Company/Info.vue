<template>
    <table class="table">
        <tbody>
        <tr>
            <th class="fw-bold" scope="row">Razão Social</th>
            <td>{{ company.razao_social || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">CNAE Principal</th>
            <td>{{ company.cnae_fiscal_descricao || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Data de Abertura</th>
            <td>{{ company.data_inicio_atividade || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Última Atualização</th>
            <td>{{ company.data_situacao_cadastral || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Logradouro</th>
            <td>{{ company.logradouro || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Número</th>
            <td>{{ company.numero || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Complemento</th>
            <td>{{ company.complemento || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">CEP</th>
            <td>{{ company.cep || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Bairro</th>
            <td>{{ company.bairro || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Município</th>
            <td>{{ company.municipio || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">UF</th>
            <td>{{ company.uf || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Telefone</th>
            <td>{{ company.ddd_telefone_1 || 'Não disponível' }}</td>
        </tr>
        <tr>
            <th class="fw-bold" scope="row">Capital Social</th>
            <td>{{ company.capital_social || 'Não disponível' }}</td>
        </tr>
        </tbody>
    </table>
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