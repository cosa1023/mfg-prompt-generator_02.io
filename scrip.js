// script.js
let STEPS_DATA = [];
let EXTRA_DATA = [];

async function loadData() {
    try {
        const response = await fetch('data/manufacturing-steps.json');
        const data = await response.json();
        STEPS_DATA = data.steps;
        EXTRA_DATA = data.extras;
        init();
    } catch (error) {
        console.error('無法載入製造流程資料', error);
        // fallback - 你可以把原本的 STEPS_DATA 直接寫在這裡當備援
    }
}

let selectedSteps = new Set(["原料入庫", "貼片 (SMT SOLDERING)", "出貨 (SHIPPING)"]);
let selectedExtras = new Set(["設備標籤"]);

// 其他所有 function 保持不變：renderTags, toggleStep, toggleExtra, handleImage, removeImage, updateOutput, copyPrompt, clearAll

// 最後一行改成：
loadData();