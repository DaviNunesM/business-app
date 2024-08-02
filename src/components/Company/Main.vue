<template>
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="company-info-tab" data-bs-toggle="tab" data-bs-target="#company-info" type="button" role="tab" aria-controls="company-info" aria-selected="true">Informações da Empresa</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="atividades-economicas-tab" data-bs-toggle="tab" data-bs-target="#atividades-economicas" type="button" role="tab" aria-controls="atividades-economicas" aria-selected="false">Atividades Econômicas</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="socios-tab" data-bs-toggle="tab" data-bs-target="#socios" type="button" role="tab" aria-controls="socios" aria-selected="false">Sócios</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="company-info" role="tabpanel" aria-labelledby="company-info-tab">
                <CompanyInfo :company="company" />
            </div>
            <div class="tab-pane fade" id="atividades-economicas" role="tabpanel" aria-labelledby="atividades-economicas-tab">
                <CompanyEconomicActivities :company="company" />
            </div>
            <div class="tab-pane fade" id="socios" role="tabpanel" aria-labelledby="socios-tab">
                <CompanyPartners :company="company" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import CompanyInfo from '@/components/Company/Info.vue';
    import CompanyEconomicActivities from '@/components/Company/EconomicActivities.vue';
    import CompanyPartners from '@/components/Company/Partners.vue';
    
    const props = defineProps({
    company: {
            type: Object,
            default: () => ({}) // Inicialize como um objeto vazio por padrão
        }
    });
</script>