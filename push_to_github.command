#!/bin/bash
cd "$(dirname "$0")"

echo "========================================================"
echo "  Pushing 3D House Viewer to GitHub..."
echo "  Repository: https://github.com/sanjay1618/house-3d-viewer.git"
echo "========================================================"
echo ""
echo "Note: When prompted for password, enter your GitHub Personal Access Token (PAT)."
echo "If you don't have one, create it in 30 seconds at: https://github.com/settings/tokens"
echo "Select scopes: 'repo'"
echo ""

CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"
echo ""

git push -u origin "$CURRENT_BRANCH"

if [ $? -eq 0 ]; then
  echo ""
  echo "========================================================"
  echo "  SUCCESS! Code pushed to branch '$CURRENT_BRANCH' on GitHub."
  echo ""
  echo "  To make it viewable online for your brother:"
  echo "  1. Open: https://github.com/sanjay1618/house-3d-viewer/settings/pages"
  echo "  2. Under 'Branch', select '$CURRENT_BRANCH' and '/(root)'"
  echo "  3. Click 'Save'"
  echo "  4. Your live link will be:"
  echo "     https://sanjay1618.github.io/house-3d-viewer/"
  echo "========================================================"
else
  echo ""
  echo "Push failed. Please check your credentials or token."
fi

echo ""
read -p "Press [Enter] to close..."
