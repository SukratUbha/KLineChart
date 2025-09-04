# Installation Guide for Custom KLineChart

Your custom KLineChart package with the `setCrosshair` method is now ready to use! Here are the different ways to install and use it.

## ✅ Fixed Issues

The package manager enforcement issue has been resolved. The package can now be installed using any package manager (npm, yarn, pnpm) when installing as a dependency.

## Installation Methods

### Method 1: Install from GitHub (Recommended)

```bash
# Using npm
npm install git+https://github.com/SukratUbha/KLineChart.git

# Using yarn
yarn add git+https://github.com/SukratUbha/KLineChart.git

# Using pnpm
pnpm add git+https://github.com/SukratUbha/KLineChart.git
```

### Method 2: Install from Local Package

If you want to test locally first:

```bash
# In your KLineChart directory (already done)
npm pack

# In your other project
npm install /path/to/SukratUbha-klinecharts-10.0.0-alpha9.1.tgz
```

### Method 3: npm link (for development)

```bash
# In your KLineChart directory
npm link

# In your other project
npm link @SukratUbha/klinecharts
```

## Usage Example

```javascript
import { init } from "@SukratUbha/klinecharts";

// Initialize the chart
const chart = init("chart-container");

// Set up the chart
chart.setSymbol({ ticker: "AAPL" });
chart.setPeriod({ span: 1, type: "day" });

// Load your data
chart.setDataLoader({
  getBars: ({ callback }) => {
    // Your data loading logic
    callback(yourData);
  },
});

// Use the new setCrosshair method
chart.setCrosshair({ x: 200, y: 200, paneId: "candle_pane" });

// Clear the crosshair
chart.setCrosshair();

// Set crosshair to center of chart
const size = chart.getSize();
if (size) {
  chart.setCrosshair({
    x: size.width / 2,
    y: size.height / 2,
    paneId: "candle_pane",
  });
}
```

## What's Included

Your custom package includes:

- ✅ **setCrosshair method**: Programmatically set crosshair position with x,y coordinates
- ✅ **All original KLineChart features**: Everything from the original package
- ✅ **TypeScript support**: Full type definitions included
- ✅ **Multiple build formats**: ESM, CommonJS, and UMD builds
- ✅ **Cross-platform compatibility**: Works with npm, yarn, and pnpm

## Package Contents

```
@SukratUbha/klinecharts@10.0.0-alpha9.1
├── dist/
│   ├── index.cjs          # CommonJS build
│   ├── index.esm.js       # ES Module build
│   ├── index.d.ts         # TypeScript definitions
│   └── umd/               # UMD builds for browsers
├── LICENSE
├── README.md
└── package.json
```

## Next Steps

1. **Push your changes** to your GitHub repository
2. **Install in your other project** using one of the methods above
3. **Start using** the `setCrosshair` method!

## Troubleshooting

### If installation fails:

- Make sure you've pushed all changes to GitHub
- Try using the local package method first to test
- Check that your other project has the required dependencies

### If the setCrosshair method doesn't work:

- Make sure you're importing from `@SukratUbha/klinecharts`
- Check that the chart is properly initialized
- Verify the coordinates are within the chart bounds

## Development Notes

- The package enforces `pnpm` only during development (when you're working on the KLineChart repo itself)
- When installed as a dependency, any package manager can be used
- The build process creates optimized bundles for production use
