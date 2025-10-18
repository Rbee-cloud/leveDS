// images.js - Central Image Management
const imageUrls = {
    // Logos
    "main-logo": "https://i.ibb.co/wZW2jKnM/Screenshot-2025-09-29-at-16-21-15-removebg-preview.png",
    
    // Hero Images
    hero: "https://i.ibb.co/fYN0kq55/Old-Tree.jpg",
    about: "Dom Carlos Park - Caldas Da Rainha",
    
    // Project Images
    biorainha: "https://i.ibb.co/nqj8HBGF/00062-File.jpg",
    artcaldas: "https://i.ibb.co/bMhhzF0p/00019-File.jpg", 
    meleve: "https://i.ibb.co/RkqPsSwP/00040-File.jpg",
    artcaldasApp: "https://i.ibb.co/Kp2C89hX/00044-File.jpg",
    
    // Founder Images
    founder: "https://i.ibb.co/1fqjsbLT/00057-File.jpg",
    gallery1: "https://i.ibb.co/ZRhGVJXR/00043-File.jpg",
    gallery2: "https://i.ibb.co/N2sK6NTf/00039-File.jpg",
    gallery3: "https://i.ibb.co/mFvZX2Qn/00047-File.jpg",
    gallery4: "https://i.ibb.co/pq71dW4/00045-File.jpg",
    gallery5: "https://i.ibb.co/3YhmTS3w/00050-File.jpg",
    gallery6: "https://i.ibb.co/dsbp9mg9/00053-File.jpg",
    
    // Partner Logos
    partner1: "https://i.ibb.co/JRZS6Wyd/00027-File.jpg",
    partner2: "https://i.ibb.co/hFFfmYfh/00021-File.jpg", 
    partner3: "https://i.ibb.co/35mXwx7t/00025-File.jpg",
    partner4: "https://i.ibb.co/xV1V11x/00024-File.jpg"
};

// Function to set image sources
function setImage(elementId, imageKey) {
    const element = document.getElementById(elementId);
    if (element && imageUrls[imageKey]) {
        element.src = imageUrls[imageKey];
    }
}

// Set all images when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set logo
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.src = imageUrls["main-logo"];
    }
});
