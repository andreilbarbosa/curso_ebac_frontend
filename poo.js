function Moto (){ 
    this.ligar = function(){
        return console.log('Vruuuummm');
    }
    
    this.acelerar = function(){
        return console.log('**acelera**');
    }
    
    this.freiar = function(){
        return console.log('**freiando**');
    }
    
    this.desligar = function(){
        return console.log('turn off');
    }

    return
}

function Honda (modelo, ano){
    this.modelo = modelo;
    this.marca = 'Honda';
    this.ano = ano;

    Moto.call(this);
}

function Yamaha (modelo, ano){
    this.modelo = modelo;
    this.marca = 'Yamaha';
    this.ano = ano;

    Moto.call(this);
}

motoHonda1 = new Honda('CBX Twwister 250', 2005);

motoYamaha1 = new Yamaha('Fazer 250', 2008);

motoHonda2 = new Honda('Titan', 2008);

console.log(motoHonda1);

console.log(motoYamaha1);

console.log(motoHonda2);