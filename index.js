// FETCH
fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderCompanies(data))


// GLOBAL SCOPE

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')
const centerName = document.getElementById('studioNameDisplay')
const centerYear = document.getElementById('yearDisplay')
const vectorDiv = document.getElementById('vectorContainer')
const mainDisplay = document.getElementById('display')

//HOVER EVENT DETAILS
// Scaling sizings for when hover event is triggered and reset

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



        // CLICK EVENT LISTENER
        // Renders studio information and anime thumbnails once a studio name is clicked from the nav bar

        studioList.addEventListener('click', () => {


            centerImage.src = studio.image
            centerName.textContent = studio.name
            centerYear.textContent = `Founded: ${studio.founded}`
            animeCont.innerHTML = ''

            animeLi.forEach((anime) => {

                const animeImg = document.createElement('img')
                animeImg.className = 'animeThumbnail'

                const animeSound = anime.sound
                const animeSoundElement = document.createElement("audio")
                animeSoundElement.src = animeSound
                animeSoundElement.id = "audioSound"

                const animeName = anime.name
                const animeYear = anime.runtime
                const animeSynopsis = anime.description

                animeImg.src = anime.image


                //WORKING SPACE FOR VECTORS



                //HOVER EVENT SCALING
                // Controls scaling size and smoothness of hover event through this function that calculates speed and size of anime thumbnail to determine proper speed in which to enlarge the picture

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

                // CHARACTER VECTOR CONST

                const charVec = anime.vectors

                // MOUSEOVER EVENT LISTENERS
                // Uses mouseover event to enlarge selected anime thumbnail and renders short description, years running, and several characters from the series

                animeImg.addEventListener("mouseenter", () => {
                    animeSoundElement.pause()
                    animeSoundElement.play()                     
                })

                animeImg.addEventListener('mouseover', (e) => {
                    const descrCont = document.createElement('div')
                    descrCont.className = 'descriptionContainer'
                    
                    mainDisplay.append(descrCont)

                    const animeDesc = document.createElement('p')
                    animeDesc.className = 'animeDescription'
                    animeDesc.textContent = `${animeName} has been running from ${animeYear}: ${animeSynopsis}`

                    descrCont.append(animeDesc)


                })


                animeImg.addEventListener('mouseover', (e) => {
                    startTimestamp = performance.now();
                    e.target.style.zIndex = 5000;


                    // CHARACTER VECTOR RENDER
                    // Renders characters onto page after mouse is brought over anime thumbnail

                    vectorDiv.innerHTML = "";
                    charVec.forEach((vector) => {
                        const charElement = document.createElement('img')
                        charElement.className = 'characterVector'
                        const charVecImg = vector.character
                        charElement.src = charVecImg
                        charElement.style.zIndex = 9000
                        vectorDiv.append(charElement)
                        console.log(charElement)
                    })


                    requestAnimationFrame((timestamp) => smoothTransition(timestamp, initialScale, targetScale, 3));


                    // MOUSEOUT/LEAVE EVENT LISTENERS
                    // Clears display of anime information once mouse is no longer over an anime thumbnail

                    animeCont.addEventListener('mouseout', (e) => {
                        e.target.style.zIndex = 0
                        vectorDiv.innerHTML = "";
                        animeImg.style.transform = `scale(${initialScale})`;
                    })
                })

                //EVENT LISTENER THAT STOPS ANIME AUDIO CLIP ON MOUSE MOVE OFF
                
                animeImg.addEventListener("mouseleave", () => {
                        animeSoundElement.pause()
                        animeSoundElement.currentTime = 0;
                    })

                animeImg.addEventListener('mouseout', (e) => {
                    mainDisplay.innerHTML = ""
                })

                animeCont.append(animeImg)

            })
        })
    })
}


// NAV BAR EVENT
// Creates a clickabe and collabsable nav bar for the studio list
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    music.play()
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    music.pause()
}

// MUSIC VOLUME

const music = document.querySelector('#mainmusic');
 
music.volume = 0.2;



//SELF DESTRUCT BUTTON
// Just for fun but pretty self explanatory

const selfDestructButton = document.getElementById('pauseButton')

selfDestructButton.addEventListener('click', () => {
    document.documentElement.innerHTML = "";
})

