
app.controller('detailProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.product = {
        id: "",
        ten: "",
        anh: "",
        gia:"",
        tenDanhMuc: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function(res) {
    
        $scope.product = res.data;

    })

    $scope.onClickButtonXacNhanXoa = function() {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/san-pham/" + $routeParams.id
        }).then(function(res) {

            alert("Đã xóa thành công.");

            window.location.href = "#!/dssp";

        })

    } // Kết thúc hàm onClickButtonXacNhanXoa()


}) // Kết thức controller
