//ex_1
// $(document).ready(function(){
//   alert("welcome");
// })
$(document).ready(function(){
  $('#aa').on("click",function(){
    alert("hello jquery");

  });
})
//ex_2
$(document).ready(function(){
  $('#cc').on("click",function(){
    console.log("ssb");

  });
})
//ex_3
$(document).ready(function(){
  $('#w').on("click",function(){
    window.alert("alert");

  });
})
//ex_4
$(document).ready(function(){
  $('#dw').on("click",function(){
    document.write("alert");

  });
})
//ex_5
$(document).ready(function(){
  $('#cl').on("click",function(){
    $("#ff").html("jquery")
  });
})
//ex_6
$(document).ready(function(){
  $('#ccc').on("click",function(){
    $("#fcc").css("font-size","33px");

  });
})
//ex_7
$(document).ready(function(){
  $('#ctc').on("click",function(){
    $("#c_c").css("font-style","italic");

  });
})
//ex_8
$(document).ready(function(){
  $('#fs').on("click",function(){
    $("#f_s").css("font-size","50px");

  });
})
//ex_9
$(document).ready(function(){
  $('#fss').on("click",function(){
    $("#f_ss").css("font-weight","700");

  });
})
//ex_10
$(document).ready(function(){
  $('#fs_c').on("click",function(){
    $("#f_sc").css("color","pink");

  });
})
//ex_11
$(document).ready(function(){
  $('#fs_cw').on("click",function(){
    $("#f_scw").css("color","yellow");
    $("#f_scw").css("font-weight","700");

  });
})
//ex_12
$(document).ready(function(){
  $('#fs_cs').on("click",function(){
    $("#f_scs").css("color","green");
    $("#f_scs").css("font-size","60px");

  });
})
//ex_13
$(document).ready(function(){
  $('#fs_scwc').on("click",function(){
    $("#f_scwc").css("color","purple");
    $("#f_scwc").css("font-size","60px");
    $("#f_scwc").css("font-style","italic");
    $("#f_scwc").css("font-weight","700");

  });
})
//ex_14
$(document).ready(function(){
  $('#dn').on("click",function(){
    $("#d_n").css("display","none");
  });
})
//ex_15
$(document).ready(function(){
  $('#db').on("click",function(){
    $("#d_b").css("display","block");
    $("#d_b").html("block");
  });
})
//ex_16
$(document).ready(function(){
  $('#ts').on("click",function(){
    $("#t_h").toggle();

  });
})
//ex_17
$(document).ready(function(){
  $('#t_ss').on("click",function(){
    $("#t_hh").slideToggle(2000);

  });
})
//ex_18
$(document).ready(function(){
  $('#dbc').on("dblclick",function(){
    $("#d_bc").hide();

  });
})
//ex_19
$(document).ready(function(){
  $("#me").mouseenter(function(){
    alert("You entered p1!");
  });
});
//ex_20
$(document).ready(function(){
  $("#md").mousedown(function(){
    alert("Mouse down over p1!");
  });
});
//ex_21
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
//ex_22
$(document).ready(function(){
  $("p").on("click", function(){
    $(this).hide();
  });
});
//ex_23
$(document).ready(function(){
  $("#fii").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
//ex_24
$(document).ready(function(){
  $("#fi").click(function(){
    $("#div11").fadeOut();
    $("#div22").fadeOut("slow");
    $("#div33").fadeOut(3000);
  });
});
//ex_25
$(document).ready(function(){
  $("#f2").click(function(){
    $("#div1f").fadeTo("slow", 0.15);
    $("#div2f").fadeTo("slow", 0.4);
    $("#div3f").fadeTo("slow", 0.7);
  });
});
//ex_26
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
//ex_27
$(document).ready(function(){
  $("#flipp").click(function(){
    $("#panell").slideUp("slow");
  });
});
//ex_28
$(document).ready(function(){
  $("#flipt").click(function(){
    $("#panelt").slideToggle("slow");
  });
});
//ex_29
$(document).ready(function(){
  $("#st").click(function(){
    $("div").animate({right: '400px'});
  });
});
//ex_30
$(document).ready(function(){
  $("#a2").click(function(){
    $("#d2").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});
//ex_31
$(document).ready(function(){
  $("#a3").click(function(){
    $("#d3").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});
//ex_32
$(document).ready(function(){
  $("#a4").click(function(){
    $("#d4").animate({
      height: 'toggle'
    });
  });
});
//ex_33
$(document).ready(function(){
  $("#a5").click(function(){
    var p = $("p");
    p.animate({height: '300px', opacity: '0.4'}, "slow");
    p.animate({width: '300px', opacity: '0.8'}, "slow");
    p.animate({height: '100px', opacity: '0.4'}, "slow");
    p.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
//ex_34
$(document).ready(function(){
  $("#flipc").click(function(){
    $("#panelc").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panelc").stop();
  });
});
//ex_35
$(document).ready(function(){
  $("#c1").click(function(){
    $("#call").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});
//ex_36
$(document).ready(function(){
  $("#b2").click(function(){
    $("#c2").hide(1000);
    alert("The paragraph is now hidden");
  });
});
//ex_37
$(document).ready(function(){
  $("#cc1").click(function(){
    $("#p11").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
//ex_38
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});
//ex_39
$(document).ready(function(){
  $("#w333").click(function(){
    alert($("#w3s").attr("href"));
  });
});
//ex_40
$(document).ready(function(){
  $("#btn11").click(function(){
    $("#test11").text("Hello world!");
  });
  $("#btn22").click(function(){
    $("#test22").html("<b>Hello world!</b>");
  });
  $("#btn33").click(function(){
    $("#test3").val("Dolly Duck");
  });
});
//ex_41
$(document).ready(function(){
  $("#btn1a").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2a").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});
//ex_42
$(document).ready(function(){
  $("#r").click(function(){
    $("#div1r").remove();
  });
});
//ex_43
$(document).ready(function(){
  $("#e").click(function(){
    $("#div1e").empty();
  });
});
//ex_44
$(document).ready(function(){
  $("#adc").click(function(){
    $("h1, h2, p").addClass("blue");
    $("#adc1").addClass("important");
  });
});
//ex_45
$(document).ready(function(){
  $("#re").click(function(){
    $("h1, h2, p").removeClass("bluee");
  });
});
//ex_46
$(document).ready(function(){
  $("#tm").click(function(){
    $("h1, h2, p").toggleClass("bluet");
  });
});
//ex_47
$(document).ready(function(){
  $("#ccm").click(function(){
    alert("Background color = " + $("#pcm").css("background-color"));
  });
});
//ex_48
$(document).ready(function(){
  $("#cpm").click(function(){
    $("#c_pm").css({"background-color": "yellow", "font-size": "200%"});
  });
});
//ex_49
$(document).ready(function(){
  $("#c4").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div1c").width() + "</br>";
    txt += "Height of div: " + $("#div1c").height();
    $("#div1c").html(txt);
  });
});
//ex_50
$(document).ready(function(){
  $("#c5").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div1d").width() + "</br>";
    txt += "Height of div: " + $("#div1d").height() + "</br>";
    txt += "Inner width of div: " + $("#div1d").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#div1d").innerHeight();
    $("#div1d").html(txt);
  });
});