var express = require('express')
var swig = require('swig')

var app = express()

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(function (req, res, next) {
	var url = req.url.slice(1)
	res.render('index', { url: url })
})

app.listen(process.env.PORT || 5000, function () {
	var target = this.address()
	console.log('Listening on http://%s:%s', target.address, target.port)
})
