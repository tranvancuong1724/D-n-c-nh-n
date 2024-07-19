app.controller('thanhToanProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Khai báo thanhToanProductCtrl thành công');

    $scope.donHang = {
        tenKH: "",
        email: "",
        sdt: "",
        diaChi: "",
        ghiChu: "",
        tongTien:"",
        id: $routeParams.id,
        ten: "",
        soLuong: "",
        anh: "",
        gia: "",
        trangThai: ""
    };
    
    $scope.gioHang = {}; 

    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang/" + $routeParams.id
    }).then(function (res) {
        $scope.gioHang = res.data;
    });

    $scope.onClickSubmit = function () {
        console.log("// Gọi hàm onClickSubmit() thành công");
        console.log("// Giá trị người dùng nhập: ", $scope.donHang);
        $http({
            method: "POST",
            url: "http://localhost:3000/don-hang",
            data: {
                tenKH: $scope.donHang.tenKH,
                email: $scope.donHang.email,
                sdt: $scope.donHang.sdt,
                diaChi: $scope.donHang.diaChi,
                ghiChu: $scope.donHang.ghiChu,
                tongTien: $scope.donHang.tongTien,
                id: $scope.donHang.id,
                ten: $scope.gioHang.ten,
                soLuong: $scope.gioHang.soLuong,
                anh: $scope.gioHang.anh,
                gia: $scope.gioHang.gia,
                trangThai: "Đang lấy hàng"
            }
        }).then(function (response) {
            alert("Thanh toán thành công");
            window.location.href = "#!/trangchu";
        }, function (error) {
            alert("Thanh toán sản phẩm thất bại");
            console.error(error);
        });
    };
});
