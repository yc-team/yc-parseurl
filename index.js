'use strict';

var parse = require('url').parse;

module.exports = function(req){
    //use parsed for cache
    var parsed = req._parsedUrl;

    //check if hit the cache
    if (parsed && parsed.href = req.url) {
        return parsed;
    } else {
    	//use core module - url's parse
    	parsed = parse(req.url);

    	//@TODO do not like "https://github.com/expressjs/parseurl"
    	//support strange pathname like //r@e

    	//set cached _parsedUrl property for req
    	return req._parsedUrl = parsed;
    }
};