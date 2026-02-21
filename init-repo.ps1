#!/usr/bin/env pwsh
# Initialize a local git repository and make the first commit (PowerShell)
if (Test-Path -Path .git) {
  Write-Host "Git repository already initialized."; exit 0
}
git init
git add .
git branch -M main
git commit -m "Initial commit: Showza site"
Write-Host "Repository initialized and initial commit created."
Write-Host "To add a remote and push, run:`n  git remote add origin <your-remote-url>`n  git push -u origin main"