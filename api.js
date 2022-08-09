const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const home=require('./home');
const { response } = require('express');
var server=express();
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended:true}))
server.use(cors())

server.get('/artists',(req,res)=>{
    home.fetchuser((artists)=>{
        res.status(200).send(artists)
    })
})
//-------Insert Api-----//
server.post('/Artist',(req,res)=>{
    var registers=req.body;
    home.PostArtist(registers,(result)=>{
        if(result.affectedrows==1){
            res.status(200).send(result)
        }else{
            res.status(400)
        }
        res.end()
    })
})
//-----Update Api----//
server.put('/Artists/:Aid',(req,res)=>{
    var Aid=req.body
    home.Updateartists(Aid,(result)=>{
        if(result.affectedrows==1){
            res.status(200).send(result)
        }else{
            res.status(400)
        }
        res.end("succesfully updated")
    })

})
//------delete--//
server.delete('/Artists/:Aid',(req,res)=>{
    var user=req.params
    res.setHeader("Content-Type", "text/html");
    home.deleteartists(user,(result)=>{
        if(result==0)
        {
            res.status(400).json(result)
            console.log(result)
        }
        else
        {
            res.status(200).json(result)
        }
    })
})

//------------------------songs
server.get('/songs',(req,res)=>{
    home.fetchsong((songs)=>{
        res.status(200).send(songs)
    })
})
//-------Insert Api-----//
server.post('/songs',(req,res)=>{
    var registers=req.body;
    home.PostSongs(registers,(result)=>{
        if(result.affectedrows==1){
            res.status(200).send(result)
        }else{
            res.status(400)
        }
        res.end()
    })
})
//-----Update Api----//
server.put('/songs/:id',(req,res)=>{
    var id=req.body
    home.Updatesongs(id,(result)=>{
        if(result.affectedrows==1){
            res.status(200).send(result)
        }else{
            res.status(400)
        }
        res.end("succesfully updated")
    })

})
//------delete--//
server.delete('/songs/:id',(req,res)=>{
    var user=req.params
    res.setHeader("Content-Type", "text/html");
    home.deletesongs(user,(result)=>{
        if(result==0)
        {
            res.status(400).json(result)
            console.log(result)
        }
        else
        {
            res.status(200).json(result)
        }
    })
})
server.listen(3000,console.log("server running at port number 3000"))


//--songsApi--//

