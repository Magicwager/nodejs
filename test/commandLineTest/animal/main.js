#!/usr/bin/env node
var subject=require('./modules/subject');
var actions=require('./modules/actions');
var object=require('./modules/object');
console.log(subject("Cat ")+actions("eat ")+object("mouse"))