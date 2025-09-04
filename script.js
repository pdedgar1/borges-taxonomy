const categories = [
    { name: "BELONGING TO THE EMPEROR", key: "emperor" },
    { name: "EMBALMED", key: "embalmed" },
    { name: "TAME", key: "tame" },
    { name: "SUCKING PIGS", key: "pigs" },
    { name: "SIRENS", key: "sirens" },
    { name: "FABULOUS", key: "fabulous" },
    { name: "STRAY DOGS", key: "dogs" },
    { name: "INCLUDED IN PRESENT CLASSIFICATION", key: "classification" },
    { name: "FRENZIED", key: "frenzied" },
    { name: "INNUMERABLE", key: "innumerable" },
    { name: "DRAWN WITH A FINE CAMELHAIR BRUSH", key: "brush" },
    { name: "ET CETERA", key: "etcetera" },
    { name: "HAVING JUST BROKEN THE WATER PITCHER", key: "pitcher" },
    { name: "THAT FROM A LONG WAY OFF LOOK LIKE FLIES", key: "flies" }
];

const items = [
    // Emperor
    { emoji: "👑", description: "Royal Crown", category: "emperor" },
    { emoji: "📜", description: "Imperial Decree", category: "emperor" },
    { emoji: "🏰", description: "Palace", category: "emperor" },
    
    // Embalmed
    { emoji: "🏺", description: "Ancient Mummy", category: "embalmed" },
    { emoji: "🦎", description: "Taxidermied Lizard", category: "embalmed" },
    { emoji: "🌹", description: "Preserved Rose", category: "embalmed" },
    
    // Tame
    { emoji: "🐕", description: "Pet Dog", category: "tame" },
    { emoji: "🐱", description: "House Cat", category: "tame" },
    { emoji: "🐎", description: "Domesticated Horse", category: "tame" },
    
    // Pigs
    { emoji: "🐷", description: "Nursing Piglet", category: "pigs" },
    { emoji: "🥓", description: "Suckling Pig for Roasting", category: "pigs" },
    { emoji: "🐽", description: "Baby Wild Boar", category: "pigs" },
    
    // Sirens
    { emoji: "🧜‍♀️", description: "Mythological Siren", category: "sirens" },
    { emoji: "🚨", description: "Emergency Siren", category: "sirens" },
    { emoji: "📯", description: "Warning Horn", category: "sirens" },
    
    // Fabulous
    { emoji: "🐉", description: "Dragon", category: "fabulous" },
    { emoji: "🦄", description: "Unicorn", category: "fabulous" },
    { emoji: "🔥", description: "Phoenix", category: "fabulous" },
    
    // Dogs
    { emoji: "🐕‍🦺", description: "Stray Mutt", category: "dogs" },
    { emoji: "🐺", description: "Feral Dog Pack", category: "dogs" },
    { emoji: "🦮", description: "Lost Pet", category: "dogs" },
    
    // Classification
    { emoji: "📋", description: "This Very List", category: "classification" },
    { emoji: "🔖", description: "Category Label", category: "classification" },
    { emoji: "📊", description: "Classification Chart", category: "classification" },
    
    // Frenzied
    { emoji: "🦈", description: "Shark in Feeding Frenzy", category: "frenzied" },
    { emoji: "🕺", description: "Manic Dancer", category: "frenzied" },
    { emoji: "🐝", description: "Agitated Swarm", category: "frenzied" },
    
    // Innumerable
    { emoji: "⭐", description: "Stars in the Sky", category: "innumerable" },
    { emoji: "🏖️", description: "Grains of Sand", category: "innumerable" },
    { emoji: "💭", description: "Human Thoughts", category: "innumerable" },
    
    // Brush
    { emoji: "🎨", description: "Miniature Portrait", category: "brush" },
    { emoji: "📖", description: "Illuminated Manuscript", category: "brush" },
    { emoji: "🌺", description: "Botanical Illustration", category: "brush" },
    
    // Et Cetera
    { emoji: "💫", description: "Everything Else", category: "etcetera" },
    { emoji: "❓", description: "The Unsaid", category: "etcetera" },
    { emoji: "♾️", description: "And So On...", category: "etcetera" },
    
    // Pitcher
    { emoji: "🏺", description: "Clumsy Servant", category: "pitcher" },
    { emoji: "🐈", description: "Startled Cat", category: "pitcher" },
    { emoji: "⚽", description: "Children Playing Ball", category: "pitcher" },
    
    // Flies
    { emoji: "✈️", description: "Distant Aircraft", category: "flies" },
    { emoji: "🏢", description: "People from Skyscraper", category: "flies" },
    { emoji: "🕊️", description: "High Circling Birds", category: "flies" }
];

let currentItemIndex = 0;
let shuffledItems = [...items];
let gameState = {};
let gameComplete = false;

function initGame() {
    // Shuffle items
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
    
    // Initialize game state
    categories.forEach(cat => {
        gameState[cat.key] = [];
    });
    
    gameComplete = false;
    createCategoriesGrid();
    showCurrentItem();
    updateScore();
    
    // Hide/show appropriate buttons
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('gameComplete').style.display = 'none';
    document.getElementById('currentItemArea').style.display = 'flex';
}

function createCategoriesGrid() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.setAttribute('data-category', category.key);
        
        categoryDiv.innerHTML = `
            <div class="category-title">${category.name}</div>
            <div class="category-slots">
                <div class="slot" data-slot="0"></div>
                <div class="slot" data-slot="1"></div>
                <div class="slot" data-slot="2"></div>
            </div>
        `;
        
        // Add drag and drop event listeners
        categoryDiv.addEventListener('dragover', handleDragOver);
        categoryDiv.addEventListener('drop', handleDrop);
        categoryDiv.addEventListener('dragenter', handleDragEnter);
        categoryDiv.addEventListener('dragleave', handleDragLeave);
        
        grid.appendChild(categoryDiv);
    });
}

function showCurrentItem() {
    if (currentItemIndex >= shuffledItems.length) {
        // All items placed, show check button
        document.getElementById('currentItemArea').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('checkBtn').style.display = 'inline-block';
        document.getElementById('checkBtn').className = 'btn check-btn';
        return;
    }
    
    const item = shuffledItems[currentItemIndex];
    const itemElement = document.getElementById('currentItem');
    const descriptionElement = document.getElementById('itemDescription');
    
    itemElement.textContent = item.emoji;
    itemElement.setAttribute('data-category', item.category);
    itemElement.setAttribute('data-description', item.description);
    descriptionElement.textContent = item.description;
    
    // Add drag event listeners
    itemElement.addEventListener('dragstart', handleDragStart);
    itemElement.addEventListener('dragend', handleDragEnd);
    
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('total').textContent = shuffledItems.length;
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', '');
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    const category = e.currentTarget;
    category.classList.add('drag-over');
}

function handleDragLeave(e) {
    const category = e.currentTarget;
    if (!category.contains(e.relatedTarget)) {
        category.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const category = e.currentTarget;
    category.classList.remove('drag-over');
    
    const categoryKey = category.getAttribute('data-category');
    const currentItem = document.getElementById('currentItem');
    const itemCategory = currentItem.getAttribute('data-category');
    const itemEmoji = currentItem.textContent;
    const itemDescription = currentItem.getAttribute('data-description');
    
    // Check if category has space
    if (gameState[categoryKey].length >= 3) {
        return;
    }
    
    // Add item to category
    gameState[categoryKey].push({
        emoji: itemEmoji,
        description: itemDescription,
        correct: itemCategory === categoryKey,
        originalCategory: itemCategory
    });
    
    // Update visual
    const slots = category.querySelectorAll('.slot');
    const emptySlot = slots[gameState[categoryKey].length - 1];
    emptySlot.textContent = itemEmoji;
    emptySlot.classList.add('filled');
    
    // Move to next item
    currentItemIndex++;
    document.getElementById('nextBtn').disabled = false;
    updateScore();
}

function nextItem() {
    showCurrentItem();
}

function updateScore() {
    document.getElementById('score').textContent = currentItemIndex;
}

function checkAnswers() {
    let totalCorrect = 0;
    let totalItems = shuffledItems.length;
    let resultsHTML = '';
    
    // Create detailed results for each category
    categories.forEach(category => {
        const categoryItems = gameState[category.key];
        const correctItems = categoryItems.filter(item => item.correct).length;
        const totalInCategory = categoryItems.length;
        
        let resultClass = 'missed';
        let resultText = '';
        
        if (correctItems === 3) {
            resultClass = 'perfect';
            resultText = '✨ Perfect!';
        } else if (correctItems > 0) {
            resultClass = 'partial';
            resultText = `${correctItems}/3 correct`;
        } else {
            resultText = 'No matches';
        }
        
        totalCorrect += correctItems;
        
        resultsHTML += `
            <div class="category-result ${resultClass}">
                <strong>${category.name}</strong> - ${resultText}
                <div style="margin-top: 8px; font-size: 0.9em;">
        `;
        
        if (categoryItems.length > 0) {
            categoryItems.forEach(item => {
                const status = item.correct ? '✅' : '❌';
                resultsHTML += `${status} ${item.emoji} ${item.description}<br>`;
            });
        } else {
            resultsHTML += '<em>No items placed</em>';
        }
        
        resultsHTML += '</div></div>';
    });
    
    // Calculate percentage
    const percentage = Math.round((totalCorrect / totalItems) * 100);
    let performanceMessage = '';
    
    if (percentage >= 90) {
        performanceMessage = '🏆 Exceptional! You have mastered the art of Borgesian taxonomy!';
    } else if (percentage >= 75) {
        performanceMessage = '🎯 Excellent work! You show great promise as a classifier!';
    } else if (percentage >= 60) {
        performanceMessage = '👍 Good effort! The absurdity of classification is not lost on you!';
    } else if (percentage >= 40) {
        performanceMessage = '🤔 A valiant attempt! Perhaps the categories resist logical understanding?';
    } else {
        performanceMessage = '🌪️ Wonderfully chaotic! You have embraced the true spirit of Borges!';
    }
    
    const summaryHTML = `
        <div class="score-summary">
            ${performanceMessage}<br>
            <strong>Final Score: ${totalCorrect}/${totalItems} (${percentage}%)</strong>
        </div>
    `;
    
    // Update all slots with correct/incorrect styling
    categories.forEach(category => {
        const categoryDiv = document.querySelector(`[data-category="${category.key}"]`);
        const slots = categoryDiv.querySelectorAll('.slot');
        const categoryItems = gameState[category.key];
        
        categoryItems.forEach((item, index) => {
            if (slots[index]) {
                slots[index].classList.remove('filled');
                slots[index].classList.add(item.correct ? 'correct' : 'incorrect');
            }
        });
    });
    
    // Show results
    document.getElementById('results').innerHTML = summaryHTML + resultsHTML;
    document.getElementById('gameComplete').style.display = 'block';
    document.getElementById('checkBtn').style.display = 'none';
    
    gameComplete = true;
}

function resetGame() {
    currentItemIndex = 0;
    gameState = {};
    gameComplete = false;
    document.getElementById('gameComplete').style.display = 'none';
    document.getElementById('currentItemArea').style.display = 'flex';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('checkBtn').style.display = 'none';
    
    // Clear all slots and reset their styling
    document.querySelectorAll('.slot').forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled', 'correct', 'incorrect');
    });
    
    // Reshuffle items
    shuffledItems = [...items];
    
    initGame();
}

// Initialize game on load
window.addEventListener('load', initGame);