function StringFunction():void{
    const n1:number = 5**3;
    const n2:number = (n1+4**3)**3;
    let n3:number = ((-(1+1+1+1+1-5-10)+(4*3-n1))+8200*3/10)*3;
    let n4:number = n3/8/10;
    console.log(n2+n4);

    const str1:string = 'ComPi 2';

    console.log('FUNCIONES STRING:');
    console.log('Concatenacion:');
    str1 = concat(str1,' C3D - segundo Proyecto');
    console.log(str1);
    console.log('ToUpperCase:');
    str1.touppercase();
    console.log(str1);
    // console.log('ToLowerCase:');
    // console.log((str1 + ' SI SALE').toLowerCase());
    console.log('ToLowerCase:');
    str1 = str1 + ' SI SALE';
    str1.toLowerCase();
    console.log(str1);
    console.log('length:');
    console.log(str1.length);

    console.log('Concatenacion + :');
    console.log('string + string');
    console.log(str1 + ' C3D - segundo Proyecto');
    console.log('string + numero entero');
    console.log('entero = ' + n2);
    console.log('string + numero decimal');
    console.log('decimal = ' + n4);
}

function testambito():void{
    if(true==true){
        if(true==true){
            console.log("--------------------");
            console.log("       LOCAL         ");
            console.log("--------------------");
            let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
            console.log(numbernumber);
            let numberstring:string = 100 + "Usac";
            let stringnumber:string = "Usac" + 2500;
            let stringstring:string = "Universidad" + " San Carlos";
            let stringboolean:string = "Sistemas" + "true";
            let stringboolean2:string = "Industrial" + "false";
            let booleanstring:string = "true" + "Sistemas";
            let booleanstring2:string = "false" + "Industrial";
            
            console.log(numberstring);
            console.log(stringnumber);
            console.log(stringstring);
            console.log(stringboolean);
            console.log(stringboolean2);
            console.log(booleanstring);
            console.log(booleanstring2);
        }
    }
}

function todas(parametro : string) : void{
    console.log("Hola".toLowerCase().charAt(0).concat(parametro).toUpperCase());
}

console.log("--------------------");
console.log("       GLOBAL       ");
console.log("--------------------");
let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
console.log(numbernumber);
let numberstring:string = 100 + "Usac";
let stringnumber:string = "Usac" + 2500;
let stringstring:string = "Universidad" + " San Carlos";
let stringboolean:string = "Sistemas" + "true";
let stringboolean2:string = "Industrial" + "false";
let booleanstring:string = "true" + "Sistemas";
let booleanstring2:string = "false" + "Industrial";


console.log(numberstring);
console.log(stringnumber);
console.log(stringstring);
console.log(stringboolean);
console.log(stringboolean2);
console.log(booleanstring);
console.log(booleanstring2);

StringFunction();
testambito();
todas('oy ganO compi2');