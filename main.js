let offset=$('.main').offset().top - 300;//문서에서 .main위의 높이값
let executed =false;

$(window).scroll(function(){
    let wScroll=$(this).scrollTop();
    console.log(wScroll)
    if(wScroll>offset){
        if(!executed){
            $('.skill-per').each(function(){
                let $this=$(this);
                let per=$this.attr('per');
                //A.attr(B)  A가가지고있는 B라는 속성의 값을 가져옴
                //A.attr(B,C) A가가지고있는 B를 C로 바꿔라는 의미
                $this.css({width:per+"%"})
                $({aniValue:0}).animate({aniValue:per},{
                   duration:1000,
                   step:function(){//애니메이션 사이사이에 할일
                    $this.attr("per",Math.ceil(this.aniValue) + "%")//this는 animate를 의미
                   }
                  })
            });
            executed = true;
        }
        
    }
})