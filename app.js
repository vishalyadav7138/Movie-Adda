var PORT =process.env.PORT || 5000;

const express=require('express');
const app=express();


const request=require('request');

app.set("view engine","ejs");


app.get('/',(req,res)=>{
    res.render('home');
//    res.send("Welcome to Movie Searcher");
});

app.get('/search',(req,res)=>{
             const search=req.query.search;
  const url='http://www.omdbapi.com/?s='+search+'&apikey=f93c67b';
     request(url,(error,response,body)=>{
      if(!error&&response.statusCode==200)
      {
      const data=JSON.parse(body);  
      // console.log(data.Response);
      // res.send(result);
      res.render('search',{data: data,search: search});
      }
      // else
      // {
      //   console.log(error+" "+response.statusCode);}
      // );
     });
    
});

app.listen(PORT, ()=>{
  console.log("Movie App Started");
});