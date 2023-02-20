module.exports = function(app){
    app.get("/src/components/Login.js", function(req, res){
        res.render('../components/Login.js', {
            title: "Login"
        })
    })
    app.get("/src/components/about.js", function(req, res){
        res.render('../components/about.js', {
            title: "About"
        })
    })
    app.get("/src/components/Welcome.js", function(req, res){
        res.render('../components/Welcome.js', {
            title: "Welcome"
        })
    })
    app.get("/src/components/ChatRoom.js", function(req, res){
        res.render('../components/ChatRoom.js', {
            title: "ChatBox"
        })
    })
}

