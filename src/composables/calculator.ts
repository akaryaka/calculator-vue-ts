  import { btnValue } from "../constants";
  
  export function btnClick(event: MouseEvent) {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.classList.contains('btn_number')) { 
      btnValue.value += target.value
    }
  }