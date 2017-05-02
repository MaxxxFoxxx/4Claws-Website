/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<script>
var index = 1;
showImage(1);

function plusIndex(n) {
    index = index + 1;
    showImage(index);
}

function showImage(n) {
    var i;
    var x = document.getElementsByClassName("Slides");
    if(n > x.length){ index = 1;}
    if(n < 1){ index = x.length;}
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    x[index-1].style.display = "block";
}
</script>