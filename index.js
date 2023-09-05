// FETCH
fetch("./db.json")
.then((resp) => resp.json())
.then((data) => renderCompanies(data))

// GLOBAL SCOPE

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')
const centerName = document.getElementById('studioNameDisplay')
const centerYear = document.getElementById('yearDisplay')

//Hover Event Details

const initialScale = 1;
const targetScale = 2;

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

                //HOVER EVENT FOR EACH PICTURE
                animeImg.style.transform = `scale(${initialScale})`;

                function smoothTransition(timestamp, startScale, targetScale, duration) {
                    const move = (timestamp - startTimestamp) / duration;
                    if (move === 1) {
                        const scale = startScale + (targetScale - startScale) * move;
                        animeImg.style.transform = `scale(${scale})`;
                        requestAnimationFrame(smoothTransition);
                      } else {
                        animeImg.style.transform = `scale(${targetScale})`;
                      }
                    }
                
                let startTimestamp;

                animeImg.addEventListener('mouseover', (e) => {
                    startTimestamp = performance.now();
                    // e.target.style.zIndex = 200;
                
                    
                    requestAnimationFrame((timestamp) => smoothTransition(timestamp, initialScale, targetScale, 3));

                animeCont.addEventListener('mouseout', () => {
                    animeImg.style.transform = `scale(${initialScale})`;
                })
                })
                
                // console.log(animeImg)
                
                animeCont.append(animeImg)
                
            })
            

        })
    })
}



console.log('hi')


//One Piece Lofi Volume for MUSIC

const music = document.querySelector('#music');

// music.volume = 0;
