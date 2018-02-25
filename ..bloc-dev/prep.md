```
function even(num){
  if (num % 2 == 0)
    return true
    else if (num % 2 == 1)
      return false
      else
        console.log("enter an interger!")
}


function squared(num){
 if(Number.isInteger(num))
  return num * num;
  else
    console.log("Enter a number!")
}

function food(){
 return ["burger", "chinese food", "sushi"];
}

function menu(){
	return {
		burger:15,
		chineseFood:22,
		sushi:250
	};
}
```