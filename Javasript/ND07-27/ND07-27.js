let auto = [];
let tbody = document.getElementById("Tbody");
let k = document.getElementById("DeleteConfirm");
let index1;
let index2;

function fixed() {
    tbody.innerHTML = '';
    auto.forEach(function (lol) {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = lol.DA;
        row.insertCell().innerHTML = lol.NR;
        row.insertCell().innerHTML = lol.DIS;
        row.insertCell().innerHTML = lol.TI;
        row.insertCell().innerHTML = lol.SP;
        row.insertCell().appendChild(createDeleteBtn());
        row.insertCell().appendChild(createFixBtn());
    });
}

function New() {
    let number = document.getElementById("Number").value;
    let distance = document.getElementById("Distance").value;
    let time = document.getElementById("Time").value;
    let obj = {
        DA: date(),
        NR: number,
        DIS: distance,
        TI: time,
        SP: ((distance / time) * 3.6).toFixed(1)
    };
    auto.push(obj);
    fixed();
}

function date() {
    let date = new Date();
    let y = date.getFullYear();
    let m = ("0" + date.getMonth()).slice(-2);
    let day = ("0" + (date.getDay() + 1)).slice(-2);
    let h = ("0" + (date.getHours() + 1)).slice(-2);
    let min = ("0" + (date.getMinutes() + 1)).slice(-2);
    let s = ("0" + (date.getSeconds() + 1)).slice(-2);
    return y +"-"+ m + "-" + day + " " + h + ":" + min + ":" + s;
}

function createDeleteBtn() {
    let btn = document.createElement('button');
    btn.style.width = "70px";
    btn.style.height = "25px";
    btn.innerText = 'Naikinti';
    btn.style.textAlign = 'center';
    btn.addEventListener("click", function (event) {
        index1 = event.target.parentNode.parentNode.rowIndex - 1;
        btn.setAttribute('data-toggle', 'modal');
        btn.setAttribute('data-target', '#ConfirmModal');
    }, false);
    return btn;
}

function deleteRow() {
    auto.splice(index1, 1);
    fixed();
}

function createFixBtn() {
    let btn1 = document.createElement('button');
    btn1.style.width = "70px";
    btn1.style.height = "25px";
    btn1.innerText = 'Taisyti';
    btn1.style.textAlign = 'center';
    btn1.addEventListener("click", function (event) {
        index2 = event.target.parentNode.parentNode.rowIndex - 1;
        btn1.setAttribute('data-toggle', 'modal');
        btn1.setAttribute('data-target', '#FixModal');
        document.getElementById("NumberFix").value = tbody.rows[index2].cells[1].innerHTML;
        document.getElementById("DistanceFix").value = tbody.rows[index2].cells[2].innerHTML;
        document.getElementById("TimeFix").value = tbody.rows[index2].cells[3].innerHTML;
    }, false);
    return btn1;
}

function FixSave() {
    let numberInput = document.getElementById("NumberFix").value;
    let distanceInput = document.getElementById("DistanceFix").value;
    let timeInput = document.getElementById("TimeFix").value;
    let obj = {
        DA: date(),
        NR: numberInput,
        DIS: distanceInput,
        TI: timeInput,
        SP: ((distanceInput / timeInput) * 3.6).toFixed(1)
    };
    auto[index2] = obj;
    fixed();
}

function clearInput() {
    document.getElementById("NewInfo").reset();
}
