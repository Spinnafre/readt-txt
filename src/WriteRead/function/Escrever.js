const fs=require('fs').promises

module.exports=(caminho,data)=>{
    fs.writeFile(caminho,data,{flag:"a"})
}