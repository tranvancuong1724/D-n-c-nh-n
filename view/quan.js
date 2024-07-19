app.controller('quanProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo quanProductCtrl thành công');
    $scope.sanPhamQuan = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {     
        $scope.sanPhamQuan = res.data;
    })
}) // Kết thúc listProductCtrl
