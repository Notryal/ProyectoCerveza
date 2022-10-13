// $(document).ready(function() {

//   $('.color-choose input').on('click', function() {
//       var headphonesColor = $(this).attr('data-image');

//       $('.active').removeClass('active');
//       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
//       $(this).addClass('active');
//   });

// });

// Producto h1
    function Golden(){
      document.getElementById('prodimage')
      .src="../assets/prodimages/cerveza_rubia.png";  
      document.getElementById('message')
      .innerHTML="Golden Ale";
      document.getElementById('description')
      .innerHTML="Cerveza de alta tomabilidad con orientación hacia la malta. Balanceada y limpia. De color amarillo brillante con buena retención de espuma. Suave dulzor de malta y aromas a cereal. Presencia de lúpulo, aunque el amargar es bajo. El final es seco a ligeramente dulce-maltoso.";
    }
     
    function Honey(){
      document.getElementById('prodimage')
      .src="../assets/prodimages/cerveza_brown.png";  
      document.getElementById('message')
      .innerHTML="Honey";
      document.getElementById('description')
      .innerHTML="Cerveza rubia de un color dorado profundo. Maltas caramelo y clara presencia de miel en sabor y aroma. El cuerpo es de ligero a medio, buena tomabilidad. Amargor bajo y balance hacia la malta y la miel.";
    }

    function Red(){
      document.getElementById('prodimage')
      .src="../assets/prodimages/cerveza_roja.png"; 
      document.getElementById('message')
      .innerHTML="Red";
      document.getElementById('description')
      .innerHTML="Cerveza de color ámbar profundo acompañado por una espuma densa de gran retención. Cuerpo medio alto. Sabor a maltas caramelo y fuerte carácter a alcohol y amargor acompañados po un sutil ahumado. El agregado de bourbon Jack Daniel’s en madurado da notas a madera y vainilla hacia el final.";
    }

    function Black(){
      document.getElementById('prodimage')
      .src="../assets/prodimages/cerveza_negra.png"; 
      document.getElementById('message')
      .innerHTML="Black";
      document.getElementById('description')
      .innerHTML="Cerveza oscura profunda, con un rojo intenso a trasluz. Carácter tostado y notas a chocolate. Sabores a malta,  bizcochos y pan tostado. Cuerpo medio alto, amargor medio con notas terrosas.";
    }  
