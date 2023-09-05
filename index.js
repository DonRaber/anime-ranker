// FETCH
fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderCompanies(data))

fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderVectors(data))

// GLOBAL SCOPE

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')
const centerName = document.getElementById('studioNameDisplay')
const centerYear = document.getElementById('yearDisplay')

//Hover Event Details

const initialScale = 1;
const targetScale = 2;

// RENDERS



// STUDIOS & ANIMES

function renderCompanies(studios) {

    const studioCom = studios.company


    studioCom.forEach((studio) => {

        const studioList = document.createElement('li')
        studioList.textContent = studio.name
        animeCom.append(studioList)
        const animeCont = document.getElementById('animeContainer')
        const animeLi = studio.anime
        const vectorDiv = document.getElementById('vectorContainer')



        // CLICK EVENT LISTENER

        studioList.addEventListener('click', () => {


            centerImage.src = studio.image
            centerName.textContent = studio.name
            centerYear.textContent = `Founded: ${studio.founded}`
            animeCont.innerHTML = ''

            animeLi.forEach((anime) => {

                const animeImg = document.createElement('img')

                animeImg.className = 'animeThumbnail'

                animeImg.src = anime.image

                //WORKING SPACE FOR VECTORS

                const charVec = anime.vectors

                // console.log(charVec)

                
                
                
                // vecImgs.forEach((vector) => {
                    //     const charImg = document.createElement('img')
                    //     charImg.src = vector.character
                    //     console.log(charImg)
                    // })
                    
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
                    
                    
                    vectorDiv.innerHTML = "";
                    charVec.forEach((vector) => {
                        const charElement = document.createElement('img')
                        const charVecImg = vector.character
                        charElement.src = charVecImg
                        vectorDiv.append(charElement)
                        console.log(charElement)
                    })
                    
                    
                    requestAnimationFrame((timestamp) => smoothTransition(timestamp, initialScale, targetScale, 3));
                    
                    animeCont.addEventListener('mouseout', () => {
                        vectorDiv.innerHTML = "";
                        animeImg.style.transform = `scale(${initialScale})`;
                    })
                })
                
                // console.log(animeImg)
                
                animeCont.append(animeImg)

            })


        })
    })
}

// CHARACTER VECTORS

function renderVectors(studios) {
    const animeVec = studios.anime
    // console.log(animeVec)

}


//console.log('hi')


//One Piece Lofi Volume for MUSIC

const music = document.querySelector('#music');

music.volume = 0.2;

const resizer = document.querySelector(".resizer")
function initResizerFn( resizer, animeCom ) {
  let x, w;
  function rs_mousedownHandler(e) {
    x = e.clientX;

    const sbWidth = window.getComputedStyle( animeCom ).width;
    w = parseInt( sbWidth, 10);
    document.addEventListener("mousemove", rs_mousemoveHandler);
    document.addEventListener("mouseup", rs_mouseupHandler);
  }
  function rs_mousemoveHandler(e){
    const dx = e.clientX - x;

    const cw = w + dx;

    if(cw < 700){
      animeCom.style.width = `${ cw }px`;
    }
  }
  function rs_mouseupHandler() {
    document.removeEventListener("mouseup", rs_mouseupHandler);
    document.removeEventListener("mousemove", rs_mouseupHandler);
  }
  resizer.addEventListener("mousedown", rs_mousedownHandler);
}
initResizerFn( resizer, animeCom );