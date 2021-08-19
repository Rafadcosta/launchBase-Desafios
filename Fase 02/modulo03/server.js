const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});

server.get("/", function(req, res) {

    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/47401318?s=460&u=82265c6f81b2cead0be40b8eb0daebdecf2d9897&v=4",
        name: "Rafaela Duque",
        role: "Estudante - Rocketseat",
        description: '20 anos, <a href="https://www.linkedin.com/in/rafaela-duque/" target="_blank">Analista de Suporte</a>.  Visando mudança de carreira para programação web front-end.',
        link: [
            {
                name: "Github",
                url: "https://github.com/Rafadcosta"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/rafaduquec_"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/rafaela-duque/"
            }
        ]
    }

    return res.render("about", {about: about}); 
});

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", {items: videos});
}); 

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id) {
            return true
        } 
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function() {
    console.log("Server is running");
});