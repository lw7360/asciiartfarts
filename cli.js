#!/usr/bin/env node
'use strict';
var chalk = require('chalk');
var cheerio = require('cheerio');
var meow = require('meow');
var request = require('superagent');

meow({
  help: [
    'Usage',
    '  $ asciiartfarts'
  ]
});

request
  .get('http://www.asciiartfarts.com/random.cgi')
  .end(function (err, res) {
    if (err) {
      console.log('Whoops, are you conencted to the internet?');
      return;
    }
    var $ = cheerio.load(res.text);
    console.log(chalk.white.bgBlack($('pre').last().text()));
  });
