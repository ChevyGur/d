async function f() {
    let ip = await fetch('http://api.myip.com')
    let ipJson = await ip.json()
    console.log(ipJson.ip);
  }
  
f();

const fs = require('fs').promises;

  async function translate(){
    let words = await fs.readFile("dictionary.json");
    let dict = await JSON.parse(words);
    for(let word of dict){
        console.log(word);
        let meaningWord = await meaning(word)
        const meaningWords = JSON.stringify(meaningWord[0].meanings[0].definitions[0].definition)
        console.log(meaningWords);
    }
  }

  async function meaning(word){
    let mean = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let meanjson = await mean.json()
    return meanjson
  }
  translate();
  
  
  