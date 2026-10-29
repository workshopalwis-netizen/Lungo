#!/usr/bin/env bash
# LUNGO Sri Lanka Development Server Starter
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export PATH="$DIR/.tools/bin:$PATH"

echo "☕ Starting LUNGO Sri Lanka Website Server..."
npm run dev -- --open
