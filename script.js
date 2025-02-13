const chapters = {
    1: { 
        title: "Understanding Your Identity in Christ", 
        scripture: "2 Corinthians 5:17 - 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'", 
        prayer: "Lord, help me to walk in my identity in Christ and embrace the new life You have given me.",
        questions: [
            "How do you see yourself in Christ?",
            "What steps can you take to grow in your identity in Him?",
            "Write a personal declaration of faith about who you are in Christ."
        ]
    },
    2: { 
        title: "Healing & Forgiveness", 
        scripture: "Ephesians 4:32 - 'Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.'", 
        prayer: "Father, heal the wounds of my heart and give me the strength to forgive as You have forgiven me. Amen.",
        questions: [
            "What past wounds still affect my relationships?",
            "Have I truly forgiven those who have hurt me?",
            "How does God’s forgiveness help me forgive others?"
        ]
    },
    3: { 
        title: "Overcoming Spiritual Battles", 
        scripture: "Psalm 138:8 - 'The Lord will fulfill His purpose for me.'", 
        prayer: "Lord, reveal my purpose to me and help me walk in it with faith and confidence. Amen.",
        questions: [
            "What gifts has God given me?",
            "How can I use my purpose to glorify Him in relationships?",
            "What areas of my life need alignment with God’s will?"
        ]
    },
    4: { 
        title: "Trusting God in Uncertainty", 
        scripture: "Proverbs 3:5-6 - 'Trust in the Lord with all your heart and lean not on your own understanding.'", 
        prayer: "Help me to trust You even when I don’t see the way ahead, Lord.",
        questions: [
            "Do I trust God fully with my relationships?",
            "What fears or anxieties do I need to surrender?",
            "How can I strengthen my daily walk with God?"
        ]
    },
    5: {
        title: " The Power of Grace and Mercy", 
        scripture: "2 Corinthians 12:9 - 'My grace is sufficient for you, for My power is made perfect in weakness.'", 
        prayer: " Lord, let Your grace transform me so I may extend it to others. Amen.",
        questions: [
            "How do I extend grace to myself and others?",
            "Do I struggle with accepting God’s mercy for my past mistakes?",
            "How can I become a vessel of grace in my relationships?"
         ]
    },
    6: { 
        title: "Overcoming Fear and Insecurity", 
        scripture: "2 Timothy 1:7 - 'For God has not given us a spirit of fear, but of power and of love and of a sound mind'", 
        prayer: "Jesus, remove fear from my heart and replace it with Your perfect love. Amen.",
        questions: [
            "What fears hold me back from healthy relationships?",
            "How does God’s love replace fear?",
            "How can I live in the security of His promises?"
        ]
    },
    7: {
        title: "Biblical Foundations of Relationships", 
        scripture: "Psalm 127:1 - 'Unless the Lord builds the house, the builders labor in vain.",
        Prayer: "Lord, help me build my relationships on the foundation of Your Word, that they may glorify You. Amen.",
        questions: [
            "What does the Bible teach about relationships?",
            "How do I apply biblical principles to my relationships?",
            "What role does God play in strengthening my connections with others?"
        ]
    },
    8: {
        title: "Communication with Love and Truth", 
        scripture: "Colossians 4:6 - 'Let your conversation be always full of grace, seasoned with salt.'",
        prayer: "Lord, let my words be filled with wisdom and my heart with understanding. Amen.",
        questions: [
            "How do I handle conflict in relationships?",
            "Do I listen with the intent to understand or to respond?",
            "How can I practice Christ-like communication?"
        ]
    },
    9: {
        title: "Conflict Resolution Through Faith", 
        scripture: "Romans 12:18 - 'If it is possible, as far as it depends on you, live at peace with everyone.'",
        prayer: "Jesus, give me a heart of peace and a spirit of reconciliation. Amen.",
        questions: [
            "How do I handle disagreements in a Christ-like way?",
            "Am I holding onto grudges that need resolution?",
            "How can I reflect God's grace and humility in difficult situations?"
        ]
    },
    10: {
        title: "Setting Godly Boundaries", 
        scripture: "Proverbs 4:23 - 'Above all else, guard your heart, for everything you do flows from it.'",
        prayer: "Father, help me set healthy boundaries that protect my heart and honor You. Amen.",
        questions: [
            "What boundaries do I need to set in my relationships?",
            "How can I maintain purity and honor God?",
            "Are there relationships in my life that do not align with my faith?"
        ]
    },
    11: {
        title: "Prayer & Seeking God Together",
        scripture: "Matthew 18:20 - 'For where two or three gather in My name, there am I with them.'",
        prayer: "Lord, teach me the power of praying with others and seeking You together. Amen.",
        questions: [
            "How can I incorporate prayer into my relationships?",
            "Do I seek God’s guidance before making relational decisions?",
            "How can I encourage spiritual growth in those around me?"
        ]
    },
    12: {
        title: "God’s Timing & Patience",
        scripture: "Ecclesiastes 3:1 - 'here is a time for everything, and a season for every activity under the heavens.'",
        prayer: "Father, help me trust Your perfect timing and rest in Your plan. Amen.",
        questions: [
            "How can I practice patience in my relationships?",
            "Do I trust God’s timing in bringing the right people into my life?",
            "How can waiting on God strengthen my faith?"
        ]
    },
    13: {
        title: "Serving and Sacrificial Love",
        scripture: "Philippians 2:3 - 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.'",
        prayer: "Jesus, help me serve others selflessly and love with a sacrificial heart. Amen.",
        questions: [
            "How can I serve those around me?",
            "Am I putting others' needs above my own?",
            "How does Christ’s example of sacrificial love inspire me to love others?"
        ]


    }
};

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const chapterId = parseInt(params.get("chapter")) || 1;
    loadChapter(chapterId);
});

function loadChapter(chapterId) {
    if (chapters[chapterId]) {
        document.getElementById("chapter-title").textContent = chapters[chapterId].title;
        document.getElementById("chapter-scripture").textContent = chapters[chapterId].scripture;
        document.getElementById("chapter-prayer").textContent = chapters[chapterId].prayer;

        const questionContainer = document.getElementById("chapter-questions");
        questionContainer.innerHTML = "";
        chapters[chapterId].questions.forEach((question, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>Question ${index + 1}:</strong> ${question}</p>
                <textarea id="answer-${index}" placeholder="Your answer..."></textarea>
            `;
            questionContainer.appendChild(div);
        });
    }
}

function saveEntry() {
    const chapterId = parseInt(new URLSearchParams(window.location.search).get("chapter")) || 1;

    chapters[chapterId].questions.forEach((_, index) => {
        const answer = document.getElementById(`answer-${index}`).value;
        localStorage.setItem(`chapter_${chapterId}_q${index}`, answer);
    });

    alert("Your answers have been saved!");
}

function loadSavedEntries() {
    const chapterId = parseInt(new URLSearchParams(window.location.search).get("chapter")) || 1;
    const savedEntriesDiv = document.getElementById("saved-entries");

    savedEntriesDiv.innerHTML = "";
    chapters[chapterId].questions.forEach((question, index) => {
        const savedAnswer = localStorage.getItem(`chapter_${chapterId}_q${index}`);
        if (savedAnswer) {
            savedEntriesDiv.innerHTML += `<p><strong>Q${index + 1}: ${question}</strong></p><p>${savedAnswer}</p>`;
        }
    });

    if (savedEntriesDiv.innerHTML === "") {
        savedEntriesDiv.innerHTML = "<p>No saved entries found for this chapter.</p>";
    }
}
