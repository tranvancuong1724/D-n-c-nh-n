app.controller('trangChuProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo trangChuProductCtrl thành công');
    $scope.sanPhamTrangChu = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {
        $scope.sanPhamTrangChu = res.data.reverse();
    })
}) // Kết thúc listProductCtrl
