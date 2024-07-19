app.controller('chitietProductCtrl', function ($scope, $http,$routeParams) {
    console.log('Log để kiểm tra: Khai báo chitietProductCtrl thành công');

    $scope.sanPhamChiTiet = {
        id: "",
        ten: "",
        anh: "",
        gia:"",
        soLuong:"",
        tenDanhMuc: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function(res) {
        $scope.sanPhamChiTiet = res.data;
    })

    $scope.themVaoGioHang = function(sanPham) {
        var sanPhamGioHang = {
            id: sanPham.id,
            ten: sanPham.ten,
            gia: sanPham.gia,
            anh: sanPham.anh,
            soLuong: $scope.sanPhamChiTiet.soLuong 
        };
    
        $http({
            method: "POST",
            url: "http://localhost:3000/gio-hang",
            data: sanPhamGioHang
        }).then(function(res) {
            alert("Đã thêm sản phẩm vào giỏ hàng");
            window.location.href = "#!/view/gioHang"
        }, function(error) {
            alert("Lỗi khi thêm sản phẩm vào giỏ hàng");
            console.error(error);
        });
    };

}) // Kết thúc listProductCtrl
