import { btnValue } from "../constants";

export function btnClick(event: MouseEvent) {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.classList.contains('btn_number')) {
    btnValue.value += target.value
  }
}

export function calculate(a: any, b: any, operator: any) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Деление на ноль';
    default: return 'Ошибка';
  }
}