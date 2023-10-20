const input = document.querySelector('#input')
const search = document.querySelector('.search')
const nav = document.querySelector('.nav')
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const relax = document.querySelector('.relax')
const audioWord = document.querySelector('.wordAudio')
function mergeAlphabet(alphabet){
    let tempArray = []
    tempArray.push(...alphabet)
    for(let i = 0;i<alphabet.length;i++){
        tempArray.push(alphabet[i].toLowerCase())
    }
    
    return tempArray
}




alphabet = mergeAlphabet(alphabet)

const randomWords = ['Donkey', 'Monkey', 'Frog', 'Dumb', 'Huehue','Hiena','Lampart','Koala','Minecraft','BWRP','Skateboard'];

search.addEventListener('click',()=>{
    const random = Math.round(Math.random() * (randomWords.length-1))
    let url = ''
    const google = 'https://www.google.com/search?q='
    if(input.value !=''){
        url = input.value = google + randomWords[random]
        window.open(`${url}`)
        input.value = randomWords[random]
    }else{
        url = 'https://www.youtube.com/watch?v=5B027yf55Ww&ab_channel=KrzysztofZi%C4%99ba'
        window.open(`${url}`)
        input.value = 'To jesteś idiotą? PSST: Jak coś tu wpiszesz to to działa'
    }
   
   
    
})
let slide = false;
input.addEventListener('mouseover',()=>{
    
    input.style.marginRight = slide? "0px" : "355px"

    slide = slide ? false:true;
   
 
})
let scale = true;
search.addEventListener('mouseover',()=>{
    search.style.scale = scale? '0.1' : '1'
    scale = scale? false:true;
})
let timerID = null

const allBtns = document.querySelectorAll('.btn')
const first = allBtns[0]
const second = allBtns[1]
const third = allBtns[2]
const fourth = allBtns[3]
first.addEventListener('mouseover',()=>{
    const randomPoints = ['60px','120px','180px','0px','60px','120px','180px','0px','60px','120px','180px','0px','60px','120px','180px','0px']
    const random = Math.round(Math.random() * (randomPoints.length-1))
    const margin = randomPoints[random]

    for(let i =0;i<allBtns.length;i++){
        allBtns[i].style.margin = margin;
    }
    first.style.marginTop = margin
    timerID = setTimeout(() => {
        clearTimeout(timerID)
        nav.style.flexDirection = scale? "row-reverse":"row"
       
    }, 1000);
    scale = scale? false:true;
    
})

first.addEventListener('click',()=>{
    audioWord.currentTime = 0;
    audioWord.play();
    relax.pause();
    audioWord.loop = true;
    clearInterval(interval)
})

second.addEventListener('mouseover',()=>{
    const randomPoints = ['15deg','30deg','45deg','15deg','30deg','45deg']
    const random = Math.round(Math.random() * (randomPoints.length-1))
    for(let i =0;i<allBtns.length;i++){
        allBtns[i].style.rotate = randomPoints[random]
    }
})
const colors = ['red','white','green','yellow','orange','blue','pink','purple']
let interval = null;
second.addEventListener('click',()=>{
    audioWord.pause()
    relax.play()
    relax.loop = true;
    
    interval = setInterval(() => {
        const random = Math.round(Math.random() * (colors.length-1))
        document.body.style.backgroundColor = colors[random]
    }, 100);
})
let scaled = false;
third.addEventListener('click',()=>{
    relax.play()
    audioWord.play();
    relax.loop = true;
    audioWord.loop = true;
    allBtns.forEach(btn =>{
        btn.style.scale = scaled ? '1' :'0.5'
    })
    scaled = !scaled ? true:false
})


fourth.addEventListener('click',()=>{
    clearInterval(interval)
    clearTimeout(timerID)
    document.body.innerHTML = '<h2>Thanks for playing! I hope u enjoyed this game as well as I :))))</h2>'
    setTimeout(()=>{
        window.close()
        window.open('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRwN296amZzZzhvcWMwbTFqcnowank4eHE2cmhkemo2ejUybjkwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fsDiB5qqdvBxniEh8z/giphy.gif')
    },3000)
})


const koala = document.querySelector('.koala')

let anim = false;

function animKoala(){
    koala.style.scale = anim ? '5':'1'
    anim = !anim ? true:false
}

let koalaInterval = null;
koalaInterval = setInterval(animKoala,200)

