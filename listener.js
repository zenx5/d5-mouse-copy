const BUTTON_FORWARD = 4
const BUTTON_BACKWARD = 3

addEventListener("auxclick", event => {
    if( event.button===BUTTON_BACKWARD ) {
        console.log('BUTTON BACKWARD')
    } else if ( event.button===BUTTON_FORWARD ) {
        console.log('BUTTON FORWARD')
    }
})