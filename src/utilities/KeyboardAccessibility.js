import React from 'react';

  function KeyboardAccessibilty( WrappedComponent ) {
    return class extends React.Component {
      
      addAccessibility(event){
        var keycode = event.which || event.keyCode;
       
        switch (keycode) {
          case 49:
            document.getElementById('num1').click();
            break;
          case 50:
            document.getElementById('num2').click();
            break;
          case 51:
            document.getElementById('num3').click();
            break;
          case 52:
            document.getElementById('num4').click();
            break;
          case 53:
            document.getElementById('num5').click();
            break;
          case 54:
            document.getElementById('num6').click();
            break;
          case 55:
            document.getElementById('num7').click();
            break;
          case 56:
            document.getElementById('num8').click();
            break;
          case 57:
            document.getElementById('num9').click();
            break;
          case 48:
            document.getElementById('num0').click();
            break;
          case 190:
            document.getElementById('num.').click();
            break;
          case 107:
            document.getElementById('plus').click();
            break;
          case 189:
            document.getElementById('minus').click();
            break;
          case 27:
            document.getElementById('allClear').click();
            break;
          case 187:
            document.getElementById('equalTo').click();
            break;
          case 13:
            document.getElementById('equalTo').click();
            break;    

          default:
            break;
      }
    }
      componentDidMount() {
        document.addEventListener("keydown", this.addAccessibility, false);
      }
      render() {
        return <WrappedComponent {...this.props}/>;
      }
    }
  }


  export default KeyboardAccessibilty;