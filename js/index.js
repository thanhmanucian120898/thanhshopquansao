
function listCate(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/categories",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                event_data+=`   
                <div class="category-card">
                        <div class="pic-category">
                      <div class="des-category"><a href="">${value.name}</a></div>
                      <img src="${value.img}" alt="" />
                      </div>
                </div>
                
               `
              });
              $("#inner-category-content").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate();
  function listCate1(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/product/?event=newarrival",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                event_data+=`   
                <div class="block-product">
                <div class="pic-product">
                  <div class="des-pic-product">
                    <a href="detail.html"><i class="fas fa-search" aria-hidden="true"></i></a> 
                  </div>
                  <img src="${value.img}" alt="" />
                </div>
                <div class="des-block-product">
                  <div class="title-product">
                    <h4>${value.name}</h4>
                  </div>
                  <div class="price-product"><p>$${value.price}</p></div>
                  <div class="buy-product">
                    <a href=""
                      ><i
                        class="fa fa-chevron-circle-down"
                        aria-hidden="true"
                      ></i>
                      Add To Cart</a
                    >
                  </div>
                </div>
              </div>
                
               `
              });
              $("#list1").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate1();