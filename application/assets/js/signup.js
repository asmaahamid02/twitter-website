const signup_btn = document.getElementById('signup-btn')
const form_body = document.getElementById('form-body')
const close_form = document.getElementById('close-form')
const close_authentication_form = document.getElementById(
  'close-authentication-form'
)
const back_form_1 = document.getElementById('back-form-1')
const back_form_2 = document.getElementById('back-form-2')
const next_btn_1 = document.getElementById('next-btn-1')
const next_btn_2 = document.getElementById('next-btn-2')
const next_btn_3 = document.getElementById('next-btn-3')
const next_btn_4 = document.getElementById('next-btn-4')
const form_page_1 = document.getElementById('form-page-1')
const form_page_2 = document.getElementById('form-page-2')
const form_page_3 = document.getElementById('form-page-3')
const form_page_4 = document.getElementById('form-page-4')

signup_btn.addEventListener('click', () => {
  // alert("bvj")
  form_page_1.style.display = 'flex'
  document.body.append(form_page_1)
})

close_form.addEventListener('click', () => {
  form_page_1.remove()
})

close_authentication_form.addEventListener('click', () => {
  form_page_4.style.display = 'none'
})

back_form_1.addEventListener('click', () => {
  form_page_2.remove()
  form_page_1.style.display = 'flex'
  document.body.append(form_page_1)
})

back_form_2.addEventListener('click', () => {
  form_page_3.remove()
  form_page_2.style.display = 'flex'
  document.body.append(form_page_2)
})

next_btn_1.addEventListener('click', () => {
  form_page_1.remove()
  form_page_2.style.display = 'flex'
  document.body.append(form_page_2)
})

next_btn_2.addEventListener('click', () => {
  form_page_2.remove()
  form_page_3.style.display = 'flex'
  document.body.append(form_page_3)
})

next_btn_3.addEventListener('click', () => {
  form_page_3.remove()
  form_page_4.style.display = 'flex'
  document.body.append(form_page_4)
})
