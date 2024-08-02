<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card w-75">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <CNPJForm @search="fetchCompanyInfo" />
                    </div>
                    <div class="col-md-8 mb-3">
                        <div v-if="searched" class="p-3 border rounded">
                            <Company :company="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import CNPJForm from '@/components/Company/CnpjForm.vue';
  import Company from '@/components/Company/Main.vue';
  import axios from 'axios';
  import axiosBusiness from '@/api/axiosBusiness'; // Importa a instância do axios

  const searched = ref(false);
  const company = ref(null);
  
  const fetchCompanyInfo = async (cnpj) => {
    try {
        // get url by .env`
        cnpj = cnpj.replace(/[^0-9]/g, '');
        const response = await axiosBusiness.get(`/api/company/${cnpj}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('response', response);
        company.value = response.data.data;
        searched.value = true;
    } catch (error) {
        console.log('error', error.response.data['error']);
        alert('Erro ao buscar informações da empresa: ' + error.response.data.error);
    }
};

</script>
  
  <style>
  .card {
    max-width: 900px;
  }
  </style>
  