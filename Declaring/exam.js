// Khai báo biến bình thường
var pizza = true
pizza = false
console.log('var pizza = ' + pizza);

// Khai báo biến dùng const không cho thay đổi giá trị
const pizza = true
pizza = false
console.log('const pizza = ' + pizza);

// Khai báo biến dùng let để thay đổi giá trị trong nhóm ngoặc nhọn {}
var topic = "ES6"
if (topic) {
  let topic = "React"
  console.log('topic in curly brackets = ' + topic);
}
console.log('original topic = ' + topic);

//Khi chạy trong vòng lặp tạo div sử dụng biến i đặt tên. Nếu không dùng let thì khi hiển thị luôn là số i cuối cùng.
// Bên dưới là ví dụ:
// Nhóm 5 ô đỏ sẽ không dùng let và cho thông báo thứ tự các div
// Nhóm 5 ô xanh dương sẽ dùng let và cho thông báo thứ tự các div
var div, container = document.getElementById('container')
for (var i=0; i<5; i++){
  div= document.createElement('div')
  div.onclick = function() {
    alert('This is box #' + i)
  }
  container.appendChild(div)
}
