<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th class="fw-bold" scope="col" style="width: 20%;">Código</th>
                <th class="fw-bold" scope="col" style="width: 80%;">Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary table-responsive">
                    <td>{{ $formatter.formatCnae(company.main_activity) || '-' }}</td>
                    <td>{{ company.main_activity_description || '-' }}</td>
                </tr>
                <tr v-for="(act, index) in company.secundary_activities" :key="index">
                    <td>{{ $formatter.formatCnae(act.code) || '-' }}</td>
                    <td>{{ act.description || '-' }}</td>
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