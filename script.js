// Get all class-box elements with data-index 1-4
const classBoxes = document.querySelectorAll('.class-box[data-index]');
const announcements = document.querySelector('.announcements');

// Store image URLs for each index (1-4)
const imageUrls = {};
for (let i = 1; i <= 4; i++) {
  imageUrls[i] = `covers/cover${i}.jpg`;
}
const nav = document.querySelector('nav');


// Add hover listeners to each class-box
classBoxes.forEach(box => {
  const index = box.dataset.index;
  // Only handle elements with index 1-4
  if (index >= 1 && index <= 4) {
    box.addEventListener('mouseenter', () => {
      announcements.style.display = 'none';
      // Set background image on parent container or body
      document.body.style.backgroundImage = `url('${imageUrls[index]}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      nav.style.opacity = '0.3'; // Set desired opacity
      box.style.background = 'white';
      box.style.padding = '1.1em';
    });
    box.addEventListener('mouseleave', () => {
      document.body.style.backgroundImage = '';
      announcements.style.display = 'block';
      nav.style.opacity = '1';
      box.style.background = 'transparent';
      box.style.padding = '1.0em';
    });
  }
});