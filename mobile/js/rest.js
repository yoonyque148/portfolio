$(function(){
    $.ajax({
        url: './data/rest.json',
        dataType: 'json',
        success: function(data){
            var useData = data.rest;

            // console.log(data.rest);

            function dataPrint(){

                var txt = '<ul>';
                for(var i in useData){
                    var $Image = useData[i].Image;
                    var $Num = useData[i].Num;
                    var $Shop = useData[i].Shop;

                    txt+='<li>';
                    txt+='<img src="'+ $Image +'" alt="">';
                    txt+='<dl>';
                    txt+='<dt>'+$Num+'</dt>'; 
                    txt+='<dd>'+$Shop+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                $('.restaurant').html(txt);
            };

            dataPrint(useData);
        }
    });
});

