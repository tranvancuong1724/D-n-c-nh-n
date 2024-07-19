app.controller('aoPhongProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo aoSoMiProductCtrl thành công');
    $scope.sanPhamAoPhong = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {
        $scope.sanPhamAoPhong = res.data;
    })
}) // Kết thúc listProductCtrl
