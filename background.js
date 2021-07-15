console.log('I am the background'); 

            

  $.ajax({
      url:"http://localhost:3000/save-products",
      data:{test:"test data"},
      type:'POST',
      success:function(response){
          console.log('response:',response)
      },
      error:function(response){
          console.log('response:',response)
      }
  });  

  