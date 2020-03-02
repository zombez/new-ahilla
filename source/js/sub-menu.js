"use strict";

// let el = document.getElementsByClassName('site-list__item');
// for(var i=0; i<el.length; i++) {
//   el[i].addEventListener("mouseenter", showSub, false);
//   el[i].addEventListener("mouseleave", hideSub, false);
// }

// function showSub(e) {
//   if(this.children.length>1) {
//      this.children[1].style.height = "auto";
//      this.children[1].style.overflow = "visible";
//      this.children[1].style.opacity = "1";
//   } else {
//      return false;
//   }
// }

// function hideSub(e) {
//   if(this.children.length>1) {
//     this.children[1].style.height = "0px";
//      this.children[1].style.overflow = "hidden";
//      this.children[1].style.opacity = "0";
//   } else {
//      return false;
//   }
// }

const listItems = document.querySelectorAll('.site-list__sub-menu');
const testLists = document.querySelectorAll('.sub-menu');
const testSvg = document.querySelectorAll('.site-list__img');

const addListMouseoverListener = function (item, list, svg) {
  item.addEventListener('mouseover', function () {
      list.classList.add('sub-menu--activ');
      svg.classList.add('site-list__img--activ');
    });
};

const addListMouseoutListener = function (item, list, svg) {
  item.addEventListener('mouseout', function () {
      list.classList.remove('sub-menu--activ');
      svg.classList.remove('site-list__img--activ');
    });
};

const addListClickListener = function (svg, list) {
  svg.addEventListener('click', function () {
      list.classList.toggle('sub-menu--activ');
      svg.classList.toggle('site-list__img--activ');
    });
};

for (let i = 0; i < listItems.length; i++) {
  let item = listItems[i];
  let list = testLists[i];
  let svg = testSvg[i];
  addListMouseoverListener(item, list, svg);
  addListMouseoutListener(item, list, svg);
  addListClickListener(svg, list);
}
