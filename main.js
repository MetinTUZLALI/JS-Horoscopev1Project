const month = 3; // mart ayi
const day = 12;  //ayin 12. günü

if (((month == 12) && (day > 22 && day < 31)) || ((month == 1) && (day < 20 && day > 0))) {
    console.log("Oğlak")
}
else if (((month == 1) && (day > 19 && day < 31)) || ((month == 2) && (day < 20 && day > 0))) {
    console.log("Kova")
}
else if (((month == 2) && (day > 19 && day < 31)) || ((month == 3) && (day < 21 && day > 0))) {
    console.log("Balık")
}
else if (((month == 3) && (day > 20 && day < 31)) || ((month == 4) && (day < 20 && day > 0))) {
    console.log("Koc")
}
else if (((month == 4) && (day > 19 && day < 31)) || ((month == 5) && (day < 20 && day > 0))) {
    console.log("Boga")
}
else if (((month == 5) && (day > 19 && day < 31)) || ((month == 6) && (day < 21 && day > 0))) {
    console.log("İkizler")
}
else if (((month == 6) && (day > 20 && day < 31)) || ((month == 7) && (day < 22 && day > 0))) {
    console.log("Yengeç")
}
else if (((month == 7) && (day > 21 && day < 31)) || ((month == 8) && (day < 22 && day > 0))) {
    console.log("Aslan")
}
else if (((month == 8) && (day > 21 && day < 31)) || ((month == 9) && (day < 22 && day > 0))) {
    console.log("Başak")
}
else if (((month == 9) && (day > 21 && day < 31)) || ((month == 10) && (day < 23 && day > 0))) {
    console.log("Terazi")
}
else if (((month == 10) && (day > 22 && day < 31)) || ((month == 11) && (day < 22 && day > 0))) {
    console.log("Akrep")
}
else if (((month == 11) && (day > 21 && day < 31)) || ((month == 12) && (day < 21 && day > 0))) {
    console.log("Yay")
}

else {
    console.log("Geçersiz Giriş")
}
