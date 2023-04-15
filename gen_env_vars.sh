RED='\033[0;31m'
NC='\033[0m' # No Color

echo ${RED}Setting Enviornment variables for task-watch repository${NC}
gh secret set -f .env.production


