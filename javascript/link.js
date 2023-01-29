const form = document.querySelector('.form');
const linkContainer = document.querySelector('.section__links');






const links = JSON.parse(localStorage.getItem('links')) || []

if (links.length > 0) {
    renderLinks()
}

//GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

// EVENT LISTENERS

linkContainer.addEventListener('click', setLinkStatus);

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const requestedUrl = form.firstElementChild.value;

    const url = `https://api.shrtco.de/v2/shorten?url=${requestedUrl}`



    try {
        const data = await fetchJson(url);

        const { full_short_link: shortenedLink, original_link } = data.result;
        const link = { shortenedLink, original_link }
        links.push(link)

        displayLink(link)
        localStorage.setItem('links', JSON.stringify(links))

    } catch (error) {
        console.log(error.message)
    }




});

// FUNCTINS

async function fetchJson(url) {
    try {

        const response = await fetch(url)
        
if(!response.ok) throw new Error(`❌❌❌ ${response.status}`)

        const data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

function displayLink(link) {
    const html = `
    <div class="link">
        <p class="original__link">${link.original_link.length > 100 ? link.original_link.subString(0, 100): link.original_link}</p>
        <p class="shortened__link">${link.shortenedLink}</p>
        <button class="btn btn--block ">Copy</button>
    </div>

        `


    linkContainer.insertAdjacentHTML('afterbegin', html)
}


function renderLinks() {
    const html = links.map(link => {
        return `
    <div class="link">
        <p class="original__link">${link.original_link}</p>
        <p class="shortened__link">${link.shortenedLink}</p>
        <button class="copy btn btn--block ">Copy</button>
    </div>

        `
    }).join("")
    
    linkContainer.insertAdjacentHTML('afterbegin', html)
}



function setLinkStatus(e){

    const btn = e.target;
    if(!btn.classList.contains('copy')) return 
    e.preventDefault()
    
    btn.classList.add('copied');
    btn.textContent = "Copied"



}


localStorage.clear()