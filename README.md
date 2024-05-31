# TictacToe
Create a simple design game Tic-Tac-Toe using HTML, CSS, JavaScript.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic tac toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <div id="container">
        <div id="box">
            <button id="0" class="tic"></button>
            <button id="1" class="tic"></button>
            <button id="2" class="tic"></button>
            <button id="3" class="tic"></button>
            <button id="4" class="tic"></button>
            <button id="5" class="tic"></button>
            <button id="6" class="tic"></button>
            <button id="7" class="tic"></button>
            <button id="8" class="tic"></button>
        </div>
    </div>
    <div class="message show">
        <div class="msg"></div>
        <button id="rstBtn">Restart</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
