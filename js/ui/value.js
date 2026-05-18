const inputValor = document.getElementById('valor');

inputValor.addEventListener('input', (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, ''); // remover oq ñ for num

    if (value === '') { // se o campo estiver limpo, ñ faz nada
        e.target.value = '';
        return;
    }

    // no min/max mostrar 2 casas decimais
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    
    const valorFormatado = new Intl.NumberFormat('pt-BR', options).format(
        parseFloat(value) / 100
    );

    e.target.value = valorFormatado;
})