// src/filters.js

export function formatMoney(value) {
    if (!value || value === null || value === '') return 'R$ 0,00';
  
    if (typeof value === 'string') value = parseFloat(value);
  
    function numberToReal(numero) {
      numero = numero.toFixed(2).split('.');
      numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
      return numero.join(',');
    }
  
    return numberToReal(value);
}
  
export function formatPerc(value) {
    if (!value) return '0,00 %';
  
    function numberToReal(numero) {
      numero = numero.toFixed(2).split('.');
      numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
      return numero.join(',') + ' %';
    }
  
    return numberToReal(value);
}
  
export function formatDate(value) {
    if (value === null) return null;
    return new Date(value).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
  
export function capitalize(value) {
    if (!value) return '';
    value = value.toString().toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatCpfCnpj(value) {
    if (!value) return '';
    if (value.length == 11) {
        return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(-2);
    } else if (value.length == 14){
        return value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(-2);
    } else {
        return value;
    }
}

export function formatPostal (value) {
    if (!value) return '';
    return value.replace(/^(\d{5})(\d{3})$/, '$1-$2');
} 

export function formatPhone (value) {
    if (!value) return '';
    value=value.replace(/\D/g,""); //Remove tudo o que não é dígito
    value=value.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    value=value.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return value;
}

export function formatCnae(value) {
    if (!value) return '';
    // Converta o valor para string e remova qualquer caractere não numérico
    const cnaeStr = value.toString().replace(/\D/g, '');

    // Verifique o comprimento e adicione o formato adequado
    if (cnaeStr.length === 7) {
        return `${cnaeStr.slice(0, 4)}-${cnaeStr[4]}/${cnaeStr.slice(5)}`;
    }

    // Retorne o valor sem formatação se não tiver o comprimento esperado
    return cnaeStr;
}
  