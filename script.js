document.getElementById(" cédula").addEventListener(" input",function(){
    //Permitir solo valores numericos
    this.value = this.value.replace(/[^0-9]/g,' ');
});
document.getFlementById(" telefono").addEventListener(" input",function(){
    this.value = this.value.replace(/[^0-9-]/g, ' ');
});