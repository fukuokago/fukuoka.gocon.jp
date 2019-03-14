#!/bin/bash

find components -name '*.vue' | xargs grep 'slug:' | gsed 's#.*name: '"'"'\(.*\)-slug.*slug: .\(.*\)'"'"'.}.*#\1/\2#g'
