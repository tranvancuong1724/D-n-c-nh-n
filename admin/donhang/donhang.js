app.controller('dhProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo dhProductCtrl thành công');

    $scope.danhSachDonHang = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/don-hang"
    }).then(function(res) {
        
        $scope.danhSachDonHang = res.data;
    })

    $scope.xoaSanPham = function(id) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/don-hang/" + id
            }).then(function(res) {
                alert("Xóa sản phẩm thành công");
            }, function(error) {
                alert("Xóa sản phẩm thất bại");
                console.error(error);
            });
        }
    };

}) // Kết thúc listProductCtrl
