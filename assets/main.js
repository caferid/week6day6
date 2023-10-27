let modal = document.querySelector('.modal')
let btn = document.querySelector('.addbtn')

btn.addEventListener('click', () => {
    modal.classList.toggle('active')
})
const img = document.getElementById("img");
const imdb = document.getElementById("imdb");
const namee = document.getElementById("name");
const catagory = document.getElementById("catagory");
const setting = document.getElementById("setting");
let tbody = document.querySelector('tbody')
let editall = document.getElementById('editall')
let memory


//1.tr yarat
//2.td yarat
//3.td icine bunlarin value yazdir
document.getElementById("save").addEventListener('click', function(e) {
    e.preventDefault()
    if (img.value === '' || imdb.value === '' || namee.value === '') {
        alert('form tam olaqaq doldurun');
    } else {

        let tr = document.createElement('tr')
        let imgr = document.createElement('td')
        let imdbr = document.createElement('td')
        let namer = document.createElement('td')
        let catagoryr = document.createElement('td')
        let setting = document.createElement('td')
        let edit = document.createElement('button')
        let clear = document.createElement('button')
        setting.append(edit, clear)

        let image = document.createElement('img')
        image.src = img.value
        tr.textContent = tbody.value
        imgr.append(image)
        console.log(image);

        edit.textContent = 'edit'
        clear.textContent = 'x'

        imdbr.textContent = imdb.value
        namer.textContent = namee.value
        catagoryr.textContent = catagory.value


        tr.append(imgr, imdbr, namer, catagoryr, setting)
        tbody.append(tr)

        img.value = ""
        imdb.value = ""
        namee.value = ""


        edit.addEventListener('click', function() {
            memory = tr
            img.value = image.src
            imdb.value = imdbr.textContent
            namee.value = namer.textContent
            catagory.value = catagoryr.textContent
        })
        clear.addEventListener('click', function() {
            clear.parentElement.parentElement.remove()
        })
        editall.addEventListener('click', function() {
            memory.children[0].src = image.value
            memory.children[1].textContent = imdb.value
            memory.children[2].textContent = namee.value
            memory.children[3].textContent = catagory.value

        })
    }


})