app.controller('danhMucProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo danhMucProductCtrl thành công');

    $scope.danhSachDanhMuc = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function(res) {
        $scope.danhSachDanhMuc = res.data;
    })

    $scope.xoaSanPham = function(id) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/danh-muc/" + id
            }).then(function(res) {
                alert("Xóa sản phẩm thành công");
            }, function(error) {
                alert("Xóa sản phẩm thất bại");
                console.error(error);
            });
        }
    };

}) // Kết thúc listProductCtrl
