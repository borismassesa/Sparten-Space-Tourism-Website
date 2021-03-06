const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {tab.addEventListener('click', changeTabPanel);

})

let tabFocus = 0;

function changeTabFocus(e){
  const keydownLeft = 37;
  const keydownRight = 39;



  //Change the abindex of the current tab to -1
  if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  // If the right key is pushed, move to the necxt tab on the right
  if(e.keyCode === keydownRight){
    tabFocus ++;
    if(tabFocus >= tabs.length){
      tabFocus = 0;
    }

  }

  // If the left key is pushed, move to the next tab on the left
  if(e.keyCode === keydownLeft){
    tabFocus --;  
    if(tabFocus < 0 ) {
      tabFocus = tabs.length-1;
    }                  
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetBtn = e.target;
  const targetPanel = targettab.getAttribute("aria-controls");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  mainContainer
  .querySelectorAll('article')
  .forEach((article) => article.setAttribute("hidden", true));

  mainContainer.querySelector(['#${targetPanel}']).removeAttribute('hidden');

  
}