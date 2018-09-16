$(function(){
	$(".topbar-cart").mouseenter(function(){
			$(".yc").clearQueue().slideDown();
	});
		$(".topbar-cart").mouseleave(function(){
			$(".yc").clearQueue().slideUp();
	});
	
	
	$(".category-item").mouseenter(function(){
		$(".shade").css("display","none");
		$(this).children(".shade").css("display","flex");
		
	})
	$(".category-item").mouseleave(function(){
		$(this).children(".shade").css("display","none");
	});
	
	let lis1=$(".household_items #household_tab a");
	console.log(lis1);
	let asidebox=$(".aside-box");
	console.log(asidebox);
	lis1.mouseenter(function(){
		let i=$(this).index();
		asidebox.css("display","none").eq(i).css("display","block");
		lis1.removeClass("active2").eq(i).addClass("active2");
	})
	
	lis1.triggerHandler("mouseenter");
	
	
	let imgbox=$(".side-category .imgs img");
	
	let btns=$(".dot a");
	
//	初始化
	imgbox.first().css("opacity","1");
	btns.eq(0).addClass("active3");
	btns.click(function(){
		let j=$(this).index();
		imgbox.css("opacity","0").eq(j).css("opacity","1");
		btns.removeClass("active3").eq(j).addClass("active3");
		num=j;
	})

	

	let timer=setInterval(move,2000);
	let num=0;
	$(".prev").click(function(){
		
		moveL();
	})
	
	$(".prev,.next").mouseover(function(){
		clearInterval(timer);
	})
	$(".prev,.next").mouseout(function(){
		timer=setInterval(move,2000);
	})
	
	$(".side-category").mouseover(function(){
		clearInterval(timer);
	})
	$(".side-category").mouseout(function(){
		timer=setInterval(move,2000);
	})
	
	
	
	$(".next").click(function(){
		move();
	})
	
	function move(){
		num++;
		if(num==imgbox.length){
			num=0;
		}
		imgbox.css("opacity",0).eq(num).css("opacity",1);
		btns.removeClass("active3").eq(num).addClass("active3");
	}
	function moveL(){
		num--;
		if(num<0){
			num=imgbox.length-1;
		}
		imgbox.css("opacity",0).eq(num).css("opacity",1);
		btns.removeClass("active3").eq(num).addClass("active3");
	}
	
	
	
	let i=0;
	$(".Next").click(function(){
		i++;
		if(i==3){
			i=2;
		}
		else{
			$(".flash-wrap").css("transform","translate("+(-996*i)+"px"+")");
		}
//		-996*ipx
		
	})
	$(".Prev").click(function(){
		i--;
		if(i==-1){
			i=0;
		}
		else{
			$(".flash-wrap").css("transform","translate("+(-996*i)+"px"+")");
		}
//		-996*ipx
		
	})
	
	
	let a=0;
	$(".next1").click(function(){
		a++;
		if(a==3){
			a=2;
		}
		else{
			$(".recommend-items1").css("transform","translate("+(-1230*a)+"px"+")");
		}
//		-996*ipx
		
	})
	$(".prev1").click(function(){
		a--;
		if(a==-1){
			a=0;
		}
		else{
			$(".recommend-items1").css("transform","translate("+(-1230*a)+"px"+")");
		}
//		-996*ipx
		
	})
		

			$(".back").click(function(){
				let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
				animate(document.body,{scrollTop:0},1000);
				animate(document.documentElement,{scrollTop:0},600);
			})
				
			
			window.onscroll=function(){
				let oScrollTop=document.body.scrollTop||document.documentElement.scrollTop;
				console.log(oScrollTop);
				if(oScrollTop>2600){
					$(".back").css("display","block");
				}
				else if(oScrollTop<600){
					$(".back").css("display","none");
				}
			}

	
	
})
	
	//let parent=$(".jiadian .box li");
	//let son=$(".jiadian .wrap");
	
	
	
	
//	let lis=$("aside ul li");
//	let asidebox=$(".asidebox")
//	lis.forEach(function(v,i){
//		v.onmouseenter=function(){
//			asidebox.forEach(function(value){
//				value.style.display="none";
//			})
//			asidebox[index].style.display="block";
//		}
//	})



//上面是js写法


//下面是jq写法
//
//lis.mouseenter(function(){
//	$(".asidebox").css("display","none");
//	$(this).children(".asdidebox").css("display","block");
//})
//lis.mouseenter(function(){
//	$(this).children(".asdidebox").css("display","none");
//})
//
//
//
//
//let parent=$(".jiadian .box li");
//let son=$(".jiadian .wrap");
//
//parent.onmouseenter=function(){
//	let i=$(this).index();   //索引值
//	son.css("display","none").eq(i).css("display","block");
//
////	son.eq(i).css("display","block");
//}
//parent.triggerHandler("mouseenter");
//});
//
//
////轮播图
//let imgsbox=$(".imgbox li");
//let btns=$(".circle li");
//let now=0;
//
//
////初始化
//imgsbox.first().css("z-index","10");
//btns.eq(0).addClass("hot");
//
//setInterval(move,1000);
//
//function move(){
//	now++;
//	if(now==imgsbox.length)
//	{
//		now=0;
//	}
//	imgsbox.css("z-index","5").eq(now).css("z-index",10);
//	btns.removeClass("hot").eq(now).addClass("hot");
//}
