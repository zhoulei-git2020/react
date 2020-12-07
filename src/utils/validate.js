//验证密码规则
export const validate_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

//验证邮箱规则
const reg_email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

export function validate_email(value){
    //传值验证通过返回true不通过返回false
    return reg_email.test(value)
}