document.addEventListener("DOMContentLoaded", function() {
    const teamWrapper = document.querySelector(".team__wrapper");
    const loadMoreButton = document.getElementById("load-more");
    const items = teamWrapper.querySelectorAll(".team__item");
    const totalItems = items.length;
    let itemsToShow = 6;
  
    function updateVisibility() {
      for (let i = 0; i < totalItems; i++) {
        if (i < itemsToShow) {
          items[i].style.display = "block";
        } else {
          items[i].style.display = "none";
        }
      }
  
      if (itemsToShow >= totalItems) {
        loadMoreButton.textContent = "Show less";
      } else {
        loadMoreButton.textContent = "Show all team";
      }
    }
  
    function toggleVisibility() {
      if (itemsToShow >= totalItems) {
        itemsToShow = 6;
      } else {
        itemsToShow = totalItems;
      }
  
      updateVisibility();
    }
  
    loadMoreButton.addEventListener("click", function() {
      toggleVisibility();
    });
  
    updateVisibility();
  });
  