document.addEventListener('DOMContentLoaded', function () {
    const startNumInput = document.getElementById('startNum');
    const endNumInput = document.getElementById('endNum');
    const initBtn = document.getElementById('initBtn');
    const waitingList = document.getElementById('waitingList');
    const drawNumInput = document.getElementById('drawNum');
    const drawBtn = document.getElementById('drawBtn');
    const resultList = document.getElementById('resultList');
     const countdownDisplay = document.getElementById('countdown');


    let waitingNumbers = [];
    let drawHistory = [];
    let isDrawing = false; // 添加标志变量


    // 从 localStorage 加载状态
     const savedWaitingNumbers = localStorage.getItem('waitingNumbers');
    const savedDrawHistory = localStorage.getItem('drawHistory');
     if (savedWaitingNumbers) {
        waitingNumbers = JSON.parse(savedWaitingNumbers);
        renderWaitingList();
    }
    if(savedDrawHistory){
        drawHistory = JSON.parse(savedDrawHistory);
        renderResult();
    }




    initBtn.addEventListener('click', function() {
        const startNum = parseInt(startNumInput.value);
        const endNum = parseInt(endNumInput.value);

        if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
            alert("請輸入有效的號碼範圍");
            return;
        }

         waitingNumbers = Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
        renderWaitingList();
        drawHistory = [];
        resultList.innerHTML = '';
        isDrawing = false;
          localStorage.removeItem('waitingNumbers'); // Clear storage
           localStorage.removeItem('drawHistory'); // Clear storage

    });


    function renderWaitingList() {
        waitingList.innerHTML = '';
        waitingNumbers.forEach(number => {
             const listItem = document.createElement('li');
            listItem.textContent = number;
            waitingList.appendChild(listItem);

        });
          localStorage.setItem('waitingNumbers', JSON.stringify(waitingNumbers)); // Save to localStorage
    }


    drawBtn.addEventListener('click', function () {
        const drawCount = parseInt(drawNumInput.value);
           if (isNaN(drawCount) || drawCount <= 0) {
            alert("請輸入有效的中獎人數");
            return;
        }

        if (waitingNumbers.length === 0) {
            alert("沒有可抽的號碼");
            return;
        }
        if (drawCount > waitingNumbers.length) {
          alert("中獎人數不能大於剩餘號碼數量");
            return;
        }
           isDrawing = true; // 设置标志变量
        countdownDisplay.textContent = '3';
        let count = 3;

        const countdownInterval = setInterval(() => {
            count--;
            countdownDisplay.textContent = count;
             if (count === 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = '';
                const drawnNumbers = drawNumbers(drawCount);
                 renderResult(drawnNumbers);
                 isDrawing = false; //抽奖结束后取消标志变量
             }
        }, 1000);

    });


   function drawNumbers(drawCount) {
    const drawnNumbers = [];
    for (let i = 0; i < drawCount; i++) {
        const randomIndex = Math.floor(Math.random() * waitingNumbers.length);
            const drawnNumber = waitingNumbers[randomIndex];
         drawnNumbers.push(drawnNumber);
            waitingNumbers.splice(randomIndex, 1);
    }
       renderWaitingList();
     return drawnNumbers;
}


    function renderResult(drawnNumbers) {
         if (drawnNumbers){
              const awardNumber = drawHistory.length + 1;
                const formattedResult = `第${awardNumber}獎：${drawnNumbers.join(", ")}`;
                drawHistory.unshift(formattedResult); //添加到历史记录的开头
         }
      

         resultList.innerHTML = ''; // 清空列表
         drawHistory.forEach(result => {
           const listItem = document.createElement('li');
            listItem.textContent = result;
             resultList.appendChild(listItem);
        });
         localStorage.setItem('drawHistory', JSON.stringify(drawHistory)); // Save to localStorage
    }
    
      window.onbeforeunload = function(event) {
          event.preventDefault();
          event.returnValue = "不允許重新載入，請繼續當前抽獎程序。";
          return false;
    };


});