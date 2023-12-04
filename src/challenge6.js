const fs = require("fs").promises;
const challengeMe=(str)=>{

const buildLookup = () => {
    console.log(__dirname)
  return fs.readFile(`${__dirname}/data/csvData.csv`, "UTF-8")
  .then((data) => {
    const array=data.split("\n")
    // console.log(array)
    const lookup = {};
    for (let i = 1; i < array.length; i++) {
        if (array[i][0]===","){
           
        lookup[array[i][0]]=array[i].split(",").filter(element=>Number.isInteger(+element)).join("").trim()
        }else{
      
      lookup[array[i].split(",")[0]] = array[i].split(",")[1].trim();
        }
    }

    return lookup;
  });
};
const encryptMe=(string)=>{
   return  buildLookup()
    .then((lookup)=>{
        let encryptedString=""
        for(i=0;i<string.length;i++){
            encryptedString+=lookup[string[i]]
        }
      
        return encryptedString
   
    })
}
return encryptMe(str)
}
module.exports={challengeMe}

// encryptMe("Hi, Ed!")
// .then(result=>console.log(result))