const humburger = document.querySelector('.humburger_menu');
const navLink = document.querySelector('.nav-link');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('.nav-link-line').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navLink.classList.remove('active');
}));

const ArtistsCards = document.querySelector('.hidden_artists_wrapper');

const ArtistsItems = [
  {
    ArtistName: 'Jon Bon Jovi',
    image: 'images/artist_1.webp',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Chuck Berry',
    image: 'images/artist_3.jpeg',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Richard Anthony',
    image: 'images/artist_3.jpeg',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'The Brian Setzer Orchestra',
    image: 'images/artist_6.jpeg',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'The Big Bopper',
    image: 'images/artist4.jpeg',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Johnny Burnette',
    image: 'images/artist5.webp',
    alt: 'image',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
];

if (ArtistsCards) {
  for (let i = 0; i < ArtistsItems.length; i += 1) {
    ArtistsCards.innerHTML += `
    <article class="hidden_artists">
    <article class="artist_details">
        <div class="band_image">
            <img src="${ArtistsItems[i].image}" alt="${ArtistsItems[i].alt}" class="normal_image_desk">
        </div>
        <div class="artist_description">
            <h2>${ArtistsItems[i].ArtistName}</h2>
            <h4>${ArtistsItems[i].Description}</h4>
            <hr>
            <p>${ArtistsItems[i].Paragraph}</p>
        </div>
     </article>
  </article>
    `;
  }
}