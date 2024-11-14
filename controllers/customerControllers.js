const getProdList = (req, res) =>{
    res.json({"prod":["item1", "item2", "item3"]});
};

const postUserInfo = (req, res) =>{
    if (req.params.id === '1'){
        res.json({
            "username":"Nhat Hao",
            "email":"nhat.hao@gmail.com",
            "phone":"1234567890"
        });
    }
    else {
        res.status(200).json({"error":"User not found"});
    }
};

module.exports = {
    getProdList,
    postUserInfo
};