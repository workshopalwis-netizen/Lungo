#!/bin/bash
# LUNGO Sri Lanka - One-Click Launcher for macOS
cd "$(dirname "$0")" || exit 1
export PATH="$PWD/.tools/bin:$PATH"

echo "=========================================="
echo "☕ Starting LUNGO Sri Lanka Website..."
echo "=========================================="

# Check if Vite is available
if [ -f "$PWD/.tools/bin/npx" ]; then
  npx vite --host 0.0.0.0 --port 5173 --open
else
  # Fallback: Open standalone HTML
  open "Double-Click-To-Open-Offline.html"
fi
