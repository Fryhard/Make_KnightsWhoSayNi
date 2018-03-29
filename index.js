const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios');
const axiios = axios.create({
  baseURL :'https://2f234d5a.ngrok.io/ni/'
})
const PORT = process.env.PORT || 5555;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.post("/ni", function(req, res, next){
  console.log('hi');
  const context = req.body.result.metadata.intentName;

  console.log('im here',context);
  if(context =='life_insurance')
    life_insurance(req,res);
 else if(context =='life_insurance - yes')
    life_insurance_followup(req,res);
  //console.log(response)
  //res.json(response);

});


function life_insurance(req,res){
  console.log('im in life_insuranc');
  const parameters = req.body.result.parameters;
  console.log('parameters',parameters)
  var coveramount = 0;
  var basicincome = 0;
  var educationstatus
  switch(parameters.Standing) {
    case 'King':
        coveramount = 10000000000;
        basicincome = 100000000;
        educationstatus='professional_degree'
        break;
    case 'Lord':        
        coveramount = 1000000000;
        basicincome = 10000000;
        educationstatus='diploma_or_btech'
        break;
    case 'Knight':        
        coveramount = 100000000;
        basicincome = 1000000;
        educationstatus='grade_12_matric'
        break;
    case 'Peasant':        
        coveramount = 1000000;
        basicincome = 10000;
        educationstatus='grade_12_no_matric'
        break;
    }

  axiios.get('/quote', {cover_period: 'whole_life',smoker:parameters.smoker =='smoker'?'yes':'no',cover_amount : coveramount,basic_income_per_month :basicincome,age:parameters.age.amount,gender:parameters.gender,education_status:educationstatus})
  .then(function (response) {
      const result = `Your cover will cost ${Math.round(response.data.amount/1000)} gold pieces. Dost thou wish to proceed?`;
      res.json({
        speech : result,
        displayText : result
      });
  })
  .catch(function (error) {
    console.log(error);
  });
}

function  life_insurance_followup(req,res){

  console.log('im in life_insurance_followup')
   const parameters = req.body.result.parameters;
    const result = `you sent ${parameters.firstname}, ${parameters.surname},${parameters.id}`;
     res.json({
        speech : result,
        displayText : result
      });
}


app.listen(PORT, function(){
    console.log("App started on port:", PORT);
});
