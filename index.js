// FETCH
fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderCompanies(data))

// GLOBAL SCOPE

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')
const centerName = document.getElementById('studioNameDisplay')
const centerYear = document.getElementById('yearDisplay')


// RENDERS

function renderCompanies(studios) {
    
    const studioCom = studios.company
    
    
    studioCom.forEach((studio) => {
        
        const studioList = document.createElement('li')
        studioList.textContent = studio.name
        animeCom.append(studioList)
        const animeCont = document.getElementById('animeContainer')
        const animeLi = studio.anime
        

        // CLICK EVENT LISTENER
        
        studioList.addEventListener('click', () => {
            
            
            centerImage.src = studio.image
            centerName.textContent = studio.name
            centerYear.textContent = `Founded ${studio.founded}`
            animeCont.innerHTML = ''
            
            animeLi.forEach((anime) => {
                const animeImg = document.createElement('img')
                animeImg.className = 'animeThumbnail'
                animeImg.src = anime.image
                console.log(animeImg)
                animeCont.append(animeImg)
                
            })
            

        })
    })
}




console.log('hi')


//One Piece Lofi Volume

const music = document.querySelector('#music');

// music.volume = 0;
