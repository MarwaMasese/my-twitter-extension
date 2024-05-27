// public/contentScript.js
const addInspectButton = () => {
  const buttonContainer = document.querySelector('[data-testid="placementTracking"]');

  if (buttonContainer) {
    const existingButton = document.querySelector('.inspect-button');
    if (!existingButton) {
      const inspectButton = document.createElement('button');
      inspectButton.innerText = 'Inspect';
      inspectButton.className = 'inspect-button';
      inspectButton.style.backgroundColor = 'green';
      inspectButton.style.color = 'white';
      inspectButton.style.border = 'none';
      inspectButton.style.borderRadius = '5px';
      inspectButton.style.padding = '10px 20px';
      inspectButton.style.marginLeft = '10px';
      inspectButton.style.cursor = 'pointer';

      inspectButton.addEventListener('click', () => {
        alert('Inspect button clicked!');
      });

      buttonContainer.appendChild(inspectButton);
    }
  }
};

const observer = new MutationObserver(addInspectButton);
observer.observe(document.body, { childList: true, subtree: true });
