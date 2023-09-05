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
        
        
        studioList.addEventListener('click', (e) => {
            
            
            centerImage.src = studio.image
            centerName.textContent = studio.name
            centerYear.textContent = studio.founded
            
            animeLi.forEach((anime) => {
                const currentLi = document.querySelector('#animeContainer > img')
                const animeImg = document.createElement('img')
                animeImg.className = 'animeThumbnail'
                animeImg.src = anime.image
                console.log(currentLi)
                console.log(animeImg)
                animeCont.replaceChildren(animeImg, currentLi)
                
            })
            

        })
    })
}


// EVENT LISTENERS

console.log('hi')


//One Piece Lofi Volume

const music = document.querySelector('#music');

// music.volume = 0;
