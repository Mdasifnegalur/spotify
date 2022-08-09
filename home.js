var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"spotify"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.fetchuser=function(callback) {
    var sql="SELECT * FROM artists"
    con.query(sql,(err,result,feilds)=>{
        if(err)
        {
            console.log(err)
            throw err
        }
        callback(result)
    })
    
}
exports.PostArtist=function(data,callback){
    var arr=[data.Aid,data.Aname,data.ADOB,data.Asongs,data.Aratings]
    var sql="INSERT INTO artists VALUES(?,?,?,?,?)";
    con.query(sql,arr,(err,result,feilds)=>{
        if(err){
            console.log(err,result)
            throw err
        }else{
            callback(result.affectedRows)
        }
        
    })
}

exports.Updateartists=function(artists,callback){
    var arr=[artists.Aname,artists.ADOB,artists.Asongs,artists.Aratings,artists.Aid]
    var sql="UPDATE artists SET Aname=?,ADOB=?,Asongs=?,Aratings WHERE Aid=?";
    con.query(sql,arr,(err,result,field)=>{
        if(err){
            console.log(err)
            throw err;
        }
        callback(result.affectedRows);
    })
}
exports.deleteartists=function(data,callback){
    var a=[data.Aid]
    var sql="DELETE FROM artists WHERE Aid=?"
    con.query(sql,a,(err,result,fields)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            callback(result)
        }
    })

}
//---SongsApi--//
exports.fetchsong=function(callback) {
    var sql="SELECT * FROM songs"
    con.query(sql,(err,result,feilds)=>{
        if(err)
        {
            console.log(err)
            throw err
        }
        callback(result)
    })
    
}
exports.PostSongs=function(data,callback){
    var arr=[data.id,data.image,data.songsname,data.DOR,data.Artists,data.Rating]
    var sql="INSERT INTO songs VALUES(?,?,?,?,?,?)";
    con.query(sql,arr,(err,result,feilds)=>{
        if(err){
            console.log(err,result)
            throw err
        }else{
            callback(result.affectedRows)
        }
        
    })
}

exports.Updatesongs=function(songs,callback){
    var arr=[songs.image,songs.songsname,songs.DOR,songs.Artists,songs.Rating,songs.id]
    var sql="UPDATE songs SET image=?,songsname=?,DOR=?,Artists=?,Rating=? WHERE id=?";
    con.query(sql,arr,(err,result,field)=>{
        if(err){
            console.log(err)
            throw err;
        }
        callback(result.affectedRows);
    })
}
exports.deletesongs=function(data,callback){
    var a=[data.id]
    var sql="DELETE FROM songs WHERE id=?"
    con.query(sql,a,(err,result,fields)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            callback(result)
        }
    })

}