<?PHP
$DOCENT_KEUZE_UITWERKINGEN_BESCHIKBAAR = true;

error_reporting(E_ALL);
require('PHP/toon_bestand.php');

if(isset($_GET['hoofdstuk'])) {
  $hoofdstuk = $_GET['hoofdstuk'];
}
else {
  $hoofdstuk=0;
}

if(isset($_GET['opdracht'])) {
  $opdracht =  $_GET['opdracht'];
}
else {
  $opdracht=1;
}

if(isset($_GET['u'])) {
  $uitwerkingen =  $_GET['u'];
}
else {
  $uitwerkingen='';
}

if ($hoofdstuk==-1) {
  $hoofdstuk='OBF';
}
?>

<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="CSS/prism_wit.css">
    <!-- http://prismjs.com/ -->
    <link rel="stylesheet" type="text/css" href="CSS/education-care/style.css">
    <link rel="stylesheet" type="text/css" href="CSS/games.css">
    <!-- https://www.preciousthemes.com/downloads/education-care/ -->
    <script src="JS/P5/p5.min.js"></script>
    <!-- https://p5js.org/download/ -->
    <script src='JS/H<?PHP echo $hoofdstuk;?>/H<?PHP echo $hoofdstuk;?>O<?PHP echo $opdracht.$uitwerkingen;?>.js'></script>
    <script src="JS/SLO.js"></script>
  </head>
  <body>
      <?PHP
      maak_overzicht($hoofdstuk,$opdracht);
      toon_file($hoofdstuk,$opdracht,$uitwerkingen,$DOCENT_KEUZE_UITWERKINGEN_BESCHIKBAAR)
      ?>
  </body>
</html>


