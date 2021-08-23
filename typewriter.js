const sentence = "hello there from lighthouse labs";
      //print the char here
      for(let i = 0; i <sentence.length;i++){
        setTimeout(() => {
            process.stdout.write(sentence[i]);
             }, i*50);
      }
