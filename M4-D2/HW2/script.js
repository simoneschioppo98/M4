const eminemSection = document.getElementById(" eminemSection");
const metallicaSection = document.getElementById(" metallicaSection")


function creatCard (data) {
    const card = document.createElement('div');
    card.classList.add('card', 'col');


    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

   const title = document.createElement ('h5');
   title.classList.add('card-title');
   title.innerText = data.title;

   const artistImg = document.createElement ('img');
   artistImg.src = data.artist.picture;


   card.appendChild(title);
   card.appendChild(artistImg);
   card.appendChild(cardBody);

   return card;
}


fetch ( 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
    .then(res => res.json())
    .then(data => {
        const eminemDiv = document.getElementById('eminem');
        eminemDiv.classList.remove('d-none');

        data.data.forEach(item => {
            const card = createCard(item);
            eminemSection.appendChild(card);
        });
    })
    .catch(error => console.log(error));


    fetch ( 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
    .then(res => res.json())
    .then(data => {
        const eminemDiv = document.getElementById('metallica');
        eminemDiv.classList.remove('d-none');

        data.data.forEach(item => {
            const card = createCard(item);
            eminemSection.appendChild(card);
        });
    })
    .catch(error => console.log(error));