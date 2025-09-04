# Publishing Your Custom KLineChart Package

This guide explains how to publish your forked KLineChart package with the new `setCrosshair` method so it can be used in other projects.

## Prerequisites

1. **GitHub Repository**: Your forked repository should be pushed to GitHub
2. **Node.js & pnpm**: Make sure you have Node.js and pnpm installed
3. **npm Account**: You'll need an npm account to publish the package

## Step 1: Update Package Configuration

### 1.1 Update package.json

Replace the placeholders in `package.json` with your actual information:

```json
{
  "name": "@your-username/klinecharts",
  "version": "10.0.0-alpha9.1",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR-USERNAME/KLineChart.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR-USERNAME/KLineChart/issues"
  }
}
```

**Important**:

- Replace `@your-username` with your npm username or organization
- Replace `YOUR-USERNAME` with your GitHub username
- Increment the version number for each release

### 1.2 Update README (Optional)

Add a note about your custom `setCrosshair` method:

````markdown
## Custom Features

This fork includes an additional `setCrosshair` method that allows programmatic control of the crosshair position:

```javascript
// Set crosshair to specific coordinates
chart.setCrosshair({ x: 200, y: 200, paneId: "candle_pane" });

// Clear the crosshair
chart.setCrosshair();
```
````

## Step 2: Build the Package

Run the build command to create the distribution files:

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build
```

This will create the `dist/` folder with:

- `index.cjs` - CommonJS build
- `index.esm.js` - ES Module build
- `index.d.ts` - TypeScript definitions
- `umd/` - UMD builds for browsers

## Step 3: Publish to npm

### 3.1 Login to npm

```bash
npm login
```

### 3.2 Publish the package

```bash
npm publish --access public
```

**Note**: If you're using a scoped package name (like `@your-username/klinecharts`), you need the `--access public` flag.

## Step 4: Using in Other Projects

### 4.1 Install the package

```bash
npm install @your-username/klinecharts
# or
yarn add @your-username/klinecharts
# or
pnpm add @your-username/klinecharts
```

### 4.2 Import and use

```javascript
import { init } from "@your-username/klinecharts";

const chart = init("chart-container");

// Your existing chart setup...
chart.setSymbol({ ticker: "TestSymbol" });
chart.setPeriod({ span: 1, type: "day" });

// Use the new setCrosshair method
chart.setCrosshair({ x: 200, y: 200, paneId: "candle_pane" });
```

## Alternative: GitHub Packages

If you prefer not to publish to npm, you can use GitHub Packages:

### 1. Update package.json

```json
{
  "name": "@your-username/klinecharts",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 2. Authenticate with GitHub Packages

```bash
npm login --scope=@your-username --registry=https://npm.pkg.github.com
```

### 3. Publish

```bash
npm publish
```

### 4. Install in other projects

```bash
npm install @your-username/klinecharts --registry=https://npm.pkg.github.com
```

## Alternative: Direct Git Installation

You can also install directly from your GitHub repository:

```bash
npm install git+https://github.com/YOUR-USERNAME/KLineChart.git
```

## Version Management

For future updates:

1. **Increment version** in `package.json`
2. **Build the package**: `pnpm build`
3. **Publish**: `npm publish --access public`
4. **Update other projects**: `npm update @your-username/klinecharts`

## Troubleshooting

### Build Issues

- Make sure all dependencies are installed: `pnpm install`
- Check for TypeScript errors: `pnpm code-lint`
- Clean and rebuild: `pnpm clean && pnpm build`

### Publishing Issues

- Check npm login: `npm whoami`
- Verify package name is unique
- Ensure version number is incremented
- Check for any linting errors

### Import Issues in Other Projects

- Make sure the package is properly installed
- Check import syntax matches your build output
- Verify TypeScript definitions are included

## Testing Your Package

Before publishing, test your package locally:

```bash
# In your KLineChart directory
pnpm build
npm pack

# In another project
npm install /path/to/klinecharts-10.0.0-alpha9.1.tgz
```

This creates a `.tgz` file that you can install locally to test.
