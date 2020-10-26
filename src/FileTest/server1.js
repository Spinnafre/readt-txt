// const express=require('express')

const fs = require('fs').promises
const path = require('path')

const writePath = path.resolve(__dirname, '..', 'WriteRead', 'files.json')

let array = []
async function readdir(rootDir) {
    // Se tiver alguma coisa então irá retornar o próprio valor senão 
    // retorna o diretório atual
    rootDir = rootDir || path.resolve(__dirname)
    // Vai ler o diretório
    const files = await fs.readdir(rootDir)
    // console.log("FILES: ",...files)

    walk(files, rootDir)
}

async function walk(files, rootdir) {
    for (let file of files) {
        // Vai unir a url ao nome do arquivo
        const filesPath = path.resolve(rootdir, file)
        // Vai verificar se é pasta ou arquivo
        const stats = await fs.stat(filesPath)
        // Vai ler só arquivos
        if (stats.isDirectory()) {
            readdir(filesPath)
            continue
        }
        fs.readFile(filesPath, 'utf-8')
        .then(data => array=data)

        if(array.length>0){
            console.log(array)
            // await fs.writeFile(writePath,array,{flag:"w"})
        }

        
        // await fs.writeFile(writePath,array,{flag:"a"})
        // console.log(filesPath)
    }
}
async function readFileTxt(path) {
    console.log(typeof (path))
}
readdir('C:/Users/Davis/Downloads/sns')
