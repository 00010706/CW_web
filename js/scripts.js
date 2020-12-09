var tabNavs = document.querySelectorAll(".nav-tab"); //grabing elements in nav-tab
var tabPanes = document.querySelectorAll(".tab-pane"); //grabing elements in tab-pane

for (var i = 0; i < tabNavs.length; i++) { //endless loop for tabs

  tabNavs[i].addEventListener("click", function(e){ //event listener, which will work on every click
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab"); //variable to check activate tab

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) { //if users click on tab script will add class 'active' to dispaly it via css
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else { //then delete the previous one
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}