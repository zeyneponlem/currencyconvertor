
const dollar = document.getElementById('dollar');
const pound = document.getElementById('pound');  

dollar.addEventListener('input', dollartopound);
function dollartopound() { 
const d1 = parseInt(dollar.value);
const gbp = d1*1.20;
pound.value = gbp;


}
pound.addEventListener('input', poundtodollar);
function poundtodollar(){
    const gbp = parseInt(pound.value);
    const d1 = gbp*0.83;
    dollar.value = d1;
}
    
    
    
    
    
    
    
    
    
    