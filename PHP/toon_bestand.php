<?PHP
$Nbuttons_per_regel = 10;
$titel[0]="voorbeeld";
$titel[1]="H1 Kennismaken met P5";
$titel[2]="H2 Objecten";
$titel[3]="H3 Games maken";

function maak_overzicht($hoofdstuk,$opdracht) {
    global $Nbuttons_per_regel,$titel;
    $n=1;
    $casus='JS/H'.$hoofdstuk.'/H'.$hoofdstuk.'O';
    while(file_Exists("$casus$n.js")) {
        $n++;
    }
    ?>
        <div class="container" id="clicker">
            <blockquote>
                <h1><?PHP echo $titel[$hoofdstuk].'  #'.$opdracht.' Kies <a href="index.php?hoofdstuk=1&opdracht=1">H1</a> | <a href="index.php?hoofdstuk=2&opdracht=1">H2</a> | <a href="index.php?hoofdstuk=3&opdracht=1">H3</a> | <a href="index.php?hoofdstuk=0&opdracht=1">VB</a> | <a href="index.php?hoofdstuk=-1&opdracht=1">OB</a>';?></h1>
                <script>
                var zero="0";
                var string = "<p>";
                for (n=1;n< <?PHP echo $n;?>;n++) {
                    if (n==10) {
                        zero="";
                    }
                    string+="<a class=\"button\" href=\"index.php?hoofdstuk=<?PHP echo $hoofdstuk;?>&opdracht="+n+"\">"+zero+n+"</a>";
                    if (n % <?PHP echo $Nbuttons_per_regel;?> == 0) {
                        string+="<br>";
                    }
                }
                string+="</p>";
                document.write(string);
                </script>
          </blockquote>
        </div><!-- .container -->
        
    
    <?PHP
} // einde functie maak_overzicht

function toon_file($hoofdstuk,$opdracht,$uitwerkingen,$doc_uitw) {
    if ($hoofdstuk==-1) {$hoofdstuk='OBF';}
    echo '<div class="container"><div id="processing"></div></div><!-- .container -->';
    echo '<div class="container"><button onclick="toonCode()">Toon Javascript-code</button>';
    
    if ($uitwerkingen!='U' && $hoofdstuk!='OBF' && $hoofdstuk!='0' && $doc_uitw) {
        echo '<a class="button" href="index.php?hoofdstuk='.$hoofdstuk.'&amp;opdracht='.$opdracht.'&amp;u=U">Toon uitwerkingen</a>';
    }

    if ($hoofdstuk==0 || $uitwerkingen=='U' || 1==1) {
        echo '<script src="JS/prism.js"></script><div class="container" id="code" style="display: none;"><pre class="line-numbers"><code class="language-js">';
        $filename = fopen('JS/H'.$hoofdstuk.'/H'.$hoofdstuk.'O'.$opdracht.$uitwerkingen.'.js', 'r'); 
        $file = fread($filename, filesize('JS/H'.$hoofdstuk.'/H'.$hoofdstuk.'O'.$opdracht.$uitwerkingen.'.js'));
        echo $file;
        fclose($filename);
        echo'</code></pre>';
    }
    echo '</div><!-- .container -->';
    echo '</div><!-- .container -->';
}
?>