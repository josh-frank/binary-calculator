/*
res    Contains the result of button presses.
btns    A button container that displays all eight calculator buttons.
0    btn0    A button expressing binary digit .
1    btn1    A button expressing binary digit .
C    btnClr    A button to clear the contents of .
=    btnEql    A button to evaluate the contents of the expression in .
+    btnSum    A button for the addition operation.
-    btnSub    A button for the subtraction operation.
*    btnMul    A button for the multiplication operation.
/    btnDiv 
*/

document.addEventListener( "DOMContentLoaded", () => {

    const res = document.querySelector( ".res" );
    const btn0 = document.querySelector( ".btn0" );
    const btn1 = document.querySelector( ".btn1" );
    const btnClr = document.querySelector( ".btnClr" );
    const btnEql = document.querySelector( ".btnEql" );
    const btnSum = document.querySelector( ".btnSum" );
    const btnSub = document.querySelector( ".btnSub" );
    const btnMul = document.querySelector( ".btnMul" );
    const btnDiv = document.querySelector( ".btnDiv" );

    const operators = /.*[+-/*].*/;

    function binaryStringToInteger( string ) {
        let result = 0;
        for ( let i = 0; i < string.length; i++ ) {
            if ( parseInt( string[ string.length - 1 - i ] ) ) result += Math.pow( 2, i )
        }
        return result;
    }

    function parseUserInput() {
        const operands = res.innerHTML.split( /[+-/*]/ ).map( binaryStringToInteger );
        const operator = res.innerHTML[ res.innerHTML.search( /[+-/*]/ ) ];
        console.log( 'operands: ', operands, 'operator: ', operator );
        switch ( operator ) {
            case "+":
                res.innerHTML = ( operands[ 0 ] + operands[ 1 ] ).toString( 2 );
                break;
            case "-":
                res.innerHTML = ( operands[ 0 ] - operands[ 1 ] ).toString( 2 );
                break;
            case "*":
                res.innerHTML = ( operands[ 0 ] * operands[ 1 ] ).toString( 2 );
                break;
            case "/":
                res.innerHTML = ( operands[ 0 ] / operands[ 1 ] ).toString( 2 );
                break;
            default: break;
        }
    }

    btn0.addEventListener( "click", () => res.innerHTML += "0" );
    btn1.addEventListener( "click", () => res.innerHTML += "1" );
    btnClr.addEventListener( "click", () => res.innerHTML = "" );
    btnEql.addEventListener( "click", parseUserInput );
    btnSum.addEventListener( "click", () => { if ( !operators.test( res.innerHTML ) ) res.innerHTML += "+" } );
    btnSub.addEventListener( "click", () => { if ( !operators.test( res.innerHTML ) ) res.innerHTML += "-" } );
    btnMul.addEventListener( "click", () => { if ( !operators.test( res.innerHTML ) ) res.innerHTML += "*" } );
    btnDiv.addEventListener( "click", () => { if ( !operators.test( res.innerHTML ) ) res.innerHTML += "/" } );
    
} );
