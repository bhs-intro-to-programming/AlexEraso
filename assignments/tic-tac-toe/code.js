registerOnclick((x, y) => {
  if (move % 2 === 0) {
      if (x < width/3 && y < height/3){
        drawText('X', 75,  40, 'red', Math.min(width, height) * 0.3);
      }else if(x > width * 1/3 && x < width * 2/3 &&  y < height * 1/3){
         drawText('X', 280,  40, 'red', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 &&  y < height * 1/3){
         drawText('X', 490,  40, 'red', Math.min(width, height) * 0.3);
      }else if(x < width/3 && y<height*2/3 && y>height*1/3){
          drawText('X', 75,  90, 'red', Math.min(width, height) * 0.3);
      }else if(x > width/3 && x<width * 2/3 && y<height*2/3 && y>height*1/3){
          drawText('X', 280,  90, 'red', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 && y<height*2/3 && y>height*1/3){
          drawText('X', 490,  90, 'red', Math.min(width, height) * 0.3);
      }else if(x < width * 1/3 && y>height*2/3){
          drawText('X', 75,  140, 'red', Math.min(width, height) * 0.3);
      }else if(x > width * 1/3 && x < width * 2/3 && y>height*2/3){
          drawText('X', 280,  140, 'red', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 && y>height*2/3){
          drawText('X', 490,  140, 'red', Math.min(width, height) * 0.3);
      }
  }else{
      if (x < width/3 && y < height/3){
        drawText('O', 75,  40, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width * 1/3 && x < width * 2/3 &&  y < height * 1/3){
         drawText('O', 280,  40, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 &&  y < height * 1/3){
         drawText('O', 490,  40, 'blue', Math.min(width, height) * 0.3);
      }else if(x < width/3 && y<height*2/3 && y>height*1/3){
          drawText('O', 75,  90, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width/3 && x<width * 2/3 && y<height*2/3 && y>height*1/3){
          drawText('O', 280,  90, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 && y<height*2/3 && y>height*1/3){
          drawText('O', 490,  90, 'blue', Math.min(width, height) * 0.3);
      }else if(x < width * 1/3 && y>height*2/3){
          drawText('O', 75,  140, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width * 1/3 && x < width * 2/3 && y>height*2/3){
          drawText('O', 280,  140, 'blue', Math.min(width, height) * 0.3);
      }else if(x > width * 2/3 && y>height*2/3){
          drawText('O', 490,  140, 'blue', Math.min(width, height) * 0.3);
      }
      
  }
  
  move++;
});