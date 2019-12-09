$(function() {
    'use strict';

    let pizza = $('.pizza');

    pizza.change(function () {
        let curPrice = $("select.pizza option:selected").attr('price');
        $(".FinalPrice").text(curPrice + ' PLN');
    })

    let form = $('#myForm');
    let name = $('input[for=name]');
    let surname = $('input[for=surname]');
    let street = $('input[for=street]');
    let housenumber = $('input[for=housenumber]');
    let postcode = $('input[for=postcode]');
    let city = $('input[for=city]');
    let agr = $('#agreement');
    let tomato = $('#tomato')
    let garlic = $('#garlic')
    form.submit(function () {

        if (name.val() == "") {
            $(".paragraf").text("Wpisz Imię!");
            return false;
        }

        if (surname.val() == "") {
            $(".paragraf").text("Wpisz Nazwisko!");
            return false;
        }

        if (street.val() == ""){
            $(".paragraf").text("Wpisz Ulicę!");
            return false;
        }

        if (housenumber.val() == ""){
            $(".paragraf").text("Wpisz Numer Domu/Mieszkania!");
            return false;
        }

        if (postcode.val() == ""){
            $(".paragraf").text("Wpisz Kod Pocztowy!");
            return false;
        }

        if (city.val() == ""){
            $(".paragraf").text("Wpisz Miasto!");
            return false;
        }

        if (pizza.val() == "0"){
            $(".paragraf").text("Jaki smak pizzy?");
            return false;
        }

        if(agr.is(":checked") == false) {
            $(".paragraf").text("Zaznacz RODO");
            return false;
        }


        let order = {
            name: $.trim( name.val() ),
            surname: $.trim( surname.val() ),
            street: $.trim( street.val() ),
            housenumber: $.trim( housenumber.val() ),
            postcode: $.trim( postcode.val() ),
            city: $.trim( city.val() ),
            pizza: pizza.val(),
            sos: [
                tomato.is(':checked'), garlic.is(":checked")
            ],
        };

        $(".sel").remove();
        $('.container').append('<h1>Dane Zamówienia</h1>');
        $('.container').append('<p>Imię: '+ order.name + '</p>');
        $('.container').append('<p>Nazwisko: ' + order.surname + ' </p>');
        $('.container').append('<p>Ulica: '+ order.street + ' ' + order.housenumber + '</p>');
        $('.container').append('<p>Miasto: '+ order.postcode + ' ' + order.city + '</p>');
        $('.container').append('<p>Pizza: '+ order.pizza + '</p>');
        if(order.sos[1] == true && order.sos[0] == true){
            $('.container').append('<p>Sos: Czosnkowy i Pomidorowy</p>');
        } else if(order.sos[0] == true){
            $('.container').append('<p>Sos: Pomidorowy</p>');
        } else if(order.sos[1] == true){
            $('.container').append('<p>Sos: Czosnkowy</p>');
        }
        return false;

    });

});