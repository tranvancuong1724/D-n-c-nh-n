
app.controller('dsspProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo dsspProductCtrl thành công');

    $scope.danhSachSanPham = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {

        $scope.danhSachSanPham = res.data;
    })

    $scope.xoaSanPham = function(id) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/san-pham/" + id
            }).then(function(res) {
                alert("Xóa sản phẩm thành công");
            }, function(error) {
                alert("Xóa sản phẩm thất bại");
                console.error(error);
            });
        }
    };


}) // Kết thúc listProductCtrl
