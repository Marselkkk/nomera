export function validation () {

    var elementPhone = document.querySelectorAll('input[name="phone"]');
    var maskOptions = {
        mask: '+7 (000) 000-00-00',
        // prepare: function (value, maskedInput) {
        //     if ((value === '0' && maskedInput._value.length === 0) || (value === '1' && maskedInput._value.length === 0) || (value === '2' && maskedInput._value.length === 0) || (value === '3' && maskedInput._value.length === 0) || (value === '4' && maskedInput._value.length === 0) || (value === '5' && maskedInput._value.length === 0) || (value === '6' && maskedInput._value.length === 0) || (value === '8' && maskedInput._value.length === 0) || (value === '9' && maskedInput._value.length === 0) ) {
        //         return '';
        //     }
        // }
    }
    elementPhone.forEach((el) => {
        new IMask(el, maskOptions);
    })

    // const callbackBtn = document.getElementById('callback-btn');
    // if (callbackBtn) callbackBtn.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     // Валидация
    //     const usernameInput = document.getElementById('username');
    //     const phoneInput = document.getElementById('phoneInput');

    //     if (!usernameInput.value || !phoneInput.value) {
    //         usernameInput.classList.add('error');
    //         phoneInput.classList.add('error');
    //         callbackBtn.classList.add('error');
    //         setTimeout(() => {
    //             callbackBtn.classList.remove('error');
    //         }, 700);
    //         return;
    //     } else {
    //         usernameInput.classList.remove('error');
    //         phoneInput.classList.remove('error');
    //         callbackBtn.classList.remove('error');
    //     }
    // });
}

function btn_error_fade () {
    $('.input-btn').click((e)=> {
        e.target.classList.add('error');

        setTimeout(() => {
            e.target.classList.remove('error');
        }, 700);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const callbackFirstForm = document.querySelectorAll('.form');
    const callbackFormArray = Array.from(callbackFirstForm)
    if(callbackFirstForm) callbackFormArray.forEach((el) =>{ el.addEventListener('submit', (e) => {
        e.preventDefault();
        

        const arrayElements = Array.from(e.target.elements)

        let callbackBtn = []

        arrayElements.forEach((el) => {
            if (el.tagName.toLowerCase() == 'button') {
                callbackBtn.push(el);
            }
        })

        const elemsNoBtn = arrayElements.filter((el) => !callbackBtn.includes(el));

        const findPhone = elemsNoBtn.find((el) => el.name == 'phone');

        const username = elemsNoBtn.find((el) => el.name == 'username');

        let isValid = true;

        elemsNoBtn.forEach((el) => {
            if (el.hasAttribute('data-attr') && el.getAttribute('data-attr') === 'required') {
                if (el.value.trim() === '') {
                    isValid = false
                    el.classList.add('error');
                    // btn_error_fade()
                } else {
                    el.classList.remove('error');
                } 
                if (findPhone) {
                    if(findPhone.value.length == "18") {
                        isValid = true
                        findPhone.classList.remove('error')
                    } else {
                        isValid = false
                        findPhone.classList.add('error')
                        // btn_error_fade()
                    }
                }
            }
            if (isValid) {
                Array.from($('.input-btn')).forEach((el) => {
                    el.classList.remove('error')
                })
                // findPhone = "7" + findPhone.replace(/\D/g, '');
                // sendFetchRequest('feedback_request',body,"POST").then((res)=>{
                //     if(res) {
                //         window.location.href = `${window.location.origin}/success`;
                //     } else {
                //         console.log('Ошибка в отправке. Проверьте отправляемые данные');
                //     }
                // })
            } else {
                console.log('Форма содержит ошибки. Пожалуйста, заполните обязательные поля.');
                btn_error_fade()
            }
        });

    });
});

})
