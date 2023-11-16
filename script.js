//                      Comment - 1 Continution
// Instead of attaching an event listener to each list item, we attach just one to their parent <ul> element. 
// When a list item (<li>) is clicked, our JavaScript detects which item was clicked and changes its color. 
// This approach is more efficient, especially when dealing with a large number of elements, 
// as it minimizes the number of event listeners needed.



document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('itemList');

    itemList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            // Toggle color on click
            if (e.target.style.color === 'red') {
                e.target.style.color = 'green'; // Revert to the original color
            } else {
                e.target.style.color = 'red'; // Change to clicked color
            }
        }
    });
});
