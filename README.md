# RageMP React Template

## How to use?

### Step 1: Clone the repo

```bash
cd server-folder # where your 'client_packages' exists
git clone https://github.com/stackedroleplay/ragemp-react-template.git
```

### Step 2: Edit `scripts/move-ui.js`

```js
const htmlDir = path.join(distPath, '../../client_packages/ui/dist'); // replace to the folder where your want to move your react build
```

#### Folder Structure

```bash
client_packages # client side scripts
├── ui
│   ├── dist # react build will be moved here
ragemp-react-template
packages # server side scripts
```

### Step 3: Build the React app

```bash
cd ragemp-react-template
npm install
npm run build
```
