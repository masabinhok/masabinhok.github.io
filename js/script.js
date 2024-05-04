function clearForm() {
  const clearName =document.querySelector('#name');
  clearName.value=' '
  clearName.ariaPlaceholder='Name'
  const clearPhone =document.querySelector('#phone');
  clearPhone.value=' '
  const clearMessage =document.querySelector('#message');
  clearMessage.value=' '
}