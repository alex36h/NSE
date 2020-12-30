import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma:FormGroup;


  constructor() { 

    this.forma = new FormGroup({
    'Cuarto': new FormControl('',Validators.required),
    'bujia': new FormControl('',Validators.required),
    'autos': new FormControl('',Validators.required),
    'autos1': new FormControl('',Validators.required),
    'tv': new FormControl(this.opcionesTV[0].cod,Validators.required),
    'sec': new FormControl('',Validators.required),
    'edu': new FormControl('',Validators.required)

    });
  }





  ngOnInit(): void {

    

  }
  cuarto:number;
  bujia:number;
  autos:number;
  autos1:number;



  nvcuarto:number =0;
  nvbujia:number=0;
  nvautos:number=0;
  nvautos1:number=0;
  nvsmarttv:number=0;
  nvsecadora:number=0;
  nveducacion:number=0;
  
puntajeAmai:number;
nvpuntajeAmai:number;
resultado:string;



opcionesTV = [
  {cod:'0', muestraValor:'Seleccione'},
  {cod:'1', muestraValor:'Si'},
  {cod:'2', muestraValor:'No'}
];

smarttv: string = this.opcionesTV[0].cod;

opcionesSecadora = [
  {cod:'0', muestraValor:'Seleccione'},
  {cod:'1', muestraValor:'Si'},
  {cod:'2', muestraValor:'No'}
];

secadora: string = this.opcionesSecadora[0].cod;


opcionesEstudio = [
  {cod:'0', muestraValor:'Seleccione'},
  {cod:'1', muestraValor:'Sin estudio'},
  {cod:'2', muestraValor:'Primaria incompleta'},
  {cod:'3', muestraValor:'Primaria completa'},
  {cod:'4', muestraValor:'Secundaria incompleta'},
  {cod:'5', muestraValor:'Secundaria completa'},
  {cod:'6', muestraValor:'Técnico incompleto'},
  {cod:'7', muestraValor:'Técnico completo'},
  {cod:'8', muestraValor:'Universidad incompleta'},
  {cod:'9', muestraValor:'Universidad completa'},
  {cod:'10', muestraValor:'Posgrado incompleto'},
  {cod:'11', muestraValor:'Posgrado completo'}

];

educacion: string = this.opcionesEstudio[0].cod;



guardar(){

  console.log(this.forma.value)

}

clear(){
  
  this.nvcuarto =0;
  this.nvbujia=0;
  this.nvautos=0;
  this.nvautos1=0;

 this.puntajeAmai=null;
 this.nvpuntajeAmai=null;

this.forma.controls['Cuarto'].setValue('');
this.forma.controls['bujia'].setValue('');
this.forma.controls['autos'].setValue('');
this.forma.controls['autos1'].setValue('');
this.smarttv="0";
this.secadora="0";
this.educacion="0";


this.nvsmarttv=null;
this.nvsecadora=null;
this.nveducacion=null;






}

onCalcular():void{


 //Calculo de la Variable Cuarto


  if (this.cuarto == 1)
  {

    this.nvcuarto = 3;
    console.log(this.nvcuarto)

  }
  
  else if(this.cuarto == 2){
  
    this.nvcuarto = 8;
    console.log(this.nvcuarto)
   }

   else if(this.cuarto == 3){
  
    this.nvcuarto = 20;
    console.log(this.nvcuarto)
   }

   else if(this.cuarto >= 4){
  
    this.nvcuarto = 30;
    console.log(this.nvcuarto)
   }


   //Calculo de la Variable Bujia


   if (this.bujia > 0  && this.puntajeAmai  <= 8 )
   {
 
     this.nvbujia = 5;
     console.log(this.nvbujia)
 
   }

   else if (this.bujia >= 9 && this.bujia <= 17)
   {
 
     this.nvbujia = 15;
     console.log(this.nvbujia)
 
   }
   
   
   else if (this.bujia >= 18 && this.bujia <= 26)
   {
 
     this.nvbujia = 27;
     console.log(this.nvbujia)
 
   }

   else if (this.bujia >= 27 && this.bujia <= 35)
   {
 
     this.nvbujia = 32;
     console.log(this.nvbujia)
 
   }

   else if (this.bujia >35)
   {
 
     this.nvbujia = 49;
     console.log(this.nvbujia)
 
   }

   // Calculo de la Variable Autos

   if (this.autos == 1)
   {
 
     this.nvautos = 30;
     console.log(this.nvautos)
 
   }
   
   else if (this.autos ==2)
   {
 
     this.nvautos = 50;
     console.log(this.nvautos)
 
   }

   else if (this.autos >=3)
   {
 
     this.nvautos = 60;
     console.log(this.nvautos)
 
   }


   // Calculo de la Variable Autos1

   if (this.autos1 == 1)
   {
 
     this.nvautos1 = 17;
     console.log(this.nvautos1)
 
   }
   
   else if (this.autos1 ==2)
   {
 
     this.nvautos1 = 30;
     console.log(this.nvautos1)
 
   }

   else if (this.autos1 >=3)
   {
 
     this.nvautos1 = 42;
     console.log(this.nvautos1)
 
   }

      // Calculo de la Variable Smart Tv

      if (this.smarttv=="1")
      {
    
        this.nvsmarttv = 31;
        console.log(this.nvsmarttv)
    
      }
   
         // Calculo de la Variable Secadora

         if (this.secadora == "1")
         {
       
           this.nvsecadora = 17;
           console.log(this.nvsecadora)
       
         }
      
         
         // Calculo de la Variable Escolaridad

         if (this.educacion == "1")
         {
       
           this.nveducacion = 3;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion =="2")
         {
       
           this.nveducacion = 6;
           console.log(this.nveducacion)
       
         }

         
         else if (this.educacion =="3")
         {
       
           this.nveducacion = 10;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion =="4")
         {
       
           this.nveducacion = 20;
           console.log(this.nveducacion)
       
         }
      
         else if (this.educacion =="5")
         {
       
           this.nveducacion = 40;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion =="6")
         {
       
           this.nveducacion = 20;
           console.log(this.nveducacion)
       
         }
         
         else if (this.educacion =="7")
         {
       
           this.nveducacion = 40;
           console.log(this.nveducacion)
       
         }


                
         else if (this.educacion =="8")
         {
       
           this.nveducacion = 50;
           console.log(this.nveducacion)
       
         }


                
         else if (this.educacion =="9")
         {
       
           this.nveducacion = 70;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion =="10")
         {
       
           this.nveducacion = 80;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion =="11")
         {
       
           this.nveducacion = 100;
           console.log(this.nveducacion)
       
         }
      
      
      this.puntajeAmai = this.nvcuarto + this.nvbujia + this.nvautos + this.nvautos1 + this.nvsmarttv + this.nvsecadora + this.nveducacion;
      console.log("Este es el Puntaje Amai" + " " + this.puntajeAmai);
      
     
       if (this.puntajeAmai > 0 && this.puntajeAmai <= 18)
      {
    
        this.nvpuntajeAmai = 7;
        console.log(this.nvpuntajeAmai)
    
      }


      else if (this.puntajeAmai >= 19 && this.puntajeAmai <= 36)
      {
    
        this.nvpuntajeAmai = 6;
        console.log(this.nvpuntajeAmai)
    
      }

      else if (this.puntajeAmai >= 37 && this.puntajeAmai <= 64)
      {
    
        this.nvpuntajeAmai = 5;
        console.log(this.nvpuntajeAmai)
    
      }

      else if (this.puntajeAmai >= 65 && this.puntajeAmai <= 99)
      {
    
        this.nvpuntajeAmai = 4;
        console.log(this.nvpuntajeAmai)
    
      }

      else if (this.puntajeAmai >= 100 && this.puntajeAmai <= 176)
      {
    
        this.nvpuntajeAmai = 3;
        console.log(this.nvpuntajeAmai)
    
      }

      else if (this.puntajeAmai >= 177 && this.puntajeAmai <= 220)
      {
    
        this.nvpuntajeAmai = 2;
        console.log(this.nvpuntajeAmai)
    
      }

      else if (this.puntajeAmai >= 221 && this.puntajeAmai <= 300)
      {
    
        this.nvpuntajeAmai = 1;
        console.log(this.nvpuntajeAmai)
    
      }

      if (this.puntajeAmai == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Aun no ha Ingresado Datos'
          
        })

        
      } else {
        switch (this.nvpuntajeAmai) {
         
          case (1):
          this.resultado = "AB"
  
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
            
          case (2):
          this.resultado = "C1"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
            
          case (3):
          this.resultado = "C2"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
    
          case (4):
          this.resultado = "D1"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
               
          case (5):
          this.resultado = "D2"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
          
          case (6):
          this.resultado = "E1"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
  
          case (7):
          this.resultado = "E2"
          Swal.fire(
            'Su Nivel Socioeconómico es:' +" "+this.resultado,
            '' ,
            'success'
          )
          break;
                     
       
            default:
               //Acción por defecto
         }

         this.clear();
        
   
      }

  





}
}
