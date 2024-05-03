#!/bin/bash
# Commit changes form for easy commits

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

git add .
git commit -m "$task($scope): $summary \n $description \n closes #$issue"
git pull
git push

echo 'Commits made to your working branch. Happy coding!'
