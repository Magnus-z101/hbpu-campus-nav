#!/bin/bash
# Simple deployment script for GitHub Pages

# Build the project
echo "Building project..."
pnpm run build

# Create gh-pages branch if it doesn't exist
echo "Preparing gh-pages branch..."
cd out
git init
git add .
git commit -m "Deploy static site"
git branch -M gh-pages

# Push to GitHub
echo "Pushing to GitHub..."
git remote add origin https://github.com/Magnus-z101/hbpu-campus-nav.git
git push -f origin gh-pages

echo "Deployment complete!"
echo "Visit: https://magnus-z101.github.io/hbpu-campus-nav/"
