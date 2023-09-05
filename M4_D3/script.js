
const myUrl = "https://api.pexels.com/v1/search?query=";


const fetchPhoto = (query) => {
    fetch(myUrl + query, {
      headers: {
        Authorization: 'beMshDjEOAgDBAWZ8LspM44XO5I2dmGxq4wDcbM2qSlFctAnC0dWgnjs',
      },
    })
      .then((raw) => raw.json())
      .then((res) => {
        let cont = document.querySelector(".album .row")
  
        cont.innerHTML = res.photos.map((photo) => {
          return ` <div class='col col-4'> <div class="card mb-4 shadow-sm">
                  <img src='${photo.src.large}' />
  
                  <div class="card-body">
                    
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      
                      <small class="text-muted">${photo.id}</small>
                    </div>
                  </div>
                </div> </div>`
        }).join("")
      })
      .catch((err) => console.error(err))
  }