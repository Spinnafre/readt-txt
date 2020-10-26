const fs=require('fs').promises

module.exports=(caminho)=>{
    console.log('CHEGUEI EM LER')
    return fs.readFile(caminho,'utf-8')
}