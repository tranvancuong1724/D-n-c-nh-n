app.controller('editDonHangCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editDonHangCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);
    $scope.donHang = {
      tenKH: "",
      email:"",
      sdt:"",
      diaChi:"",
      ghiChu:"",
      id: "",
      ten: "",
      anh: "",
      soLuong:"",
      gia: "",
      trangThai: ""
    }
   
    $http({
        method: "GET",
        url: "http://localhost:3000/don-hang/" + $routeParams.id
    }).then(function (res) {
        $scope.donHang = res.data;
    })
   
    $scope.onClickSubmit = function () {
        
        console.log("// Gọi hàm onClickSubmit() thành công");

        console.log("// Giá trị người dùng nhập: ", $scope.donHang);

        $http({
            method: "PUT",
            url: "http://localhost:3000/don-hang/" + $routeParams.id,
            data: $scope.donHang
        }).then(function (response) {
            alert("Chỉnh sửa thành công"); 
            window.location.href = "#!/donhang";
        })

    } // Kết thúc hàm onClickSubmit()


})
