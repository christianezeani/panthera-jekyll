#!/bin/bash

function exe_cmd() {
    echo $1
    eval $1
}

if [ $# -lt 1 ]; then
    echo "Usage: sh $0 [ gh-pages | master ]"
    exit
fi

branch=$1
if [ -z "$branch" ] || [ "$branch" != "master" ]; then
    branch='gh-pages'
fi

jekyll build
exe_cmd "rm -rf _site_for_pub"
exe_cmd "cp -r _site _site_for_pub"
if [ ! -d '_site_for_pub' ];then
    echo "not content to be published"
    exit
fi

exe_cmd "git checkout $branch"
error_code=$?
if [ $error_code != 0 ];then
    echo 'Switch branch fail.'
    exit
else
    ls | grep -v _site|xargs rm -rf
    exe_cmd "cp -r _site_for_pub/* ."
    exe_cmd "rm -rf _site_for_pub/"
    exe_cmd "touch .nojekyll"
fi
