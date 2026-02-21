#!/usr/bin/env bash
# Initialize a local git repository and make the first commit.
set -e
if [ -d .git ]; then
  echo "Git repository already initialized.";
  exit 0;
fi
git init
git add .
git branch -M main
git commit -m "Initial commit: Showza site"
echo "Repository initialized and initial commit created."
echo "To add a remote and push, run:" 
echo "  git remote add origin <your-remote-url>"
echo "  git push -u origin main"