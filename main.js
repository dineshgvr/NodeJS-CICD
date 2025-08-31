const app = require('express')();
const db = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const {Server } = require('socket.io');
const http = require('http');
const fs = require('fs');
const server = http.createServer(app);
const multer = require('multer');

db.connect('mongodb://180.149.46.117/sample_restaurants').then((e) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error >>>', err);
});

app.use(cors(
    {
        origin: "*"
    }
));
//
//
// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:4200",
//         methods: ["GET", "POST"]
//     }
// })

// const users = new Set()
// io.on('connection', socket => {
//
//     console.log("✅ A user connected:", socket.id);
//     socket.on('join', (username) => {
//         io.emit('users', [])
//     });
//     // listen to messages from client
//     socket.on("chat message", (msg) => {
//         console.log("📩 Received:", msg);
//
//         // send message to all clients
//         io.emit("chat message", msg);
//     });
//
//
//
//
// //     // handle disconnect
// //     socket.on("disconnect", () => {
// //         console.log("❌ User disconnected:", socket.id);
// //     });
// });


app.use("/api", routes);


// let isFoundFolder = fs.existsSync('./docs');
// if(!isFoundFolder) {
//     fs.mkdirSync('./docs', (err) => {
//         if (err) {
//             console.log(err.message);
//
//         }
//     });
//
//  } else {
//     console.log('Found Exists')
// }


// fs.writeFile('./docs/test.txt', "[1, 2, 3, 4, 5, 6]", (err) => {
//     if(err) {
//         console.log(err.message);
//     }
// });

// if(fs.existsSync('./docs/test.txt')) {
//     fs.readFile('./docs/test.txt', (err, data) => {
//         if(err) {
//             console.log(err.message);
//         } else {
//             console.log(data.toString());
//             //
//             // let arr = JSON.parse(data)
//             // arr.map((item) => {
//             //     console.log(item);
//             // })
//
//
//
//         }
//     })
//
// }

// if(fs.existsSync('./docs/test.txt')) {
//     fs.unlink('./docs/test.txt', (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//     })
// }

// fs.rmdir('./docs', (err) => {
//     if(err) {
//         console.log(err);
//     }
// })
//

// file upload
// app.post('/upload', upload.single("image") ,(req, res) => {
//     res.json({message: "File uploaded Successfully!"});
// });
//
// app.post('/uploads', upload.array("images", 10) ,(req, res) => {
//     res.json({message: "Files are uploaded Successfully!"});
// });
//

server.listen(3000, () => {
    console.log('listening on port 3000');
});