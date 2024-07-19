app.controller("gioHangProductCtrl", function ($scope, $http) {
    $scope.gioHang = [];
    
    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang"
    }).then(function (res) {
        $scope.gioHang = res.data;
    }, function (error) {
        console.error(error);
    });

    $scope.tongSoLuong = function(){
        var tsl=0;
        for (var i = 0; i < $scope.gioHang.length; i++) {
            tsl += parseInt($scope.gioHang[i].soLuong);
        }
        return tsl;
    }

    $scope.xoaSanPham = function (id) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/gio-hang/" + id
            }).then(function (res) {
                alert("Xóa sản phẩm thành công");
            }, function (error) {
                alert("Xóa sản phẩm thất bại");
                console.error(error);
            });
        }
    };
    
});