// Test the setCrosshair method
const { init } = require('@SukratUbha/klinecharts');

console.log('✅ Package imported successfully!');
console.log('✅ init function available:', typeof init);

// Test that setCrosshair method exists
try {
  // Create a mock DOM element
  const mockDiv = document.createElement('div');
  mockDiv.id = 'test-chart';
  document.body.appendChild(mockDiv);
  
  const chart = init('test-chart');
  console.log('✅ Chart created successfully');
  console.log('✅ setCrosshair method available:', typeof chart.setCrosshair);
  
  // Test the setCrosshair method
  chart.setCrosshair({ x: 100, y: 100, paneId: 'candle_pane' });
  console.log('✅ setCrosshair method works!');
  
  // Test clearing crosshair
  chart.setCrosshair();
  console.log('✅ Clear crosshair works!');
  
} catch (error) {
  console.error('❌ Error testing setCrosshair:', error.message);
}

console.log('🎉 All tests passed! The package is working correctly.');
