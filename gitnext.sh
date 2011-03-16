#!/bin/sh
go_to_next() {
	cd $1
	current_commit=`git log | head -n 1 | awk '{print $2}'`
	next_commit=`git rev-list --all --children | grep \^${current_commit} | head -n 1 | awk '{print $2}'`
	if [ -n "$next_commit" ]; then
		echo "Checking out commit ${next_commit}"
		`git checkout ${next_commit}`
	else
		echo "The commit referenced by HEAD has no children."
	fi
}

if [ -n "$1" ]; then
	go_to_next $1
else
	echo "Usage: gitnext.sh <git repository location>"
fi
