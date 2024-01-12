Bước 1. Download code này về máy tính

Bước 2. Mở phần mềm VS Code để mở thư mục OnTapJS, vào cửa sổ lệnh đứng ở thư mục OnTapJS chạy lệnh: `npm install --save-dev jest`


Bước 3. Đổi tên thư mục Array để nối thêm mã SV vào tên thư mục. VD:   Array  --> Array_ph123456 

Bước 4. Sau khi đổi tên, mở file arr.test.js ở trong thư mục __test__  sau đó sửa chữ Array ở trong 2 dòng dầu tiên thành tên thư mục vừa đổi ở trên. VD: require('../Array_ph123456/bai_1')

Bước 5. Viết code cho các hàm trong file bai_1.js và bai_2.js ở trong thư mục Array. Chú ý chỉ viết vào vị trí có chữ "//sv viết code ở đây:"

Bước 6. Mở cửa sổ lệnh đứng ở thư mục OnTapJS, chạy lệnh:  npm test và xem kết quả, nếu chưa đủ 4 pass thì phải xem lại code để sửa sao cho pass hết cả 4 hàm.
