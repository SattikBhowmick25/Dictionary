let searchInput=document.querySelector("#search-input");
let searchBtn=document.querySelector("#btn");

const getData = async (searchValue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    let jsondata = await data.json();

    let div=document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=`<h1><span>${jsondata[0].word}</span></h1>
            <p class="sub-text">${jsondata[0].meanings[0].partOfSpeech} &nbsp &nbsp ${jsondata[0].phonetic==undefined?"":jsondata[0].phonetic}</p>
            <p><b>Meaning :</b> <span>${jsondata[0].meanings[0].definitions[0].definition}</span></p>
            <p><b>Example :</b> <span>${jsondata[0].meanings[0].definitions[0].example==undefined?"Not found.":jsondata[0].meanings[0].definitions[0].example}</span></p>
            <br>
            <a href="${jsondata[0].sourceUrls[0]}" target="_blank">Read More</a>`;

    document.querySelector(".text").innerHTML="";
    document.querySelector(".text").appendChild(div);

    console.log(jsondata[0]);
}

searchBtn.addEventListener("click",function(){
    let searchValue=searchInput.value;
    if(searchValue==""){
        alert("Enter a word");
    }else{
        getData(searchValue);
    }
})