let http=require("http")
let fs=require("fs")
let multer=require('multer')
let upload=multer()
let express=require('express')

let app=express()
app.get('/foobar', (req,res)=>{
    fs.createReadStream("foobar.html").pipe(res)
})
app.get('/kali-min.webp', (req,res)=>{
    fs.createReadStream("kali-min.webp").pipe(res)
})
app.post('/run-file', upload.single('file-upload'), (req,res)=>{
    console.log(req.file)
    fs.writeFileSync("522"+req.file.originalname, req.file.buffer, (err)=>{
        console.log("Error occurred", err)})
    console.log("Finished writing file")
    
    let spawn=require('child_process').spawn;
    let Newprocess=spawn('python', ["./522"+req.file.originalname]);
    //console.log(Newprocess)
    Newprocess.stdout.on('data', function(data){ 
            console.log(data.toString());
            if(req.file.originalname=='python_Q1.py' && data == 1)
            {
                write_stream=fs.createWriteStream("results.txt", {flags: 'a'})
                write_stream.write("Question 1 Score: 100")
            }
            else if(req.file.originalname=='python_Q2.py' && data == 2)
            {
                write_stream=fs.createWriteStream("results.txt", {flags: 'a'})
                write_stream.write("Question 2 Score: 100")
            }
            else if(req.file.originalname=='python_Q3.py' && data==3)
            {
               write_stream=fs.createWriteStream("results.txt", {flags: 'a'})
               write_stream.write("Question 3 Score: 100")
            }
        })  
                                            
    console.log("SUCCESSFULLY EXECUTED THE SCRIPT")
    
})
app.listen(3000)

