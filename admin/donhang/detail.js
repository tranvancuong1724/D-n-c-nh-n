app.controller('detailDonHangCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailDonHangCtrl thành công');
    
    console.log('Log để in thử giá trị params từ url', $routeParams);
    $scope.donHang = {
        ten: "",
        email:"",
        sdt:"",
        diaChi:"",
        ghiChu:"",
        id: "",
        tenHang: "",
        anh: "",
        gia: "",
        trangThai: ""
      }

    $http({
        method: "GET",
        url: "http://localhost:3000/don-hang/" + $routeParams.id
    }).then(function(res) {
  
        $scope.donHang = res.data;

    })

    $scope.onClickButtonXacNhanXoa = function() {

        $http({
            method: "DELETE",
            url: "http://localhost:3000/don-hang/" + $routeParams.id
        }).then(function(res) {

            alert("Đã xóa thành công.");

            window.location.href = "#!/donhang";

        })

    } // Kết thúc hàm onClickButtonXacNhanXoa()


}) // Kết thức controller
