    //-----------Episode-1.js------------------
    var hello = 'Mbolo JS';
    console.log(hello); //ce script affiche Mbolo JS à la console
    //----------Fin----------------------------


    //-----------Episode-2.js-------------------
    var name  = prompt('Saisissez votre nom'); 
    alert('Bonjour ' + name); //cette alert affiche Bonjour + nom saisi
    //-----------Fin----------------------------


    //-----------Episode-3.js-------------------
    var number1 = prompt("Saisissez un nombre");
    var number2 = prompt("Saisissez un autre nombre");
    var somme = parseInt(number2) + parseInt(number2);
    alert(somme);  //ce programme affiche la somme de 2nombre
    //------------Fin---------------------------


    //------------Episode-4.js------------------
    var a = 10; b = 5;
    console.log(b,a);
    //------------Fin----------------------------


    //-------------Episode-5.js------------------
    var nmber = prompt("Tapez un nombre");
    alert(nmber * 2);
    //--------------Fin--------------------------


    //--------------Episode-6.js-----------------
    let note = prompt('Ecrivez un nombre');
    let note1 = prompt('Ecrivez un autre nombre');
    let note2 = prompt('Puis un dernier');
    let resultat = parseInt(note) + parseInt(note1) +parseInt(note)
    alert(resultat / 3);
    //--------------Fin--------------------------


    //--------------Episode-7.js-----------------
    let age = prompt('Quel est ton âge avez ?');

    if (age >= 18) {
        alert('Vous êtes majeur');
    } else {
        alert('vous êtes mineur');
    }
    //--------------Fin---------------------------
    


    //---------------Episode-8.js----------------

    var nom = prompt('Quel est votre nom ?'); 
    var sexe = prompt("Vous de quel sexe ?");
    var femme =  true;

    if (femme) {
       alert('Bonjour madame ' +nom); 
    } else 
        alert('Bonjour monsieur ' +nom);
    //----------------Fin------------------------


    //----------------Episode-9.js---------------
    let moyenne = prompt('Quelle est votre moyenne ?');
 
    if (moyenne <= 10) {
        alert('Votre mention est passable');
    } else if (moyenne <= 13) {
        alert("C'est assez bien !");
    } else if(moyenne <= 16){
        alert('Votre mention est bien !');
    } else if (moyenne <= 19){
        alert('Vous avez une mention très bien !');
    } else
        alert("Cette moyenne n'a pas de mention");
    //-----------------Fin-----------------------


    //-----------------Episode-10.js--------------
    let montantFac = prompt('Quel est le montant de votre facture ?');
  
    if (montantFac <= 40000) {
        alert(montantFac);
    } else if (montantFac >= 40000) {
        alert(montantFac * 10 / 100);
    }
    //-------------------Fin-----------------------


    //-------------------Episode-11.js------------------------
    let nbre = prompt('Saisissez un nombre de votre choix');

    for (let i = 0; i < 11; i++) {
        alert(nbre * i);     
    }
    //------------------Fin------------------------------------
    


    //-------------------Episode-12.js-------------------------
    var x = 1;
     while (x <= 10) {
         console.log(x+1);
         x = x+1;
     }
    
    //---------------------Episode-13.js------------------------
   
    var reponse = 12;
    var operation = ('5+7?');
    prompt('Donnez la bonne reponse');

     if (reponse >= 12) {
         alert('Le chiffre est plus petit ');
         prompt('Donnez la bonne reponse');

     } else if(reponse <= 12) {
         alert('Le chiffre est plus grand');
         prompt('Donnez la bonne reponse');

     }else if (reponse === 12) {
         alert('Bonne reponse');
         prompt('Donnez la bonne reponse');
     }else
     alert('continuez');

     