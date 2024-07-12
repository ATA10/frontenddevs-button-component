import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleButtonClick = () => {
    setShowInstructions(true);
  };
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>Button Component Examples</h1>
        <Button type="primary" onClick={handleButtonClick}>Primary Button</Button>
        <Button type="default" onClick={handleButtonClick}>Default Button</Button>
        <Button type="dashed" onClick={handleButtonClick}>Dashed Button</Button>
        <Button type="text" onClick={handleButtonClick}>Text Button</Button>
        <Button type="link" onClick={handleButtonClick}>Link Button</Button>
      </div>
      <div>
      <p>There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button, <code>text</code> button, and <code>link</code> button in antd.</p>
      </div>
      {showInstructions && (
        <div className="instructions">
          <h2>How to Import and Use the Button Component</h2>
          <pre>
{`import Button from 'your-button-package';

function App() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;`}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
