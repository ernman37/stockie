#!/bin/bash

function main(){
    setup
    run
}

function setup(){
    pip install -r requirements.txt > /dev/null
}

function run(){
    python3 main.py
}

main $@