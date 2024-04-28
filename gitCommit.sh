#!/bin/bash
# Commit changes form for easy commits

read -rp "Enter your working branch name: " branch
read -rp "Enter your task type: " task
read -rp "Enter the task scope: " scope
read -rp "Enter the task summary: " summary
read -rp "Enter the task description: " description
read -rp "What issue number does this address? " issue

git add .
git commit -m "$task($scope): $summary \n $description \n closes #$issue"
git pull
git push

git checkout the-one
git merge $branch
git push

git checkout $branch
echo 'Your are now on your working branch. Happy coding!'