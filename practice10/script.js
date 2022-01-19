// 1
function changeBackground() {
   var changeBack = document.getElementById('naw-head');
   changeBack.style.backgroundColor = 'green';
}

// 2
function changeFirstLink() {
   var changeFirstL = document.getElementsByClassName('breadcrumb')[3];
   changeFirstL.style.cssText = 'color: black; font-size: 40px'
}
// 3
function changeColorLinks() {
   var changeColorLin = document.querySelectorAll('.breadcrumb_links');
   for (var i = 0; i < changeColorLin.length; i++) {
      var ccc = changeColorLin[i];
      ccc.style.color = 'brown';
   }
}
// 4
function changeImage() {
   var changeIm = document.getElementById('current-img');
   changeIm.src = 'images/photo2.jpg'
}
function changeImage2() {
   var changeIm2 = document.getElementById('current-img');
   changeIm2.src = 'images/photo1.jpg'
}
//5
function changeTitle() {
   var changeTit = document.getElementById('card2-title');
   changeTit.innerHTML = '<span class="card-title" id="card2-title">New Title</span>'
}
// 6
function changeDescription() {
   var changeDescr = document.getElementById('description');
   changeDescr.innerHTML = 'На картинке кофе'

}
// 7 
function addNewLink() {
   var addNewLin = document.getElementById('list-links');
   addNewLin.innerHTML += ('<a href="#!" class="breadcrumb">Новый дочерний элемент</a>')
}
// 8
function addNewItem() {
   var addNewIt = document.querySelector('.collection');
   addNewIt.innerHTML += ('<a href="#!" class="collection-item">Item 5</a>')

}