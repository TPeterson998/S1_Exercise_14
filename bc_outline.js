"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author:  Trent Peterson   
   Date:   3.28.19

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array
*/
/* Generate an outline based on h1 through h6 headings in the source document */
window.addEventListener("load", makeOutLine);

function makeOutLine() {
      //Location of the document outline
      var outline = document.getElementById("outline");
      // Source document for the outline
      var source = document.getElementById("doc");

      var mainHeading = document.createElement("h1");
      var outlineList = document.createElement("ol");
      var headingText = document.createTextNode("Outline");

      mainHeading.appendChild(headingText);
      outline.appendChild(mainHeading);
      outline.appendChild(outlineList);
      createList(source, outlineList);
}

function createList(source, outlineList) {
      //headings for the outline
      var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
      //previous level of the headings
      var prevLevel = 0;
      //loop through all of the source article until no child nodes are left
      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
            var headLevel = headings.indexOf(n.nodeName);
            if (headLevel !== -1) {
                  var listElem = document.createElement("li");
                  listElem.innerHTML = n.firstChild.nodeValue;
                  if (headLevel === prevLevel) {
                        //append the list item to the current list
                        outlineList.appendChild(listElem);
                  } else if (headLevel > prevLevel) {
                        //start a new nested list
                        var nestedList = document.createElement("ol");
                        nestedList.appendChild(listElem);
                        //append the nested list to the last item in the current list
                        outlineList.lastChild.appendChild(nestedList);
                        // change the current list to the nested list
                        outlineList = nestedList;
                  } else {
                        //append the list item to a higher list 
                  }
                  //update the value of prevLevel
                  prevLevel = headLevel;
            }
      }
}