#!/bin/bash
# Commit changes form for easy commits

read -rp "Enter the name of your working branch: " branch

echo ""
echo "Task types:"
echo ""
echo "build: Changes that affect the build system or external dependencies"
echo "ci: Changes to CI configuration files and scripts"
echo "docs: Documentation changes"
echo "feature: A new feature"
echo "bug: A bug fix"
echo "refactor: A code change that neither fixes a bug nor adds a feature"
echo ""
read -rp "Enter your task type: " task

echo ""
echo "Enter your task scope:"
echo ""
echo "framework"
echo "documentation-website"
echo "history-microservice"
echo "history-website"
echo "dockerfiles"
echo "examples"
echo ""
read -rp "Enter the task scope: " scope

echo ""
read -rp "Enter the task summary: " summary
echo ""
read -rp "Enter the task description: " description
echo ""
read -rp "What issue number does this address? " issue
echo ""

set -e
git pull
git add .
git commit -m "$task($scope): $summary \n $description \n closes #$issue"
git push
set +e

git checkout the-one
git pull
git merge $branch
git push

git checkout $branch
echo 'Your are now on your working branch. Happy coding!'
