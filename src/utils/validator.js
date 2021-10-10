export const validator = (data) => {
  const today = new Date()
  let statusValidate = {}
  const notDigitRegExp = /\d+/g
  const FNwithoutDig = notDigitRegExp.test(data.firstname)
  const LNWithoutDig = notDigitRegExp.test(data.lastname)
  if (data.firstname.length === 0) statusValidate.firstname = 'Поле не должно быть пустым'
  if (FNwithoutDig) statusValidate.firstname = 'Не должно быть цифр'
  if (data.lastname.length === 0) statusValidate.lastname = 'Поле не должно быть пустым'
  if (LNWithoutDig) statusValidate.lastname = 'Не должно быть цифр'
  if (data.birthday.length === 0) statusValidate.birthday = 'Поле не должно быть пустым'
  if (data.birthday.trim() > today.getFullYear()) statusValidate.birthday = `Год рождения не может быть больше ${today.getFullYear()} года`
  if (data.portfolio.length === 0) statusValidate.portfolio = 'Поле не должно быть пустым'
  const urlRegExp = /^(http|https):\/\/\S+\.\S+$/g
  const PRurlRegExp = urlRegExp.test(data.portfolio.trim())
  if (!PRurlRegExp) statusValidate.portfolio = 'Проверьте правильность URL-адреса'
  return statusValidate
}

