// QR Performance JavaScript functionality

// Wrap everything in an IIFE to isolate scope and prevent variable conflicts
(function() {
    // Use window.addEventListener instead of document.addEventListener to avoid conflicts
    window.addEventListener('DOMContentLoaded', function() {
        // Initialize QR Performance functionality when the tab is clicked
        const qrPerformanceTabElement = document.querySelector('[data-tab="qr-performance"]');
        if (qrPerformanceTabElement) {
            qrPerformanceTabElement.addEventListener('click', initQRPerformance);
        }

        // Initialize immediately if QR Performance tab is active by default
        if (document.querySelector('.tab.active[data-tab="qr-performance"]')) {
            initQRPerformance();
        }
    });

    // QR Performance Data (Mock data for demonstration)
    // Using let instead of const to avoid redeclaration issues
    let qrPerformanceData = {
    summary: {
        totalScansToday: 1247,
        totalScansTrend: '+15.3%',
        avgConversion: '8.7%',
        avgConversionTrend: '+1.2%',
        scanToAction: '3.2s',
        scanToActionTrend: '-0.5s',
        activeCampaigns: 8,
        activeCampaignsTrend: '+2'
    },
    scanVolume: {
        current: [120, 145, 165, 135, 178, 189, 210, 215, 198, 225, 215, 245, 267, 278],
        previous: [110, 125, 145, 120, 155, 165, 175, 185, 170, 195, 190, 210, 230, 240],
        labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14']
    },
    geoDistribution: [
        { country: 'United States', percentage: 42 },
        { country: 'United Kingdom', percentage: 18 },
        { country: 'Canada', percentage: 12 },
        { country: 'Australia', percentage: 8 },
        { country: 'Other', percentage: 20 }
    ],
    deviceBreakdown: {
        deviceType: [
            { name: 'Mobile', percentage: 68 },
            { name: 'Desktop', percentage: 24 },
            { name: 'Tablet', percentage: 8 }
        ],
        operatingSystem: [
            { name: 'iOS', percentage: 45 },
            { name: 'Android', percentage: 35 },
            { name: 'Windows', percentage: 15 },
            { name: 'macOS', percentage: 5 }
        ]
    },
    conversionRates: {
        average: '8.7%',
        highest: '12.5%',
        lowest: '4.2%',
        target: '10.0%',
        campaigns: [
            { name: 'Product Launch', rate: 12.5 },
            { name: 'Event Registration', rate: 9.7 },
            { name: 'Contact Info', rate: 6.8 },
            { name: 'Social Media', rate: 8.3 },
            { name: 'Fall Campaign', rate: 4.2 }
        ]
    },
    scanToAction: [
        { campaign: 'Product Launch', time: '2.8s', trend: '-0.3s', status: 'good' },
        { campaign: 'Event Registration', time: '3.5s', trend: '-0.2s', status: 'good' },
        { campaign: 'Contact Info', time: '2.4s', trend: '-0.5s', status: 'excellent' },
        { campaign: 'Social Media', time: '4.2s', trend: '+0.3s', status: 'warning' },
        { campaign: 'Fall Campaign', time: '3.7s', trend: '-0.1s', status: 'good' }
    ],
    campaigns: ['All Campaigns', 'Product Launch', 'Event Registration', 'Contact Info', 'Social Media', 'Fall Campaign']
};

// Initialize QR Performance functionality
function initQRPerformance() {
    // Populate summary metrics
    populateSummaryMetrics();
    
    // Initialize filter controls
    initFilterControls();
    
    // Render charts and visualizations
    renderScanVolumeChart();
    renderGeoDistribution();
    renderDeviceBreakdown();
    renderConversionRateAnalysis();
    renderScanToActionMetrics();
    
    // Initialize export buttons
    initExportButtons();
}

// Populate summary metrics
function populateSummaryMetrics() {
    const data = qrPerformanceData.summary;
    
    document.getElementById('total-scans-today').textContent = data.totalScansToday;
    document.getElementById('total-scans-trend').textContent = data.totalScansTrend;
    document.getElementById('avg-conversion').textContent = data.avgConversion;
    document.getElementById('avg-conversion-trend').textContent = data.avgConversionTrend;
    document.getElementById('scan-to-action').textContent = data.scanToAction;
    document.getElementById('scan-to-action-trend').textContent = data.scanToActionTrend;
    document.getElementById('active-campaigns').textContent = data.activeCampaigns;
    document.getElementById('active-campaigns-trend').textContent = data.activeCampaignsTrend;
    
    // Set trend indicators
    setTrendIndicators();
}

// Set trend indicators based on values
function setTrendIndicators() {
    const trendElements = document.querySelectorAll('.trend-indicator');
    
    trendElements.forEach(element => {
        const trendValue = element.textContent;
        if (trendValue.startsWith('+')) {
            element.classList.add('positive');
            element.innerHTML = `<i class="fas fa-arrow-up"></i> ${trendValue}`;
        } else if (trendValue.startsWith('-')) {
            // For scan-to-action, negative is good (faster)
            if (element.id === 'scan-to-action-trend') {
                element.classList.add('positive');
                element.innerHTML = `<i class="fas fa-arrow-down"></i> ${trendValue}`;
            } else {
                element.classList.add('negative');
                element.innerHTML = `<i class="fas fa-arrow-down"></i> ${trendValue}`;
            }
        }
    });
}

// Initialize filter controls
function initFilterControls() {
    // Time range buttons
    const timeFilterButtons = document.querySelectorAll('.time-filter-btn');
    timeFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            timeFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateDataByTimeRange(this.dataset.range);
        });
    });
    
    // Campaign dropdown
    const campaignSelect = document.getElementById('campaign-select');
    if (campaignSelect) {
        // Clear existing options
        campaignSelect.innerHTML = '';
        
        // Add campaign options
        qrPerformanceData.campaigns.forEach(campaign => {
            const option = document.createElement('option');
            option.value = campaign;
            option.textContent = campaign;
            campaignSelect.appendChild(option);
        });
        
        // Add event listener
        campaignSelect.addEventListener('change', function() {
            updateDataByCampaign(this.value);
        });
    }
}

// Close the IIFE to isolate scope
})();
// Update data based on selected time range
function updateDataByTimeRange(range) {
    // In a real application, this would fetch data for the selected time range
    console.log(`Updating data for time range: ${range}`);
    
    // For demo purposes, we'll just simulate data updates
    let multiplier = 1;
    switch(range) {
        case 'today':
            multiplier = 1;
            break;
        case 'week':
            multiplier = 7;
            break;
        case 'month':
            multiplier = 30;
            break;
        case 'custom':
            // Show date picker (not implemented in this demo)
            console.log('Custom date range selected');
            return;
    }
    
    // Update summary metrics with simulated data
    document.getElementById('total-scans-today').textContent = Math.round(qrPerformanceData.summary.totalScansToday * multiplier);
    
    // Re-render charts with updated data
    renderScanVolumeChart();
    renderGeoDistribution();
    renderDeviceBreakdown();
    renderConversionRateAnalysis();
    renderScanToActionMetrics();
}

// Update data based on selected campaign
function updateDataByCampaign(campaign) {
    // In a real application, this would filter data for the selected campaign
    console.log(`Updating data for campaign: ${campaign}`);
    
    // For demo purposes, we'll just simulate data updates
    if (campaign !== 'All Campaigns') {
        // Find the campaign in our data
        const campaignData = qrPerformanceData.conversionRates.campaigns.find(c => c.name === campaign);
        if (campaignData) {
            // Update conversion rate display
            document.getElementById('avg-conversion').textContent = campaignData.rate + '%';
        }
    } else {
        // Reset to overall average
        document.getElementById('avg-conversion').textContent = qrPerformanceData.conversionRates.average;
    }
    
    // Re-render charts with filtered data
    renderScanVolumeChart();
    renderConversionRateAnalysis();
}

// Render scan volume chart (time series)
function renderScanVolumeChart() {
    const chartContainer = document.getElementById('scan-volume-chart');
    if (!chartContainer) return;
    
    // Clear previous chart
    chartContainer.innerHTML = '';
    
    // Create canvas for chart
    const canvas = document.createElement('canvas');
    canvas.id = 'scan-volume-canvas';
    canvas.width = chartContainer.clientWidth;
    canvas.height = 250;
    chartContainer.appendChild(canvas);
    
    // Simulate chart rendering (in a real app, use Chart.js or similar)
    const ctx = canvas.getContext('2d');
    
    // Draw chart background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, canvas.height - 30);
    ctx.lineTo(canvas.width - 20, canvas.height - 30);
    ctx.stroke();
    
    // Draw current period line
    const data = qrPerformanceData.scanVolume.current;
    const maxValue = Math.max(...data, ...qrPerformanceData.scanVolume.previous) * 1.1;
    const xStep = (canvas.width - 70) / data.length;
    const yScale = (canvas.height - 50) / maxValue;
    
    ctx.strokeStyle = '#6200ea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = 50 + i * xStep;
        const y = canvas.height - 30 - (data[i] * yScale);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Draw previous period line
    const prevData = qrPerformanceData.scanVolume.previous;
    ctx.strokeStyle = '#9e9e9e';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i < prevData.length; i++) {
        const x = 50 + i * xStep;
        const y = canvas.height - 30 - (prevData[i] * yScale);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '10px Arial';
    for (let i = 0; i < data.length; i += 2) {
        const x = 50 + i * xStep;
        ctx.fillText(qrPerformanceData.scanVolume.labels[i], x - 15, canvas.height - 15);
    }
    
    // Draw legend
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.fillText('Current Period', canvas.width - 150, 30);
    ctx.fillText('Previous Period', canvas.width - 150, 50);
    
    ctx.strokeStyle = '#6200ea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(canvas.width - 170, 26);
    ctx.lineTo(canvas.width - 155, 26);
    ctx.stroke();
    
    ctx.strokeStyle = '#9e9e9e';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvas.width - 170, 46);
    ctx.lineTo(canvas.width - 155, 46);
    ctx.stroke();
    ctx.setLineDash([]);
}

// Render geographic distribution
function renderGeoDistribution() {
    const geoContainer = document.getElementById('geo-distribution-list');
    if (!geoContainer) return;
    
    // Clear previous content
    geoContainer.innerHTML = '';
    
    // Add country items
    qrPerformanceData.geoDistribution.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'geo-item';
        
        listItem.innerHTML = `
            <div class="geo-country">${item.country}</div>
            <div class="geo-percentage">${item.percentage}%</div>
            <div class="progress">
                <div class="progress-bar" style="width: ${item.percentage}%"></div>
            </div>
        `;
        
        geoContainer.appendChild(listItem);
    });
    
    // Simulate map rendering (in a real app, use a mapping library)
    const mapContainer = document.getElementById('geo-map');
    if (mapContainer) {
        mapContainer.innerHTML = '<div class="map-placeholder">Interactive Map (Simulated)</div>';
    }
}

// Render device and platform breakdown
function renderDeviceBreakdown() {
    // Render device type breakdown
    renderBreakdownSection('device-type-list', qrPerformanceData.deviceBreakdown.deviceType);
    
    // Render operating system breakdown
    renderBreakdownSection('os-list', qrPerformanceData.deviceBreakdown.operatingSystem);
}

// Helper function to render breakdown sections
function renderBreakdownSection(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Add items
    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'breakdown-item';
        
        listItem.innerHTML = `
            <div class="breakdown-name">${item.name}</div>
            <div class="breakdown-percentage">${item.percentage}%</div>
            <div class="progress">
                <div class="progress-bar" style="width: ${item.percentage}%"></div>
            </div>
        `;
        
        container.appendChild(listItem);
    });
}

// Render conversion rate analysis
function renderConversionRateAnalysis() {
    // Update conversion rate metrics
    document.getElementById('avg-conversion-rate').textContent = qrPerformanceData.conversionRates.average;
    document.getElementById('highest-conversion-rate').textContent = qrPerformanceData.conversionRates.highest;
    document.getElementById('lowest-conversion-rate').textContent = qrPerformanceData.conversionRates.lowest;
    document.getElementById('target-conversion-rate').textContent = qrPerformanceData.conversionRates.target;
    
    // Render conversion rate chart
    const chartContainer = document.getElementById('conversion-rate-chart');
    if (!chartContainer) return;
    
    // Clear previous chart
    chartContainer.innerHTML = '';
    
    // Create canvas for chart
    const canvas = document.createElement('canvas');
    canvas.id = 'conversion-rate-canvas';
    canvas.width = chartContainer.clientWidth;
    canvas.height = 200;
    chartContainer.appendChild(canvas);
    
    // Simulate chart rendering (in a real app, use Chart.js or similar)
    const ctx = canvas.getContext('2d');
    
    // Draw chart background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, canvas.height - 30);
    ctx.lineTo(canvas.width - 20, canvas.height - 30);
    ctx.stroke();
    
    // Draw bars
    const data = qrPerformanceData.conversionRates.campaigns;
    const maxValue = Math.max(...data.map(item => item.rate)) * 1.2;
    const barWidth = (canvas.width - 70) / data.length - 10;
    const yScale = (canvas.height - 50) / maxValue;
    
    // Draw target line
    const targetValue = parseFloat(qrPerformanceData.conversionRates.target);
    const targetY = canvas.height - 30 - (targetValue * yScale);
    ctx.strokeStyle = '#ff5722';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(50, targetY);
    ctx.lineTo(canvas.width - 20, targetY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw bars
    for (let i = 0; i < data.length; i++) {
        const x = 50 + i * ((canvas.width - 70) / data.length) + 5;
        const barHeight = data[i].rate * yScale;
        const y = canvas.height - 30 - barHeight;
        
        // Determine bar color based on rate
        let barColor;
        if (data[i].rate >= targetValue) {
            barColor = '#4caf50'; // Above target (green)
        } else if (data[i].rate >= targetValue * 0.8) {
            barColor = '#ff9800'; // Near target (orange)
        } else {
            barColor = '#f44336'; // Below target (red)
        }
        
        ctx.fillStyle = barColor;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.fillText(data[i].name, x, canvas.height - 15, barWidth);
        
        // Draw value
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.fillText(data[i].rate + '%', x, y - 5);
    }
    
    // Draw target label
    ctx.fillStyle = '#ff5722';
    ctx.font = '10px Arial';
    ctx.fillText('Target: ' + targetValue + '%', canvas.width - 100, targetY - 5);
}

// Render scan-to-action metrics
function renderScanToActionMetrics() {
    const tableBody = document.querySelector('#scan-to-action-table tbody');
    if (!tableBody) return;
    
    // Clear previous content
    tableBody.innerHTML = '';
    
    // Add rows
    qrPerformanceData.scanToAction.forEach(item => {
        const row = document.createElement('tr');
        
        // Determine status class
        let statusClass = '';
        switch(item.status) {
            case 'excellent':
                statusClass = 'status-excellent';
                break;
            case 'good':
                statusClass = 'status-good';
                break;
            case 'warning':
                statusClass = 'status-warning';
                break;
            case 'poor':
                statusClass = 'status-poor';
                break;
        }
        
        // Determine trend class and icon
        let trendClass = '';
        let trendIcon = '';
        if (item.trend.startsWith('-')) {
            trendClass = 'trend-positive';
            trendIcon = '<i class="fas fa-arrow-down"></i>';
        } else if (item.trend.startsWith('+')) {
            trendClass = 'trend-negative';
            trendIcon = '<i class="fas fa-arrow-up"></i>';
        }
        
        row.innerHTML = `
            <td>${item.campaign}</td>
            <td>${item.time}</td>
            <td class="${trendClass}">${trendIcon} ${item.trend}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize export buttons
function initExportButtons() {
    const exportPdfBtn = document.getElementById('export-pdf');
    const exportCsvBtn = document.getElementById('export-csv');
    
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', function() {
            alert('Exporting QR Performance data as PDF...');
            // In a real application, this would generate and download a PDF
        });
    }
    
    if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', function() {
            alert('Exporting QR Performance data as CSV...');
            // In a real application, this would generate and download a CSV
        });
    }
}
