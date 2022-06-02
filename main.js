let a= undefined
let b= undefined
let c= undefined
let var1= ''
let var2= ''
let con= ''
let res = document.getElementById('txt')
let lst = []
function onClickNum(val) {
    if (res.value=='error'||res.value=='NaN'){
        res.value=''
    }
    if (a==undefined){
        if (typeof(val)=="number" || val=='.'){
            a=val
            res.value+=a
            lst.push(a)
            var1+=a
            a=undefined
            return 0
        }
    }
    if (b==undefined && var1!=''&& typeof(val)!="number" &&val!='.'){
        b=val
        res.value+=b
        lst.push(b)
        con=b
        a=0
        c= undefined
        return 0
    }
    if (c==undefined){
        if (typeof(val)=="number" || val=='.'){
            c=val
            res.value+=c
            lst.push(c)
            var2+=c
            c=undefined
            return 0
        }
    }
}
function resulta() {
    var1=parseFloat(var1)
    var2=parseFloat(var2)
    switch (con) {
    case "+":
        var total=var1+var2
        break;
    case "-":
        var total=var1-var2
        break;
    case "*":
        var total=var1*var2
        break;
    case "/":
        var total=var1/var2
        break;
    default:
        var total = 'error'
        break;
    }
    res.value = total
    var1 = total
    var1=var1.toString()
    a = undefined
    b = undefined
    c = undefined
    var2 = ''
    con= ''
    lst =[]
    for (i= 0 ;i<var1.toString().length;i++){
        lst.push(parseFloat(var1.toString()[i]))
    }
}
function reset() {
    res.value=''
    a= undefined
    b= undefined
    c= undefined
    var1= ''
    var2= ''
    con= ''
    lst=[]
}
function delet() {
    lst.pop()
    res.value=lst.join('')
    if (var2=='' && con==''){
        var1=var1.toString()
        var1= var1.slice(0, -1);
        return 0
    }
    if (con==b &&var2==''){
        a= undefined
        con=''
        b=undefined
        return 0
    }
    if (var1!='' && con==b &&var2!=''){
        var2 = var2.toString()
        var2 = var2.slice(0, -1);
        return 0
    }
}
var color=2
document.getElementById('theme').addEventListener("click",()=>{
    if (color==1){
        document.documentElement.style.setProperty("--main-background","hsl(222, 26%, 31%)")
        document.documentElement.style.setProperty("--screen-background","hsl(224, 36%, 15%)")
        document.documentElement.style.setProperty("--keypad-background","hsl(223, 31%, 20%)")
        document.documentElement.style.setProperty("--color-keys","hsl(223, 31%, 20%)")
        document.documentElement.style.setProperty("--screen-color","white")
        document.documentElement.style.setProperty("--igal-background","hsl(6, 63%, 50%)")
        document.documentElement.style.setProperty("--igal-box-shadow","hsl(6, 70%, 34%)")
        document.documentElement.style.setProperty("--igal-color","white")
        document.documentElement.style.setProperty("--del-rest-background","hsl(225, 21%, 49%)")
        document.documentElement.style.setProperty("--del-rest-box-shadow","hsl(224, 28%, 35%)")
        document.documentElement.style.setProperty("--background-keys","white")
        document.documentElement.style.setProperty("--box-shadow-keys","hsl(28, 16%, 65%)")
        color=2
        document.querySelector('.color').classList.add('theme-1')
        document.querySelector('.color').classList.remove('theme-3')
        return
    }
    if (color==2){
        document.documentElement.style.setProperty("--main-background","hsl(0, 0%, 90%)")
        document.documentElement.style.setProperty("--screen-background","hsl(0, 0%, 93%)")
        document.documentElement.style.setProperty("--keypad-background","hsl(0, 5%, 81%)")
        document.documentElement.style.setProperty("--color-keys","black")
        document.documentElement.style.setProperty("--screen-color","black")
        document.documentElement.style.setProperty("--del-rest-background","hsl(185, 42%, 37%)")
        document.documentElement.style.setProperty("--del-rest-box-shadow","hsl(185, 58%, 25%)")
        document.documentElement.style.setProperty("--igal-background","hsl(25, 98%, 40%)")
        document.documentElement.style.setProperty("--igal-box-shadow","hsl(25, 99%, 27%)")
        color=3
        document.querySelector('.color').classList.add('theme-2')
        document.querySelector('.color').classList.remove('theme-1')
        return
    }
    if (color==3){
        document.documentElement.style.setProperty("--main-background","hsl(268, 75%, 9%)")
        document.documentElement.style.setProperty("--screen-background","hsl(268, 71%, 12%)")
        document.documentElement.style.setProperty("--keypad-background","hsl(268, 71%, 12%)")
        document.documentElement.style.setProperty("--color-keys","hsl(52, 100%, 62%)")
        document.documentElement.style.setProperty("--screen-color","hsl(52, 100%, 62%)")
        document.documentElement.style.setProperty("--igal-background","hsl(176, 100%, 44%)")
        document.documentElement.style.setProperty("--igal-box-shadow","hsl(177, 92%, 70%)")
        document.documentElement.style.setProperty("--igal-color","black")
        document.documentElement.style.setProperty("--del-rest-background","hsl(281, 89%, 26%)")
        document.documentElement.style.setProperty("--del-rest-box-shadow","hsl(285, 91%, 52%)")
        document.documentElement.style.setProperty("--background-keys","hsl(268, 47%, 21%)")
        document.documentElement.style.setProperty("--box-shadow-keys","hsl(290, 70%, 36%)")
        color=1
        document.querySelector('.color').classList.add('theme-3')
        document.querySelector('.color').classList.remove('theme-2')
        return
    }
})