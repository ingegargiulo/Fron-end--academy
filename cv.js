


 
   // const bb = document.getElementById('foto2').onclick;
   //bb.disable = true;
   document.getElementById('foto2').addEventListener('click',function(){
   switch(d){
        case '1' :
                document.getElementById("foto2").src = "https://randomuser.me/api/portraits/women/55.jpg" ;   
                
                d = '2'
                 
                 break
            
        
    case '2':
        
         
        document.getElementById("foto2").src = "https://randomuser.me/api/portraits/women/53.jpg";
       
        d = '3'
        
        break
        case '3':
                 
        document.getElementById("foto2").src = "https://randomuser.me/api/portraits/women/51.jpg";
        
        d = '1'
        
        break
   
    }    
       
    }) ; 
    
    
    
    
    
      
     
      
        
    

document.getElementById('colord').addEventListener("click", function(){
    
   
    let bc=document.getElementById("colord");
    bc.disable = true;
    let fondo = document.getElementsByClassName('lista1')[0]//.style.backgroundColor ('green');
     
    //document.getElementsByClassName('lista1')
    switch(b) {
        case true:
            fondo.style.backgroundColor ='gray'     
            b = !b;
            break;
        case false:
            fondo.style.backgroundColor ='white'
            b = !b;
            break;
       
      }   
    ;})
