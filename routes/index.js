const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const posts = [
    {
      boat_title: 'Ocean Opulence',
      boat_description: 'Sail the seas in style with this luxurious yacht, boasting spacious decks and lavish interiors for the ultimate in comfort and elegance.',
      boat_price: 2500000.00,
      image_url: 'ocean_opulence.jpg'
    },
    {
      boat_title: 'Seafarer\'s Dream',
      boat_description: 'Embark on unforgettable adventures aboard this sleek and stylish yacht, equipped with state-of-the-art amenities and panoramic views of the open ocean.',
      boat_price: 1800000.00,
      image_url: 'seafarers_dream.jpg'
    },
    {
      boat_title: 'Aqua Vista',
      boat_description: 'Experience the epitome of sophistication on Aqua Vista, featuring opulent staterooms, gourmet dining options, and impeccable craftsmanship throughout.',
      boat_price: 3200000.00,
      image_url: 'aqua_vista.jpg'
    },
    {
      boat_title: 'Wave Whisperer',
      boat_description: 'Cruise in tranquility on Wave Whisperer, a yacht designed for serenity seekers with its serene ambiance, serene deck spaces, and serene sunsets over the horizon.',
      boat_price: 1300000.00,
      image_url: 'wave_whisperer.jpg'
    },
    {
      boat_title: 'Nautical Nirvana',
      boat_description: 'Find your bliss at sea with Nautical Nirvana, where every detail is meticulously crafted for relaxation and enjoyment, from the spacious sundeck to the indulgent spa facilities.',
      boat_price: 2700000.00,
      image_url: 'nautical_nirvana.jpg'
    },
    {
      boat_title: 'Maritime Majesty',
      boat_description: 'Command attention on the open waters with Maritime Majesty, a grand vessel exuding elegance and prestige, perfect for hosting unforgettable gatherings and events.',
      boat_price: 3500000.00,
      image_url: 'maritime_majesty.jpg'
    },
    {
      boat_title: 'Yachtalicious',
      boat_description: 'Indulge in the ultimate yachting experience aboard Yachtalicious, where every moment is filled with luxury, excitement, and endless possibilities for adventure.',
      boat_price: 1600000.00,
      image_url: 'yachtalicious.jpg'
    },
    {
      boat_title: 'Sailor\'s Sanctuary',
      boat_description: 'Escape to your personal oasis at sea on Sailor\'s Sanctuary, featuring serene hideaways, pristine beaches, and unparalleled views of the azure waters.',
      boat_price: 2000000.00,
      image_url: 'sailors_sanctuary.jpg'
    },
    {
      boat_title: 'Aquatic Elegance',
      boat_description: 'Revel in the timeless beauty of Aquatic Elegance, where classic design meets modern luxury, offering a seamless blend of comfort and sophistication.',
      boat_price: 2900000.00,
      image_url: 'aquatic_elegance.jpg'
    },
    {
      boat_title: 'Yacht Noir',
      boat_description: 'Embark on a journey of intrigue and allure aboard Yacht Noir, where the allure of the open sea meets the mystique of a bygone era, creating an unforgettable experience for the discerning adventurer.',
      boat_price: 2400000.00,
      image_url: 'yacht_noir.jpg'
    }
  ];

  res.render('home', { posts: posts });
});

module.exports = router;
