function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Z4v0Oq79HC":
        Script1();
        break;
      case "6CwkFyxDJPd":
        Script2();
        break;
      case "5owbNQphtvG":
        Script3();
        break;
      case "6boNYR5LsyU":
        Script4();
        break;
      case "5a48IhmeDlx":
        Script5();
        break;
      case "5j6Q5m7W6qi":
        Script6();
        break;
      case "5cMNY9qG6Ix":
        Script7();
        break;
      case "5j5U5jZ7h8F":
        Script8();
        break;
      case "5cXgFjkO3ek":
        Script9();
        break;
      case "6D8JVZPK69T":
        Script10();
        break;
      case "6iYyimqhNtE":
        Script11();
        break;
      case "5wonCk8Uaig":
        Script12();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var obj = "Home";

player.SetVar("option1",obj)

if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script2()
{
  var player = GetPlayer();
var obj = "Home";

player.SetVar("option2",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script3()
{
  var player = GetPlayer();
var obj = "Home";

player.SetVar("option3",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
}

function Script4()
{
  var player = GetPlayer();
var obj = "Home";

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };

}

function Script5()
{
  var player = GetPlayer();
var obj = "Car";

player.SetVar("option1",obj)

if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };

}

function Script6()
{
  var player = GetPlayer();
var obj = "Car";

player.SetVar("option2",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script7()
{
  var player = GetPlayer();
var obj = "Car";

player.SetVar("option3",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
}

function Script8()
{
  var player = GetPlayer();
var obj = "Car";

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script9()
{
  var player = GetPlayer();
var obj = "Girl";

player.SetVar("option1",obj)

if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script10()
{
  var player = GetPlayer();
var obj = "Girl";

player.SetVar("option2",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

function Script11()
{
  var player = GetPlayer();
var obj = "Girl";

player.SetVar("option3",obj)

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };

}

function Script12()
{
  var player = GetPlayer();
var obj = "Girl";

if (obj == player.GetVar("option1")) { player.SetVar("option1","") };
if (obj == player.GetVar("option2")) { player.SetVar("option2","") };
if (obj == player.GetVar("option3")) { player.SetVar("option3","") };
}

