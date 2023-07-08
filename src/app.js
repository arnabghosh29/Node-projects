const express=require("express")
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const routes=require('./routes/main')
const Detail=require("./model/Detail")
const Slider=require("./model/Slider")
const Service=require("./model/Service")

// static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
}));
// app.use(bodyParser.json())
app.use('/static',express.static("public"))
app.use('',routes)


// (template engine)

app.set('view engine',"hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://0.0.0.0:27017/website_fast")
   .then(()=> console.log("db connected"))
   .catch(err=>console.log(err))

// Service.create([
//     {
//     icon:'fab fa-accusoft ',
//     title:'Provied Best Courses',
//     description:'We Provied Courses that helps our student in lerningand in placement',
//     linkText:'http://www.arnab.com',
//     link:'Check',
//     link:'Support'
//     },
//     {
//         icon:'fab fa-affiliatetheme ',
//         title:'Learn Projects',
//         description:'We Provied Courses that helps our student in lerningand in placement',
//         linkText:'http://www.arnab.com',
//         link:'Lern',
//         link:'Support'
//         },
//         {
//             icon:'fab fa-affiliatetheme ',
//             title:'Learn Projects',
//             description:'We Provied Courses that helps our student in lerningand in placement',
//             linkText:'http://www.arnab.com',
//             link:'Lern',
//             link:'Support'
//             }
// ])

//    Slider.create([
//     {
//         title:'Learn Node.js in vary easy manner',
//         subTitle:'Node.js is one of the most popular programming langauge.',
//         imageUrl:"/static/images/pic.png"
//     },{
   
//         title:'Learn JavaScript in vary easy manner',
//         subTitle:'JavaScript is one of the most popular programming langauge.',
//         imageUrl:"/static/images/pic1.png"
//     },{
    
//         title:'Learn HTML in vary easy manner',
//         subTitle:'MTML is one of the most popular programming langauge.',
//         imageUrl:"/static/images/pic2.png"
//     },
//    ])
//    Detail.create({
//     brandName:"Ghosh Technical",
//     brandIconUrl:"https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg",
//     links:[
//         {
//             label:"Home",
//             url:"/",
//         },{
//             label:"services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
//     ]
       
//    })


app.listen(process.env.PORT |3030,()=>{
    console.log("server is start")
})