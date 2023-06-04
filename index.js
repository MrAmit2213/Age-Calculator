let cy=new Date().getFullYear();
let cm=new Date().getMonth() + 1;
let cd=new Date().getDate();
console.log(cy);
console.log(cm);
console.log(cd);
function compute(){
    document.getElementById('dy').innerHTML='- -';
    document.getElementById('dm').innerHTML='- -';
    document.getElementById('dd').innerHTML='- -';
    document.getElementById('error1').innerHTML='';
    document.getElementById('error2').innerHTML='';
    document.getElementById('error3').innerHTML='';
    document.getElementById('y').style.color='black';
    document.getElementById('m').style.color='black';
    document.getElementById('d').style.color='black';
    let y=document.getElementById('year').value;
    let m=document.getElementById('month').value;
    let d=document.getElementById('day').value;
    let ly=y%4;
    let e=0;
    let month=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(y==""){
        document.getElementById('error3').innerHTML='This feild is required';
        document.getElementById('y').style.color='red'; 
        e++;
    }
    if(m==""){
        document.getElementById('error2').innerHTML='This feild is required';
        document.getElementById('m').style.color='red'; 
        e++;
    }
    if(d==""){
        document.getElementById('error1').innerHTML='This feild is required';
        document.getElementById('d').style.color='red'; 
        e++; 
    }
    if(y>cy || (y==cy && m>cm) || (y==cy && m==cm && d>cd)){
        document.getElementById('error3').innerHTML='Must be in the Past';
        document.getElementById('y').style.color='red';
        e++;
    }
    if(m>12){
        document.getElementById('error2').innerHTML='Not a Valid Month';
        document.getElementById('m').style.color='red';
        e++;
    }
    if(d>28){
        if(d==29 && m==2 && ly!=0){
            document.getElementById('error1').innerHTML='Not a Leap Year';
            document.getElementById('d').style.color='red';
            e++;
        }
        else if((d==31 && m==2 && m==4 && m==6 && m==9 && m==11) || (m==2) || d>31){
            document.getElementById('error1').innerHTML='Must be a valid day';
            document.getElementById('d').style.color='red';
            e++;
        }
    }
    if(e==0){
        if(d>cd){
            cm--;
            cd+=month[m-1];
        }
        if(m>cm){
            cy--;
            cm+=12;
        }
        let cdt=cd-d;
        let cmn=cm-m;
        let cyr=cy-y;
        document.getElementById('dy').innerHTML=cyr;
        document.getElementById('dm').innerHTML=cmn;
        document.getElementById('dd').innerHTML=cdt;
    }
}

