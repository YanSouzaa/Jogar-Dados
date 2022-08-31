class Dado{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
    Rolar(){
        var a = Math.floor(Math.random()* this.tamanho);
        if (a < 1 || a == this.tamanho - 1){
            a = a + 1
            console.log("O dado de "+this.tamanho+" lados rolou e caiu o numero: " + a)
        }else{
            console.log("O dado de "+this.tamanho+" lados rolou e caiu o numero: " + a)
        }
    }
}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);



d6.Rolar()
d12.Rolar()
d100.Rolar()

//assistir aula 15 novamente