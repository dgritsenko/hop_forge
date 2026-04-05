export default function numberPhoneValidator(inputValue: string):string{
    const filteredNumberPhone = inputValue.replace(/^\+7/, '').replace(/\D/g, '');

    // return digitsOnly.replace(numberPhoneFilter)
    if(filteredNumberPhone.length < 4){
        return `+7(${filteredNumberPhone.slice(0)}`
    }else if(filteredNumberPhone.length < 7 ){
        return `+7(${filteredNumberPhone.slice(0,3)}) ${filteredNumberPhone.slice(3)}`
    }else if(filteredNumberPhone.length < 9 ){
        return `+7(${filteredNumberPhone.slice(0,3)}) ${filteredNumberPhone.slice(3,6)}-${filteredNumberPhone.slice(6)}`
    }else{
        return `+7(${filteredNumberPhone.slice(0,3)}) ${filteredNumberPhone.slice(3,6)}-${filteredNumberPhone.slice(6, 8)}-${filteredNumberPhone.slice(8, 10)}`
    }
}