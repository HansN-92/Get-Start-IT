 setInterval(byttvenstre, 5000) // gjør at funksjonen skjer hvert  x sekund (match med tid animasjon tar)
   let randomL = 0; //gir startverdi til tallet som sier hvor det skal være
   function byttvenstre(){  
      let elements = document.getElementsByClassName("entest") //gir elements variablen til class "entest"
      let telements = document.getElementsByClassName("totest") //gir telements variablen til class "totest"
      for(let i = 0;i<elements.length;i++){ //En loop som går gjennom alle classes navngitt element i rekkefølge og legger til tilfeldig tall fra math random funksjonen
         randomnumber() //Funksjon lengre ned som gir oss et tall fra 100-1000 som sier hvor element skal være på skjermen
         elements[i].style.left = `${randomL}`+"px"; //Setter left margin til tilfeldig tall så den får nytt lokale på x aksen
         elements[i].style.top = `${randomL}`+"px"; // Sette top margin til tilfeldig tall så den får nytt lokale på y aksen
         
      }
      for(let i = 0;i<elements.length;i++){
         randomnumber()
         telements[i].style.left = `${randomL}`+"px";
         telements[i].style.top = `${randomL}`+"px";
         
      }
   }
   function randomnumber(){
      randomL = Math.random() * (1000-100) + 100;
   }
   
   
   
   function randomnumber2(){
      randomL = Math.random() * (200-100) + 100;
   }

   const vegetables = ["carrot", "tomato", "broccoli", "wheat"]
   const animals = ["chicken", "cow", "pig", "horse"]
   const buildings = ["barn", "farmhouse", "stable", "chickencoop"]
   const tools = ["shovel", "hoe", "rake", "pitchfork"]