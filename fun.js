function HideCallback()
{
    $(document).ready(function()
    { 
        $("#cuatro").fadeToggle(1000, function()
        {
            $("#tres").fadeToggle(1000, function()
            {
                $("#dos").fadeToggle(1000, function()
                {
                    $("#uno").fadeToggle(1000, function()
                    {  
                        ChangeContent();
                        $("#uno").fadeToggle(1000, function()
                        {
                            $("#dos").fadeToggle(1000, function()
                            {
                                $("#tres").fadeToggle(1000, function()
                                    {
                                        $("#cuatro").fadeToggle(1000)
                                    })
                            })
                        })
                    })
                })   
            })
        })
    })
}

function ChangeContent()
{
    $(document).ready(function()
    {
        document.getElementById("image").src= "lap.jpg";
        document.getElementById("uno").innerHTML="FINAL"
        document.getElementById("tres").innerHTML="Esto se ocultará"
    })
}