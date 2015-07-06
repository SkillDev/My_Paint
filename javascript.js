/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var c = document.getElementById("canvas"), ctx = c.getContext("2d"), x5, y5, x1, y1, clic = 0, press = 0, remove_event;
    //__________________________line__________________________________

    function lineFunction(e) {
        var y = e.pageY - this.offsetTop, x = e.pageX - this.offsetLeft;
        if (clic === 0) {
                //premier clic
            clic = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);

        } else {
            //deuxieme clic
            clic = 0;
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function line(e) {
        remove_event();
        c.addEventListener("click", lineFunction);
        e.preventDefault();
    }
    document.getElementById("line").addEventListener('click', line);
    //____________________________pencil_________________________________

    function pencilFunction() {
        press = 1;
    }

    function move(e) {
        y5 = e.pageY - this.offsetTop;
        x5 = e.pageX - this.offsetLeft;
        if (press === 1) {
            ctx.beginPath();
            ctx.moveTo(x5, y5);
            ctx.lineTo(x5 + 1, y5 + 1);
            ctx.stroke();
            ctx.closePath();
        }
    }

    function up() {
        press = 0;
        ctx.closePath();
    }

    function pencil(e) {
        remove_event();
        c.addEventListener("mousedown", pencilFunction);
        c.addEventListener("mousemove", move);
        c.addEventListener("mouseup", up);
        e.preventDefault();
    }
    document.getElementById("pencil").addEventListener('click', pencil);

    //___________________cercle_______________________________
    function cercleFunction(e) {
        if (clic === 0) {
                //premier clic
            clic = 1;
            x1 = e.pageX - this.offsetLeft;
            y1 = e.pageY - this.offsetTop;

        } else {
            //deuxieme clic
            clic = 0;
            var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1, total = Math.sqrt((width * width) + (height * height));
            ctx.beginPath();
            ctx.arc(x1, y1, total, 0, 2 * Math.PI);
            ctx.stroke();//fill
            ctx.closePath();
        }
    }
    function cercle(e) {
        remove_event();
        c.addEventListener("click", cercleFunction);
        e.preventDefault();
    }

    document.getElementById("cercle").addEventListener('click', cercle);
    //___________________cercle 2.0_______________________________
    function cercle_colored(e) {
        if (clic === 0) {
                //premier clic
            clic = 1;
            x1 = e.pageX - this.offsetLeft;
            y1 = e.pageY - this.offsetTop;

        } else {
            //deuxieme clic
            clic = 0;
            var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1, total = Math.sqrt((width * width) + (height * height));
            ctx.beginPath();
            ctx.arc(x1, y1, total, 0, 2 * Math.PI);
            ctx.fillStyle = document.getElementById('color').value;
            ctx.fill();
            ctx.closePath();
        }
    }
    function cercle_2(e) {
        remove_event();
        c.addEventListener("click", cercle_colored);
        e.preventDefault();
    }

    document.getElementById("cercle_2").addEventListener('click', cercle_2);

    //_______________________rectangle_________________________________
    function rectangleFunction(e) {

        if (clic === 0) {
            clic = 1;
            x1 = e.pageX - this.offsetLeft;
            y1   = e.pageY - this.offsetTop;

        } else {
            clic = 0;
            var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1;
            ctx.beginPath();
            ctx.rect(x1, y1, width, height);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function rectangle() {
        remove_event();
        c.addEventListener("click", rectangleFunction);
    }

    document.getElementById('rectangle').addEventListener('click', rectangle);
    //_______________________text_________________________________
    function textFunction() {
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);
    }
    function text() {
        remove_event();
        c.addEventListener("click", textFunction);
    }

    document.getElementById('text').addEventListener('click', text);
    //_______________________rectangle_2.0_________________________________
    function rectangle_2Function(e) {
        if (clic === 0) {
            clic = 1;
            x1 = e.pageX - this.offsetLeft;
            y1   = e.pageY - this.offsetTop;

        } else {
            clic = 0;
            var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1;
            ctx.beginPath();
            ctx.rect(x1, y1, width, height);
            ctx.fillStyle = document.getElementById('color').value;
            ctx.fillRect(x1, y1, width, height);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function rectangle_2() {
        remove_event();
        c.addEventListener("click", rectangle_2Function);
    }

    document.getElementById('rectangle_2').addEventListener('click', rectangle_2);
    //_______________________clear________________________________

    function clear(e) {
        ctx.clearRect(0, 0, c.width, c.height);
        e.preventDefault();

    }

    document.getElementById("clear").addEventListener('click', clear);

    //_____________________download___________________________

    remove_event = function () {
        c.removeEventListener('click', lineFunction);
        c.removeEventListener('click', cercleFunction);
        c.removeEventListener('click', rectangleFunction);
        c.removeEventListener('click', rectangle_2Function);
        c.removeEventListener('click', cercle_colored);
        c.removeEventListener('click', clear);
        c.removeEventListener("mousedown", pencilFunction);
        c.removeEventListener("mousemove", move);
        c.removeEventListener("mouseup", up);
    };

});