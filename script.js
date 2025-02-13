const chapters = {
    1: { title: "Understanding Your Identity in Christ", description: "Reflect on how your identity in Christ shapes your view of yourself and others." },
    2: { title: "Strengthening Your Prayer Life", description: "Write about your current prayer habits and how you can grow in your conversation with God." },
    3: { title: "Overcoming Spiritual Battles", description: "Describe a spiritual challenge you've faced and how God helped you overcome it." },
    4: { title: "Trusting God in Uncertainty", description: "Write about a time you had to trust God despite not knowing the outcome." },
    5: { title: "Healing from Past Wounds", description: "Reflect on past hurts and how God has worked in your healing process." },
    6: { title: "Cultivating a Heart of Gratitude", description: "List ways you can practice gratitude in daily life." },
    7: { title: "Growing in Faith and Obedience", description: "Share how you can deepen your obedience to God." },
    8: { title: "Biblical Foundations of Relationships", description: "Write about what the Bible teaches about relationships." },
    9: { title: "Communication with Love and Truth", description: "Describe ways to communicate in a Christ-like manner." },
    10: { title: "Conflict Resolution Through Faith", description: "Share a conflict you resolved biblically." },
    11: { title: "Setting Godly Boundaries", description: "List boundaries that honor God in relationships." },
    12: { title: "God’s Design for Marriage and Courtship", description: "Reflect on God’s vision for marriage." },
    13: { title: "Serving Others with a Christ-like Heart", description: "Write about acts of service in your relationships." },
    14: { title: "Trusting God’s Timing in Relationships", description: "Reflect on waiting for God’s best." },
    15: { title: "Strengthening Relationships Through Worship", description: "Share how worship strengthens relationships." },
    16: { title: "Dealing with Relationship Challenges Biblically", description: "Write about trusting God in difficulties." },
    17: { title: "Walking in Love and Forgiveness", description: "Reflect on showing Christ-like love and forgiveness." }
};

function loadChapter(chapterId) {
    const chapter = chapters[chapterId];
    if (chapter) {
        document.getElementById("chapter-title").textContent = chapter.title;
        document.getElementById("chapter-description").textContent = chapter.description;
        document.getElementById("journal-entry").value = localStorage.getItem(`chapter_${chapterId}`) || "";
        document.getElementById("chapter-content").style.display = "block";
    }
}

function saveEntry() {
    const chapterTitle = document.getElementById("chapter-title").textContent;
    const entry = document.getElementById("journal-entry").value;
    localStorage.setItem(`chapter_${chapterTitle}`, entry);
    alert("Your journal entry has been saved!");
}
