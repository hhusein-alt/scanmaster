// DOM Elements
const qrForm = document.getElementById('qr-form');
const urlInput = document.getElementById('url');
const qrNameInput = document.getElementById('qr-name');
const customizeBtn = document.getElementById('customize-btn');
const customizationOptions = document.getElementById('customization-options');
const foregroundColorInput = document.getElementById('foreground-color');
const backgroundColorInput = document.getElementById('background-color');
const qrSizeInput = document.getElementById('qr-size');
const qrCodesContainer = document.getElementById('qr-codes-container');
const qrModal = document.getElementById('qr-modal');
const qrCodeDisplay = document.getElementById('qr-code-display');
const qrInfoName = document.getElementById('qr-info-name');
const qrInfoUrl = document.getElementById('qr-info-url');
const downloadQrBtn = document.getElementById('download-qr');
const closeModalBtn = document.getElementById('close-modal');
const closeModalX = document.querySelector('.close-modal');

// QR Code Storage
let qrCodes = JSON.parse(localStorage.getItem('qrCodes')) || [];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Toggle customization options
    customizeBtn.addEventListener('click', () => {
        customizationOptions.classList.toggle('hidden');
        customizeBtn.textContent = customizationOptions.classList.contains('hidden') 
            ? 'Customize QR Code 🎨' 
            : 'Hide Customization Options 🎨';
    });

    // Generate QR code
    qrForm.addEventListener('submit', (e) => {
        e.preventDefault();
        generateQRCode();
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        qrModal.classList.add('hidden');
    });

    closeModalX.addEventListener('click', () => {
        qrModal.classList.add('hidden');
    });

    // Download QR code
    downloadQrBtn.addEventListener('click', downloadQRCode);

    // Load saved QR codes
    renderQRCodes();
});

// Generate QR Code
function generateQRCode() {
    const url = urlInput.value.trim();
    const name = qrNameInput.value.trim();
    const foregroundColor = foregroundColorInput.value;
    const backgroundColor = backgroundColorInput.value;
    const size = qrSizeInput.value;

    if (!url || !name) {
        alert('Please fill in all required fields');
        return;
    }

    // Create QR code data URL using ASCII art (simplified version)
    const qrCodeDataUrl = createQRCodeDataUrl(url, size, foregroundColor, backgroundColor);

    // Save QR code
    const qrCode = {
        id: Date.now(),
        name,
        url,
        foregroundColor,
        backgroundColor,
        size,
        dataUrl: qrCodeDataUrl,
        createdAt: new Date().toISOString()
    };

    qrCodes.unshift(qrCode);
    localStorage.setItem('qrCodes', JSON.stringify(qrCodes));

    // Render QR codes
    renderQRCodes();

    // Show modal with generated QR code
    showQRCodeModal(qrCode);

    // Reset form
    qrForm.reset();
    customizationOptions.classList.add('hidden');
    customizeBtn.textContent = 'Customize QR Code 🎨';
}

// Create QR Code Data URL (simplified version using ASCII art)
function createQRCodeDataUrl(data, size, foregroundColor, backgroundColor) {
    // This is a simplified version that creates a QR-like pattern
    // In a real app, you would use a QR code generation library
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const pixelSize = size / 25;
    
    canvas.width = size;
    canvas.height = size;
    
    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, size, size);
    
    // Create a simple pattern that looks like a QR code
    ctx.fillStyle = foregroundColor;
    
    // Position detection patterns (corners)
    // Top-left corner
    ctx.fillRect(pixelSize * 2, pixelSize * 2, pixelSize * 7, pixelSize * 7);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(pixelSize * 4, pixelSize * 4, pixelSize * 3, pixelSize * 3);
    ctx.fillStyle = foregroundColor;
    ctx.fillRect(pixelSize * 5, pixelSize * 5, pixelSize, pixelSize);
    
    // Top-right corner
    ctx.fillStyle = foregroundColor;
    ctx.fillRect(size - pixelSize * 9, pixelSize * 2, pixelSize * 7, pixelSize * 7);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(size - pixelSize * 7, pixelSize * 4, pixelSize * 3, pixelSize * 3);
    ctx.fillStyle = foregroundColor;
    ctx.fillRect(size - pixelSize * 6, pixelSize * 5, pixelSize, pixelSize);
    
    // Bottom-left corner
    ctx.fillStyle = foregroundColor;
    ctx.fillRect(pixelSize * 2, size - pixelSize * 9, pixelSize * 7, pixelSize * 7);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(pixelSize * 4, size - pixelSize * 7, pixelSize * 3, pixelSize * 3);
    ctx.fillStyle = foregroundColor;
    ctx.fillRect(pixelSize * 5, size - pixelSize * 6, pixelSize, pixelSize);
    
    // Generate random pattern for the rest of the QR code
    ctx.fillStyle = foregroundColor;
    const hash = simpleHash(data);
    
    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++) {
            // Skip the corner patterns
            if ((i < 10 && j < 10) || (i < 10 && j > 14) || (i > 14 && j < 10)) {
                continue;
            }
            
            // Use the hash to determine if a pixel should be filled
            if ((hash[i % hash.length] + hash[j % hash.length]) % 3 === 0) {
                ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
            }
        }
    }
    
    return canvas.toDataURL();
}

// Simple hash function for generating QR-like patterns
function simpleHash(str) {
    let hash = [];
    for (let i = 0; i < str.length; i++) {
        hash.push(str.charCodeAt(i));
    }
    return hash;
}

// Render QR Codes
function renderQRCodes() {
    if (qrCodes.length === 0) {
        qrCodesContainer.innerHTML = `
            <div class="welcome-message">
                <span class="wave-emoji">👋</span>
                <h3>Welcome!</h3>
                <p>Generate your first QR code using the form to get started!</p>
            </div>
        `;
        return;
    }

    qrCodesContainer.innerHTML = '';
    
    qrCodes.forEach(qrCode => {
        const qrCodeElement = document.createElement('div');
        qrCodeElement.className = 'qr-code-item';
        qrCodeElement.innerHTML = `
            <img src="${qrCode.dataUrl}" alt="${qrCode.name}" class="qr-code-preview">
            <div class="qr-code-info">
                <div class="qr-code-name">${qrCode.name}</div>
                <div class="qr-code-url">${qrCode.url}</div>
            </div>
        `;
        
        qrCodeElement.addEventListener('click', () => {
            showQRCodeModal(qrCode);
        });
        
        qrCodesContainer.appendChild(qrCodeElement);
    });
}

// Show QR Code Modal
function showQRCodeModal(qrCode) {
    qrCodeDisplay.innerHTML = `<img src="${qrCode.dataUrl}" alt="${qrCode.name}" width="${qrCode.size}">`;
    qrInfoName.textContent = qrCode.name;
    qrInfoUrl.textContent = qrCode.url;
    
    // Store the current QR code for download
    downloadQrBtn.setAttribute('data-qr-id', qrCode.id);
    
    qrModal.classList.remove('hidden');
}

// Download QR Code
function downloadQRCode() {
    const qrId = downloadQrBtn.getAttribute('data-qr-id');
    const qrCode = qrCodes.find(qr => qr.id === parseInt(qrId));
    
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.href = qrCode.dataUrl;
    link.download = `${qrCode.name.replace(/\s+/g, '-')}-qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}