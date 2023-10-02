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

var resultP_zamiana = document.getElementById("p_error");

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
var lst_zm = [];
var lst_u2 = [];
var list_u2 = []

var list_dziesientny = [];
var list_szesnaskow_reszta = [];
var list_dzisietny_reszta = [];
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
    lst.slice().reverse()
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


function dziesitny_na_szesnastkowy(kod_dziesietny, list_szesnaskow_reszta, list_szesnaskowy ){
    do {
        var del_bez_reszty = parseInt((kod_dziesietny / 16));
        var reszta = kod_dziesietny % 16;
        list_szesnaskow_reszta.unshift(reszta);
        // alert(list_szesnaskow_reszta);
        // alert(del_bez_reszty);
        kod_dziesietny = del_bez_reszty;
    } while (del_bez_reszty && reszta > 0)

        list_szesnaskow_reszta.forEach(function(item_r_1, i_r_1, list_szesnaskow_reszta) {
            list_szesnaskowy.forEach(function(item_r, i_r, list_szesnaskowy) {
                // alert(list_szesnaskowy[reszta_index][0]);
                // alert(i_r)
                if (list_szesnaskowy[i_r][0] == list_szesnaskow_reszta[i_r_1]) {
                    list_szesnaskow_reszta[i_r_1] = list_szesnaskowy[i_r][1];
                }
            
            });
        });
}

function dziesitny_na_dwojkowy(kod_dziesietny, list_dzisietny_reszta){
    do {
        var del_bez_reszty = parseInt((kod_dziesietny / 2));
        var reszta = kod_dziesietny % 2;
        list_dzisietny_reszta.unshift(reszta);
        // alert(list_dzisietny_reszta);
        // alert(del_bez_reszty);
        kod_dziesietny = del_bez_reszty;
    } while (del_bez_reszty > 0)
}

function dzisitny_na_zm(kod_dziesietny, list_dzisietny_reszta, p_m){
    dziesitny_na_dwojkowy(kod_dziesietny, list_dzisietny_reszta);

    if (p_m == "-"){
        list_dzisietny_reszta.unshift(".");
        list_dzisietny_reszta.unshift("1");
        resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
    }
    else if (p_m == "+"){
        list_dzisietny_reszta.unshift(".");
        list_dzisietny_reszta.unshift("0");
        resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
    }
    else{
        resultScreen_zamiana.innerHTML += "error";
        resultP_zamiana.innerHTML += "musisz przed liczbą napisać + albo -";
        clearSearch();
    }
}

function zm_na_u1(p_m, list_dzisietny_reszta){
    if (p_m == "+") {
        var p_u1 = 0;
    }
    else if (p_m == "-") {
        var p_u1 = 1;
    }

    if (p_u1 == 0) {
        resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
    }
    else if(p_u1 == 1) {
        var p1 = list_dzisietny_reszta.shift();
        var p2 = list_dzisietny_reszta.shift();
        // alert(list_dzisietny_reszta)
        list_dzisietny_reszta.forEach(function(item_r, i_r, list_dzisietny_reszta) {
            if (list_dzisietny_reszta[i_r] == '0') {
                list_dzisietny_reszta[i_r] = 1;
                // alert(list_dzisietny_reszta[i_r])
            }
            else if (list_dzisietny_reszta[i_r] == '1') {
                list_dzisietny_reszta[i_r] = 0;
            }
        });
        list_dzisietny_reszta.unshift(p2);
        list_dzisietny_reszta.unshift(p1);
        resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
        
    }
}


function select_zamieniania_1() {
    resultScreen_zamiana.innerHTML = "";
    var select_1 = document.querySelector("#kod_wybor_zamienianie1").value;
    var select_2 = document.querySelector("#kod_wybor_zamienianie2").value;

    if (select_1 == 'dwojkowy') {

        resultP_zamiana.innerHTML = "";

        // kod_wybor_zamienianie2.remove("zm");
        // kod_wybor_zamienianie2.remove("u1");
        // kod_wybor_zamienianie2.remove("u2");
        // kod_wybor_zamienianie2.remove("dwojkowy");

        // if (lst_main == 1 && 0){

        if (select_2 == 'dziesietny') {
            lst_main.push(zamiana_int.value.split(''));
            document.getElementById('odp_zamiana').value = '';

            dwojkowy_na_dziesietny(lst_main[0], list_dziesientny);
            resultScreen_zamiana.innerHTML += list_dziesientny.reduce((acc, number) => acc + number);
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
        }

        else if (select_2 == 'szesnaskowy') {
            lst_main.push(zamiana_int.value.split(''));
            document.getElementById('odp_zamiana').value = '';

            dwojkowy_na_dziesietny(lst_main, list_dziesientny);
            // alert(list_dziesientny)
            var kod_dziesietny = list_dziesientny.reduce((acc, number) => acc + number);
            dziesitny_na_szesnastkowy(kod_dziesietny, list_szesnaskow_reszta, list_szesnaskowy );

            resultScreen_zamiana.innerHTML += list_szesnaskow_reszta;
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_szesnaskow_reszta.splice(0);
        }

        else if (select_2 !== "dziesietny" && "szesnaskowy") {
            resultScreen_zamiana.innerHTML += "error"
            resultP_zamiana.innerHTML += "kod dwójkowy można zamienić tylko na dziesiętny i szesnastkowy"
            clearSearch();

        }

        // kod_wybor_zamienianie2.add("zm");
        // kod_wybor_zamienianie2.add("u1");
        // kod_wybor_zamienianie2.add("u2");
        // kod_wybor_zamienianie2.add("dwojkowy");

    }

    else if (select_1 == 'dziesietny') {

        resultP_zamiana.innerHTML = "";

        if (select_2 == "dwojkowy"){

            document.getElementById('odp_zamiana').value = '';

            var kod_dziesietny = zamiana_int.value;
            // alert(kod_dziesietny);
            dziesitny_na_dwojkowy(kod_dziesietny, list_dzisietny_reszta);

            resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_dzisietny_reszta.splice(0);
        }

        else if (select_2 == "szesnaskowy"){

            document.getElementById('odp_zamiana').value = '';

            var kod_dziesietny = zamiana_int.value;
            // alert(kod_dziesietny);
            // dziesitny_na_dwojkowy(kod_dziesietny, list_dzisietny_reszta);

            dziesitny_na_szesnastkowy(kod_dziesietny, list_szesnaskow_reszta, list_szesnaskowy );


            resultScreen_zamiana.innerHTML += list_szesnaskow_reszta;
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_dzisietny_reszta.splice(0);
        }


        else if (select_2 == "zm"){
            lst_main.push(zamiana_int.value.split(''));


            var p_m = lst_main[0].shift();


            document.getElementById('odp_zamiana').value = '';

            var kod_dziesietny = lst_main[0].join('');

            dzisitny_na_zm(kod_dziesietny, list_dzisietny_reszta, p_m);
            
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_dzisietny_reszta.splice(0);
        }

        else if (select_2 == "u1"){
            lst_main.push(zamiana_int.value.split(''));

            
            var p_m = lst_main[0].shift();


            document.getElementById('odp_zamiana').value = '';

            var kod_dziesietny = lst_main[0].join('');

            dzisitny_na_zm(kod_dziesietny, list_dzisietny_reszta, p_m);
            resultScreen_zamiana.innerHTML = '';


            zm_na_u1(p_m, list_dzisietny_reszta);


            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_dzisietny_reszta.splice(0);
        }

        else if (select_2 == "u2"){
            lst_main.push(zamiana_int.value.split(''));

            resultScreen_zamiana.innerHTML += "sorki, nie dokończyłam"
            resultP_zamiana.innerHTML += "musisz liczbę zamienić na  u1 i dodać 1"
            clearSearch();

            
            // var p_m = lst_main[0].shift();


            // document.getElementById('odp_zamiana').value = '';

            // var kod_dziesietny = lst_main[0].join('');

            // dzisitny_na_zm(kod_dziesietny, list_dzisietny_reszta, p_m);
            // resultScreen_zamiana.innerHTML = '';

            // // list_u2 = list_dzisietny_reszta;
            // // alert(list_dzisietny_reszta)


            // zm_na_u1(p_m, list_dzisietny_reszta);
            // resultScreen_zamiana.innerHTML = '';
            // // alert(list_dzisietny_reszta)

            // if (p_m == "+") {
            //     resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
            // }
            // else if (p_m == "-") {
            //     alert(list_dzisietny_reszta)
            //     var p1 = list_dzisietny_reszta.shift();
            //     var p2 = list_dzisietny_reszta.shift();
            //     alert(list_dzisietny_reszta)
            //     // alert(list_dzisietny_reszta)
            //     zm_na_u1(p_m, list_dzisietny_reszta);
            //     alert(list_dzisietny_reszta);
            //     // dwojkowy_na_dziesietny(list_dzisietny_reszta, list_dziesientny);
            //     // alert(list_dziesientny)
            //     // alert(list_dzisietny_reszta)
            //     // var u2_int = list_dzisietny_reszta.reduce((acc, number) => acc + number);
            //     // u2_int += 1;
            //     // alert(u2_int)

            //     // dziesitny_na_dwojkowy(u2_int, lst_u2);


            //     // list_dzisietny_reszta.unshift(p2);
            //     // list_dzisietny_reszta.unshift(p1);
            //     // alert(list_dzisietny_reszta)
            //     // resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
            // }
            // else{
            //     resultScreen_zamiana.innerHTML += "error";
            //     resultP_zamiana.innerHTML += "musisz przed liczbą napisać + albo -";
            //     clearSearch();
            // }


            
            clearSearch();
            lst_main.splice(0);
            list_dziesientny.splice(0);
            list_dzisietny_reszta.splice(0);
        }


    // else if (select_1 == 'szesnaskowy') {

    //     resultP_zamiana.innerHTML = "";

    //     if (select_2 == "dwojkowy"){

    //         document.getElementById('odp_zamiana').value = '';

    //         var kod_dziesietny = zamiana_int.value;
    //         // alert(kod_dziesietny);
    //         dziesitny_na_dwojkowy(kod_dziesietny, list_dzisietny_reszta);

    //         resultScreen_zamiana.innerHTML += list_dzisietny_reszta.join('');
    //         clearSearch();
    //         lst_main.splice(0);
    //         list_dziesientny.splice(0);
    //         list_dzisietny_reszta.splice(0);
    //     }
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
