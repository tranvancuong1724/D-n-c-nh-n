app.controller('aoSoMiProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo aoSoMiProductCtrl thành công');
    $scope.sanPhamAoSoMi = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {
        $scope.sanPhamAoSoMi = res.data;
    })
}) // Kết thúc listProductCtrl
