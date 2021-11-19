let unitEconomicForm= document.getElementById('unit-economics-form'),
        sellingPriceInput = document.getElementById('selling-price'),
        cogsInput =document.getElementById('cogs'),
        grossMarginInput =document.getElementById('gross-margin'),
        salesMarketingInput =document.getElementById('sales-marketing'),
        operationalCostInput =document.getElementById('operation-cost'),
        netMarginInput =document.getElementById('net-margin'),
        sellingPriceValue,cogsValue,salesMarketingValue,operationalCostValue,
        grossMarginValue,netMarginValue;

function calculate(e){
        e.preventDefault();
        // console.log('hello');
        sellingPriceValue = sellingPriceInput.value;
        cogsValue = cogsInput.value;
        grossMarginValue = sellingPriceValue - cogsValue;
        console.log(grossMarginValue);
        grossMarginInput.value = grossMarginValue;

        salesMarketingValue = salesMarketingInput.value;
        operationalCostValue =  operationalCostInput.value;

        netMarginValue = grossMarginValue - salesMarketingValue -  operationalCostInput;
        console.log(netMarginValue);
        netMarginInput.value = grossMarginValue;
}
calculateBtn.addEventListener('click',calculate);       