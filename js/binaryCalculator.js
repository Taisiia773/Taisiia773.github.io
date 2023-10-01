var resultScreen = document.getElementById("res");
var result = 0;
var operatorsSeq = "";
function clickZero() {

    resultScreen.innerHTML += "0";
}
function clickOne() {

    resultScreen.innerHTML += "1";
}
function clickSum() {
    operatorSeq = "+";
    result = parseInt(resultScreen.innerHTML, 2);
    resultScreen.innerHTML += "+";
}
function clickSub() {
    operatorSeq = "-";
    resultScreen.innerHTML += "-";
}
function clickMul() {
    operatorSeq = "*";
    result = parseInt(resultScreen.innerHTML, 2);
    resultScreen.innerHTML += "*";
}
function clickDiv() {
    operatorSeq = "/";
    resultScreen.innerHTML += "/";
}

function clickCob() {
    // operatorSeq = ".";
    // resultScreen.innerHTML += ".";
    resultScreen.innerHTML += ".";
}
// function clickBraL() {
//     operatorSeq = "(";
//     result = parseInt(resultScreen.innerHTML, 2);
//     resultScreen.innerHTML += "(";
// }
// function clickBraR() {
//     operatorSeq = ")";
//     resultScreen.innerHTML += ")";
// }

function clickEql() {
    var ans = 0;

    if (operatorSeq == '+') {
        var i = (resultScreen.innerHTML).indexOf("+");

        var operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
        ans = result + operand2;
    }
    else if (operatorSeq == '-') {
        var i = (resultScreen.innerHTML).indexOf("-");
        var operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
        ans = result - operand2;
    }

    else if (operatorSeq == '*') {
        var i = (resultScreen.innerHTML).indexOf("*");
        var operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
        ans = result * operand2;
    }
    else if (operatorSeq == '/') {
        var i = (resultScreen.innerHTML).indexOf("/");
        var operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
        ans = result / operand2;
    }
    // else if (operatorSeq == '.') {
    //     var i = (resultScreen.innerHTML).indexOf(".");
    //     var operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
    //     // ans = result / operand2;
    // }


    resultScreen.innerHTML = ans.toString(2);
}
function clickClear() {
    resultScreen.innerHTML = "";

}


var resultScreen_zamiana = document.getElementById("odp_zamiana");

// var obl_button = document.querySelector('#obl_button');
var kod_wybor_zamienianie1 = document.querySelector('#kod_wybor_zamienianie1');
var kod_wybor_zamienianie2 = document.querySelector('#kod_wybor_zamienianie2');


var option_dwojkowy = new Option("kod prosty dwójkowy(1010)", "dwojkowy");
var option_zm = new Option("kod zm(0.1010)", "zm");
var option_u1 = new Option("kod u1(0.1010)", "u1");
var option_u2 = new Option("kod u2(0.1010)", "u2");
var option_dziesietny = new Option("kod dziesiętny(10)", "dziesietny");
var option_szesnaskowy = new Option("kod szesnastkowy(A)", "szesnaskowy");

select_zamiana_na = zamiana_na.kod_wybor_zamienianie2;
var zamiana_int = document.querySelector("#zamiana_input");
var lst_main = [];

var list_dziesientny = [];
var list_szesnaskow_reszta = [];
var list_szesnaskowy = [
    [0,0],
    [1,1],
    [2,2],
    [3,3],
    [4,4],
    [5,5],
    [6,6],
    [7,7],
    [8,8],
    [9,9],
    [10, 'A'],
    [11, 'B'],
    [12, 'C'],
    [13, 'D'],
    [14, 'E'],
    [15, 'F']
];
var reszta_index = 0;


function dwojkowy_na_dziesietny(lst, lst2){
    // var il = 0;
    // // for (var element of lst){
    // for (var element = lst_main.length - 1; i >= 0; i--) {
    //     var x = element * (2 ** il);
    //     il += 1;
    //     list_dziesientny.unshift(x);
    // }
    // alert(list_dziesientny);
    lst[0].slice().reverse()
                .forEach(function(item, i, lst) {
                    // alert( i + ": " + item + " (массив:" + lst_main + ")" );
                    var x = item * (2 ** i);
                    lst2.unshift(x);
                    // alert(list_dziesientny);
            });
}

function clearSearch() {
    document.getElementById('zamiana_input').value = '';
}

// function isPositive(number) {
//     return number == 1 && 0;
// }

// function findMatchingIndexes(list1, lists2) {
//     const indexes = [];
  
//     for (let j = 0; j < lists2.length; j++) {
//       var currentList = lists2[j];
  
//       for (let i = 0; i < list1.length; i++) {
//         var element = list1[i];
  
//         if (currentList.includes(element)) {
//           indexes.push(i);
//         }
//       }
//     }
  
//     return indexes;
//   }



// function findMatchingIndexes(list1, lists2) {
//     var result = [];
  
//     for (let j = 0; j < lists2.length; j++) {
//       var currentList = lists2[j];
//       var indexes = [];
  
//       for (let i = 0; i < list1.length; i++) {
//         var element = list1[i];
  
//         if (currentList.includes(element)) {
//           indexes.push(i);
//         }
//       }
  
//       result.push({
//         list: currentList,
//         indexes: indexes
//       });
//     }
  
//     return result;
//   }
  
//   const list1 = [1, 2, 3, 4, 5];
//   const lists2 = [
//     [3, 4, 5, 6, 7],
//     [8, 9, 10],
//     [11, 12, 13],
//     // Add the rest of the lists here
//   ];
  
//   const result = findMatchingIndexes(list1, lists2);
//   console.log(result);



function select_zamieniania_1() {
    resultScreen_zamiana.innerHTML = "";
    var select_1 = document.querySelector("#kod_wybor_zamienianie1").value;
    var select_2 = document.querySelector("#kod_wybor_zamienianie2").value;

    if (select_1 == 'dwojkowy') {

        // if (lst_main == 1 && 0){

        if (select_2 == 'dziesietny') {
            lst_main.push(zamiana_int.value.split(''));
            document.getElementById('odp_zamiana').value = '';

            dwojkowy_na_dziesietny(lst_main, list_dziesientny);
            resultScreen_zamiana.innerHTML += list_dziesientny.reduce((acc, number) => acc + number);
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
        }

        else if (select_2 == 'szesnaskowy') {
            lst_main.push(zamiana_int.value.split(''));
            document.getElementById('odp_zamiana').value = '';

            dwojkowy_na_dziesietny(lst_main, list_dziesientny);
            var kod_dziesietny = list_dziesientny.reduce((acc, number) => acc + number);

            do {
                var del_bez_reszty = parseInt((kod_dziesietny / 16));
                var reszta = kod_dziesietny % 16;
                list_szesnaskow_reszta.unshift(reszta);
                // alert(list_szesnaskow_reszta);
                // alert(del_bez_reszty);
                kod_dziesietny = del_bez_reszty;
            } while (del_bez_reszty && reszta > 0)



            // list_dziesientny.forEach(function(item, i, list_szesnaskowy) {
                // list_szesnaskow_reszta.forEach(function(item_r, i_r, list_szesnaskow_reszta) {
                //     var len = list_szesnaskow_reszta.length;
                //     var reszta_index = 0;
                //     // alert(list_szesnaskowy[reszta_index][0]);
                //     do {
                //         if (list_szesnaskow_reszta[i_r] == list_szesnaskowy[reszta_index][0]) {
                //             list_szesnaskow_reszta[i_r] = list_szesnaskowy[reszta_index][1];
                //             alert(list_szesnaskowy[reszta_index][1]);
                //             reszta_index = 15;
                //             // alert(list_szesnaskowy[reszta_index][1]);
                //         }
                //         else {
                //             reszta_index += 1;
                //             // alert(list_szesnaskowy[reszta_index][1])
                //         }
                //     } while(reszta_index < 15 && len !== i_r);
                // });
                list_szesnaskow_reszta.forEach(function(item_r_1, i_r_1, list_szesnaskow_reszta) {
                    list_szesnaskowy.forEach(function(item_r, i_r, list_szesnaskowy) {
                        // alert(list_szesnaskowy[reszta_index][0]);
                        // alert(i_r)
                        if (list_szesnaskowy[i_r][0] == list_szesnaskow_reszta[i_r_1]) {
                            list_szesnaskow_reszta[i_r_1] = list_szesnaskowy[i_r][1];
                            // alert(list_szesnaskowy[i_r][1], list_szesnaskow_reszta);
                            // reszta_index += 1;
                            // alert(list_szesnaskowy[reszta_index][1]);
                        }
                        
                        // reszta_index += 1;
                    
                    });
                });

                // alert(list_dziesientny);
            // });



            // do {
            //     var reszta = kod_dziesietny % 16;
            //     list_szesnaskow_reszta.unshift(reszta);
            //     alert(list_szesnaskow_reszta);
            // } while (reszta > 0)




            resultScreen_zamiana.innerHTML += list_szesnaskow_reszta;
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_szesnaskow_reszta.splice(0)
        }
        // }

        // else {
        //     document.getElementById('odp_zamiana').value = 'error';
        //     alert("error");
        //     clearSearch();
        //     lst_main.splice(0);
        //     list_dziesientny.splice(0);
        // }
    }
}





// обработчик удаления элемент
function removeOption(){
     
    var selectedIndex = languagesSelect.options.selectedIndex;
    // удаляем элемент 
    languagesSelect.options[selectedIndex] = null;
}










// var addButton = myForm.addButton, 
// removeButton = myForm.removeButton, 
// languagesSelect = myForm.language;
// обработчик добавления элемента
function addOption(){
    // получаем текст для элемента
    var text = "myForm.textInput.value";
    // получаем значение для элемента
    var value = "myForm.valueInput.value";
    // создаем новый элемента
    var newOption = new Option(text, value);
    languagesSelect.options[languagesSelect.options.length]=newOption;
}
// обработчик удаления элемент
function removeOption(){
     
    var selectedIndex = languagesSelect.options.selectedIndex;
    // удаляем элемент 
    languagesSelect.options[selectedIndex] = null;
}
 
// addButton.addEventListener("click", addOption);
// removeButton.addEventListener("click", removeOption);






// вместо вызова
// languagesSelect.options[languagesSelect.options.length]=newOption;
// использовать для добавления вызов метода add
languagesSelect.add(newOption);
// вместо вызова
// languagesSelect.options[selectedIndex] = null;
// использовать для удаления метод remove
languagesSelect.remove(selectedIndex);