import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  cuarto:number;
  bujia:number;
  autos:number;
  autos1:number;
  smarttv:number;
  secadora:number;
  educacion:number;
  

  nvcuarto:number;
  nvbujia:number;
  nvautos:number;
  nvautos1:number;
  nvsmarttv:number;
  nvsecadora:number;
  nveducacion:number;
  
puntajeAmai:number;
nvpuntajeAmai:number;
resultado:string;



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


   if (this.bujia <= 8)
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

      if (this.smarttv == 1)
      {
    
        this.nvsmarttv = 31;
        console.log(this.nvsmarttv)
    
      }
   
         // Calculo de la Variable Secadora

         if (this.secadora == 1)
         {
       
           this.nvsecadora = 17;
           console.log(this.nvsecadora)
       
         }
      
         
         // Calculo de la Variable Escolaridad

         if (this.educacion == 1)
         {
       
           this.nveducacion = 3;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion ==2)
         {
       
           this.nveducacion = 6;
           console.log(this.nveducacion)
       
         }

         
         else if (this.educacion ==3)
         {
       
           this.nveducacion = 10;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion ==4)
         {
       
           this.nveducacion = 20;
           console.log(this.nveducacion)
       
         }
      
         else if (this.educacion ==5)
         {
       
           this.nveducacion = 40;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion ==6)
         {
       
           this.nveducacion = 20;
           console.log(this.nveducacion)
       
         }
         
         else if (this.educacion ==7)
         {
       
           this.nveducacion = 40;
           console.log(this.nveducacion)
       
         }


                
         else if (this.educacion ==8)
         {
       
           this.nveducacion = 50;
           console.log(this.nveducacion)
       
         }


                
         else if (this.educacion ==9)
         {
       
           this.nveducacion = 70;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion ==10)
         {
       
           this.nveducacion = 80;
           console.log(this.nveducacion)
       
         }

         else if (this.educacion ==11)
         {
       
           this.nveducacion = 100;
           console.log(this.nveducacion)
       
         }
      
      
      this.puntajeAmai = this.nvcuarto + this.nvbujia + this.nvautos + this.nvautos1 + this.nvsmarttv + this.nvsecadora + this.nveducacion;
      console.log("Este es el Puntaje Amai" + " " + this.puntajeAmai);
      
     
       if (this.puntajeAmai >= 0 && this.puntajeAmai <= 18)
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









        switch (this.nvpuntajeAmai) {
         
          case (1):
           this.resultado = "AB"
             break;
          case (2):
            this.resultado = "C1"
             break;
          case (3):
            this.resultado = "C2"
             break;
  
             case (4):
              this.resultado = "D1"
              break;
              case (5):
                case (4):
                  this.resultado = "D2"
                break;
                case (6):
                  this.resultado = "E1"
                  break;
                  case (7):
                    this.resultado = "E2"
                    break;
                   
   
          default:
             //Acción por defecto
       }
     
        
     
      
      
   
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   
   

   


   


   







   

   




}
}
