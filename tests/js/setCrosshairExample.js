/**
 * Example demonstrating the new setCrosshair method
 * This shows how to programmatically set the crosshair position
 */

import { init } from "../../src/index.js";

// Initialize the chart
const chart = init("chart-container");

// Set up the chart
chart.setSymbol({ ticker: "TestSymbol" });
chart.setPeriod({ span: 1, type: "day" });

// Load data
chart.setDataLoader({
  getBars: ({ callback }) => {
    // Load your data here
    callback([]);
  },
});

// Example 1: Set crosshair to specific coordinates
function setCrosshairToPosition(x, y) {
  chart.setCrosshair({ x, y, paneId: "candle_pane" });
}

// Example 2: Set crosshair to center of chart
function setCrosshairToCenter() {
  const size = chart.getSize();
  if (size) {
    const centerX = size.width / 2;
    const centerY = size.height / 2;
    chart.setCrosshair({ x: centerX, y: centerY, paneId: "candle_pane" });
  }
}

// Example 3: Clear the crosshair
function clearCrosshair() {
  chart.setCrosshair();
}

// Example 4: Set crosshair based on data point
function setCrosshairToDataPoint(dataIndex) {
  const coordinates = chart.convertToPixel({ dataIndex });
  if (coordinates.x !== undefined) {
    chart.setCrosshair({ x: coordinates.x, y: 100, paneId: "candle_pane" });
  }
}

// Example 5: Subscribe to crosshair changes
chart.subscribeAction("onCrosshairChange", (crosshairData) => {
  console.log("Crosshair position changed:", crosshairData);
});

// Export functions for use in HTML
export {
  setCrosshairToPosition,
  setCrosshairToCenter,
  clearCrosshair,
  setCrosshairToDataPoint,
};
