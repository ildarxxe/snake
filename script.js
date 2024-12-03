document.addEventListener("DOMContentLoaded", function() {
    const area = document.querySelector(".area");
    const cells = document.querySelectorAll(".cell");
    const snake = [313];
    let head = snake[0];
    let positionSnake = [head];
    let appleCell;
    let apple;
    const appleArray = [];
    let pastApple;

    function createCells() {
        for (let i = 0; i < 625; i++) {
            const item = document.createElement("div");
            item.classList.add('cell');
            item.id = `${i + 1}`;
            area.appendChild(item);
        }
        drawSnake();
        spawnApple();

    }

    function spawnApple() {
        apple = Math.floor(Math.random() * 625) + 1;
        console.log(apple);
        appleArray.push(apple);

        appleCell = document.getElementById(String(apple));
        appleCell.classList.add('apple');
    }

    function drawSnake() {
        cells.forEach(cell => cell.classList.remove('snake'));
        snake.forEach(index => {
            const cell = document.getElementById(index);
            if (cell) {
                cell.classList.add('snake');
            }
        });

    }
    createCells();

    function controlSnake() {
        let pastHead;
        let intervalId;

        document.addEventListener("keydown", function(event) {
            if (event.key === 'ArrowRight') {
                clearInterval(intervalId);
                intervalId = setInterval(() => {
                    head = parseInt(head) + 1;
                    positionSnake.push(head);
                    pastHead = positionSnake[positionSnake.length - 2];

                    let headCell = document.getElementById(String(head));
                    let pastHeadCell = document.getElementById(String(pastHead));

                    if (headCell) {
                        headCell.classList.add("snake");
                        if (headCell.id === appleCell.id) {
                            console.log(pastApple);

                            let pastAppleCell = document.getElementById(String(pastApple));
                            console.log('past apple:', pastAppleCell); ///////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                            spawnApple();
                        }
                    } else if (headCell) {
                        if (headCell.id === "625") {
                            clearInterval(intervalId);
                        } else {
                            console.log('error');
                        }
                    }
                    if (pastHeadCell) {
                        if (pastHeadCell.classList.contains('snake')) {
                            pastHeadCell.classList.remove('snake');
                        }
                    }

                }, 200);
            }
            if (event.key === 'ArrowLeft') {
                clearInterval(intervalId);
                intervalId = setInterval(() => {
                    head = parseInt(head) - 1;
                    positionSnake.push(head);
                    pastHead = positionSnake[positionSnake.length - 2];

                    let headCell = document.getElementById(String(head));
                    let pastHeadCell = document.getElementById(String(pastHead));

                    if (headCell) {
                        headCell.classList.add("snake");
                        if (headCell.id === appleCell.id) {
                            spawnApple();
                        }
                    } else if (headCell) {
                        if (headCell.id === "1") {
                            clearInterval(intervalId);
                        } else {
                            console.log('error');
                        }
                    }
                    if (pastHeadCell) {
                        if (pastHeadCell.classList.contains('snake')) {
                            pastHeadCell.classList.remove('snake');
                        }
                    }

                }, 200);
            }
            if (event.key === 'ArrowUp') {
                clearInterval(intervalId);
                if (parseInt(head) > 25) {
                    intervalId = setInterval(() => {
                        head = parseInt(head) - 25;
                        positionSnake.push(head);
                        pastHead = positionSnake[positionSnake.length - 2];

                        let headCell = document.getElementById(String(head));
                        let pastHeadCell = document.getElementById(String(pastHead));

                        if (headCell) {
                            headCell.classList.add("snake");
                            if (headCell.id === appleCell.id) {
                                spawnApple();
                            }
                        }
                        if (pastHeadCell) {
                            if (pastHeadCell.classList.contains('snake')) {
                                pastHeadCell.classList.remove('snake');
                            }
                        }

                    }, 200);
                }
            }
            if (event.key === 'ArrowDown') {
                clearInterval(intervalId);
                if (parseInt(head) < 625) {
                    intervalId = setInterval(() => {
                        head = parseInt(head) + 25;
                        positionSnake.push(head);
                        pastHead = positionSnake[positionSnake.length - 2];

                        let headCell = document.getElementById(String(head));
                        let pastHeadCell = document.getElementById(String(pastHead));

                        if (headCell) {
                            headCell.classList.add("snake");
                            if (headCell.id === appleCell.id) {
                                spawnApple();
                            }
                        }
                        if (pastHeadCell) {
                            if (pastHeadCell.classList.contains('snake')) {
                                pastHeadCell.classList.remove('snake');
                            }

                        }


                    }, 200);
                }
            }
        });
    }
    controlSnake();

})