const productRecommendations = {
    smartphone: {
        budget: ['Redmi Note series', 'Moto G Power'],
        photography: ['Google Pixel 6a', 'OnePlus Nord 2'],
    },
    laptop: {
        programming: ['Dell XPS 13', 'MacBook Air M1'],
        video_editing: ['MacBook Pro M1', 'Dell XPS 15'],
        student: ['Lenovo Yoga 7i', 'HP Spectre x360'],
        reliable: ['Lenovo ThinkPad', 'Apple MacBook'],
    },
    smartwatch: {
        fitness: ['Apple Watch Series 8', 'Fitbit Charge 5'],
        android: ['Samsung Galaxy Watch 6', 'Garmin Venu 2'],
        seniors: ['Apple Watch SE', 'Fitbit Sense'],
    },
    camera: {
        beginner: ['Canon EOS Rebel T7i', 'Nikon D3500'],
        wildlife: ['Nikon D850', 'Canon EOS 90D'],
        vlogging: ['Sony ZV-1', 'Canon EOS M50 Mark II'],
        action: ['GoPro Hero 11', 'DJI Osmo Action'],
    },
    headphones: {
        noise_canceling: ['Sony WH-1000XM4', 'Bose QuietComfort 35 II'],
        gaming: ['SteelSeries Arctis 7', 'HyperX Cloud II Wireless'],
        true_wireless: ['Sony WF-1000XM4', 'Apple AirPods Pro'],
    },
    tablet: {
        drawing: ['iPad Pro with Apple Pencil', 'Wacom Cintiq'],
        kids: ['Amazon Fire HD 10 Kids Edition', 'iPad Mini'],
    },
    monitor: {
        gaming: ['ASUS TUF Gaming VG289Q', 'LG 27GN950-B'],
        4K: ['TCL 6-Series', 'Vizio M-Series'],
    },
    soundbar: {
        budget: ['Vizio V-Series 2.1', 'TCL Alto 6+'],
        home_theater: ['Sonos Arc', 'Samsung HW-Q950A'],
    },
};

function getRecommendation(userInput) {
    userInput = userInput.toLowerCase();

    for (const category in productRecommendations) {
        if (userInput.includes(category)) {
            const requirements = productRecommendations[category];
            for (const requirement in requirements) {
                if (userInput.includes(requirement)) {
                    return `For ${category} with ${requirement} requirements, I recommend: ${requirements[requirement].join(', ')}`;
                }
            }
        }
    }

    return "I'm sorry, I couldn't find a specific recommendation. Please try asking about smartphones, laptops, smartwatches, cameras, or headphones, and include requirements like 'budget', 'gaming', etc.";
}

const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    const inputText = userInput.value.trim();
    if (inputText === '') return;

    displayMessage('user', inputText);
    
    if (inputText.toLowerCase() === 'quit') {
        displayMessage('bot', 'Goodbye! Have a great day!');
    } else {
        const response = getRecommendation(inputText);
        displayMessage('bot', response);
    }

    userInput.value = ''; // Clear the input field
});

function displayMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Bot'}:</strong> ${message}`;
    messageElement.className = sender;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}
