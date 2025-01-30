let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let circles = document.querySelectorAll('.circle');

let activeIndex = 0;

nextBtn.addEventListener('click', function() {
    activeIndex++;
    update();
});

prevBtn.addEventListener('click', function() {
    activeIndex--;
    update();
});

function update() {
    // Traverse through all circles
    circles.forEach((circle, index) => {
        if(index <= activeIndex) {
            // Add 'active' class to the circles that are at or before the active index
            circle.classList.add('active');
        } else {
            // Remove 'active' class from the circles that are after the active index
            circle.classList.remove('active');
        }
    });

    // If active index is 0, disable 'prev' button
    if(activeIndex === 0) {
        prevBtn.disabled = true;
    } else {
        // Otherwise, enable 'prev' button
        prevBtn.disabled = false;
    }

    // If all circles are active (i.e., active index is the last index), disable 'next' button
    if(activeIndex === circles.length - 1) {
        nextBtn.disabled = true;
    } else {
        // Otherwise, enable 'next' button
        nextBtn.disabled = false;
    }
}
update();
