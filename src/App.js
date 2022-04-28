@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

: root {
    /*Primary*/
    --Blue: hsl(246, 80 % , 60 % );
    --Light - orange: hsl(15, 100 % , 70 % );
    --Soft - blue: hsl(195, 74 % , 62 % );
    --Light - red: hsl(348, 100 % , 68 % );
    --Lime - green: hsl(145, 58 % , 55 % );
    --Violet: hsl(264, 64 % , 52 % );
    --Soft - orange: hsl(43, 84 % , 65 % );

    /*Neutral*/
    --Very - dark - blue: hsl(226, 43 % , 10 % );
    --Dark - blue: hsl(235, 46 % , 20 % );
    --Desaturated - blue: hsl(235, 45 % , 61 % );
    --Pale - Blue: hsl(236, 100 % , 87 % );
} *
{
    box - sizing: border - box;
    padding: 0;
    margin: 0;
}
body {
    font - size: 18 px;
    font - family: 'Rubik', sans - serif;
}
.App {
    background - color: var (--Very - dark - blue);
    width: 100 vw;
    height: 100 vh;
}

.timeTracker {
    display: flex;
    padding: 100 px;
    width: 100 % ;
    height: 635 px;
}

.timeList {
    height: 100 % ;
    width: 20 % ;
    border - radius: 20 px;
    position: relative;
    background - color: var (--Dark - blue);
}
.tracker {
    width: 80 %
}

@media(max - width: 375 px) {
    .App {
        height: auto;
    }

    .timeTracker {
        flex - direction: column;
        height: auto;
        padding: 100 px 30 px;
    }

    .timeList {
        height: 200 px;
        width: 100 % ;
    }
    .tracker {
        width: 100 %
    }
}