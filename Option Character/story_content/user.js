function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6abvZaVRysL":
        Script1();
        break;
      case "6NIc3Pbs6Le":
        Script2();
        break;
      case "6EuSafO1jQd":
        Script3();
        break;
      case "5rHmoJBxlBV":
        Script4();
        break;
      case "5rnU5E6Fs7M":
        Script5();
        break;
      case "6I33iQnH1PU":
        Script6();
        break;
      case "6UwecBEDEzR":
        Script7();
        break;
      case "5epGmvgQ6Hv":
        Script8();
        break;
      case "5uzXJyTWm8S":
        Script9();
        break;
      case "5i1LvyZycut":
        Script10();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

player.SetVar("p_body",0);
player.SetVar("p_hair",0);

player.SetVar("point",5);
}

function Script2()
{
  var player = GetPlayer();
player.SetVar("hair",0)
player.SetVar("p_hair",5)

var total = player.GetVar("p_body") + 5
player.SetVar("point",total)






}

function Script3()
{
  var player = GetPlayer();
player.SetVar("hair",1)
player.SetVar("p_hair",10)

var total = player.GetVar("p_body") + 10
player.SetVar("point",total)

}

function Script4()
{
  var player = GetPlayer();
player.SetVar("hair",2)
player.SetVar("p_hair",15)

var total = player.GetVar("p_body") + 15
player.SetVar("point",total)


}

function Script5()
{
  var player = GetPlayer();
player.SetVar("hair",3)
player.SetVar("p_hair",20)

var total = player.GetVar("p_body") + 20
player.SetVar("point",total)

}

function Script6()
{
  var player = GetPlayer();
player.SetVar("body",1)
player.SetVar("p_body",20)

var total = player.GetVar("p_hair") + 20
player.SetVar("point",total)

}

function Script7()
{
  var player = GetPlayer();
player.SetVar("body",2)
player.SetVar("p_body",5)

var total = player.GetVar("p_hair") + 5
player.SetVar("point",total)

}

function Script8()
{
  var player = GetPlayer();
player.SetVar("body",3)
player.SetVar("p_body",10)

var total = player.GetVar("p_hair") + 10
player.SetVar("point",total)

}

function Script9()
{
  var player = GetPlayer();
player.SetVar("body",4)
player.SetVar("p_body",15)

var total = player.GetVar("p_hair") + 15
player.SetVar("point",total)


}

function Script10()
{
  var player = GetPlayer();
player.SetVar("body",5)
player.SetVar("p_body",25)

var total = player.GetVar("p_hair") + 25
player.SetVar("point",total)


}

