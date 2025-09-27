// DOM Elements
// Make these variables available globally to avoid conflicts with other scripts
window.tabs = document.querySelectorAll('.tab');
window.tabContents = document.querySelectorAll('.tab-content');
window.timeRangeButtons = document.querySelectorAll('.filter-btn');
window.compareSelect = document.getElementById('compare-period');

// Analytics Data (Mock data for demonstration)
// Using window.analyticsData to make it globally accessible and prevent redeclaration
window.analyticsData = {
    totalScans: 12847,
    totalScansChange: '+19.5%',
    activeQRCodes: 24,
    activeQRCodesChange: '+3',
    topQRCode: 'Product Launch',
    topQRCodeScans: 2341,
    conversionRate: '8.2%',
    conversionRateChange: '+0.8%',
    deviceDistribution: {
        mobile: 68,
        desktop: 28,
        tablet: 4
    },
    recentActivity: [
        { title: 'QR Code generated - Event Registration', time: '2 minutes ago' },
        { title: 'High scan activity - Product Launch', time: '15 minutes ago' },
        { title: 'QR Code generated - Contact Info', time: '1 hour ago' },
        { title: 'Peak scan time - All QR codes', time: '2 hours ago' }
    ],
    timeAnalysis: {
        hourly: {
            peakHour: '5 PM',
            peakValue: 198,
            averageDaily: 1847,
            growthRate: 15.3,
            previousGrowthRate: 12.1,
            hourlyData: [
                { hour: '12 AM', value: 45 },
                { hour: '1 AM', value: 23 },
                { hour: '2 AM', value: 12 },
                { hour: '3 AM', value: 8 },
                { hour: '4 AM', value: 5 },
                { hour: '5 PM', value: 198 },
                { hour: '6 PM', value: 187 },
                { hour: '7 PM', value: 145 },
                { hour: '8 PM', value: 123 },
                { hour: '9 PM', value: 98 },
                { hour: '10 PM', value: 67 },
                { hour: '11 PM', value: 45 }
            ],
            hourlyDistribution: [
                { label: '12 AM', value: 45 },
                { label: '1 AM', value: 23 },
                { label: '2 AM', value: 12 },
                { label: '3 AM', value: 8 },
                { label: '4 AM', value: 5 },
                { label: '5 AM', value: 8 },
                { label: '6 AM', value: 15 },
                { label: '7 AM', value: 42 },
                { label: '8 AM', value: 78 },
                { label: '9 AM', value: 112 },
                { label: '10 AM', value: 145 },
                { label: '11 AM', value: 162 },
                { label: '12 PM', value: 156 },
                { label: '1 PM', value: 142 },
                { label: '2 PM', value: 132 },
                { label: '3 PM', value: 145 },
                { label: '4 PM', value: 162 },
                { label: '5 PM', value: 198 },
                { label: '6 PM', value: 187 },
                { label: '7 PM', value: 145 },
                { label: '8 PM', value: 123 },
                { label: '9 PM', value: 98 },
                { label: '10 PM', value: 67 },
                { label: '11 PM', value: 45 }
            ],
            dayOfWeekData: [
                { day: 'Monday', value: 1847 },
                { day: 'Tuesday', value: 2134 },
                { day: 'Wednesday', value: 1987 },
                { day: 'Thursday', value: 2256 },
                { day: 'Friday', value: 2456 },
                { day: 'Saturday', value: 1234 },
                { day: 'Sunday', value: 987 }
            ]
        },
        daily: {
            peakDay: 'Friday',
            peakValue: 2456,
            averageWeekly: 12891,
            growthRate: 8.7,
            previousGrowthRate: 7.2,
            dailyData: [
                { day: 'Monday', value: 1847 },
                { day: 'Tuesday', value: 2134 },
                { day: 'Wednesday', value: 1987 },
                { day: 'Thursday', value: 2256 },
                { day: 'Friday', value: 2456 },
                { day: 'Saturday', value: 1234 },
                { day: 'Sunday', value: 987 }
            ],
            dailyHourlyPattern: [
                { label: '12 AM', value: 42 },
                { label: '1 AM', value: 25 },
                { label: '2 AM', value: 12 },
                { label: '3 AM', value: 6 },
                { label: '4 AM', value: 4 },
                { label: '5 AM', value: 10 },
                { label: '6 AM', value: 18 },
                { label: '7 AM', value: 45 },
                { label: '8 AM', value: 82 },
                { label: '9 AM', value: 118 },
                { label: '10 AM', value: 152 },
                { label: '11 AM', value: 168 },
                { label: '12 PM', value: 162 },
                { label: '1 PM', value: 148 },
                { label: '2 PM', value: 138 },
                { label: '3 PM', value: 152 },
                { label: '4 PM', value: 168 },
                { label: '5 PM', value: 192 },
                { label: '6 PM', value: 172 },
                { label: '7 PM', value: 152 },
                { label: '8 PM', value: 128 },
                { label: '9 PM', value: 102 },
                { label: '10 PM', value: 72 },
                { label: '11 PM', value: 56 }
            ],
            dayOfWeekData: [
                { day: 'Monday', value: 1847 },
                { day: 'Tuesday', value: 2134 },
                { day: 'Wednesday', value: 1987 },
                { day: 'Thursday', value: 2256 },
                { day: 'Friday', value: 2456 },
                { day: 'Saturday', value: 1234 },
                { day: 'Sunday', value: 987 }
            ]
        },
        weekly: {
            peakWeek: 'Week 3',
            peakValue: 14256,
            averageMonthly: 52000,
            growthRate: 5.2,
            previousGrowthRate: 4.8,
            weeklyData: [
                { week: 'Week 1', value: 12458 },
                { week: 'Week 2', value: 13245 },
                { week: 'Week 3', value: 14256 },
                { week: 'Week 4', value: 12041 }
            ],
            weeklyHourlyPattern: [
                { label: '12 AM', value: 40 },
                { label: '1 AM', value: 23 },
                { label: '2 AM', value: 11 },
                { label: '3 AM', value: 5 },
                { label: '4 AM', value: 3 },
                { label: '5 AM', value: 9 },
                { label: '6 AM', value: 16 },
                { label: '7 AM', value: 43 },
                { label: '8 AM', value: 80 },
                { label: '9 AM', value: 115 },
                { label: '10 AM', value: 148 },
                { label: '11 AM', value: 165 },
                { label: '12 PM', value: 159 },
                { label: '1 PM', value: 145 },
                { label: '2 PM', value: 135 },
                { label: '3 PM', value: 148 },
                { label: '4 PM', value: 165 },
                { label: '5 PM', value: 189 },
                { label: '6 PM', value: 169 },
                { label: '7 PM', value: 148 },
                { label: '8 PM', value: 125 },
                { label: '9 PM', value: 100 },
                { label: '10 PM', value: 69 },
                { label: '11 PM', value: 53 }
            ],
            weeklyDayData: [
                { day: 'Monday', value: 1847 },
                { day: 'Tuesday', value: 2134 },
                { day: 'Wednesday', value: 1987 },
                { day: 'Thursday', value: 2256 },
                { day: 'Friday', value: 2456 },
                { day: 'Saturday', value: 1234 },
                { day: 'Sunday', value: 987 }
            ]
        },
        monthly: {
            peakMonth: 'December',
            peakValue: 62458,
            averageYearly: 48000,
            growthRate: 12.5,
            previousGrowthRate: 10.2,
            monthlyData: [
                { month: 'Jan', value: 42458 },
                { month: 'Feb', value: 38245 },
                { month: 'Mar', value: 45256 },
                { month: 'Apr', value: 47041 },
                { month: 'May', value: 52458 },
                { month: 'Jun', value: 48245 },
                { month: 'Jul', value: 51256 },
                { month: 'Aug', value: 49041 },
                { month: 'Sep', value: 53458 },
                { month: 'Oct', value: 58245 },
                { month: 'Nov', value: 59256 },
                { month: 'Dec', value: 62458 }
            ],
            monthlyHourlyPattern: [
                { label: '12 AM', value: 38 },
                { label: '1 AM', value: 21 },
                { label: '2 AM', value: 9 },
                { label: '3 AM', value: 4 },
                { label: '4 AM', value: 2 },
                { label: '5 AM', value: 7 },
                { label: '6 AM', value: 14 },
                { label: '7 AM', value: 41 },
                { label: '8 AM', value: 78 },
                { label: '9 AM', value: 113 },
                { label: '10 AM', value: 146 },
                { label: '11 AM', value: 163 },
                { label: '12 PM', value: 157 },
                { label: '1 PM', value: 143 },
                { label: '2 PM', value: 133 },
                { label: '3 PM', value: 146 },
                { label: '4 PM', value: 163 },
                { label: '5 PM', value: 187 },
                { label: '6 PM', value: 167 },
                { label: '7 PM', value: 146 },
                { label: '8 PM', value: 123 },
                { label: '9 PM', value: 98 },
                { label: '10 PM', value: 67 },
                { label: '11 PM', value: 51 }
            ],
            monthlyDayData: [
                { day: 'Monday', value: 42458 },
                { day: 'Tuesday', value: 38245 },
                { day: 'Wednesday', value: 45256 },
                { day: 'Thursday', value: 47041 },
                { day: 'Friday', value: 52458 },
                { day: 'Saturday', value: 48245 },
                { day: 'Sunday', value: 51256 }
            ]
        }
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Set up time range filter buttons
    timeRangeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all time range buttons
            timeRangeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update time analysis data based on selected range
            const range = button.getAttribute('data-range');
            updateTimeAnalysis(range);
        });
    });
    
    // Set up comparison period change event
    if (compareSelect) {
        compareSelect.addEventListener('change', () => {
            const activeRange = document.querySelector('.filter-btn.active').getAttribute('data-range');
            updateTimeAnalysis(activeRange);
        });
    }
    
    // Initialize time analysis with default (hourly) data
    updateTimeAnalysis('hourly');

    // Add navigation link to index.html
    updateIndexNavigation();
});

// Switch Tab Function
function switchTab(tabId) {
    // Update active tab
    tabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update active content
    tabContents.forEach(content => {
        if (content.id === `${tabId}-content`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// Update Index Navigation
function updateIndexNavigation() {
    // This function would be called when the analytics page loads
    // It ensures the navigation link is added to the index page
    
    // In a real application, this would be handled differently
    // For this demo, we're just making sure the navigation works
    
    // Check if we're on the analytics page
    if (window.location.pathname.includes('analytics.html')) {
        // We're already on the analytics page, no need to do anything
        console.log('Analytics dashboard loaded');
    }
}

// Function to update metrics with real data
// In a real application, this would fetch data from an API
function updateMetrics() {
    // This would update the metrics with real data
    // For this demo, we're using the mock data defined above
    
    // Example of how this would work with real data:
    // fetch('/api/analytics')
    //     .then(response => response.json())
    //     .then(data => {
    //         document.querySelector('.total-scans').textContent = data.totalScans;
    //         // Update other metrics...
    //     });
}

// Function to generate charts
// In a real application, this would use a charting library like Chart.js
function generateCharts() {
    // This would generate charts using a library like Chart.js
    // For this demo, we're just showing placeholders
    
    // Example of how this would work with Chart.js:
}

// Update time analysis data based on selected range
function updateTimeAnalysis(range) {
    const data = analyticsData.timeAnalysis[range];
    const compareMode = compareSelect ? compareSelect.value : 'none';
    
    // Update time metrics cards
    updateTimeMetrics(data, range);
    
    // Update charts based on the selected range
    updateTimeCharts(data, range, compareMode);
    
    // Update comparison data if selected
    if (compareMode !== 'none') {
        updateComparisonData(data, range, compareMode);
    }
}

// Update time metrics cards with data for the selected range
function updateTimeMetrics(data, range) {
    const metricCards = document.querySelectorAll('.time-analysis-container .metric-card');
    
    if (metricCards.length >= 3) {
        // Peak metric
        let peakLabel, peakValue, peakUnit;
        
        switch(range) {
            case 'hourly':
                peakLabel = 'Peak Hour';
                peakValue = data.peakHour;
                peakUnit = `${data.peakValue} scans`;
                break;
            case 'daily':
                peakLabel = 'Peak Day';
                peakValue = data.peakDay;
                peakUnit = `${data.peakValue.toLocaleString()} scans`;
                break;
            case 'weekly':
                peakLabel = 'Peak Week';
                peakValue = data.peakWeek;
                peakUnit = `${data.peakValue.toLocaleString()} scans`;
                break;
            case 'monthly':
                peakLabel = 'Peak Month';
                peakValue = data.peakMonth;
                peakUnit = `${data.peakValue.toLocaleString()} scans`;
                break;
        }
        
        metricCards[0].querySelector('h3').textContent = peakLabel;
        metricCards[0].querySelector('.metric-value').textContent = peakValue;
        metricCards[0].querySelector('.metric-change').textContent = peakUnit;
        
        // Average metric
        let avgLabel, avgValue, avgUnit;
        
        switch(range) {
            case 'hourly':
                avgLabel = 'Average Daily';
                avgValue = data.averageDaily.toLocaleString();
                avgUnit = 'scans';
                break;
            case 'daily':
                avgLabel = 'Average Weekly';
                avgValue = data.averageWeekly.toLocaleString();
                avgUnit = 'scans';
                break;
            case 'weekly':
                avgLabel = 'Average Monthly';
                avgValue = data.averageMonthly.toLocaleString();
                avgUnit = 'scans';
                break;
            case 'monthly':
                avgLabel = 'Average Yearly';
                avgValue = data.averageYearly.toLocaleString();
                avgUnit = 'scans';
                break;
        }
        
        metricCards[1].querySelector('h3').textContent = avgLabel;
        metricCards[1].querySelector('.metric-value').textContent = avgValue;
        metricCards[1].querySelector('.metric-change').textContent = avgUnit;
        
        // Growth rate metric
        let comparisonText;
        
        switch(range) {
            case 'hourly':
                comparisonText = 'vs yesterday';
                break;
            case 'daily':
                comparisonText = 'vs last week';
                break;
            case 'weekly':
                comparisonText = 'vs last month';
                break;
            case 'monthly':
                comparisonText = 'vs last year';
                break;
        }
        
        metricCards[2].querySelector('.metric-value').textContent = `+${data.growthRate}%`;
        metricCards[2].querySelector('.metric-change').textContent = comparisonText;
        metricCards[2].querySelector('.metric-change').classList.add('positive');
    }
}

// Update charts based on the selected range and comparison mode
function updateTimeCharts(data, range, compareMode) {
    // In a real application, you would use a charting library
    // to create interactive charts with comparison data
    
    // Update hourly distribution chart
    updateHourlyChart(data, range);
    
    // Update day of week analysis
    updateDayAnalysis(data, range);
    
    // Update weekly trend chart placeholder text based on range
    const weeklyTrendChart = document.getElementById('weekly-trend-chart');
    if (weeklyTrendChart) {
        let chartText = '';
        switch(range) {
            case 'hourly':
                chartText = 'Hourly trend (24 hours)';
                break;
            case 'daily':
                chartText = '7 day trend';
                break;
            case 'weekly':
                chartText = '4 week trend';
                break;
            case 'monthly':
                chartText = '12 month trend';
                break;
        }
        
        const chartInfo = weeklyTrendChart.querySelector('p');
        if (chartInfo) {
            chartInfo.innerHTML = `Line chart would go here<br>${chartText}`;
            
            if (compareMode !== 'none') {
                chartInfo.innerHTML += `<br>With ${compareMode} comparison`;
            }
        }
    }
}

// Update hourly distribution chart based on selected range
function updateHourlyChart(data, range) {
    const hourlyContainer = document.querySelector('.hourly-chart-container');
    if (!hourlyContainer) return;
    
    // Clear existing chart
    const existingChart = hourlyContainer.querySelector('.hourly-chart');
    if (existingChart) {
        existingChart.innerHTML = '';
    } else {
        return;
    }
    
    // Get hourly data based on range
    let hourlyData = [];
    let maxValue = 0;
    
    switch(range) {
        case 'hourly':
            hourlyData = data.hourlyDistribution;
            break;
        case 'daily':
            hourlyData = data.dailyHourlyPattern;
            break;
        case 'weekly':
            hourlyData = data.weeklyHourlyPattern;
            break;
        case 'monthly':
            hourlyData = data.monthlyHourlyPattern;
            break;
    }
    
    // Find max value for scaling
    maxValue = Math.max(...hourlyData.map(h => h.value));
    
    // Update chart title based on range
    const chartTitle = hourlyContainer.querySelector('h3');
    if (chartTitle) {
        switch(range) {
            case 'hourly':
                chartTitle.textContent = 'Hourly Scan Distribution';
                break;
            case 'daily':
                chartTitle.textContent = 'Daily Hour Pattern';
                break;
            case 'weekly':
                chartTitle.textContent = 'Weekly Hour Pattern';
                break;
            case 'monthly':
                chartTitle.textContent = 'Monthly Hour Pattern';
                break;
        }
    }
    
    // Create bar for each hour
    hourlyData.forEach(hour => {
        // Create hour label
        const hourLabel = document.createElement('div');
        hourLabel.className = 'hour-label';
        hourLabel.textContent = hour.label;
        
        // Create bar container
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';
        
        // Create bar with width proportional to value
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(hour.value / maxValue) * 100}%`;
        
        // Create value label
        const valueLabel = document.createElement('div');
        valueLabel.className = 'value-label';
        valueLabel.textContent = hour.value;
        
        // Assemble elements
        barContainer.appendChild(bar);
        barContainer.appendChild(valueLabel);
        
        // Create row and add to chart
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.appendChild(hourLabel);
        row.appendChild(barContainer);
        
        existingChart.appendChild(row);
    });
}

// Update day of week analysis based on selected range
function updateDayAnalysis(data, range) {
    const dayAnalysisContainer = document.querySelector('.day-analysis-container');
    if (!dayAnalysisContainer) return;
    
    // Get day data based on range
    let dayData = [];
    
    switch(range) {
        case 'hourly':
            dayData = data.dayOfWeekData;
            break;
        case 'daily':
            dayData = data.dayOfWeekData;
            break;
        case 'weekly':
            dayData = data.weeklyDayData;
            break;
        case 'monthly':
            dayData = data.monthlyDayData;
            break;
    }
    
    // Update day analysis title based on range
    const dayTitle = dayAnalysisContainer.querySelector('h3');
    if (dayTitle) {
        switch(range) {
            case 'hourly':
            case 'daily':
                dayTitle.textContent = 'Day of Week Analysis';
                break;
            case 'weekly':
                dayTitle.textContent = 'Weekly Day Pattern';
                break;
            case 'monthly':
                dayTitle.textContent = 'Monthly Day Pattern';
                break;
        }
    }
    
    // Update day values
    const dayItems = dayAnalysisContainer.querySelectorAll('.day-item');
    if (dayItems.length > 0 && dayData.length >= 7) {
        dayItems.forEach((item, index) => {
            if (index < dayData.length) {
                const valueElement = item.querySelector('.day-value');
                if (valueElement) {
                    valueElement.textContent = dayData[index].value;
                }
            }
        });
    }
}

// Update comparison data based on selected comparison mode
function updateComparisonData(data, range, compareMode) {
    // In a real application, this would fetch and display comparison data
    // For this demo, we'll update the UI to show comparison is active
    
    // Add comparison indicator to metric cards
    const metricCards = document.querySelectorAll('.time-analysis-container .metric-card');
    
    if (metricCards.length >= 3) {
        // Add comparison data to growth rate card
        const growthCard = metricCards[2];
        const growthChange = growthCard.querySelector('.metric-change');
        
        if (growthChange) {
            let comparisonText = '';
            let previousRate = 0;
            
            switch(range) {
                case 'hourly':
                    previousRate = data.previousGrowthRate || 0;
                    comparisonText = `vs ${compareMode}`;
                    break;
                case 'daily':
                    previousRate = data.previousGrowthRate || 0;
                    comparisonText = `vs ${compareMode}`;
                    break;
                case 'weekly':
                    previousRate = data.previousGrowthRate || 0;
                    comparisonText = `vs ${compareMode}`;
                    break;
                case 'monthly':
                    previousRate = data.previousGrowthRate || 0;
                    comparisonText = `vs ${compareMode}`;
                    break;
            }
            
            // Calculate difference
            const currentRate = data.growthRate;
            const difference = currentRate - previousRate;
            
            // Update comparison text
            growthChange.textContent = `${comparisonText} (${difference >= 0 ? '+' : ''}${difference.toFixed(1)}%)`;
            
            // Add visual indicator
            if (difference > 0) {
                growthChange.classList.add('positive');
                growthChange.classList.remove('negative');
            } else if (difference < 0) {
                growthChange.classList.add('negative');
                growthChange.classList.remove('positive');
            } else {
                growthChange.classList.remove('positive');
                growthChange.classList.remove('negative');
            }
        }
    }
    
    // Update comparison indicator in charts
    const timeAnalysisContainer = document.querySelector('.time-analysis-container');
    if (timeAnalysisContainer) {
        // Add comparison mode indicator
        const comparisonIndicator = document.createElement('div');
        comparisonIndicator.className = 'comparison-indicator';
        comparisonIndicator.textContent = `Comparing with ${compareMode}`;
        
        // Remove any existing indicators
        const existingIndicator = timeAnalysisContainer.querySelector('.comparison-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // Add new indicator at the top of the container
        const firstChild = timeAnalysisContainer.firstChild;
        timeAnalysisContainer.insertBefore(comparisonIndicator, firstChild);
    }
}// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Force show Time Analysis tab for testing
    document.getElementById('time-analysis-content').style.display = 'block';
    
    // Initialize Devices & Locations tab functionality
    initDevicesAndLocations();
    
    // Initialize tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Show the corresponding tab content
            const tabId = tab.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId + '-content');
            if (tabContent) {
                tabContent.classList.add('active');
                tabContent.style.display = 'block';
            }
        });
    });
    
    // Set first tab as active by default
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
    
    // Initialize time range filters
    if (timeRangeButtons.length > 0) {
        // Set default active time range
        timeRangeButtons[0].classList.add('active');
        
        // Add click event listeners to time range buttons
        timeRangeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all time range buttons
                timeRangeButtons.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update time analysis with selected range
                const range = button.getAttribute('data-range');
                updateTimeAnalysis(range);
            });
        });
    }
    
    // Initialize comparison select
    if (compareSelect) {
        compareSelect.addEventListener('change', () => {
            // Get current active time range
            const activeTimeRange = document.querySelector('.time-filter-button.active');
            if (activeTimeRange) {
                const range = activeTimeRange.getAttribute('data-range');
                updateTimeAnalysis(range);
            }
        });
    }
    
    // Initialize time analysis with default range (hourly)
    updateTimeAnalysis('hourly');
});

// Function to initialize Devices & Locations tab functionality
function initDevicesAndLocations() {
    // Ensure the devices content is properly initialized
    const devicesContent = document.getElementById('devices-content');
    if (!devicesContent) return;

    // Make sure the devices content is visible when the tab is active
    const devicesTab = document.querySelector('.tab[data-tab="devices"]');
    if (devicesTab) {
        devicesTab.addEventListener('click', function() {
            devicesContent.style.display = 'block';
        });
    }

    // Add animation to the bars for better visual effect
    const allBars = document.querySelectorAll('.device-bar, .browser-bar, .country-bar');
    
    // Animate bars with a slight delay for each
    setTimeout(() => {
        allBars.forEach((bar, index) => {
            setTimeout(() => {
                // Get the target width from the inline style
                const targetWidth = bar.style.width;
                
                // First set width to 0
                bar.style.width = '0%';
                
                // Then animate to the target width
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-in-out';
                    bar.style.width = targetWidth;
                }, 50);
            }, index * 100); // Stagger the animations
        });
    }, 300); // Short delay after page load
}