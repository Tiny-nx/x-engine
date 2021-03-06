#!/bin/bash
git branch -r --merged | 
grep origin | 
grep -v '>' | 
grep -v master | 
xargs -L1 | 
cut -d"/" -f2- | 
xargs git push origin --delete
