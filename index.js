//sib el body parser msh hy3ml azma ya joe
// la tanso npm install 3ashan kol el dependencies tenzel 3andko
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));




app.get("/", (req, res) => {

    res.sendFile(__dirname + "/html/home.html");

}
);
app.get("/signup", (req, res) => {

    res.sendFile(__dirname + "/html/signup.html");

}
);

app.get("/new_car", (req, res) => {

    res.sendFile(__dirname + "/html/car_form.html");
}
);

app.get("/admin", (req, res) => {

    res.sendFile(__dirname + "/html/admin_home.html");
}
);


app.get("/payments-search", (req, res) => {

    res.sendFile(__dirname + "/html/payment_report_search.html");
}
);

app.get("/cars-status-search", (req, res) => {

    res.sendFile(__dirname + "/html/car_status_search.html");
}
);

app.get("/customer-res-search", (req, res) => {

    res.sendFile(__dirname + "/html/customer_res_search.html");
}
);

app.get("/car-res-search", (req, res) => {

    res.sendFile(__dirname + "/html/car_res_search.html");
}
);

app.get("/res-search", (req, res) => {

    res.sendFile(__dirname + "/html/res_search.html");
}
);





/*post requests*/
// ---------------------------------------------------------------------------------------------------------------------


//car reservation search
app.post("/car-res-search",(req,res)=>
{
var plate_id=req.body.plate_id;
console.log(plate_id);
///write the query then redirect to your new page;
});


// customer reservation search
app.post("/customer-res-search",(req,res)=>
{
var username=req.body.username;
var email=req.body.email;
console.log(email+" "+username);
///write the query then redirect to your new page;
});


// cars status at certain day search
app.post("/cars-status-search", (req, res) => {

    var date=req.body.date;
    console.log(date);
    ///write the query then redirect to your new page
});


//payments at certain period search
app.post("/payments-search", (req, res) => {

   var start_date=req.body.start_date;
   var end_date=req.body.end_date;
   console.log(start_date+" ");
   console.log(end_date);
    ///write the query then redirect to your new page
});


// reservations at certain period search
app.post("/res-search", (req, res) => {

    var start_date=req.body.start_date;
    var end_date=req.body.end_date;
    console.log(start_date+" ");
    console.log(end_date);
     ///write the query then redirect to your new page
}
);



app.listen(3000, () => { console.log("server started") });