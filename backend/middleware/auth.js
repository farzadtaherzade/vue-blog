const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
	try {
				
		if(!token) return res.status(403).json("Access denied.");

		const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		req.user = decode;
		console.log(req.user)
		next()
	}catch(err){
		res.status(400).json("invalid token")
	}
}