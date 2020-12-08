
    $(document).ready(function(){
    $(".content").slice(0, 2).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".content:hidden").slice(0, 1).slideDown();
      if($(".content:hidden").length == 0) {
        $("#loadMore").text("No more older posts available").addClass("noContent");
      }
    });
  })
