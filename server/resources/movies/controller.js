module.exports = (function() {
    var getAll = (req,res) => {
        res.json("lista tutti films")
    }
    var getOne = (req, res) => {
        var id =req.params.id;
        res.json("lista con id: " + id)
    }
    return {
        getAll:getAll,
        getOne:getOne,
    }
})()