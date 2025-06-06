$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

     createPlatform(1000,640,700,60);
     createPlatform(900,520,200,20);
     createPlatform(600,420,300,50);
     createPlatform(300,320,300,50);
     createPlatform(800,220,280,50);
     createPlatform(1200,220,200,50);
     createPlatform(300,680,400,70);
    
     // TODO 3 - Create Collectables

     createCollectable("database",500,620);
     createCollectable("database",1200,600);
     createCollectable("database",800,370);
     createCollectable("database",1300,170);
     createCollectable("database",450,270);

    // TODO 4 - Create Cannons
    createCannon("top",1150,900);
    createCannon("top",600,900);
    createCannon("bottom",900,1200)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
