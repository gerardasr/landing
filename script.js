// Get all class-box elements with data-index 1-4
const classBoxes = document.querySelectorAll('.class-box[data-index]');
const announcements = document.querySelector('.announcements');

// Create image elements for each index (1-4)
const images = {};
for (let i = 1; i <= 4; i++) {
  const img = document.createElement('img');
  img.src = `covers/cover${i}.jpg`; // Update with your actual image paths
  img.alt = `Image ${i}`;
  img.className = 'hover-image';
  img.style.display = 'none';
  img.dataset.index = i;
  
  // Insert after announcements element
  announcements.parentNode.insertBefore(img, announcements.nextSibling);
  images[i] = img;
}

// Add hover listeners to each class-box
classBoxes.forEach(box => {
  const index = box.dataset.index;
  
  // Only handle elements with index 1-4
  if (index >= 1 && index <= 4) {
    box.addEventListener('mouseenter', () => {
      announcements.style.display = 'none';
      images[index].style.display = 'block';
      images[index].style.width = '90%';
      images[index].style.position = 'relative';
      images[index].style.left = '5em' // Adjust size as needed
    });
    
    box.addEventListener('mouseleave', () => {
      images[index].style.display = 'none';
      announcements.style.display = 'block';
    });
  }
});