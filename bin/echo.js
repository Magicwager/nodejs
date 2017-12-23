#!/usr/bin/env node
var argv=require('argv');
var args=argv.run();
var msgEcho=require('../lib/msgEcho');
console.log(msgEcho(args.targets.join(' ')))