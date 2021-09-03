const form = document.querySelector('#searchForm')
const mainBox = document.querySelector('.results')

const btn =  document.querySelector('button')

btn.addEventListener('click' , function(){
    mainBox.innerHTML = ''
})


form.addEventListener('submit' , async function(e){
    e.preventDefault()
    console.log("hello world")
    const searchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`) 
    results(res.data)
})

const results = (shows) => {
    for(let result in shows){
        if ( shows[result].show.image === null){
            continue
        }
        else{
            console.log(result)
            console.log(shows[result].show.image.medium)
            const div = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')
            const url = document.createElement('a')

            mainBox.appendChild(div)
            div.append(img)
            div.append(p)
            img.src = shows[result].show.image.medium ;
            // p.innerHTML = shows[result].show.summary;

            const site = document.createElement('p');
            div.append(site)
            link = shows[result].show.officialSite
            site.innerHTML = `<a href="${link}" target="blank">Official Site link</a>`
            
        }
    }
}
