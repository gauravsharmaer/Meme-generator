const Maintitle=document.getElementById("title")
const img=document.getElementById("img")
const Newauthor=document.getElementById("author")
const generateMeme=document.getElementById("generate-meme")



const memeGenerator=async()=>{
    const data=await fetch("https://meme-api.com/gimme/wholesomememes")
    const jsonData=await data.json()
    update(jsonData.title,jsonData.author,jsonData.url )
    console.log(jsonData)
    }

generateMeme.addEventListener("click",memeGenerator)

const update=(title,author,url)=>{
    Maintitle.textContent=title
    img.setAttribute("src",url)
    Newauthor.textContent=author
}